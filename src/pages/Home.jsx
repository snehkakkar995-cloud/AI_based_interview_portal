import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

import { FaArrowRight, FaPlay,
  FaReact, FaJsSquare, FaPython, FaDatabase, } from "react-icons/fa";

import heroImg from "../assets/hero.png";

function Home() {
  return (
    <div className="bg-[#f7f9fc] min-h-screen">

      <Header />

      {/* ================= HERO ================= */}

      <section className="px-5 lg:px-10 pt-6">

        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#0b2343] via-[#12335c] to-[#1b4578] rounded-[35px] overflow-hidden relative">

          {/* Background Blur */}

          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="grid lg:grid-cols-2 items-center gap-10 px-10 lg:px-20 py-20">

            {/* LEFT */}

            <div>

              <span className="bg-cyan-500/20 text-cyan-300 px-5 py-2 rounded-full text-sm font-semibold">
                CareerPrep Hub
              </span>

              <h1 className="text-white text-5xl lg:text-6xl font-bold leading-tight mt-8">
                Prepare For
                <br />
                Your
                <span className="text-cyan-400">
                  {" "}Dream Job
                </span>
              </h1>

              <p className="text-blue-100 mt-7 text-lg leading-8 max-w-xl">
                Practice technical interviews, HR questions,
                aptitude, coding challenges and resume preparation
                on one professional platform.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">

               

                

              </div>

              {/* Tech Icons */}

              <div className="flex gap-6 mt-14 text-4xl">

                <FaReact className="text-cyan-400 animate-pulse" />

                <FaJsSquare className="text-yellow-400" />

                <FaPython className="text-green-400" />

                <FaDatabase className="text-pink-400" />

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative flex justify-center">

              <div className="absolute w-[420px] h-[420px] bg-cyan-400/20 rounded-full blur-2xl"></div>

              <div className="relative">

                <div className="absolute inset-0 rounded-full border-4 border-cyan-400/30 scale-110"></div>

                <img
                  src={heroImg}
                  alt="Student"
                  className="relative w-[420px] object-contain z-10"
                />

              </div>

            </div>

          </div>

        </div>

      </section>      {/* ================= STATISTICS ================= */}

      <section className="-mt-12 relative z-20 px-5 lg:px-10">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition duration-300">

              <h2 className="text-4xl font-bold text-[#12335c]">
                10K+
              </h2>

              <p className="text-gray-500 mt-2">
                Active Students
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition duration-300">

              <h2 className="text-4xl font-bold text-[#12335c]">
                500+
              </h2>

              <p className="text-gray-500 mt-2">
                Interview Questions
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition duration-300">

              <h2 className="text-4xl font-bold text-[#12335c]">
                50+
              </h2>

              <p className="text-gray-500 mt-2">
                Technologies
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition duration-300">

              <h2 className="text-4xl font-bold text-[#12335c]">
                95%
              </h2>

              <p className="text-gray-500 mt-2">
                Success Rate
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-5 lg:px-10">

          <div className="text-center">

            <span className="text-cyan-600 font-semibold uppercase tracking-widest">
              Our Services
            </span>

            <h2 className="text-4xl font-bold text-gray-800 mt-4">
              Everything You Need
            </h2>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Start preparing with company interview questions,
              coding practice, aptitude tests and HR interview
              preparation.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {/* Card 1 */}

            <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl hover:-translate-y-3 transition duration-300">

              <div className="w-20 h-20 rounded-2xl bg-cyan-100 flex items-center justify-center">

                <FaReact className="text-cyan-500 text-5xl" />

              </div>

              <h3 className="text-2xl font-bold mt-8">
                React Interview
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                Practice React interview questions from beginner
                to advanced level with detailed answers.
              </p>

              <button className="mt-8 text-cyan-600 font-semibold">
                Learn More →
              </button>

            </div>

            {/* Card 2 */}

            <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl hover:-translate-y-3 transition duration-300">

              <div className="w-20 h-20 rounded-2xl bg-yellow-100 flex items-center justify-center">

                <FaJsSquare className="text-yellow-500 text-5xl" />

              </div>

              <h3 className="text-2xl font-bold mt-8">
                JavaScript
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                Learn JavaScript concepts, coding problems and
                frequently asked interview questions.
              </p>

              <button className="mt-8 text-cyan-600 font-semibold">
                Learn More →
              </button>

            </div>

            {/* Card 3 */}

            <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl hover:-translate-y-3 transition duration-300">

              <div className="w-20 h-20 rounded-2xl bg-green-100 flex items-center justify-center">

                <FaPython className="text-green-600 text-5xl" />

              </div>

              <h3 className="text-2xl font-bold mt-8">
                Python Practice
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                Prepare Python interview questions, coding tests
                and real-world programming concepts.
              </p>

              <button className="mt-8 text-cyan-600 font-semibold">
                Learn More →
              </button>

            </div>

          </div>

        </div>

      </section>      {/* ================= WHY CHOOSE US ================= */}

      <section className="py-24 bg-[#f8fafc]">

        <div className="max-w-7xl mx-auto px-5 lg:px-10">

          <div className="text-center">

            <span className="text-cyan-600 font-semibold uppercase tracking-widest">
              Why CareerPrep Hub
            </span>

            <h2 className="text-4xl font-bold text-gray-800 mt-4">
              Your Complete Interview Preparation Platform
            </h2>

            <p className="text-gray-500 mt-5 max-w-3xl mx-auto">
              Learn technical concepts, solve coding problems,
              prepare for HR interviews and build confidence
              before your placement interviews.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">

              <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600 text-3xl">
                💻
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Technical Questions
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                Company-wise interview questions with detailed
                explanations.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">

              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl">
                📚
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Coding Practice
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                Improve your coding skills with practice questions
                and real interview problems.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">

              <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-3xl">
                🎯
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Placement Ready
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                Prepare aptitude, HR interview and resume
                for campus placements.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CALL TO ACTION ================= */}

      

      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
}

export default Home;
