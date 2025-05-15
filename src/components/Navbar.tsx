
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b bg-white sticky top-0 z-10">
      <div className="analytics-container py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-analytics-blue hover:text-analytics-lightBlue transition-colors">
          DataInsight
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="text-gray-600 hover:text-analytics-blue transition-colors">
            Projects
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-analytics-blue transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-analytics-blue transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
