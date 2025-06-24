import { NavLink } from "react-router";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";

export function Header() {
  return (
    <header className="container mx-auto max-w-6xl">
      <nav className="flex items-center justify-between py-4">
        <div className="flex items-center gap-x-2">
          <img src="/logo.png" alt="vendoor" className="h-4 w-auto" />
          <NavLink to="/" className="text-xl font-bold text-gray-900" end>
            vendoor
          </NavLink>
        </div>

        <ul className="flex items-center gap-x-10">
          <li>
            <a
              href="#features"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              FEATURES
            </a>
          </li>
          <li>
            <a
              href="#faqs"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              FAQS
            </a>
          </li>

          <li>
            <NavLink
              to="/roadmap"
              end
              className="flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              <span>ROADMAP</span>
              <LuArrowUpRight />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/demo"
              end
              className="flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              <span>DEMO</span>
              <LuArrowUpRight />
            </NavLink>
          </li>
        </ul>

        <div>
          <NavLink
            to="/signup"
            className="flex items-center gap-x-2 text-sm font-medium px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
          >
            <span>SIGN UP</span>
            <LuArrowRight />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
