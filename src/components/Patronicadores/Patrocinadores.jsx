import './Patrocinadores.css'

import gooogle from '../../assets/images/google.png'
import etsinf from '../../assets/images/etsinf.png'
import hpupv from '../../assets/images/hpupv.png'
import fotur from '../../assets/images/fotur.png'
import edicom from '../../assets/images/edicom.png'
import nttdata from '../../assets/images/nttdata.png'
import aladina from '../../assets/images/aladina.svg'


export function Patrocinadores(){
    return (
        <div className="app__wrapper__patrocinadores">
            <a href=""><img src={gooogle} alt={"gooogle"} /></a>
            <a href=""><img src={etsinf} alt={"etsinf"} /></a>
            <a href=""><img src={hpupv} alt={"hpupv"} /></a>
            <a href=""><img src={fotur} alt={"fotur"} /></a>
            <a href=""><img src={edicom} alt={"edicom"} /></a>
            <a href=""><img src={nttdata} alt={"nttdata"} /></a>
            <a href=""><img src={aladina} alt={"aladina"} /></a>
        </div>
    )
}