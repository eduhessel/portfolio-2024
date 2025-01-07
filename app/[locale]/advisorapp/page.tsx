"use client";

import Image from "next/image";
import { useState } from "react";
import { BreadcrumbAdvisorApp } from "@/components/breadcrumb-advisorapp";
import { Skeleton } from "@/components/ui/skeleton";
import withAuthProtection from "@/components/hoc/withAuthProtection"; // Importe o HOC

function AdvisorApp() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <main>
        <div className="flex flex-col mt-4">
          <div className="containerContent flex flex-col">
            <BreadcrumbAdvisorApp />
            <div className="flex items-center gap-3">
              <h1>Advisor App</h1>
            </div>
            <div className="relative">
              {isLoading && (
                <Skeleton className="w-full h-[900px] bg-gray-200" />
              )}
              <Image
                src={"/advisor-app-project.png"}
                width={1400}
                height={900}
                alt="Imagem projeto Advisor App"
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

// Aplica o HOC para garantir que a página seja protegida
export default withAuthProtection(AdvisorApp);
