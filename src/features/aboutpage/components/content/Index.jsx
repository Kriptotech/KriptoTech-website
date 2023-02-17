import React from "react";

import style from "./styles.module.css";

export function Content() {
    return (
        <div className={style.content}>
            <ul>
                <h3>KRIPTOTECH</h3>
                <li>
                    <p>
                        A Kriptotech é uma empresa que tem como objetivo tornar
                        a vida das pessoas mais simples e facil usando o poder
                        da tecnologia.
                    </p>
                </li>
                <li>
                    <p>
                        A Kriptotech é uma empresa especializada na criação
                        diversos tipos de softwares, websites, aplicações mobile
                        Android e Ios, sistemas complexos, Aplicações para Smart
                        Tv, e software de computadores para todos os sistemas
                        operacionais.
                    </p>
                </li>
            </ul>
        </div>
    );
}
