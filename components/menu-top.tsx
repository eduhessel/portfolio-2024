import { ModeToggle } from "@/components/ModeToggle";
import styles from "@/styles/top-menu.module.css";
import { DuwduAvatar } from "./duwdu-avatar";
import { LanguageToggle } from "./language-toggle";
import { MenuHamburguer } from "./menu-hamburguer";

export default function TopMenu(){
    return(
        <div className={styles.menuContainer}>
            <div className={styles.menuContent}>
                <div className="flex items-center">
                    <MenuHamburguer/>
                    <DuwduAvatar/>
                </div>
                <div className="flex gap-4">
                    <LanguageToggle/>
                    {/* <ModeToggle/> */}
                </div>
            </div>
        </div>
    )
}