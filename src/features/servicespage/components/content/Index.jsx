import React from "react";

import style from "./styles.module.css";

export function Content() {
    return (
        <div className={style.content}>
            <ul>
                <h3>SERVIÇOS</h3>
                <li>
                    <p>
                        A Kriptotech oferece uma grande variedade de serviços
                        com soluções tecnologicas, a lista abaixo apresenta
                        todos os serviços da Kriptotech.
                    </p>
                </li>
                <li>
                    <p>Criação de websites;</p>
                </li>
                <li>
                    <p>Criação de aplicações para Android;</p>
                </li>
                <li>
                    <p>Criação de aplicações para Ios;</p>
                </li>
                <li>
                    <p>Criação de software para computadores Windows;</p>
                </li>
                <li>
                    <p>Criação de software para computadores Macbooks;</p>
                </li>
                <li>
                    <p>Criação de software para computadores Linux;</p>
                </li>
            </ul>
        </div>
    );
}
