import React from "react";

import { Header } from "../components/header/Index";
import { Hero } from "../features/servicespage/components/hero/Index";
import { Content } from "../features/servicespage/components/content/Index";

export function Servicespage() {
    return (
        <div>
            <Header />
            <Hero />
            <Content />
        </div>
    );
}
