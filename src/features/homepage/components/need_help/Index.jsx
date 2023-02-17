import style from "./styles.module.css";

export function NeedHelp() {
    return (
        <div className={style.need_help}>
            <div className={style.need_help_header}>
                <h1>Precisa de ajuda?</h1>
            </div>

            <div className={style.need_help_box}>
                <div className={style.need_help_content}>
                    <h1>Atendimento ao cliente</h1>
                    <p>
                        A Kriptotech dispõe de um suporte de 24 horas por dia.
                    </p>
                </div>

                <div className={style.need_help_content}>
                    <h1>Tem duvidas?</h1>
                    <p>Caso tenha alguma duvida contacte-nos!</p>
                </div>

                <div className={style.need_help_content}>
                    <h1>Comunidade</h1>
                    <p>
                        Registe-se e desfrute do nosso forum da comunidade de
                        clientes.
                    </p>
                </div>

                <div className={style.need_help_content}>
                    <h1>Algum problema?</h1>
                    <p>
                        Caso tenha alguma problema, contacte-nos. Adorariamos
                        ajuda-lo!
                    </p>
                </div>
            </div>
        </div>
    );
}
