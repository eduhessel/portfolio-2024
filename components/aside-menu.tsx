import styles from "@/styles/aside-menu.module.css";
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from 'next/link';
import { useLocale } from "next-intl";
import { useTranslations } from 'next-intl';

export default function AsideMenu(){
    const locale = useLocale();
    const t = useTranslations('AsideMenu');

    return(
        <div className={styles.menuContainer}>
            {/* Projetos */}
            <Link href={"/"}>
                <h2 className={styles.h2WithLink}>{t('projects')}</h2>
            </Link>
            <Link href="https://zeroheight.com/73787951a/n/7466ec" target="_blank" rel="noopener noreferrer">
                <p className={styles.pWithLink}>{t('6')}</p>
            </Link>
            <p className={styles.pWithLink}>{t('5')}</p>
            <Link href="https://www.behance.net/gallery/201725767/SINV-Bradesco" target="_blank" rel="noopener noreferrer">
                <p className={styles.pWithLink}>{t('4')}</p>
            </Link>
            <Link href="https://www.behance.net/gallery/199591237/Petinder-UIUX-Design-Case-Study" target="_blank" rel="noopener noreferrer">
                <p className={styles.pWithLink}>{t('3')}</p>
            </Link>
            <Link href="https://www.behance.net/gallery/176413143/Advisor-App-v20" target="_blank" rel="noopener noreferrer">
                <p className={styles.pWithLink}>{t('2')}</p>
            </Link>
            <Link href="https://www.behance.net/gallery/118707067/ALLBOOKS-APP-UI-DESIGN" target="_blank" rel="noopener noreferrer">
                <p className={styles.pWithLink}>{t('1')}</p>
            </Link>
            {/* Sobre mim */}
            <Link href={`/${locale}/sobre`}>
                <h2 className={styles.h2WithLink}>{t('about')}</h2>
            </Link>
            <h2>{t('links')}</h2>
            {/* Ícones */}
            <div className="flex gap-4">
                <Link href="https://www.linkedin.com/in/eduardo-hessel" target="_blank" rel="noopener noreferrer">
                    <LinkedInLogoIcon className={styles.iconWithLink}/>
                </Link>
                <Link href="https://github.com/eduhessel" target="_blank" rel="noopener noreferrer">
                    <GitHubLogoIcon className={styles.iconWithLink}/>
                </Link>
                <Link href="mailto:deveduardohessel@gmail.com" target="_blank" rel="noopener noreferrer">
                    <EnvelopeClosedIcon className={styles.iconWithLink}/>
                </Link>
            </div>

        </div>
    )
}