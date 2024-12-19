"use client";

import Image from "next/image";
import { useState } from "react";
import { BreadcrumbSinv } from "@/components/breadcrumb-sinv";
import { Skeleton } from "@/components/ui/skeleton";

export default function Sinv() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <main>
        <div className="flex flex-col mt-4">
          <div className="containerContent flex flex-col">
            <BreadcrumbSinv />
            <div className="flex items-center gap-3">
              <h1>Sinv - Bradesco</h1>
            </div>
            <div className="relative">
              {isLoading && (
                <Skeleton className="w-full h-[900px] bg-gray-200" />
              )}
              <Image
                src={"/sinv.png"}
                width={1400}
                height={900}
                alt="Imagem projeto Sinv"
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
