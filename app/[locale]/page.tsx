import AsideMenu from "@/components/aside-menu";
import HomeContent from "@/components/home-content";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <div className="containerContent">
          <AsideMenu/>
          <HomeContent/>
        </div>
      </div>
    </main>
  );
}
