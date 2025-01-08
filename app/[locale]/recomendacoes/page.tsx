import { CardRecomendacoes } from "@/components/card-recomendacoes";
import { useTranslations } from "next-intl";

export default function Recomendacoes() {
  const t = useTranslations("HomePage");
  const recomendacoes = [
    {
      title: t("recomendations.emilio.title"),
      description: t("recomendations.emilio.description"),
    },
    {
      title: t("recomendations.flavio.title"),
      description: t("recomendations.flavio.description"),
    },
    {
      title: t("recomendations.karol.title"),
      description: t("recomendations.karol.description"),
    },
    {
      title: t("recomendations.wellington.title"),
      description: t("recomendations.wellington.description"),
    },
  ];

  return (
    <main>
      <div className="flex flex-col gap-4 pt-4">
        <div className="containerContent flex flex-col">
          <h2>Recomendações</h2>
          <div className="flex flex-col gap-4">
            {recomendacoes.map((recomendacao, index) => (
              <CardRecomendacoes
                key={index}
                title={recomendacao.title}
                description={recomendacao.description}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
