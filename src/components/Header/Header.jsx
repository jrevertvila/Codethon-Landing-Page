import LangSelector from "../Lang/LangSelector"
import { CiMenuBurger } from "react-icons/ci";
import "./Header.css"
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useState } from "react";
import logo from '../../assets/LOGOS/logoSinFondo/logoCircularNegro.png'
export function Header() {


    const [isActive, setActive] = useState(false)

    const [y, setY] = useState(document.scrollingElement.scrollHeight);
    const [scrollDirection, setScrollDirection] = useState("");
    const [isScrollingUp, setIsScrollingUp] = useState(true)
    const [cont, setCont] = useState(0)
    const handleNavigation = useCallback((cont) => {
        if (y > window.scrollY) {
            if (scrollDirection == "down") {
                setActive(false)
                setCont(0)                
            } else {
                setCont(cont+1)
            }  
            
            setScrollDirection("up");
            setIsScrollingUp(true);
        } else if (y < window.scrollY) {
            if (scrollDirection == "up") {
                setCont(0)
            } else {
                setCont(cont+1)
            }
            setScrollDirection("down");
            setIsScrollingUp(false);
        }
        setY(window.scrollY)
    }, [y]);

    let handleNavigationFn = (e) => {
        handleNavigation(cont)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleNavigationFn)
        return () => window.removeEventListener("scroll", handleNavigationFn)
    }, [handleNavigationFn])


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
        <div className={"header" + (isActive ? " header_active" : "") + (scrollPosition >= 70 ? " activeScrolling" : "") + 
        ((isScrollingUp == false && cont > 30) ? 
        " isScrollingDown" : 
        "")}>
            <div className="logo_container">
                <img src={logo} alt="logo" className="logo"/>
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