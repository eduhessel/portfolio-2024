import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PersonIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface CardRecomendacoesProps {
  title: string;
  description: string;
  link: string;
}

export function CardRecomendacoes({
  title,
  description,
  link,
}: CardRecomendacoesProps) {
  const t = useTranslations("HomePage.recomendations");

  return (
    <Alert className="flex flex-col gap-2">
      <PersonIcon className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <Button className="w-full">
          {t("buttonLinkedin")} {title}
        </Button>
      </Link>
    </Alert>
  );
}
