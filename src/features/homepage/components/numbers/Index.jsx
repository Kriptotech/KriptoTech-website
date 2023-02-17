import style from "./styles.module.css";
import ParticlesBg from "particles-bg";

export function Numbers() {
    return (
        <>
            <div className={style.numbers}>
                <ParticlesBg type="thick" bg={true} />
                <div className={style.numbers_box}>
                    <div className={style.numbers_content}>
                        <h1>+76 Clientes satisfeitos</h1>
                        <p>
                            9 em cada 10 dos clientes da Kriptotech saem
                            totalmente satisfeitos.
                        </p>
                    </div>

                    <div className={style.numbers_content}>
                        <h1>+80 Serviços feitos</h1>
                        <p>A Kriptotech já realizou mais de 80 serviços</p>
                    </div>

                    <div className={style.numbers_content}>
                        <h1>+76 clientes registrados</h1>
                        <p>Mais de 76 clientes registrados</p>
                    </div>

                    <div className={style.numbers_content}>
                        <h1>20% Off</h1>
                        <p>
                            A Kriptotech oferece serviços com 20% de desconto.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
