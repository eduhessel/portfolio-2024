"use client";

import { ModeToggle } from "@/components/ModeToggle";
import styles from "@/styles/top-menu.module.css";
import { DuwduAvatar } from "./duwdu-avatar";
import { LanguageToggle } from "./language-toggle";
import { MenuHamburguer } from "./menu-hamburguer";
import { Button } from "./ui/button";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { HomeIcon } from "lucide-react";

export default function TopMenu() {
  const locale = useLocale();
  const t = useTranslations("MenuTop");

  return (
    <motion.div
      className={styles.menuContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.menuContent}>
        <div className="flex gap-4 items-center">
          {/* <DuwduAvatar /> */}
          {/* <MenuHamburguer /> */}
          <Link href={"/"}>
            <Button variant={"ghost"} className="flex gap-2">
              🏠 {t("home")}
            </Button>
          </Link>
          <Link href={`/${locale}/sobre`}>
            <Button variant={"ghost"}>👨🏻‍💻 {t("about")}</Button>
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
    </motion.div>
  );
}
