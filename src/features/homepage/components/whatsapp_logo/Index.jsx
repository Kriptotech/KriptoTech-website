import React from "react";
import style from "./styles.module.css";
import { Phone } from "phosphor-react";

export function WhatsAppLogo() {
    return (
        <a href="tel:+258866460507" className={style.WhatsappLogo_container}>
            <Phone size={40} color="white" />
        </a>
    );
}
