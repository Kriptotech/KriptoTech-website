import style from "./styles.module.css";

import Image from "./assets/phone.png";

export function CreatePortfolio() {
    return (
        <div className={style.create_portfolio}>
            <div className={style.create_portfolio_box}>
                <div className={style.create_portfolio_left}>
                    <h1>Tenha a sua aplicação mobile com 20% de desconto.</h1>
                    <p>
                        Alavanque o seu negocio tendo uma aplicativo para gestão
                        do seu serviço, ou para qualquer outro proposito.
                    </p>

                    <ul>
                        <li>
                            <h2>App para gestão de negocios</h2>
                            <p>
                                Caso o seu negocio precise de uma gerencia
                                constante, tenha um app ou um website que
                                facilite a gerencia do mesmo.
                            </p>
                        </li>

                        <li>
                            <h2>Tem alguma Ideia para o seu negocio?</h2>
                            <p>
                                Veja a sua ideia tomar forma e se tornar um
                                negocio com a ajuda de um aplicativo.
                            </p>
                        </li>
                    </ul>

                    <a href="/contact">Começar</a>
                </div>

                <div className={style.create_portfolio_right}>
                    <img src={Image} alt="" />
                </div>
            </div>
        </div>
    );
}
