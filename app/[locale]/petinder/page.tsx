"use client";

import { BreadcrumbPetinder } from "@/components/breadcrumb-petinder";
import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Petinder() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <main>
        <div className="flex flex-col mt-4">
          <div className="containerContent flex flex-col">
            <BreadcrumbPetinder />
            <div className="flex items-center gap-3">
              <h1>Petinder</h1>
            </div>
            <div className="relative">
              {isLoading && (
                <Skeleton className="w-full h-[900px] bg-gray-200" />
              )}
              <Image
                src={"/petinder-image.png"}
                width={1400}
                height={900}
                alt="Imagem projeto Petinder"
                onLoadingComplete={() => setIsLoading(false)}
                className={`transition-opacity duration-500 ${
                  isLoading ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
