
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-2xl font-bold text-primary">
            FindAFixer
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <button className="px-4 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors">
              Sign Up
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg animate-fadeIn">
          <div className="px-4 py-4 space-y-4">
            <NavLinks mobile />
            <button className="w-full px-4 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ mobile }: { mobile?: boolean }) => {
  const links = [
    { name: "Services", href: "#services" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className={mobile ? "space-y-4" : "flex space-x-8"}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-slate-600 hover:text-primary transition-colors block"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
