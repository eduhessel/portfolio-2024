"use client";

import Image from "next/image";
import { useState } from "react";
import { BreadcrumbAdvisorApp } from "@/components/breadcrumb-advisorapp";
import { Skeleton } from "@/components/ui/skeleton";
import withAuthProtection from "@/components/hoc/withAuthProtection"; // Importe o HOC
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

function AdvisorApp() {
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations("HomePage");

  return (
    <>
      <main>
        <div className="flex flex-col mt-4">
          <div className="containerContent flex flex-col">
            <BreadcrumbAdvisorApp />
            <div className="flex items-center gap-3">
              <h1>Advisor App</h1>
            </div>
            <div className="w-4">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={
                  "https://www.figma.com/proto/Gj5mBgjb2NG0Gn22CCXMjB/Advisor-app?page-id=2%3A7094&node-id=2-11877&viewport=7795%2C11178%2C1.04&t=v20ioqQbSP7U34qF-8&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A11877&disable-default-keyboard-nav=1&hide-ui=1"
                }
              >
                <Button>{t("acessPrototype")}</Button>
              </Link>
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
