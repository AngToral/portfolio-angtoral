import NavBar from "./NavBar";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Historia() {


    const [t, i18n] = useTranslation("story")

    return (
        <>
            <NavBar />

            <div className="flex md:flex-row flex-col">
                <img
                    src="../angelatoral.webp"
                    alt="image 1"
                    className="md:w-1/2 w-full h-auto object-cover"
                />
                <div className="flex flex-col justify-center items-center md:m-20 m-10">
                    <span className="text-2xl font-spinnaker texto mb-4">{t("story.hello")}</span>
                    <span className="md:text-xl font-spinnaker texto mb-2 text-center">{t("story.intro")}</span>
                </div>
            </div>

            <div className="flex md:flex-row flex-col-reverse">
                <div className="flex flex-col justify-center items-center md:m-20 m-10">
                    <span className="md:text-xl font-spinnaker texto mb-2">{t("story.page2-1")}</span>
                    <span className="md:text-xl font-spinnaker texto mb-2">{t("story.page2-2")}</span>
                    <span className="md:text-xl font-spinnaker texto mb-2">{t("story.page2-3")}</span>
                    <span className="md:text-xl font-spinnaker texto mb-2">{t("story.page2-4")}</span>
                    <span className="md:text-xl font-spinnaker texto mb-2">{t("story.page2-5")}</span>
                </div>
                <img
                    src="../historia2.webp"
                    alt="image 2"
                    className="md:w-1/2 w-full object-cover"
                />
            </div>

            <div className="flex md:flex-row flex-col">
                <img
                    src="../historia3.webp"
                    alt="image 3"
                    className="md:w-1/2 w-full h-auto object-cover"
                />
                <div className="flex flex-col justify-center items-center md:m-20 m-10">
                    <span className="lg:text-xl font-spinnaker texto mb-2">{t("story.page3-1")}</span>
                    <span className="lg:text-xl font-spinnaker texto mb-2">{t("story.page3-2")}</span>
                    <span className="lg:text-xl font-spinnaker texto mb-2">{t("story.page3-3")}</span>
                </div>
            </div>

            <div className="flex md:flex-row flex-col-reverse">
                <div className="flex flex-col justify-center items-center md:m-20 m-10">
                    <span className="lg:text-xl font-spinnaker texto mb-2">{t("story.page4-1")}</span>
                    <span className="lg:text-xl font-spinnaker texto mb-2">{t("story.page4-2")}</span>
                </div>
                <img
                    src="../historia4.webp"
                    alt="image 4"
                    className="md:w-1/2 w-full h-auto object-cover"
                />
            </div>

            <div className="flex md:flex-row flex-col">
                <img
                    src="../historia5.webp"
                    alt="image 5"
                    className="md:w-1/2 w-full h-auto object-cover"
                />
                <div className="flex flex-col justify-center items-center md:m-20 m-10">
                    <span className="lg:text-xl font-spinnaker texto mb-2">{t("story.page5-1")}</span>
                    <span className="lg:text-xl font-spinnaker texto mb-2">{t("story.page5-2")}</span>
                </div>
            </div>

            <div className="flex md:flex-row flex-col-reverse">
                <div className="flex flex-col justify-center items-center md:m-20 m-10 md:w-1/2">
                    <span className="lg:text-4xl text-2xl font-bold font-spinnaker texto mb-4">{t("story.page6-1")}</span>
                    <span className="lg:text-xl font-semibold font-spinnaker texto mb-2 text-center">{t("story.page6-2")}</span>
                </div>
                <img
                    src="../historia-final.webp"
                    alt="image 6"
                    className="md:w-1/2 w-full h-auto object-cover"
                />
            </div>
        </>
    )
}

export default Historia;