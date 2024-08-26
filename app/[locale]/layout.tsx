import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import TopMenu from "@/components/menu-top";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const robotoMono = Roboto_Mono ({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eduardo Hessel's Portfolio",
  description: "Veja meu portfólio de UI/UX Design e Product Design",
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={robotoMono.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TopMenu/>
            {children}
            <div className="flex flex-col items-center text-center justify-center gap-4 p-8">
              <p>Site desenvolvido utilizando Nextjs 14, Tailwind, ShadcnUI e Figma.</p>
              <p>Todos os direitos reservados. © 2024 Eduardo Hessel</p>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
