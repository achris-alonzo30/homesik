"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/animated-ui/3d-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function RoleFeatures() {
  return (
    <>
      {roles.map((role) => (

        <CardContainer key={role.id} className="px-2">
          <CardBody className="bg-light-color group/card shadow-lg shadow-primary-color/[0.1] dark:hover:shadow-2xl dark:hover:shadow-primary-color/[0.1] dark:bg-dark-color dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[28rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-stone-600 dark:text-white capitalize"
            >
              {role.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-stone-500 text-sm max-w-sm mt-2 dark:text-stone-300 text-justify tracking-tight"
            >
              {role.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={role.img}
                height="500"
                width="500"
                className="h-60 w-full object-contain rounded-xl aspect-square group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-5 py-3 rounded-xl text-sm font-normal dark:text-white"
              >
                <Link href="/create-account" className="flex items-center gap-x-2">
                  Try Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-5 py-3 rounded-full bg-primary-color text-light-color text-sm font-bold"
              >
                <Link href="/create-account">
                  Sign up
                </Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}


    </>
  );
}

const roles = [
  {
    id: '1',
    title: "Buyer",
    img: "/buyers.png",
    description: (<> Discover your dream home effortlessly with <strong className="text-primary-color">Homesik&apos;s</strong> <strong>cutting-edge vector database</strong>. Our smart recommendations analyze your preferences, ensuring you find the perfect property that truly feels like home. </>)

  },
  {
    id: '2',
    title: "Seller",
    img: "/sellers.png",
    description: <> Maximize your property&apos;s visibility with <strong className="text-primary-color">Homesik&apos;s</strong> <strong>vector database</strong>. We match your listing with the most compatible buyers and renters, enhancing your chances of a quick and lucrative deal. Experience seamless selling like never before.</>

  },
  {
    id: '3',
    title: "Renter",
    img: "/renters.png",
    description: <> Find your ideal rental space effortlessly through <strong className="text-primary-color">Homesik&apos;s</strong> <strong>advanced vector database</strong>. Tailored recommendations ensure you discover spaces that match your lifestyle, making the renting process smooth and stress-free.</>
  }
]
