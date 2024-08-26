import styles from "@/styles/aside-menu.module.css";
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from 'next/link';

export default function AsideMenu(){
    return(
        <div className={styles.menuContainer}>
            {/* Projetos */}
            <h2>PROJETOS</h2>
            <p className={styles.pWithLink}>6. AIVest - Design System (Em construção)</p>
            <p className={styles.pWithLink}>5. LINX - Chatbot (Em construção)</p>
            <Link href="https://www.behance.net/gallery/201725767/SINV-Bradesco" target="_blank" rel="noopener noreferrer">
                <p className={styles.pWithLink}>4. SINV Bradesco - Desktop B2B App</p>
            </Link>
            <Link href="https://www.behance.net/gallery/199591237/Petinder-UIUX-Design-Case-Study" target="_blank" rel="noopener noreferrer">
                <p className={styles.pWithLink}>3. Petinder - Mobile App</p>
            </Link>
            <Link href="https://www.behance.net/gallery/176413143/Advisor-App-v20" target="_blank" rel="noopener noreferrer">
                <p className={styles.pWithLink}>2. Advisor App - Mobile SaaS App</p>
            </Link>
            <Link href="https://www.behance.net/gallery/118707067/ALLBOOKS-APP-UI-DESIGN" target="_blank" rel="noopener noreferrer">
                <p className={styles.pWithLink}>1. Allbooks - Mobile App</p>
            </Link>
            {/* Sobre mim */}
            <h2 className={styles.h2WithLink}>SOBRE MIM</h2>
            <h2>MEUS LINKS</h2>
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