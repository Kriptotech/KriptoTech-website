import React, { useState } from "react";
import style from "./style.module.css";
import { Folder, Link, GooglePlayLogo } from "phosphor-react";

export function Card({
    title,
    description,
    app_link,
    website_link,
    image,
    no_image,
}) {
    console.log(image);
    return (
        <div className={style.card}>
            <div className={style.card_container}>
                <header>
                    <Folder color="rgb(23, 209, 178)" size={28} />
                    <div>
                        {app_link.length > 0 && (
                            <a href={app_link} target="_blank">
                                <GooglePlayLogo
                                    className={style.card_icon}
                                    color="#7fb2cad0"
                                    size={28}
                                />
                            </a>
                        )}
                        {website_link.length > 0 && (
                            <a href={website_link} target="_blank">
                                <Link
                                    className={style.card_icon}
                                    color="#7fb2cad0"
                                    size={28}
                                />
                            </a>
                        )}
                    </div>
                </header>

                <span className={style.project_name}>{title}</span>
                <span className={style.project_description}>
                    {description.length > 201
                        ? description.substring(0, 200) + "..."
                        : description}
                </span>

                {image && (
                    <a
                        href={website_link.length > 0 ? website_link : app_link}
                        target="_blank"
                    >
                        <img className={style.image} src={image} alt="" />
                    </a>
                )}
                {no_image && (
                    <a
                        href={website_link.length > 0 ? website_link : app_link}
                        target="_blank"
                    >
                        <img className={style.no_image} src={no_image} alt="" />
                    </a>
                )}
            </div>
        </div>
    );
}
