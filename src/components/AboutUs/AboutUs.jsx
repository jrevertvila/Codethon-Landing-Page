import './AboutUs.css'
import { useTranslation } from 'react-i18next';

export function AboutUs(){
    const { t } = useTranslation();
    return (
        <div className="app__wrapper aboutus">
            <h2>{t('sobre_nosotros__titulo')}</h2>
            <div className='aboutus'>

            </div>
        </div>
    )
}