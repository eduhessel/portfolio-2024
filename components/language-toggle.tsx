"use client"

import * as React from "react"
import { Languages } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link, usePathname, useRouter } from '@/navigation';

export function LanguageToggle() {
    const pathname = usePathname();

    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
            <Languages className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Languages className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle language</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem>
                <Link href={pathname} locale="pt-BR" className="w-full">
                    Português BR
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Link href={pathname} locale="en" className="w-full">
                    English
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Link href={pathname} locale="es" className="w-full">
                    Español
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Link href={pathname} locale="fr" className="w-full">
                    Français
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Link href={pathname} locale="ja" className="w-full">
                    日本語
                </Link>
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    )
}