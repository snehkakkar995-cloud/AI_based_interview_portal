import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaUser, FaEnvelope, FaPhoneAlt, FaLock,FaEye, FaEyeSlash,FaUserGraduate, FaCheckCircle,
} from "react-icons/fa";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(formData);
    navigate("/");
  };

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-indigo-900 flex items-center justify-center p-3 sm:p-4">
      <div className="w-full max-w-6xl h-full max-h-[95vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* ================= LEFT PANEL ================= */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-8 lg:p-10 text-white relative overflow-hidden">
          <div className="absolute w-60 h-60 rounded-full bg-cyan-400/10 -top-16 -left-16"></div>
          <div className="absolute w-64 h-64 rounded-full bg-white/5 -bottom-20 -right-20"></div>

          <div className="relative z-10">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl mb-6">
              <FaUserGraduate className="text-blue-700 text-4xl" />
            </div>

            <h1 className="text-4xl font-extrabold leading-tight">
              CareerPrep
              <br />
              Hub
            </h1>

            <p className="mt-4 text-sm text-blue-100 leading-relaxed">
              Build your future with confidence. Practice interviews, improve your
              technical skills and prepare for your dream company.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-cyan-300 text-base" />
                <span className="text-sm">5000+ Interview Questions</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-cyan-300 text-base" />
                <span className="text-sm">50+ Technologies</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-cyan-300 text-base" />
                <span className="text-sm">Resume Preparation</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-cyan-300 text-base" />
                <span className="text-sm">Mock Interview Practice</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-cyan-300 text-base" />
                <span className="text-sm">Completely Free Platform</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div className="bg-white p-5 sm:p-6 lg:p-8 overflow-y-auto flex flex-col justify-center">
          <div className="text-center mb-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white mx-auto shadow-lg">
              <FaUserGraduate size={28} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mt-3">
              Create Account
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Join CareerPrep Hub and start your journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Phone Number
              </label>
              <div className="relative">
                <FaPhoneAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  required
                  className="w-full pl-9 pr-9 py-2.5 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600"
                >
                  {showPassword ? <FaEyeSlash className="text-sm" /> : <FaEye className="text-sm" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  required
                  className="w-full pl-9 pr-9 py-2.5 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600"
                >
                  {showConfirmPassword ? <FaEyeSlash className="text-sm" /> : <FaEye className="text-sm" />}
                </button>
              </div>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-300"
            >
              Create Account
            </button>

            {/* Divider */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-full border-t border-slate-200"></div>
              <span className="relative bg-white px-3 text-slate-500 text-xs">
                OR
              </span>
            </div>

            {/* Login Link */}
            <p className="text-center text-slate-600 text-sm">
              Already have an account?
              <Link
                to="/"
                className="ml-1.5 font-semibold text-blue-600 hover:text-cyan-500 transition"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;