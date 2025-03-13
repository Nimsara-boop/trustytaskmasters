
import { Menu, X, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            DamnItFixIt
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <div className="flex items-center space-x-4">
              <Link to="/profile">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Link>
              <Link to="/request">
                <Button className="px-4 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors">
                  Request Service
                </Button>
              </Link>
            </div>
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
            <div className="flex items-center justify-between pt-4 border-t">
              <Link to="/profile" className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span>Profile</span>
              </Link>
              <Link to="/request">
                <Button className="px-4 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors">
                  Request Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ mobile }: { mobile?: boolean }) => {
  const links = [
    { name: "Services", href: "/services" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className={mobile ? "space-y-4" : "flex space-x-8"}>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.href}
          className="text-slate-600 hover:text-primary transition-colors block"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
