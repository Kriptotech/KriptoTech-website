import style from "./styles.module.css";
import { projects } from "../../../../data/projects.js";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "../../../../components/card/Index";

export function Main() {
    const [projectsData, setProjectsData] = useState(null);

    useEffect(() => {
        setProjectsData(projects);
    }, []);

    return (
        <section className={style.projects} data-aos="fade-up">
            <header>
                <h2 className={style.title}>Nossos trabalhos</h2>
                <br />
            </header>

            <div className={style.row}>
                {projectsData?.map((val) => {
                    return (
                        <div key={val.id} className={style.card_container}>
                            <Card
                                title={val.title}
                                description={val.description}
                                technologies={val.technologies}
                                github_link={val.github_link}
                                website_link={val.website_link}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
