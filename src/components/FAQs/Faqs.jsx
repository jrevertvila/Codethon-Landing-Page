import { t } from 'i18next';
import './Faqs.css'
import FaqsItem from './FaqsItem';


export default function Faqs() {

    return (
        <section className='faqs' id='faqs'>
            <h2 className='faqs_title'>{t('FAQ__titulo')}</h2>
            <p className='faqs_subtitle'>{t('FAQ__subtitulo')}</p>
            <div className='faqs_wrapper'>
                <FaqsItem
                    pregunta={t('FAQ__pregunta1')}
                    respuesta={t('FAQ__respuesta1')}
                />

                <FaqsItem
                    pregunta={t('FAQ__pregunta2')}
                    respuesta={t('FAQ__respuesta2')}
                />

                <FaqsItem
                    pregunta={t('FAQ__pregunta3')}
                    respuesta={t('FAQ__respuesta3')}
                />

                <FaqsItem
                    pregunta={t('FAQ__pregunta4')}
                    respuesta={t('FAQ__respuesta4')}
                />

                <FaqsItem
                    pregunta={t('FAQ__pregunta5')}
                    respuesta={t('FAQ__respuesta5')}
                />

                <FaqsItem
                    pregunta={t('FAQ__pregunta6')}
                    respuesta={t('FAQ__respuesta6')}
                />

                <FaqsItem
                    pregunta={t('FAQ__pregunta7')}
                    respuesta={t('FAQ__respuesta7')}
                />

                <FaqsItem
                    pregunta={t('FAQ__pregunta8')}
                    respuesta={t('FAQ__respuesta8')}
                />
            </div>

        </section>
    )
}