import Image from "next/image";
import Link from "next/link";
import { ArrowLeftCircle } from "lucide-react";
import { BreadcrumbAdvisorApp } from "@/components/breadcrumb-advisorapp";

export default function AdvisorApp() {
  return (
    <>
      <main>
        <div className="flex flex-col mt-4">
          <div className="containerContent flex flex-col">
            <BreadcrumbAdvisorApp />
            <div className="flex items-center gap-3">
              <h1>Advisor App</h1>
            </div>
            <Image
              src={"/advisorapp.png"}
              width={1400}
              height={9000}
              alt="Imagem projeto Advisor App"
            />
          </div>
        </div>
      </main>
    </>
  );
}
