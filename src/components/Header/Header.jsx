import LangSelector from "../Lang/LangSelector"
import "./Header.css"
import { useTranslation } from 'react-i18next';

export function Header () {
    const { t } = useTranslation();
    return (
        <div className="header">
            <span>logo</span>
            <div className="nav">
                <span>{t('inicio')}</span>
                <span>Sobre el proyecto</span>
                <span>Modelos 3D</span>
                <span>Vive la experiencia</span>
                <span>Sobre Nosotros</span>
                <LangSelector/>
            </div>
        </div>
    )
}