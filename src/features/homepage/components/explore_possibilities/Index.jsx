import style from "./styles.module.css";

import ImageOne from "./assets/binance-earn.png";
import ImageTwo from "./assets/binance-pay.png";
import ImageThree from "./assets/nft.png";

export function ExplorePossibilities() {
    return (
        <div className={style.explore_possibilities}>
            <div className={style.explore_possibilities_header}>
                <h1>Explora possibilidades infinitas com a Kriptotech</h1>
            </div>

            <div className={style.explore_possibilities_box}>
                <div className={style.explore_possibilities_item}>
                    <img src={ImageThree} alt="" />

                    <br />
                    <br />
                    <br />

                    <div>
                        <h2>Aumente os seus ganhos</h2>
                        <p>
                            Aumente os seus ganhos através das nossas soluções
                            tecnologicas..
                        </p>
                    </div>
                </div>

                <div className={style.explore_possibilities_item}>
                    <div>
                        <h2>Faz o teu negocio crescer com a internet</h2>
                        <p>
                            Aumente a presença do seu negocio na internet com um
                            website e aplicativo.
                        </p>
                    </div>

                    <br />
                    <br />
                    <br />

                    <img src={ImageTwo} alt="" />
                </div>

                <div className={style.explore_possibilities_item}>
                    <img src={ImageOne} alt="" />

                    <br />
                    <br />
                    <br />

                    <div>
                        <h2>Gerencie seu negocio</h2>
                        <p>
                            Tenha um dashboard que facilite o gerenciamento do seu negocio.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
