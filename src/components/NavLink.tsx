import { NavLink } from "react-router-dom";

interface NavElementProps {
  name: string;
  route: string;
}

export default function NavElement({ name, route }: NavElementProps) {
  return (
    <NavLink
      // Corrected the className logic
      className={({ isActive }) =>
        `uppercase p-5 transition-all duration-200 ease-in-out ${ // Common styles moved outside
          isActive
            ? "font-bold text-secondary border-b-4 border-secondary hover:text-secondary hover:border-secondary" // Corrected active styles
            : "font-semibold text-gray-700 hover:text-secondary hover:bg-primary/10 rounded-md" // Adjusted inactive styles
        }`
      }
      to={route}
    >
      {/* Changed label to span for better semantics */}
      <span>{name}</span>
    </NavLink>
  );
}
