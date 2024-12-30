import { Carousel, Typography } from "@material-tailwind/react";
import NavBar from "./NavBar";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";


function Historia() {
    useEffect(() => {
        document.body.style.background = "black"
    })

    const [t, i18n] = useTranslation("story")

    return (
        <>
            <NavBar />
            <Carousel
                transition={{ duration: 1 }}
                className="rounded-xl m-6 h-screen animate__animated animate__fadeIn"
                loop={true}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                <div className="relative h-full w-full">
                    <img
                        src="../historia1.webp"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                className="md:text-4xl font-bold font-spinnaker text-ang-300 mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                {t("story.hello")}
                            </Typography>
                            <Typography className="md:text-3xl font-semibold font-spinnaker text-ang-300 texto mb-2">
                                {t("story.intro")}
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="../historia2.webp"
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                        <div className="w-3/4 pl-12 md:w-3/4 md:pl-20 lg:pl-32">
                            <Typography className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">
                                {t("story.page2-1")}
                            </Typography>
                            <Typography className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">
                                {t("story.page2-2")}
                            </Typography>
                            <Typography className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">
                                {t("story.page2-3")}
                            </Typography>
                            <Typography className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">
                                {t("story.page2-4")}
                            </Typography>
                            <Typography className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">
                                {t("story.page2-5")}
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="../historia3.webp"
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                        <div className="w-3/4 pl-12 md:pl-20 lg:pl-32">
                            <Typography className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">
                                {t("story.page3-1")}
                            </Typography>
                            <Typography className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">
                                {t("story.page3-2")}
                            </Typography>
                            <Typography className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">
                                {t("story.page3-3")}
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="../historia4.webp"
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                        <div className="w-3/4 pl-12 md:w-3/4 md:pl-20 lg:pl-32">
                            <Typography className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">
                                {t("story.page4-1")}
                            </Typography>
                            <Typography className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">
                                {t("story.page4-2")}
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="../historia5.webp"
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                        <div className="w-3/4 pl-12 md:w-3/4 md:pl-20 lg:pl-32">
                            <Typography className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">
                                {t("story.page5-1")}
                            </Typography>
                            <Typography className="lg:text-2xl font-spinnaker text-ang-300 texto mb-2">
                                {t("story.page5-2")}
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="../historia-final.webp"
                        alt="image 3"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                        <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                            <Typography
                                className="md:text-4xl font-bold font-spinnaker text-ang-300 mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                {t("story.page6-1")}
                            </Typography>
                            <Typography className="md:text-3xl font-semibold font-spinnaker text-ang-300 texto mb-2">
                                {t("story.page6-2")}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Carousel>
        </>

    )
}

export default Historia;