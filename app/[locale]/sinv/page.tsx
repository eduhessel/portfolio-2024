import Image from "next/image";
import Link from "next/link";
import { ArrowLeftCircle } from "lucide-react";
import { BreadcrumbSinv } from "@/components/breadcrumb-sinv";

export default function Sinv() {
  return (
    <>
      <main>
        <div className="flex flex-col mt-4">
          <div className="containerContent flex flex-col">
            <BreadcrumbSinv />
            <div className="flex items-center gap-3">
              <Link href={"/"}>
                <ArrowLeftCircle className="h-6 w-6" />
              </Link>
              <h1>Sinv - Bradesco</h1>
            </div>
            <Image
              src={"/sinv.png"}
              width={1400}
              height={9000}
              alt="Imagem projeto Sinv"
            />
          </div>
        </div>
      </main>
    </>
  );
}
