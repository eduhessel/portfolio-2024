import { BreadcrumbUnauthorized } from "@/components/breadcrumb-unauthorized";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Unauthorized() {
  const t = useTranslations("HomePage.Unauthorized");

  return (
    <main>
      <div className="flex flex-col mt-4">
        <div className="containerContent flex flex-col">
          <BreadcrumbUnauthorized />
          <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
            <h1>{t("title")}</h1>
            <p>{t("description")}</p>
            <Link href={"/"}>
              <Button>{t("button")}</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
