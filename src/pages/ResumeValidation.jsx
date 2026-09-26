import React, { useRef, useState, useMemo } from "react";
import {
  FaCloudUploadAlt,
  FaFilePdf,
  FaFileWord,
  FaImage,
  FaTrashAlt,
  FaCheckCircle,
  FaFileAlt,
  FaInfoCircle,
  FaArrowLeft,
  FaBriefcase,
  FaClock,
  FaUserGraduate,
  FaSearch,
  FaChevronDown,
  FaChevronUp,
  FaReact,
  FaAngular,
  FaJs,
  FaDatabase,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAnalyzeResumeMutation } from "../services/userApi";

function ResumeValidation() {
  const fileInputRef = useRef(null);
  const [resume, setResume] = useState(null);
  const [preview, setPreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  // Analysis Result State
  const [analysisData, setAnalysisData] = useState(null);

  // Search & Filter States for Questions
  const [selectedTech, setSelectedTech] = useState("All Technologies");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All Difficulties");
  const [searchQuery, setSearchQuery] = useState("");
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const [analyzeResume] = useAnalyzeResumeMutation();

  const handleFile = (file) => {
    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
      "image/jpg",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Only PDF, DOC, DOCX, JPG, JPEG and PNG files are allowed.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("Maximum file size is 10 MB.");
      return;
    }

    setResume(file);
    setSubmitted(false);
    setAnalysisData(null);

    if (file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    }

    if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const removeResume = () => {
    setResume(null);
    setPreview(null);
    setSubmitted(false);
    setIsUploading(false);
    setAnalysisData(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async () => {
    if (!resume) {
      alert("Please upload a resume first.");
      return;
    }

    try {
      setIsUploading(true);

      const formData = new FormData();
      formData.append("resume", resume);

      const response = await analyzeResume(formData).unwrap();
      const dataPayload = response?.data || response?.result || response || {};

      setAnalysisData(dataPayload);
      setSubmitted(true);
    } catch (error) {
      console.error("Analysis Error:", error);
      alert("Resume analysis failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const getFileIcon = () => {
    if (!resume) return null;

    if (resume.type?.includes("pdf")) {
      return <FaFilePdf className="text-red-500 text-5xl" />;
    }

    if (
      resume.type?.includes("word") ||
      resume.type?.includes("document")
    ) {
      return <FaFileWord className="text-blue-500 text-5xl" />;
    }

    return <FaImage className="text-emerald-500 text-5xl" />;
  };

  const getFileTypeLabel = () => {
    if (!resume) return "";

    if (resume.type?.includes("pdf")) return "PDF Document";
    if (resume.type?.includes("word")) return "Word Document";
    if (resume.type?.includes("image")) return "Image File";
    return resume.type || "Document";
  };

  // Helper for technology icon rendering
  const getTechIcon = (techName = "") => {
    const t = techName.toLowerCase();
    if (t.includes("react")) return <FaReact className="text-sky-500 text-base" />;
    if (t.includes("angular")) return <FaAngular className="text-red-600 text-base" />;
    if (t.includes("javascript") || t.includes("js")) return <FaJs className="text-amber-500 text-base" />;
    if (t.includes("sql") || t.includes("database")) return <FaDatabase className="text-blue-600 text-base" />;
    return <FaCode className="text-indigo-500 text-base" />;
  };

  // Safe unique list of technologies
  const allTechnologies = useMemo(() => {
    if (!analysisData) return [];
    const primary = Array.isArray(analysisData.primaryTechnologies)
      ? analysisData.primaryTechnologies
      : [];
    const secondary = Array.isArray(analysisData.secondaryTechnologies)
      ? analysisData.secondaryTechnologies
      : [];

    return Array.from(new Set([...primary, ...secondary]));
  }, [analysisData]);

  // Safe Filter Logic for Questions
  const filteredQuestions = useMemo(() => {
    const questionsList = Array.isArray(analysisData?.questions)
      ? analysisData.questions
      : [];

    return questionsList.filter((q) => {
      if (!q) return false;

      const techMatch =
        selectedTech === "All Technologies" || q.technology === selectedTech;

      const diffMatch =
        selectedDifficulty === "All Difficulties" ||
        q.difficulty?.toLowerCase() === selectedDifficulty.toLowerCase();

      const searchMatch =
        !searchQuery ||
        q.question?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.detailedAnswer?.toLowerCase().includes(searchQuery.toLowerCase());

      return techMatch && diffMatch && searchMatch;
    });
  }, [analysisData, selectedTech, selectedDifficulty, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50/70 flex flex-col font-sans text-slate-800 antialiased">
      {/* ===== HEADER ===== */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <Link to="/dashboard" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-lg shadow-sm">
              CP
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              Careerprep Hub
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#home" className="hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-blue-600 transition-colors">
              About Us
            </a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">
              Contact Us
            </a>
            <a href="#help" className="hover:text-blue-600 transition-colors">
              Help
            </a>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            {submitted && (
              <button
                onClick={removeResume}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-xs transition-colors"
              >
                <FaFileAlt className="text-xs" />
                <span>Upload New Resume</span>
              </button>
            )}
            <Link
              to="/dashboard"
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors px-3.5 py-2.5 rounded-xl hover:bg-slate-100 text-xs font-semibold"
            >
              <FaArrowLeft className="text-xs" />
              <span>Back</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Step 1: Upload Card */}
        {!submitted && (
          <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Upload Resume for Analysis
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  PDF, DOC, DOCX, JPG, JPEG, PNG • Max 10 MB
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                <FaInfoCircle className="text-slate-400" />
                <span>10 MB max</span>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`
                  border-2 border-dashed rounded-2xl p-10 cursor-pointer transition-all text-center
                  flex flex-col items-center justify-center min-h-[220px]
                  ${
                    dragActive
                      ? "border-blue-500 bg-blue-50/50"
                      : "border-slate-200 bg-slate-50/40 hover:bg-slate-50 hover:border-slate-300"
                  }
                  ${resume ? "border-emerald-500 bg-emerald-50/30" : ""}
                `}
              >
                {resume ? (
                  <div className="flex items-center gap-5 text-left">
                    {preview ? (
                      <img
                        src={preview}
                        alt="Preview"
                        className="w-16 h-20 rounded-lg object-cover border shadow-xs"
                      />
                    ) : (
                      getFileIcon()
                    )}
                    <div className="space-y-1">
                      <h3 className="font-semibold text-slate-900 text-sm truncate max-w-xs">
                        {resume.name}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {(resume.size / 1024).toFixed(1)} KB • {getFileTypeLabel()}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full text-[11px] font-semibold mt-2">
                        <FaCheckCircle className="text-[10px]" /> Selected
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="inline-flex p-4 rounded-2xl bg-blue-50 text-blue-600 mb-1">
                      <FaCloudUploadAlt className="text-4xl" />
                    </div>
                    <h3 className="text-base font-semibold text-slate-800">
                      Drag & drop your resume here
                    </h3>
                    <p className="text-xs text-slate-500">
                      or click to browse files from your computer
                    </p>
                  </div>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={handleChange}
                  className="hidden"
                />
              </div>

              {resume && (
                <div className="flex gap-4 pt-2">
                  <button
                    onClick={handleSubmit}
                    disabled={isUploading}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                  >
                    {isUploading ? (
                      <>
                        <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <FaCheckCircle /> Start Analysis
                      </>
                    )}
                  </button>
                  <button
                    onClick={removeResume}
                    className="px-5 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors flex items-center gap-2"
                  >
                    <FaTrashAlt className="text-red-500" /> Remove
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 2: Display Analysis Dashboard */}
        {submitted && analysisData && (
          <div className="space-y-8">
            {/* Top Stat Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs flex items-center gap-5">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                  <FaBriefcase className="text-xl" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    CURRENT ROLE
                  </p>
                  <h3 className="text-lg font-bold text-slate-900 truncate mt-1">
                    {analysisData.currentRole || "N/A"}
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs flex items-center gap-5">
                <div className="w-12 h-12 bg-indigo-500 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                  <FaClock className="text-xl" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    TOTAL EXPERIENCE
                  </p>
                  <h3 className="text-lg font-bold text-slate-900 truncate mt-1">
                    {analysisData.totalExperience || "Not specified"}
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs flex items-center gap-5">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                  <FaGraduationCap className="text-xl" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    SENIORITY LEVEL
                  </p>
                  <h3 className="text-lg font-bold text-slate-900 truncate mt-1">
                    {analysisData.seniority || "N/A"}
                  </h3>
                </div>
              </div>
            </div>

            {/* Primary & Secondary Technologies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Primary Technologies */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs">
                <p className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider mb-4">
                  PRIMARY TECHNOLOGIES
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {Array.isArray(analysisData.primaryTechnologies) &&
                  analysisData.primaryTechnologies.length > 0 ? (
                    analysisData.primaryTechnologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-indigo-50 text-indigo-700 border border-indigo-100 px-4 py-1.5 rounded-xl text-xs font-semibold shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-slate-400 italic">
                      None detected
                    </span>
                  )}
                </div>
              </div>

              {/* Secondary Technologies */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs">
                <p className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider mb-4">
                  SECONDARY TECHNOLOGIES
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {Array.isArray(analysisData.secondaryTechnologies) &&
                  analysisData.secondaryTechnologies.length > 0 ? (
                    analysisData.secondaryTechnologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-1.5 rounded-xl text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-slate-400 italic">
                      None detected
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Filters Section */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  FILTER BY TECHNOLOGY
                </label>
                <select
                  value={selectedTech}
                  onChange={(e) => setSelectedTech(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                >
                  <option value="All Technologies">All Technologies</option>
                  {allTechnologies.map((tech, i) => (
                    <option key={i} value={tech}>
                      {tech}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  FILTER BY DIFFICULTY
                </label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                >
                  <option value="All Difficulties">All Difficulties</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  SEARCH QUESTIONS
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search questions..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 pr-10 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                  />
                  <FaSearch className="absolute right-3.5 top-3.5 text-slate-400 text-xs pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Questions Section */}
            <div className="space-y-5 pt-2">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    Interview Questions
                  </h3>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                    {filteredQuestions.length}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Total Questions: {analysisData?.questions?.length || 0}
                </p>
              </div>

              {/* Questions Accordion List */}
              <div className="space-y-4">
                {filteredQuestions.length > 0 ? (
                  filteredQuestions.map((item, index) => {
                    const isOpen = openQuestionIndex === index;
                    return (
                      <div
                        key={index}
                        className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs hover:border-slate-300 transition-all"
                      >
                        <button
                          onClick={() =>
                            setOpenQuestionIndex(isOpen ? null : index)
                          }
                          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50/60 transition-colors gap-5"
                        >
                          <div className="flex items-center gap-3.5 min-w-0 flex-1">
                            {/* Circular Icon Wrapper */}
                            <div className="w-8 h-8 rounded-xl bg-slate-100/80 flex items-center justify-center shrink-0 border border-slate-200/60">
                              {getTechIcon(item.technology)}
                            </div>

                            {/* Tech Badge */}
                            {item.technology && (
                              <span className="bg-blue-50 text-blue-600 border border-blue-100 text-[11px] px-3 py-1 rounded-full font-bold shrink-0">
                                {item.technology}
                              </span>
                            )}

                            {/* Difficulty Badge */}
                            {item.difficulty && (
                              <span
                                className={`text-[11px] px-3 py-1 rounded-full font-semibold shrink-0 ${
                                  item.difficulty?.toLowerCase() === "beginner"
                                    ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                                    : item.difficulty?.toLowerCase() === "intermediate"
                                    ? "bg-amber-50 text-amber-600 border border-amber-100"
                                    : "bg-rose-50 text-rose-600 border border-rose-100"
                                }`}
                              >
                                {item.difficulty}
                              </span>
                            )}

                            {/* Question Title */}
                            <h4 className="text-sm font-semibold text-slate-800 leading-snug truncate ml-1">
                              {item.question}
                            </h4>
                          </div>

                          <div className="text-slate-400 shrink-0 ml-2">
                            {isOpen ? (
                              <FaChevronUp className="text-xs" />
                            ) : (
                              <FaChevronDown className="text-xs" />
                            )}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-6 pt-4 border-t border-slate-100 space-y-4 bg-slate-50/40">
                            <div>
                              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                                DETAILED ANSWER
                              </p>
                              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
                                {item.detailedAnswer || "No answer provided."}
                              </div>
                            </div>

                            {item.followUpQuestion && (
                              <div>
                                <p className="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-2">
                                  FOLLOW-UP QUESTION
                                </p>
                                <div className="text-xs sm:text-sm text-blue-900 bg-blue-50/60 p-4 rounded-2xl border border-blue-100 italic leading-relaxed">
                                  {item.followUpQuestion}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center text-slate-500 text-xs sm:text-sm font-medium">
                    No questions match your filter criteria.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500 mt-auto">
        © 2026 PrepPortal • Interview Preparation Platform
      </footer>
    </div>
  );
}

export default ResumeValidation;