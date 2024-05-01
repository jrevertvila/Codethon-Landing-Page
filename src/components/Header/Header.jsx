import LangSelector from "../Lang/LangSelector"
import { CiMenuBurger } from "react-icons/ci";
import "./Header.css"
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export function Header() {



    const [y, setY] = useState(document.scrollingElement.scrollHeight);
    const [scrollDirection, setScrollDirection] = useState("");
    const [isScrollingUp, setIsScrollingUp] = useState(false)
    const [cont, setCont] = useState(0)
    // let cont = 0

    const handleNavigation = useCallback((e) => {

        if (y > window.scrollY) {
            // console.log(cont);
            // console.log(scrollDirection);
            if (scrollDirection == "down") {
                // console.log("SCROOOOOOOOOLLLL");
                setCont(0)
                // console.log("CONT", cont);
                setCont(cont+1)
            } else {
                setCont(cont+1)
            }
            // console.log(cont);
            
            setScrollDirection("up");
            if (cont > 30) setIsScrollingUp(true);
        } else if (y < window.scrollY) {
            if (scrollDirection == "up") {
                // console.log("SCROOOOOOOOOLLLL");
                setCont(0)
            }
            setCont(cont+1)
            setScrollDirection("down");
            if (cont > 30) setIsScrollingUp(false);
        }
        setY(window.scrollY)
    }, [y]);

    useEffect(() => {
        window.addEventListener("scroll", handleNavigation)
        return () => window.removeEventListener("scroll", handleNavigation)
    }, [handleNavigation])


    const [isActive, setActive] = useState(false)
    const { height, width } = useWindowDimensions();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrollingDown, setIsScrollingDown] = useState(false);
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

    // console.log("isScrollingUp", isScrollingUp);
    // console.log("isScrollingDown", isScrollingDown);

    return (
        <div className={"header" + (isActive ? " header_active" : "") + (scrollPosition >= 70 ? " activeScrolling" : "") + (isScrollingUp == false ? " isScrollingDown" : "")}>
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