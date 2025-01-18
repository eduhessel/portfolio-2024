import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PersonIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface CardRecomendacoesProps {
  title: string;
  description: string;
  position: string;
}

export function CardRecomendacoes({
  title,
  description,
  position,
}: CardRecomendacoesProps) {
  const t = useTranslations("HomePage.recomendations");

  return (
    <Alert className="flex flex-col gap-1">
      <PersonIcon className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <p>{position}</p>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
