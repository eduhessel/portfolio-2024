import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

const withAuthProtection = (WrappedComponent: React.ComponentType) => {
  const ComponentWithAuthProtection = (props: any) => {
    const { authenticated } = useAuth(); // Pegando o estado de autenticação
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations("HomePage.Unauthorized");

    useEffect(() => {
      if (!authenticated) {
        // Se o usuário não estiver autenticado, redireciona
        router.push(`/${locale}/unauthorized`);
      }
    }, [authenticated, router]);

    if (!authenticated) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          {t("loading")}
        </div>
      ); // Exibe loading enquanto verifica a autenticação
    }

    return <WrappedComponent {...props} />;
  };

  ComponentWithAuthProtection.displayName = `WithAuthProtection(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return ComponentWithAuthProtection;
};

export default withAuthProtection;
