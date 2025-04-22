import Logo from "../atoms/Logo";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SocialMedia from "./SocialMedia/SocialMedia";
import NavElements from "./NavElements";
import { NavLink } from "react-router-dom";

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
                    <div className="flex flex-col space-y-4 items-center">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                isActive 
                                    ? "font-poppins font-bold text-primary transition-colors" 
                                    : "font-poppins text-gray-700 hover:text-purple-700 transition-colors"
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Inicio
                        </NavLink>
                        <NavLink 
                            to="/pasteles" 
                            className={({ isActive }) => 
                                isActive 
                                    ? "font-poppins font-bold text-primary transition-colors" 
                                    : "font-poppins text-gray-700 hover:text-purple-700 transition-colors"
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Pasteles
                        </NavLink>
                        <NavLink 
                            to="/postres" 
                            className={({ isActive }) => 
                                isActive 
                                    ? "font-poppins font-bold text-primary transition-colors" 
                                    : "font-poppins text-gray-700 hover:text-purple-700 transition-colors"
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Postres
                        </NavLink>
                        <NavLink 
                            to="/conocenos" 
                            className={({ isActive }) => 
                                isActive 
                                    ? "font-poppins font-bold text-primary transition-colors" 
                                    : "font-poppins text-gray-700 hover:text-purple-700 transition-colors"
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Conócenos
                        </NavLink>
                        <NavLink 
                            to="/contactanos" 
                            className={({ isActive }) => 
                                isActive 
                                    ? "font-poppins font-bold text-primary transition-colors" 
                                    : "font-poppins text-gray-700 hover:text-purple-700 transition-colors"
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contáctanos
                        </NavLink>
                    </div>
                </div>
            )}
        </>
    );
}