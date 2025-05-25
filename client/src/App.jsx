// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Public Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import OurWork from './components/Ourwork';
import Userregistration from './Pages/Userregistration'
// import Register from './pages/Register';

// // Private Components
// import Sidebar from './components/Sidebar';
// import Dashboard from './pages/Dashboard';
// import FarmMapping from './pages/FarmMapping';
// import Insights from './pages/Insights';

// Layout Wrapper for Protected Pages
const ProtectedLayout = ({ children }) => (
  <div className="d-flex">
    <Sidebar />
    <div className="flex-grow-1 p-4">{children}</div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* 🌐 Public Routes */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <OurWork/>
              <Contact />
              <Footer />
            </>
          }
        />
        <Routes>
 
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard />} />
  {/* other routes */}
</Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}

        {/* 🔐 Protected Routes
        <Route
          path="/dashboard"
          element={
            <ProtectedLayout>
              <Dashboard />
            </ProtectedLayout>
          }
        />
        <Route
          path="/farmmapping"
          element={
            <ProtectedLayout>
              <FarmMapping />
            </ProtectedLayout>
          }
        />
        <Route
          path="/insights"
          element={
            <ProtectedLayout>
              <Insights />
            </ProtectedLayout>
          }
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
