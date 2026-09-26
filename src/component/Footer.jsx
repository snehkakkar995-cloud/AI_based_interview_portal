

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">

      <div className="max-w-7xl mx-auto px-8 py-10">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Interview Portal
            </h2>

            <p className="text-gray-300">
              Prepare for technical interviews with React, JavaScript,
              .NET, SQL and HR questions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">
              Quick Links
            </h2>

            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
            <p>Login</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">
              Contact
            </h2>

            <p>Email : support@interviewportal.com</p>
            <p>Phone : +91 9876543210</p>
          </div>

        </div>

        <hr className="my-8" />

        <p className="text-center text-gray-400">
          pfo
        </p>

      </div>
    </footer>
  );
}

export default Footer;