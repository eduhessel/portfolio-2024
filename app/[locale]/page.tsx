import AsideMenu from "@/components/aside-menu";
import HomeContent from "@/components/home-content";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <div className="containerContent">
          {/* <AsideMenu/> */}
          <HomeContent />
          <div className="">
            <Image
              className="shadow-md"
              width={700}
              height={700}
              src={"/image-duwdu-profile.png"}
              alt="Imagem Eduardo Hessel"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
