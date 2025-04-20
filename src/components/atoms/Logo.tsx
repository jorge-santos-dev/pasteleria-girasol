import { NavLink } from "react-router-dom";
import logoGirasol from "../../assets/girasol-logo-2.png"

export default function Logo() {
  return (
    <NavLink to="/">
      <img className="ml-16 w-auto h-[80px] object-contain" src={logoGirasol} alt="logo" />
    </NavLink>
  );
}
