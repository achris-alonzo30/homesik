import Link from "next/link";

import {
  GitHubLogoIcon,
  LinkedInLogoIcon
} from "@radix-ui/react-icons";

import { Logo } from "@/components/logo";
import { getYear } from "@/lib/get-current-year";

export const Footer = () => {
  const year = getYear();
  return (
    <footer className="border-t mt-auto">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <Logo />
        <p className=" text-base text-stone-500 dark:text-stone-300">
          © {year} - Design by{" "}
          <strong className="text-base font-extrabold text-primary-color">
            Lonzo Chris
          </strong>
        </p>
        <div className="flex ">
          <Link
            href="https://www.linkedin.com/in/lonzochris/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-stone-600 transition-colors duration-300 dark:text-stone-300 hover:text-primary-color/70 dark:hover:text-primary-color/60"
          >
            <LinkedInLogoIcon className="w-5 h-5" />
          </Link>
          <Link
            href="https://github.com/achris-alonzo30?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-stone-600 transition-colors duration-300 dark:text-stone-300 hover:text-primary-color/70 dark:hover:text-primary-color/60"
          >
            <GitHubLogoIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};