import { CardRecomendacoes } from "@/components/card-recomendacoes";
import { useTranslations } from "next-intl";

export default function Recomendacoes() {
  const t = useTranslations("HomePage");
  const recomendacoes = [
    {
      title: t("recomendations.emilio.title"),
      description: t("recomendations.emilio.description"),
      link: "https://www.linkedin.com/in/emilio-nagano/",
    },
    {
      title: t("recomendations.flavio.title"),
      description: t("recomendations.flavio.description"),
      link: "https://www.linkedin.com/in/flaviopaulino/",
    },
    {
      title: t("recomendations.karol.title"),
      description: t("recomendations.karol.description"),
      link: "https://www.linkedin.com/in/karol-oliveira-408363bb/",
    },
    {
      title: t("recomendations.wellington.title"),
      description: t("recomendations.wellington.description"),
      link: "https://www.linkedin.com/in/wellingtondev/",
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
                link={recomendacao.link}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
