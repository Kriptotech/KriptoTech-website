import React from "react";

import { Header } from "../components/header/Index";
import { Hero } from "../features/aboutpage/components/hero/Index";
import { Content } from "../features/aboutpage/components/content/Index";

export function Aboutpage() {
    return (
        <div>
            <Header />
            <Hero />
            <Content />
        </div>
    );
}
