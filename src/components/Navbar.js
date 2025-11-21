import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold">FST Settat</span>
            </Link>
          </div>

          {/* List Section */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
          </div>


          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 p-4 space-y-2">
          <Link to="/" className="block text-white">Home</Link>
          <Link to="/about" className="block text-white">About</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
