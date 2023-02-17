import style from "./styles.module.css";

import Image from "./assets/trusted-section.png";

export function Trust() {
    return (
        <div className={style.trust}>
            <div className={style.trust_box}>
                <div className={style.trust_left}>
                    <h1>Confiança garantida</h1>

                    <ul>
                        <li>
                            <h2>Serviços seguros</h2>
                            <p>
                                Os produtos da Kriptotech são de grande
                                confiança, com a sofisticação de tecnologias da
                                atualidade.
                            </p>
                        </li>

                        <li>
                            <h2>Manutenção garantidade</h2>
                            <p>
                                A kriptotech prové a manutenção dos serviços
                                realizados.
                            </p>
                        </li>
                    </ul>
                </div>

                <div className={style.trust_right}>
                    <img src={Image} alt="" />
                </div>
            </div>
        </div>
    );
}
