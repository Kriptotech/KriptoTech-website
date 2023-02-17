import {
    UserCircle,
    UserCirclePlus,
    List,
    XCircle,
    Phone,
} from "phosphor-react";
import { useState } from "react";

import style from "./styles.module.css";

export function Header() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    return (
        <header className={style.main_header}>
            <nav>
                <div className={style.logo_container}>
                    <a href="/">KriptoTech</a>

                    <div className={style.normal_links}>
                        <a href="/services">Nossos serviços</a>
                        <a href="/about">Sobre nós</a>
                        <a href="/works">Nossos trabalhos</a>
                    </div>
                </div>

                <div className={style.auth_links}>
                    <a href="/contact">
                        <Phone size={35} />
                        Contactar
                    </a>
                </div>

                {!sidebarVisible ? (
                    <button onClick={() => setSidebarVisible(true)}>
                        <List color="rgb(255, 223, 44)" />
                    </button>
                ) : (
                    <button onClick={() => setSidebarVisible(false)}>
                        <XCircle />
                    </button>
                )}

                {sidebarVisible && (
                    <div className={style.sidebar}>
                        <a href="/" className={style.sidebar_logo}>
                            KriptoTech
                        </a>

                        <div className={style.normal_links}>
                            <a href="/services">Nossos serviços</a>
                            <a href="/about">Sobre nós</a>
                            <a href="/works">Nossos trabalhos</a>
                        </div>

                        <br />
                        <div className={style.sidebar_auth_links}>
                            <a href="/contact">
                                <Phone size={25} />
                                Contactar
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
