import style from "./styles.module.css";
import ParticlesBg from "particles-bg";

export function StartWinning() {
    return (
        <>
            <div className={style.start_winning}>
                <ParticlesBg type="lines" bg={true} />
                <h1>Começa a ganhar hoje</h1>
                <a href="/signup">Regista-te Agora</a>
            </div>
        </>
    );
}
