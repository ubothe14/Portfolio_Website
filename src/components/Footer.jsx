import { ArrowUp, Github, Linkedin, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // install react-icons if not already

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-10 px-6 relative">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Section - Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-primary">Utkarsh Bothe</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Crafting clean and user-friendly web experiences ✨
          </p>
        </div>

        {/* Center Section - Social Links */}
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/utkarshbothe/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/ubothe14"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://instagram.com/your-instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>

        {/* Right Section - Back to Top */}
        <a
          href="#hero"
          className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="text-center mt-6 border-t border-border pt-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} UtkarshBothe.com — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
