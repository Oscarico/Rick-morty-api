import { useState } from "react";
import Logo from "../../assets/Rick_and_Morty_logo.png"
import { ToggleThemeBtn } from "../ui/buttons/ToggleThemeBtn";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ToggleTranslation } from "../ui/toggles/ToggleTranslation";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const {t} = useTranslation();

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-bold text-blue-600 dark:text-white"
        >
          <img src={Logo} className="h-8" />
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 dark:text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Links */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink
            to="/"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            {t("menu_characters")}
          </NavLink>
          <NavLink
            to="/episodes"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            {t("menu_episodes")}
          </NavLink>
          <NavLink
            to="/locations"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            {t("menu_locations")}
          </NavLink>
          <ToggleThemeBtn />
          <ToggleTranslation />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 flex flex-col items-start gap-3 px-2 pb-4">
          <NavLink
            to="/"
            className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            {t("menu_characters")}
          </NavLink>
          <NavLink
            to="/episodes"
            className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            {t("menu_episodes")}
          </NavLink>
          <NavLink
            to="/locations"
            className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            {t("menu_locations")}
          </NavLink>
          <ToggleThemeBtn />
        </div>
      )}
    </nav>
  );
};
