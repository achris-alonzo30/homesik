"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ShuffleGrid } from "@/components/animated-ui/shuffle-grid";


export const ShuffleHero = () => {
  const router = useRouter();
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto pt-48">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-primary-color font-medium">
          Effortless Property Journeys
        </span>
        <h3 className="text-4xl md:text-6xl font-bold">
          Your Dream Home Is Waiting
        </h3>
        <p className="text-base md:text-lg text-muted-foreground my-4 md:my-6">
          <strong className="text-primary-color">Homesik</strong>, where buying, selling, or renting is an effortless journey.
          Discover, match, and move seamlessly.
        </p>
        <button
          className="bg-primary-color text-light-color font-medium py-3 px-5 rounded-full transition-all hover:bg-primary-color/90 active:scale-95"
          onClick={() => router.push("/create-account")}
        >
          Start Exploring
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

