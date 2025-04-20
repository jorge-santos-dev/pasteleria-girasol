import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SocialMedia from "./SocialMedia/SocialMedia";
import NavElements from "./NavElements";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <>
            <nav className="flex justify-between items-center py-4 ml-15 mr-15">
                {/* Logo */}
                <Logo />
                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-10">
                    <NavElements />
                </div>
                <SocialMedia />

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-gray-700 focus:outline-none mr-16"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </nav>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white py-4 px-4 shadow-inner">
                    <div className="flex flex-col space-y-4">
                        <Link 
                            to="/" 
                            className="font-poppins text-gray-700 hover:text-primary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Inicio
                        </Link>
                        <Link 
                            to="/pasteles" 
                            className="font-poppins text-gray-700 hover:text-primary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Pasteles
                        </Link>
                        <Link 
                            to="/postres" 
                            className="font-poppins text-gray-700 hover:text-primary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Postres
                        </Link>
                        <Link 
                            to="/conocenos" 
                            className="font-poppins text-gray-700 hover:text-primary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Conócenos
                        </Link>
                        <Link 
                            to="/contactanos" 
                            className="font-poppins text-gray-700 hover:text-primary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contáctanos
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}