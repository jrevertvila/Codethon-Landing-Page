import LangSelector from "../Lang/LangSelector"
import { CiMenuBurger } from "react-icons/ci";
import "./Header.css"
import { useTranslation } from 'react-i18next';
import { useState } from "react";

export function Header() {
    const [isActive, setActive] = useState(false)
    console.log(isActive);
    const { t } = useTranslation();
    return (
        <div className={"header" + (isActive ? " header_active" : "")}>
            <div className="logo_container">
                <span className="logo">logo</span>
                <CiMenuBurger onClick={() => setActive(!isActive)} className="burger_menu"/>
            </div>
            <div className={"nav" + (isActive ? " nav_active" : "")}>
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