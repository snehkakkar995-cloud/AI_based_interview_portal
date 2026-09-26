import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

function About() {

  const features = [
    {
      title: "Technical Preparation",
      description:
        "Practice React, JavaScript, .NET, SQL, C#, Node JS and other important technologies with well-structured interview questions.",
      icon: "💻"
    },
    {
      title: "Real Interview Questions",
      description:
        "Learn from commonly asked technical and HR interview questions to improve your confidence.",
      icon: "🎯"
    },
    {
      title: "Career Growth",
      description:
        "Build your skills, improve problem-solving ability and prepare yourself for professional opportunities.",
      icon: "🚀"
    }
  ];


  return (

    <div className="min-h-screen bg-slate-50">


      <Header />


      {/* Hero Section */}

      <section className="
      bg-gradient-to-br 
      from-slate-900 
      via-blue-900 
      to-indigo-900
      py-20
      px-6
      ">


        <div className="
        max-w-5xl
        mx-auto
        text-center
        ">


          <h1 className="
          text-5xl
          font-extrabold
          text-white
          ">

            About 
            <span className="text-blue-400">
              {" "}Interview Hub
            </span>

          </h1>


          <p className="
          mt-6
          text-lg
          text-gray-300
          max-w-3xl
          mx-auto
          ">

            A professional platform designed to help students and developers
            prepare for technical interviews with confidence.

          </p>


        </div>


      </section>





      {/* About Content */}


      <section className="
      py-16
      px-6
      ">


        <div className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-2
        gap-10
        items-center
        ">


          <div>


            <h2 className="
            text-4xl
            font-bold
            text-gray-800
            mb-5
            ">

              Who We Are?

            </h2>


            <p className="
            text-gray-600
            leading-7
            ">

              Interview Hub is an interview preparation platform that helps
              students and professionals improve their technical knowledge.
              We provide organized interview questions, coding concepts,
              technology-based preparation and HR interview guidance.

            </p>


            <p className="
            text-gray-600
            leading-7
            mt-4
            ">

              Our goal is to make interview preparation simple, structured
              and effective so that every candidate can confidently face
              real-world interviews.

            </p>


          </div>




          <div className="
          bg-white
          rounded-2xl
          shadow-xl
          p-8
          ">


            <h3 className="
            text-2xl
            font-bold
            text-blue-600
            mb-4
            ">
              Why Choose Us?
            </h3>


            <ul className="
            space-y-4
            text-gray-700
            ">


              <li>
                ✔ Technology-wise interview preparation
              </li>


              <li>
                ✔ Beginner-friendly explanations
              </li>


              <li>
                ✔ Real company interview patterns
              </li>


              <li>
                ✔ Continuous learning approach
              </li>
           </ul>
          </div>
             </div>
        </section>
{/* Mission Vision */}
<section className="
      bg-white
      py-16
      px-6
      ">
<div className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-2
        gap-8
        ">
<div className="
          p-8
          rounded-2xl
          bg-blue-50
          border
          border-blue-100
          ">
 <h3 className="
            text-2xl
            font-bold
            text-blue-700
            mb-3
            ">
              Our Mission
            </h3>
          <p className="text-gray-600">

              To provide high-quality interview preparation resources
              that help learners develop skills and achieve career success.

            </p>
             </div>
          <div className="
          p-8
          rounded-2xl
          bg-indigo-50
          border
          border-indigo-100
          ">
           <h3 className="
            text-2xl
            font-bold
            text-indigo-700
            mb-3
            ">
              Our Vision
            </h3>
            <p className="text-gray-600">

              To become a trusted learning platform where every candidate
              can prepare confidently for technical interviews.

            </p>
            </div>
             </div>
             </section> 
             {/* Features */}
             <section className="
      py-16
      px-6
      ">
         <div className="
        max-w-6xl
        mx-auto
        ">
           <h2 className="
          text-center
          text-4xl
          font-bold
          text-gray-800
          mb-10
          ">
            What We Provide

          </h2>
               <div className="
          grid
          md:grid-cols-3
          gap-8
          ">
            {
            features.map((item,index)=>(

              <div
              key={index}
              className="
              bg-white
              rounded-2xl
              shadow-md
              hover:shadow-xl
              transition
              p-7
              text-center
              "
              >
                 <div className="
                text-4xl
                mb-4
                ">
                  {item.icon}
                </div> 
                <h3 className="
                text-xl
                font-bold
                text-gray-800
                ">
                  {item.title}
                </h3>


                <p className="
                text-gray-600
                mt-3
                ">
                  {item.description}
                </p> 
                </div>


            ))
          }
           </div>
                 </div>
            </section>
        <Footer />
            </div>
 );
}

export default About;