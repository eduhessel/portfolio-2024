"use client"

import * as React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link } from "@/navigation";
import { useTranslations } from 'next-intl';
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export function MenuHamburguer() {
    const t = useTranslations('HamburguerMenu');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Menu className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem>
            <Link href={"/"} className="w-full h-full">
                {t("home")}
            </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <Link href={"/sobre"} className="w-full h-full">
                {t("about")}
            </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <Link href={""} className="w-full h-full">
                {t("6")}
            </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <Link href={""} className="w-full h-full">
                {t("5")}
            </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <Link href={"https://www.behance.net/gallery/201725767/SINV-Bradesco"} className="w-full h-full" target="_blank" rel="noopener noreferrer">
                {t("4")}
            </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <Link href={"https://www.behance.net/gallery/199591237/Petinder-UIUX-Design-Case-Study"} className="w-full h-full" target="_blank" rel="noopener noreferrer">
                {t("3")}
            </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <Link href={"https://www.behance.net/gallery/176413143/Advisor-App-v20"} className="w-full h-full" target="_blank" rel="noopener noreferrer">
                {t("2")}
            </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <Link href={"https://www.behance.net/gallery/118707067/ALLBOOKS-APP-UI-DESIGN"} className="w-full h-full" target="_blank" rel="noopener noreferrer">
                {t("1")}
            </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <Link href={"https://www.linkedin.com/in/eduardo-hessel"} className="w-full h-full flex gap-2 items-center" target="_blank" rel="noopener noreferrer">
              <LinkedInLogoIcon/>
              {t("linkedin")}
            </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <Link href={"https://github.com/eduhessel"} className="w-full h-full flex gap-2 items-center" target="_blank" rel="noopener noreferrer">
              <GitHubLogoIcon/>
              {t("github")}
            </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <Link href={"mailto:deveduardohessel@gmail.com"} className="w-full h-full flex gap-2 items-center" target="_blank" rel="noopener noreferrer">
              <EnvelopeClosedIcon/>
              {t("e-mail")}
            </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
