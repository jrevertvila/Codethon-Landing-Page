import LangSelector from "../Lang/LangSelector"
import { CiMenuBurger } from "react-icons/ci";
import "./Header.css"
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export function Header() {
    const [isActive, setActive] = useState(false)
    const { height, width } = useWindowDimensions();
    const [scrollPosition, setScrollPosition] = useState(0);
    const { t } = useTranslation();

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    return (
        <div className={"header" + (isActive ? " header_active" : "") + (scrollPosition >= 70 ? " activeScrolling" : "")}>
            <div className="logo_container">
                <span className="logo">logo</span>
                <CiMenuBurger onClick={() => setActive(!isActive)} className="burger_menu" />
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