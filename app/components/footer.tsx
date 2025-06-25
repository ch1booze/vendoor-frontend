import {
  AiFillLinkedin,
  AiFillRedditCircle,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { FaCopyright } from "react-icons/fa";
import { NavLink } from "react-router";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 mt-16">
      <div className="container mx-auto px-6 py-12 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-x-2">
            <img src="/logo.png" alt="vendoor" className="h-6 w-auto" />
            <NavLink to="/" className="text-2xl font-bold text-gray-900" end>
              vendoor
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col items-start gap-y-8 border-t border-gray-900/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-x-8 text-sm font-medium leading-6 text-gray-700">
            <NavLink to="/features" className="hover:text-gray-900">
              FEATURES
            </NavLink>
            <NavLink to="/faqs" className="hover:text-gray-900">
              FAQS
            </NavLink>
            <NavLink to="/roadmap" className="hover:text-gray-900">
              ROADMAP
            </NavLink>
            <NavLink to="/demo" className="hover:text-gray-900">
              DEMO
            </NavLink>
          </div>

          <div className="flex gap-x-6">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillRedditCircle />
            <AiFillYoutube />
          </div>

          <div className="flex items-center gap-x-1 text-sm text-gray-500">
            <FaCopyright className="h-4 w-4" />
            <p>{currentYear} Vendoor. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
