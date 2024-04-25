import LangSelector from "../Lang/LangSelector"
import "./Header.css"
import { useTranslation } from 'react-i18next';

export function Header () {
    const { t } = useTranslation();
    return (
        <div className="header">
            <span>logo</span>
            <div className="nav">
                <span>{t('header__inicio')}</span>
                <span>{t('header__sobre_proyecto')}</span>
                <span>{t('header__modelo_3d')}</span>
                <span>{t('header__vive_experiencia')}</span>
                <span>{t('header__sobre_nosotros')}</span>
                <LangSelector/>
            </div>
        </div>
    )
}