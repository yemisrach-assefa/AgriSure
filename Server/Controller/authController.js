const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');
const { sendOtp } = require('../Utils/otpService');

const generateOtp = () => Math.floor(1000 + Math.random() * 9000);

exports.registerUser = async (req, res) => {
  const { phone, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = generateOtp();

    const user = new User({ phone, password: hashedPassword, otp });
    await user.save();
    
    await sendOtp(phone, otp);

    res.status(201).json({ message: 'User registered. OTP sent.' });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
};

exports.verifyOtp = async (req, res) => {
  const { phone, otp } = req.body;

  try {
    const user = await User.findOne({ phone });

    if (!user || user.otp !== otp) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    user.verified = true;
    await user.save();

    res.json({ message: 'Phone number verified' });
  } catch (err) {
    res.status(500).json({ message: 'OTP verification failed', error: err.message });
  }
};

exports.loginUser = async (req, res) => {
  const { phone, password } = req.body;

  try {
    const user = await User.findOne({ phone });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    if (!user.verified) return res.status(403).json({ message: 'Phone number not verified' });

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};
