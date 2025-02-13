import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import TopMenu from "@/components/menu-top";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/context/authContext";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eduardo Hessel's Portfolio",
  description: "Veja meu portfólio de UI/UX Design e Product Design",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={robotoMono.className}>
        <NextIntlClientProvider messages={messages}>
          <AuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <TopMenu />
              {children}
              <SpeedInsights />
              <Analytics />
              <Footer />
            </ThemeProvider>
            <Toaster />
          </AuthProvider>{" "}
          {/* Fechamento correto do AuthProvider */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
