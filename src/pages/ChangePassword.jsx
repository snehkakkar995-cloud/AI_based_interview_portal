



import React, { useState } from "react";
import {
  FaArrowLeft,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaShieldAlt,
  FaUserShield,
  FaCheckCircle,
  FaKey,
} from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { useChangePasswordMutation } from "../services/userApi";

function ChangePassword() {
  const navigate = useNavigate();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New Password and Confirm Password do not match");
      return;
    }

    try {
      const response = await changePassword({
        currentPassword,
        newPassword,
      }).unwrap();

      alert(response.message);

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

    } catch (error) {
      alert(error?.data?.message || "Password change failed");
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-100 flex items-center justify-center p-3 sm:p-4">
      <div className="w-full max-w-6xl h-full max-h-[95vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col">

        {/* ===== HEADER ===== */}
        <div className="flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-200 flex items-center justify-between">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 text-green-700 font-semibold text-sm sm:text-base hover:text-green-900 transition"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-green-50 flex items-center justify-center">
              <FaArrowLeft className="text-xs sm:text-sm" />
            </div>
            <span className="hidden xs:inline">Back to Dashboard</span>
          </button>
          <div className="flex items-center gap-2 text-green-700">
            <FaShieldAlt className="text-sm sm:text-base" />
            <span className="text-xs sm:text-sm font-medium hidden xs:inline">Secure</span>
          </div>
        </div>

        {/* ===== BODY ===== */}
        <div className="flex-1 overflow-hidden grid lg:grid-cols-2">

          {/* ===== LEFT PANEL ===== */}
          <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 p-6 sm:p-8 lg:p-10 overflow-hidden hidden lg:flex flex-col justify-center">
            <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-green-200 opacity-40"></div>
            <div className="absolute top-16 right-10 w-32 h-32 rounded-full bg-green-300 opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-full h-40 bg-white/20 rounded-t-full"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-40 h-40 rounded-full bg-white shadow-xl flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-green-700 flex items-center justify-center">
                  <FaShieldAlt className="text-white text-5xl" />
                </div>
              </div>

              <h2 className="mt-6 text-3xl font-bold text-gray-800 text-center leading-tight">
                Keep Your Account
                <br />
                <span className="text-green-700">Secure</span>
              </h2>

              <p className="mt-3 text-gray-600 text-sm text-center max-w-xs">
                A strong password helps protect your account from unauthorized access.
              </p>

              <div className="mt-6 w-full border-t border-green-200 pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-700 flex items-center justify-center flex-shrink-0">
                    <FaLock className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Secure</h4>
                    <p className="text-gray-600 text-xs">Your data is encrypted and safe</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-700 flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Reliable</h4>
                    <p className="text-gray-600 text-xs">We protect your account 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                 
                
                </div>
              </div>
            </div>
          </div>

          {/* ===== RIGHT PANEL ===== */}
          <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto flex flex-col justify-center">
            <div className="flex justify-center">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                <FaLock className="text-green-700 text-2xl" />
              </div>
            </div>

            <h1 className="text-center text-2xl sm:text-3xl font-bold text-green-700 mt-3">
              Change Password
            </h1>
            <p className="text-center text-gray-500 text-sm sm:text-base mt-1">
              Update your password to keep your account secure
            </p>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              {/* Current Password */}
              <div>
                <label className="block text-gray-700 font-semibold text-sm mb-1">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showCurrent ? "text" : "password"}
                    placeholder="Enter your current password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full h-11 px-4 pr-11 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrent(!showCurrent)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showCurrent ? <FaEyeSlash className="text-sm" /> : <FaEye className="text-sm" />}
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div>
                <label className="block text-gray-700 font-semibold text-sm mb-1">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showNew ? "text" : "password"}
                    placeholder="Enter your new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full h-11 px-4 pr-11 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNew(!showNew)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showNew ? <FaEyeSlash className="text-sm" /> : <FaEye className="text-sm" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-gray-700 font-semibold text-sm mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm your new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full h-11 px-4 pr-11 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirm ? <FaEyeSlash className="text-sm" /> : <FaEye className="text-sm" />}
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-green-700 hover:bg-green-800 text-white font-bold py-3 rounded-xl transition duration-300 text-sm shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Updating...
                    </span>
                  ) : (
                    "Update Password"
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/dashboard")}
                  className="flex-1 border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-bold py-3 rounded-xl transition duration-300 text-sm"
                >
                  Cancel
                </button>
              </div>
            </form>

            {/* Footer */}
            <div className="mt-4 pt-4 border-t border-slate-200">
              <div className="flex items-center justify-center gap-2 text-gray-500">
                <FaShieldAlt className="text-green-700 text-sm" />
                <span className="text-xs">Your password is securely encrypted and protected.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 480px) {
          .xs\\:inline { display: inline; }
        }
      `}</style>
    </div>
  );
}

export default ChangePassword;