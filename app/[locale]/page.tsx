import AsideMenu from "@/components/aside-menu";
import HomeContent from "@/components/home-content";
import ImageHomeContent from "@/components/image-home-content";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <div className="containerContent">
          {/* <AsideMenu/> */}
          <HomeContent />
          <div className="">
            <ImageHomeContent />
          </div>
        </div>
      </div>
    </main>
  );
}
