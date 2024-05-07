import LangSelector from "../Lang/LangSelector"
import { CiMenuBurger } from "react-icons/ci";
import "./Header.css"
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export function Header() {



    const [y, setY] = useState(document.scrollingElement.scrollHeight);
    const [scrollDirection, setScrollDirection] = useState("");
    const [isScrollingUp, setIsScrollingUp] = useState(true)
    const [cont, setCont] = useState(0)
    // let cont = 0

    // useEffect(() => {
        
    // },[cont])

    const handleNavigation = useCallback((cont) => {
        // console.log("aa");
        if (y > window.scrollY) {
            // console.log(cont);
            // console.log(scrollDirection);
            if (scrollDirection == "down") {
                // console.log("SCROOOOOOOOOLLLL");
                setCont(0)
                // console.log("CONT", cont);
                
            } else {
                setCont(cont+1)
            }
            
            
            setScrollDirection("up");
            setIsScrollingUp(true);
        } else if (y < window.scrollY) {
            // console.log(cont);
            if (scrollDirection == "up") {
                // console.log("SCROOOOOOOOOLLLL");
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
        <div className={"header" + (isActive ? " header_active" : "") + (scrollPosition >= 70 ? " activeScrolling" : "") + 
        ((isScrollingUp == false && cont > 30) ? 
        " isScrollingDown" : 
        "")}>
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