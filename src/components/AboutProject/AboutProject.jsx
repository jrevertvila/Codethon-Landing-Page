import './AboutProject.css'
import unityIMG from '../../assets/images/unity_programa.png'
import { useTranslation } from 'react-i18next';

export function AboutProject(){
    const { t } = useTranslation();
    return (
        <div className="app__wrapper about_project">
            <h2>{t('sobre_proyecto__titulo')}</h2>
            <div className='about_project_sections'>
                <div className='about_project_sections_left'>
                    <img src={unityIMG} alt="" />
                </div>

                <div className='about_project_sections_right'>
                    <p>
                        {t('sobre_proyecto__descripcio')}
                    </p>

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.
                    </p>
                </div>
            </div>
        </div>
    )
}