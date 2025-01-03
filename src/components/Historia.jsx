import NavBar from "./NavBar";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

function Historia() {
    useEffect(() => {
        document.body.style.background = "black"
    })

    const [t, i18n] = useTranslation("story")

    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <>
            <NavBar />

            <ScrollContainer className="text-white">

                <ScrollPage>
                    <Animator animation={FadeUp} className="flex flex-col w-screen">
                        <img
                            src="../historia1.webp"
                            alt="image 1"
                            className="object-cover relative h-screen"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center bg-black/75">
                            <div className="flex flex-col place-items-center md:p-20 p-10">
                                <span className="font-spinnaker text-ang-300 mb-4 text-3xl md:text-4xl lg:text-5xl">{t("story.hello")}</span>
                                <span className="md:text-3xl font-spinnaker text-ang-300 texto mb-2">{t("story.intro")}</span>
                            </div>
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={FadeUp} className="flex flex-col w-screen">
                        <img
                            src="../historia2.webp"
                            alt="image 2"
                            className="h-screen w-auto object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center bg-black/75">
                            <div className="flex flex-col md:p-20 p-10">
                                <span className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">{t("story.page2-1")}</span>
                                <span className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">{t("story.page2-2")}</span>
                                <span className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">{t("story.page2-3")}</span>
                                <span className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">{t("story.page2-4")}</span>
                                <span className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">{t("story.page2-5")}</span>
                            </div>
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={FadeUp} className="flex flex-col w-screen">
                        <img
                            src="../historia3.webp"
                            alt="image 3"
                            className=" h-screen w-auto object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center bg-black/75">
                            <div className="flex flex-col md:p-20 p-10">
                                <span className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">{t("story.page3-1")}</span>
                                <span className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">{t("story.page3-2")}</span>
                                <span className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">{t("story.page3-3")}</span>
                            </div>
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={FadeUp} className="flex flex-col w-screen">
                        <img
                            src="../historia4.webp"
                            alt="image 4"
                            className="h-screen w-auto object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center bg-black/75">
                            <div className="flex flex-col md:p-20 p-10">
                                <span className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">{t("story.page4-1")}</span>
                                <span className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">{t("story.page4-2")}</span>
                            </div>
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={FadeUp} className="flex flex-col w-screen">
                        <img
                            src="../historia5.webp"
                            alt="image 5"
                            className="h-screen w-auto object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center bg-black/75">
                            <div className="flex flex-col md:p-20 p-10">
                                <span className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">{t("story.page5-1")}</span>
                                <span className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">{t("story.page5-2")}</span>
                            </div>
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={FadeUp} className="flex flex-col w-screen">
                        <img
                            src="../historia-final.webp"
                            alt="image 6"
                            className="h-screen w-auto object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center bg-black/75">
                            <div className="flex flex-col md:p-20 p-10">
                                <span className="md:text-4xl font-bold font-spinnaker text-ang-300 mb-4 text-3xl md:text-4xl lg:text-5xl">{t("story.page6-1")}</span>
                                <span className="md:text-3xl font-semibold font-spinnaker text-ang-300 texto mb-2">{t("story.page6-2")}</span>
                            </div>
                        </div>
                    </Animator>
                </ScrollPage>

            </ScrollContainer>
        </>
    )
}

export default Historia;