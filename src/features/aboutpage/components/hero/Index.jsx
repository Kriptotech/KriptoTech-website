import React from "react";
import style from "./styles.module.css";
import ParticlesBg from "particles-bg";

export function Hero() {
    return (
        <div className={style.hero}>
            <ParticlesBg type="thick" bg={true} />
            <div className={style.content}>
                <h1>SOBRE A KRIPTOTECK</h1>
            </div>
        </div>
    );
}
