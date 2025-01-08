import { BreadcrumbUnauthorized } from "@/components/breadcrumb-unauthorized";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export default function Unauthorized() {
  const t = useTranslations("HomePage.Unauthorized");

  return (
    <main>
      <div className="flex flex-col mt-4">
        <div className="containerContent flex flex-col">
          <BreadcrumbUnauthorized />
          <div className="flex flex-col gap-4 items-center min-h-screen">
            <Image
              src={"/face-unauthorized.png"}
              alt="Imagem de rosto triste com o erro"
              width={400}
              height={400}
            />
            <h1>{t("title")}</h1>
            <p className="">{t("description")}</p>
            <Link href={"/"}>
              <Button>{t("button")}</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
