import { useTranslations } from 'next-intl';

export default function Footer(){
    const t = useTranslations('Footer');
    return(
        <div className="flex flex-col items-center text-center justify-center gap-4 p-8">
            <p>{t("tools")}</p>
            <p>{t("rights")}</p>
        </div>
    )
}