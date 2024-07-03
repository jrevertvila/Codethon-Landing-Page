import './Patrocinadores.css'

import artemis from '../../assets/images/ArtemisLogo.png'
import vic from '../../assets/images/VIC.png'


export function Patrocinadores(){
    return (
        <div className="app__wrapper__patrocinadores">
            <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="130" height="80" fill="none" viewBox="0 0 48 30">
                    <path fill="#222" fill-rule="evenodd" d="M35.602 5.48V2.609H47.99V0h-9.752l-2.78.01a2.479 2.479 0 0 0-2.472 2.475v3.021l2.606-.015-1.884 1.898a2.473 2.473 0 0 0-.717 1.74v2.307a2.478 2.478 0 0 0 2.483 2.475H48v-2.613H35.612V5.475l-.01.006ZM0 .02 2.442 5.5l2.544-.004-.558.556a2.465 2.465 0 0 0-.512 2.756l2.283 5.128h2.62L15.004.02h-2.62L7.502 11.317 4.986 5.496 2.62.02H0Zm44.867 16.05H33.514v2.612h9.48l-9.5 9.47L35.34 30l9.526-9.491V30h2.616V18.682h-2.616v-2.613ZM0 18.56a2.479 2.479 0 0 1 2.472-2.476v-.015l2.78-.01h9.757v2.613H2.62v8.695h9.772v-3.19H8.82v-2.612h3.573l2.62 2.613v3.327c0 1.367-1.11 2.48-2.482 2.48H2.488A2.478 2.478 0 0 1 .005 27.51v-2.307c0-.648.256-1.276.717-1.74l1.884-1.898L0 21.58v-3.02Zm18.966-2.476a2.479 2.479 0 0 0-2.473 2.475v3.021l2.606-.015-1.89 1.898a2.473 2.473 0 0 0-.716 1.74v2.307a2.478 2.478 0 0 0 2.483 2.475h12.526v-2.613H19.114v-8.695h12.388v-2.613H21.75l-2.78.01-.004.01ZM19.109.02v5.476l.005-.005v5.807h12.388v2.613H18.976a2.478 2.478 0 0 1-2.483-2.475V9.129c0-.648.256-1.276.717-1.74l1.883-1.898-2.605.015V.02h2.62Z" clip-rule="evenodd"></path>
                </svg>
            </a>

            <a href="" className='vic'><img src={vic} alt={"Artemis Club"} /></a>
            <a href=""><img src={artemis} alt={"Artemis Club"} /></a>
        </div>
    )
}