import NavBar from "./NavBar";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Historia() {


    const [t, i18n] = useTranslation("story")

    return (
        <>
            <NavBar />

            <div className="flex">
                <img
                    src="../angelatoral.webp"
                    alt="image 1"
                    className="w-1/2 h-auto"
                />
                <div className="flex flex-col justify-center items-center m-10">
                    <span className="font-spinnaker mb-4 text-2xl">{t("story.hello")}</span>
                    <span className="md:text-xl font-spinnaker texto mb-2">{t("story.intro")}</span>
                </div>
            </div>

            <div className="flex">
                <div className="flex flex-col justify-center items-center m-10">
                    <span className="md:text-xl font-spinnaker texto mb-2">{t("story.page2-1")}</span>
                    <span className="md:text-xl font-spinnaker texto mb-2">{t("story.page2-2")}</span>
                    <span className="md:text-xl font-spinnaker texto mb-2">{t("story.page2-3")}</span>
                    <span className="md:text-xl font-spinnaker texto mb-2">{t("story.page2-4")}</span>
                    <span className="md:text-xl font-spinnaker texto mb-2">{t("story.page2-5")}</span>
                </div>
                <img
                    src="../historia2.webp"
                    alt="image 2"
                    className="w-1/2 h-auto"
                />
            </div>

            <div className="flex flex-col w-screen">
                <img
                    src="../historia3.webp"
                    alt="image 3"
                    className=" h-screen w-auto object-cover"
                />
                <div className="flex flex-col justify-center bg-black/75">
                    <div className="flex flex-col md:p-20 p-10">
                        <span className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">{t("story.page3-1")}</span>
                        <span className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">{t("story.page3-2")}</span>
                        <span className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">{t("story.page3-3")}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-screen">
                <img
                    src="../historia4.webp"
                    alt="image 4"
                    className="h-screen w-auto object-cover"
                />
                <div className="flex flex-col justify-center bg-black/75">
                    <div className="flex flex-col md:p-20 p-10">
                        <span className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">{t("story.page4-1")}</span>
                        <span className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">{t("story.page4-2")}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-screen">
                <img
                    src="../historia5.webp"
                    alt="image 5"
                    className="h-screen w-auto object-cover"
                />
                <div className="flex flex-col justify-center bg-black/75">
                    <div className="flex flex-col md:p-20 p-10">
                        <span className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">{t("story.page5-1")}</span>
                        <span className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">{t("story.page5-2")}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-screen">
                <img
                    src="../historia-final.webp"
                    alt="image 6"
                    className="h-screen w-auto object-cover"
                />
                <div className="flex flex-col justify-center bg-black/75">
                    <div className="flex flex-col md:p-20 p-10">
                        <span className="md:text-4xl font-bold font-spinnaker text-ang-300 mb-4 text-3xl lg:text-5xl">{t("story.page6-1")}</span>
                        <span className="md:text-3xl font-semibold font-spinnaker text-ang-300 texto mb-2">{t("story.page6-2")}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Historia;