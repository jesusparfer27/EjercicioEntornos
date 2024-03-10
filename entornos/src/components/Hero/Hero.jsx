import { useEffect, useState } from "react"
import './Hero.css'

function Hero() {

    return (
        <>
        <div className="hero">
        <div className="tittle-subtittle">
            <h1 className="tittle-hero">Triage</h1>
            <h3 className="subtittle-hero">JESUSPARFER@ALUMNOS.CEI.ES</h3>
        </div>
            <button onClick className="display-menu-hero">
            <div className="icon-hero">
            <img href="https://www.pexels.com/es-es/foto/mujer-en-camisa-con-cuello-774909/" alt="" className="image-hero" />
            </div>
            </button>
        </div>
        </>
    )
}

export default Hero