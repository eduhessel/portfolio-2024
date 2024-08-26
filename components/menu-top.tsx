import { ModeToggle } from "@/components/ModeToggle";
import styles from "@/styles/top-menu.module.css";
import { DuwduAvatar } from "./duwdu-avatar";

export default function TopMenu(){
    return(
        <div className={styles.menuContainer}>
            <div className={styles.menuContent}>
                <DuwduAvatar/>
                <ModeToggle/>
            </div>
        </div>
    )
}