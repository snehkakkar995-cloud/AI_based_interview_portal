import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex justify-between items-center">

        <Link to="/" className="text-3xl font-bold text-blue-700">
          CareerPrep Hub
        </Link>

        <nav className="flex items-center gap-8">
          <Link to="/" className="text-slate-700 hover:text-blue-700 font-medium">
            Home
          </Link>

          <Link to="/about" className="text-slate-700 hover:text-blue-700 font-medium">
            About
          </Link>

          <Link to="/contact" className="text-slate-700 hover:text-blue-700 font-medium">
            Contact
          </Link>

          <Link
            to="/login"
            className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 duration-300 font-medium shadow-md"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;