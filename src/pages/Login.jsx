import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../services/userApi";

function Login() {
  const navigate = useNavigate();

  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser, { data, isLoading, isSuccess, error }] =
    useLoginUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({
        emailId,
        password,
      }).unwrap();

      if (response !== '') {
        navigate("/dashboard");
      } else {
        console.log("Login Success:", response);
      }
    } catch (err) {
      console.log("Login Failed:", err);
    }
  };

  return (
    <div className="!flex !justify-center !items-center !min-h-screen !w-full !m-0 !p-4 bg-slate-50 font-sans box-border" style={{ minHeight: "100vh" }}>
      <div 
        className="bg-white rounded-2xl shadow-md border border-emerald-100 w-full max-w-md"
        style={{ 
          padding: "40px", 
          boxSizing: "border-box",
          maxWidth: "420px",
          width: "100%"
        }}
      >
        {/* Header */}
        <div className="text-center" style={{ marginBottom: "32px" }}>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight" style={{ margin: "0 0 8px 0" }}>
            Welcome back
          </h2>
          <p className="text-sm text-slate-500" style={{ margin: "0" }}>
            Please enter your details to sign in
          </p>
        </div>

        <form onSubmit={handleSubmit} className="!flex !flex-col" style={{ gap: "20px" }}>
          {/* Email Input */}
          <div className="!flex !flex-col" style={{ gap: "6px" }}>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider" style={{ textAlign: "left", display: "block" }}>
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              value={emailId}
              required
              className="w-full bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
              style={{
                boxSizing: "border-box",
                height: "44px",
                padding: "0 16px",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
                display: "block",
                margin: "0",
                width: "100%"
              }}
              onChange={(e) => setEmailId(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="!flex !flex-col" style={{ gap: "6px" }}>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider" style={{ textAlign: "left", display: "block" }}>
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              required
              className="w-full bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200"
              style={{
                boxSizing: "border-box",
                height: "44px",
                padding: "0 16px",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
                display: "block",
                margin: "0",
                width: "100%"
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors duration-200"
            style={{
              boxSizing: "border-box",
              height: "44px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
              display: "block",
              width: "100%"
            }}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>

          {/* Error Message Display */}
          {error && (
            <p className="text-xs text-red-500 text-center" style={{ margin: "10px 0 0 0" }}>
              Failed to sign in. Please check your credentials.
            </p>
          )}

          {/* Footer Link */}
          <p className="text-center text-sm text-slate-500" style={{ margin: "16px 0 0 0" }}>
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-emerald-600 hover:text-emerald-700 transition-colors no-underline hover:underline"
              style={{ color: "#059669", textDecoration: "none" }}
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;