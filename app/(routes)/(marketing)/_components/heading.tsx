import { ButtonRotatingGradient } from "@/components/animated-ui/button-rotating-gradient";
import { TypewriterEffect } from "@/components/animated-ui/typewriter-effect";
export const Heading = () => {
    return (
        <div className="h-full w-full flex items-center justify-center antialised pt-48">
            <div className="flex flex-col items-center p-4 max-w-6xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                <TypewriterEffect words={words} />

                <p className="text-base md:text-lg mt-4 mb-4 font-medium text-center">
                    Discover your perfect home effortlessly. Sell with Ease.<br />
                    Homesik redefines your property journey.
                </p>
                <ButtonRotatingGradient route="create-profile" label="Start Moving" />
            </div>
        </div>
    )
}

const words = [
    {
        text: "Navigate",
      },
      {
        text: "Life",
      },
      {
        text: "Effortlessly",
      },
      {
        text: "with",
      },
      {
        text: "Homesik.",
        className: "text-primary-color",
      },
]


