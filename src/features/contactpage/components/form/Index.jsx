import React from "react";
import { useState } from "react";
import axios from "axios";
// import { PulseLoader } from "react-spinners";
// import Swal from "sweetalert2";
import ParticlesBg from "particles-bg";

import style from "./styles.module.css";

export function Formulary() {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setLoading] = useState(false);

    async function sebmitForm(params) {
        params.preventDefault();
        setMessage("");
        // console.log(name, email, content);

        if (name != "" && email != "" && content != "") {
            setLoading(true);
            let res = await axios.post(
                `https://${process.env.REACT_APP_ENDPOINT}web_email_support.php?email=${email}&name=${name}&message=${content}`
            );
            setLoading(false);
            // Swal.fire({
            //     title: "SUCESSO!",
            //     text: "Email enviado com suceeso",
            //     icon: "success",
            //     confirmButtonText: "OK",
            // });

            console.log(res.data);
        } else {
            setMessage("preencha todos campos");
        }
    }

    return (
        <div className={style.formulary}>
            <ParticlesBg type="lines" bg={true} />
            <div className={style.formulary_container}>
                <div className={style.formulary_row}>
                    <div className={style.formulary_item}>
                        <form onSubmit={(e) => sebmitForm(e)}>
                            <div className={style.input_container}>
                                <div className={style.input_box}>
                                    <label htmlFor="nome">Nome</label>
                                    <input
                                        required
                                        type="text"
                                        id="nome"
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    ></input>
                                </div>
                                <div className={style.input_box}>
                                    <label htmlFor="email">E-mail</label>
                                    <input
                                        required
                                        type="text"
                                        id="email"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    ></input>
                                </div>
                            </div>

                            <label htmlFor="desc">Mensagem</label>
                            <textarea
                                required
                                id="desc"
                                onChange={(e) => setContent(e.target.value)}
                            ></textarea>
                            {message && (
                                <>
                                    <br />
                                    <p style={{ color: "tomato" }}>{message}</p>
                                </>
                            )}
                            <button>
                                {isLoading
                                    ? `ENVIAR MENSAGEM`
                                    : // <PulseLoader color="white" />
                                      `ENVIAR MENSAGEM`}
                            </button>
                        </form>
                    </div>
                    <div className={style.formulary_item}>
                        <h3>Nos visite</h3>
                        <p>
                            Rua de tete, Nampula, Moçambique.
                            <br />
                            Tel:+258866460507
                        </p>

                        <br />
                        <br />

                        <h3>Fale conosco</h3>
                        <p>Voce pode falar conosco com o email abaixo:</p>
                        <p>E-mail: smartshopmoznpl@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
