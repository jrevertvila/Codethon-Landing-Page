import './AboutProject.css'
import unityIMG from '../../assets/images/unity_programa.png'

export function AboutProject(){
    return (
        <div className="app__wrapper about_project">
            <h2>Sobre el projecte</h2>
            <div className='about_project_sections'>
                <div className='about_project_sections_left'>
                    <img src={unityIMG} alt="" />
                </div>

                <div className='about_project_sections_right'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..
                    </p>

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.
                    </p>
                </div>
            </div>
        </div>
    )
}