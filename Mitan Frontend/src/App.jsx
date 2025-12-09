import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Layout
import Layout from "./components/Layout";

// Pages
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Team from "./components/Team";
import FAQ from "./components/FAQ";

// Auth Pages
import Login from "./components/Login";
import Signup from "./components/Signup";

// Legal Pages
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";

// Admin
import Admin from "../src/Main/Admin";
import AdminMessages from "./Main/AdminMessages";
import NotFound from "../src/Main/NotFound";

function App() {
  return (
    <>
      {/* Toast Notifications */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#fff",
            color: "#1e40af",
            fontWeight: "600",
            padding: "16px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
          },
          success: {
            iconTheme: {
              primary: "#2563eb",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />

      <Routes>
        {/* Public Routes - Auth (No Layout) */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes - Main App (With Layout) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />

          {/* Legal Pages */}
          {/* <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} /> */}
        </Route>

        {/* Admin Routes (No Layout) */}
        <Route path="/admin/dashboard/main/tele" element={<Admin />} />
        <Route path="/messageDetails" element={<AdminMessages />} />

        {/* 404 - Catch all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
