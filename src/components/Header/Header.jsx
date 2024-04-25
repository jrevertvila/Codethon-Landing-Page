import LangSelector from "../Lang/LangSelector"
import "./Header.css"
import { useTranslation } from 'react-i18next';

export function Header() {
    const { t } = useTranslation();
    return (
        <div className="header">
            <span>logo</span>
            <div className="nav">
                <div className="nav_item_container"><span>{t('header__inicio')}</span><div className="line"></div></div>
                <div className="nav_item_container"><span>{t('header__sobre_proyecto')}</span><div className="line"></div></div>
                <div className="nav_item_container"><span>{t('header__modelo_3d')}</span><div className="line"></div></div>
                <div className="nav_item_container"><span>{t('header__vive_experiencia')}</span><div className="line"></div></div>
                <div className="nav_item_container"><span>{t('header__sobre_nosotros')}</span><div className="line"></div></div>
                <LangSelector />
            </div>
        </div>
    )
}