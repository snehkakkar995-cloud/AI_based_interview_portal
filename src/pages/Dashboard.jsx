import React, { Suspense, useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  useGetTechnologiesQuery,
  useGetProfileQuery,
} from "../services/userApi";

import {
  FaUserCircle,
  FaFileAlt,
  FaSearch,
  FaBell,
  FaSignOutAlt,
  FaUserEdit,
  FaLock,
  FaRocket,
  FaChartLine,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const User = React.lazy(() => import("./Users"));

function Dashboard() {
  const navigate = useNavigate();
  const authUser = useSelector((state) => state.auth.user);
  const { data: profile } = useGetProfileQuery();
  const { data: technologies = [], isLoading } = useGetTechnologiesQuery();

  const [technologyId, setTechnologyId] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const technologyCards = [
    {
      id: 2,
      title: "React JS",
      description: "Modern Frontend Library",
      questions: "120+ Questions",
      level: "Easy",
      icon: "⚛️",
      gradient: "from-cyan-500 to-cyan-600",
      border: "border-cyan-500",
      ring: "ring-cyan-200",
      badge: "bg-cyan-100 text-cyan-700",
      button: "bg-cyan-500 hover:bg-cyan-600",
      questionColor: "text-cyan-600",
      iconBg: "bg-cyan-100",
    },
    {
      id: 1,
      title: ".NET Core",
      description: "Backend Development",
      questions: "95+ Questions",
      level: "Medium",
      icon: "🔷",
      gradient: "from-violet-500 to-violet-600",
      border: "border-violet-500",
      ring: "ring-violet-200",
      badge: "bg-violet-100 text-violet-700",
      button: "bg-violet-600 hover:bg-violet-700",
      questionColor: "text-violet-600",
      iconBg: "bg-violet-100",
    },
    {
      id: 3,
      title: "Angular",
      description: "Frontend Framework",
      questions: "100+ Questions",
      level: "Advanced",
      icon: "🅰️",
      gradient: "from-red-500 to-red-600",
      border: "border-red-500",
      ring: "ring-red-200",
      badge: "bg-red-100 text-red-700",
      button: "bg-red-500 hover:bg-red-600",
      questionColor: "text-red-600",
      iconBg: "bg-red-100",
    },
    {
      id: 4,
      title: "Python",
      description: "Programming Language",
      questions: "110+ Questions",
      level: "Popular",
      icon: "🐍",
      gradient: "from-yellow-500 to-yellow-600",
      border: "border-yellow-500",
      ring: "ring-yellow-200",
      badge: "bg-yellow-100 text-yellow-700",
      button: "bg-yellow-500 hover:bg-yellow-600",
      questionColor: "text-yellow-600",
      iconBg: "bg-yellow-100",
    },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const selectTechnology = (id) => {
    setTechnologyId(id);
    // Scroll to questions section on mobile
    if (window.innerWidth < 1024) {
      document.getElementById("questions-section")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* ================= HEADER ================= */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto h-16 sm:h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left Section */}
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-8">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-slate-600 text-xl" />
              ) : (
                <FaBars className="text-slate-600 text-xl" />
              )}
            </button>

            {/* Logo */}
            <Link to="/dashboard" className="flex items-center gap-2 sm:gap-3 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-white text-base sm:text-lg lg:text-xl font-bold">CP</span>
              </div>
              <div className="hidden sm:block">
                <h2 className="text-base sm:text-lg lg:text-xl font-bold text-slate-800 leading-tight">
                  Careerprep Hub
                </h2>
                <p className="text-[8px] sm:text-[10px] lg:text-xs text-slate-500 leading-tight">
                  Interview Preparation Platform
                </p>
              </div>
            </Link>

            {/* Resume Button - Desktop */}
            <Link
              to="/resume-validation"
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2.5 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm"
            >
              <FaFileAlt className="text-sm" />
              Resume Validation
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-5">
            {/* Search Bar - Desktop */}
            <div className="hidden xl:flex items-center bg-slate-100 rounded-full px-4 py-2 w-48 2xl:w-64 border border-slate-200 focus-within:ring-2 focus-within:ring-blue-400 transition-all">
              <FaSearch className="text-slate-400 text-sm" />
              <input
                type="text"
                placeholder="Search technologies..."
                className="bg-transparent outline-none ml-2 w-full text-sm placeholder:text-slate-400"
              />
            </div>

            {/* Search Icon - Mobile */}
            <button className="xl:hidden p-2 hover:bg-slate-100 rounded-lg transition">
              <FaSearch className="text-slate-600 text-lg" />
            </button>

            {/* Notification Bell */}
            <button className="relative p-2 hover:bg-slate-100 rounded-lg transition">
              <FaBell className="text-slate-600 text-lg sm:text-xl" />
              <span className="absolute top-1 right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>

            {/* Profile Dropdown */}
            <div ref={menuRef} className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="flex items-center gap-2 hover:bg-slate-100 rounded-xl px-2 py-1.5 sm:px-3 transition"
              >
                <div className="hidden sm:block text-right">
                  <p className="text-[8px] sm:text-[10px] text-slate-500 leading-tight">
                    Welcome Back
                  </p>
                  <p className="font-semibold text-slate-700 text-xs sm:text-sm leading-tight max-w-[80px] truncate">
                    {profile?.firstName || profile?.firstname || authUser?.email || "Student"}
                  </p>
                </div>

                {profile?.profileImage ? (
                  <img
                    src={`data:image/png;base64,${profile.profileImage}`}
                    alt="Profile"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-blue-500 object-cover"
                  />
                ) : (
                  <FaUserCircle className="text-3xl sm:text-[42px] text-blue-600" />
                )}
                <FaChevronDown className="hidden sm:block text-slate-400 text-xs" />
              </button>

              {/* Dropdown Menu */}
              {showMenu && (
                <div className="absolute right-0 top-12 sm:top-14 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
                  {/* User Info */}
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5">
                    <div className="flex items-center gap-4">
                      {profile?.profileImage ? (
                        <img
                          src={`data:image/png;base64,${profile.profileImage}`}
                          alt=""
                          className="w-14 h-14 rounded-full border-2 border-white"
                        />
                      ) : (
                        <FaUserCircle className="text-5xl" />
                      )}
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-base truncate">
                          {profile?.firstName || profile?.firstname || "Student"}
                        </h3>
                        <p className="text-blue-100 text-sm truncate">
                          {profile?.emailId || profile?.email || "student@email.com"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="p-2">
                    <Link
                      to="/profile"
                      onClick={() => setShowMenu(false)}
                      className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-slate-50 transition"
                    >
                      <FaUserEdit className="text-blue-600 text-lg" />
                      <span className="text-slate-700 font-medium">Edit Profile</span>
                    </Link>

                    <Link
                      to="/change-password"
                      onClick={() => setShowMenu(false)}
                      className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-slate-50 transition"
                    >
                      <FaLock className="text-amber-500 text-lg" />
                      <span className="text-slate-700 font-medium">Change Password</span>
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-4 w-full text-left px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition"
                    >
                      <FaSignOutAlt className="text-lg" />
                      <span className="font-medium">Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div ref={mobileMenuRef} className="lg:hidden bg-white border-t border-slate-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
              <Link
                to="/resume-validation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition"
              >
                <FaFileAlt className="text-emerald-600 text-lg" />
                <span className="text-slate-700 font-medium">Resume Validation</span>
              </Link>
              <Link
                to="/profile"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition"
              >
                <FaUserEdit className="text-blue-600 text-lg" />
                <span className="text-slate-700 font-medium">Edit Profile</span>
              </Link>
              <Link
                to="/change-password"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition"
              >
                <FaLock className="text-amber-500 text-lg" />
                <span className="text-slate-700 font-medium">Change Password</span>
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition"
              >
                <FaSignOutAlt className="text-lg" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ================= MAIN ================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-10">
        
        {/* ================= STATS SECTION ================= */}
        <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-slate-500">Total Questions</p>
                <p className="text-xl sm:text-2xl font-bold text-slate-800 mt-0.5 sm:mt-1">425</p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                <FaRocket className="text-blue-600 text-base sm:text-xl" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-slate-500">Technologies</p>
                <p className="text-xl sm:text-2xl font-bold text-slate-800 mt-0.5 sm:mt-1">4</p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                <FaChartLine className="text-purple-600 text-base sm:text-xl" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-slate-500">Practice Tests</p>
                <p className="text-xl sm:text-2xl font-bold text-slate-800 mt-0.5 sm:mt-1">12</p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                <FaFileAlt className="text-emerald-600 text-base sm:text-xl" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm text-slate-500">Success Rate</p>
                <p className="text-xl sm:text-2xl font-bold text-slate-800 mt-0.5 sm:mt-1">78%</p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                <FaChartLine className="text-amber-600 text-base sm:text-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* ================= POPULAR TECHNOLOGIES ================= */}
        <section className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800">
                Popular Technologies
              </h2>
              <p className="text-sm sm:text-base text-slate-500 mt-0.5 sm:mt-1">
                Select a technology to start your interview preparation.
              </p>
            </div>
            <span className="bg-blue-100 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
              {technologies.length} Technologies Available
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {technologyCards.map((tech) => (
              <div
                key={tech.id}
                onClick={() => selectTechnology(tech.id)}
                className={`group cursor-pointer rounded-xl sm:rounded-2xl bg-white border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  technologyId === tech.id
                    ? `${tech.border} ring-2 ${tech.ring}`
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="p-4 sm:p-5 lg:p-6 flex flex-col h-full">
                  {/* Icon */}
                 <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center shadow-sm mb-4"> <div className="text-3xl"> {tech.icon} </div> </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-1 sm:mb-2">
                    {tech.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-3 sm:mb-4 flex-1">
                    {tech.description}
                  </p>

                  {/* Questions & Badge */}
                  <div className="flex justify-between items-center mb-4 sm:mb-5"> <span className="text-sky-600 font-semibold text-xs sm:text-sm"> {tech.questions} </span> <span className="bg-sky-100 text-sky-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium"> {tech.level} </span> </div>

                  
                  <button className="w-full bg-sky-400 hover:bg-sky-600 text-white py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-semibold transition duration-300 hover:scale-[1.02] text-xs sm:text-sm" > Start Practice → </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= INTERVIEW QUESTIONS ================= */}
        <section id="questions-section">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 px-4 sm:px-6 py-4 sm:py-6 bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Interview Questions
                </h2>
                <p className="text-blue-100 mt-0.5 sm:mt-1 text-xs sm:text-sm">
                  Practice technical interview questions and improve your confidence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
                {/* Search */}
                <div className="relative flex-1 sm:flex-initial">
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                  <input
                    type="text"
                    placeholder="Search Questions..."
                    className="w-full sm:w-48 lg:w-56 pl-9 pr-4 py-2.5 rounded-xl border-0 outline-none shadow-sm text-sm bg-white placeholder:text-slate-400"
                  />
                </div>

                {/* Technology Select */}
                <select
                  value={technologyId}
                  onChange={(e) => setTechnologyId(Number(e.target.value))}
                  className="px-4 py-2.5 rounded-xl border-0 outline-none text-slate-700 shadow-sm text-sm w-full sm:w-48 lg:w-56 bg-white"
                >
                  <option value="">
                    {isLoading ? "Loading..." : "Select Technology"}
                  </option>
                  {technologies.map((tech) => (
                    <option key={tech.id} value={tech.id}>
                      {tech.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 sm:p-6 bg-slate-50 min-h-[300px] sm:min-h-[400px]">
              {technologyId === "" ? (
                <div className="flex flex-col items-center justify-center py-12 sm:py-16">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-blue-100 flex items-center justify-center text-3xl sm:text-5xl mb-4 sm:mb-6">
                    💻
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 text-center">
                    Choose a Technology
                  </h3>
                  <p className="text-sm sm:text-base text-slate-500 mt-2 text-center max-w-md">
                    Select one of the available technologies above to view
                    interview questions and answers.
                  </p>
                </div>
              ) : (
                <>
                  {/* Top Bar */}
                  <div className="flex flex-wrap justify-between items-center gap-3 mb-4 sm:mb-6">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-800">
                        Question List
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500">
                        Start practicing your selected technology.
                      </p>
                    </div>
                    <span className="bg-blue-100 text-blue-700 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-semibold text-xs sm:text-sm">
                      Practice Mode
                    </span>
                  </div>

                  <Suspense
                    fallback={
                      <div className="flex flex-col items-center justify-center py-12 sm:py-16">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        <p className="mt-4 text-slate-600 text-xs sm:text-sm">
                          Loading Interview Questions...
                        </p>
                      </div>
                    }
                  >
                    <User technologyId={technologyId} />
                  </Suspense>
                </>
              )}
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <div className="text-center py-6 sm:py-8 lg:py-10 mt-6 sm:mt-8 border-t border-slate-200">
          <p className="text-slate-500 text-xs sm:text-sm">
            © 2026 PrepPortal • Interview Preparation Platform
          </p>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;