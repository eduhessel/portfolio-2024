import { BreadcrumbPetinder } from "@/components/breadcrumb-petinder";
import Image from "next/image";

export default function Petinder() {
  return (
    <>
      <main>
        <div className="flex flex-col mt-4">
          <div className="containerContent flex flex-col">
            <BreadcrumbPetinder />
            <div className="flex items-center gap-3">
              <h1>Petinder</h1>
            </div>
            <Image
              src={"/petinder-image.png"}
              width={1400}
              height={9000}
              alt="Imagem projeto Petinder"
            />
          </div>
        </div>
      </main>
    </>
  );
}
