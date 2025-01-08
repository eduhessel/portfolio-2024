import AboutContent from "@/components/about-content";
import AsideMenu from "@/components/aside-menu";
import HomeContent from "@/components/home-content";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <div className="containerContent">
          {/* <AsideMenu/> */}
          <AboutContent />
        </div>
      </div>
    </main>
  );
}
