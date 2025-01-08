import { ModeToggle } from "@/components/ModeToggle";
import styles from "@/styles/top-menu.module.css";
import { DuwduAvatar } from "./duwdu-avatar";
import { LanguageToggle } from "./language-toggle";
import { MenuHamburguer } from "./menu-hamburguer";
import { Button } from "./ui/button";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

export default function TopMenu() {
  const locale = useLocale();
  const t = useTranslations("MenuTop");

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuContent}>
        <div className="flex gap-4 items-center">
          {/* <DuwduAvatar /> */}
          {/* <MenuHamburguer /> */}
          <Link href={"/"}>
            <Button variant={"ghost"}>{t("home")}</Button>
          </Link>
          <Link href={`/${locale}/sobre`}>
            <Button variant={"ghost"}>{t("about")}</Button>
          </Link>
          {/* <Link href={`/${locale}/recomendacoes`}>
            <Button variant={"ghost"}>{t("recomendations")}</Button>
          </Link> */}
        </div>
        <div className="flex gap-4">
          <LanguageToggle />
          {/* <ModeToggle/> */}
        </div>
      </div>
    </div>
  );
}
