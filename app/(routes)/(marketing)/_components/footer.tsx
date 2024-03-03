import Link from "next/link";
import { getYear } from "@/lib/get-current-year";

import {
  GitHubLogoIcon,
  LinkedInLogoIcon
} from "@radix-ui/react-icons";

import { Logo } from "@/components/logo";
import { Skeleton } from "@/components/ui/skeleton";

export const Footer = () => {
  const year = getYear();
  return (
    <footer className="border-t mt-auto bg-light-color dark:bg-dark-color">
      <div className="flex items-center justify-evenly h-10 mx-auto">
        <Logo />
        <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-300">
          © {year} - Design by{" "}
          <strong className="text-xs sm:text-sm  font-extrabold text-primary-color">
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

Footer.Skeleton = function FooterSkeleton() {
  return (
    <footer className="border-t mt-auto bg-light-color dark:bg-dark-color">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <Skeleton className="h-8 w-8 rounded-full bg-stone-300 dark:bg-stone-500" />
        <Skeleton className="h-8 w-32 rounded-md bg-stone-300 dark:bg-stone-500" />
        <div className="flex items-center gap-x-2">
          <Skeleton className="h-4 w-4 rounded-full bg-stone-300 dark:bg-stone-500"/>
          <Skeleton className="h-4 w-4 rounded-full bg-stone-300 dark:bg-stone-500"/>
        </div>
      </div>
    </footer>
  )
}