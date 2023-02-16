import style from "./styles.module.css";
import { Header } from "../../../../components/header/Index";
import ParticlesBg from "particles-bg";

export function Hero() {
    return (
        <>
            <ParticlesBg type="lines" bg={true} />
            <Header />
            <div className={style.hero}>
                <div className={style.hero_box}>
                    <div className={style.hero_left}>
                        <h1>
                            Faça um upgrade no seu negocio com soluções
                            tecnologicas
                        </h1>
                        <a href="/signup">Melhore o seu negocio</a>
                    </div>

                    {/* <div className={style.hero_right}>
                    <img src={HeroImage} alt="" />
                </div> */}
                </div>
            </div>
        </>
    );
}
