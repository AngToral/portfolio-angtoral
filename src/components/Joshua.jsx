import { Typography } from "@material-tailwind/react";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaRegClock } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { IoPeople } from "react-icons/io5";
import { FaCode } from "react-icons/fa";

function Joshua() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.backgroundImage = "url('../fondo-home.avif')"
    })

    const [t, i18n] = useTranslation("joshua")

    const data = [
        {
            imageLink:
                "./j-dashboard.webp",
        },
        {
            imageLink:
                "./j-clients.webp",
        },
        {
            imageLink:
                "./j-new-video.webp",
        },
        {
            imageLink:
                "./j-profile.webp",
        }
    ]

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setIsModalOpen(true);
        // Opcional: Prevenir desplazamiento de la página cuando el modal está abierto
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // Restaurar el desplazamiento normal
        document.body.style.overflow = "auto";
    };

    return (
        <>
            <NavBar />
            {/* primera sección */}

            <div className="flex flex-col m-8 w-full justify-center gap-5 items-center">
                <img
                    className="max-h-48 rounded-lg object-cover object-center mb-4"
                    src="../logo-joshua.png"
                    alt="joshua"
                />
                <a target='_blanck' href="https://joshuastraining.com" >
                    <Typography className="flex link font-spinnaker lg:text-lg text-black mx-6 mb-8 max-w-[65rem] italic">
                        {t("wise.goto")}
                    </Typography>
                </a>
            </div>

            {/* segunda sección */}
            <div className="flex justify-center">
                <div className="flex md:flex-row flex-col w-2/3 m-8 mt-0 gap-5 items-start">
                    <IconContext.Provider
                        value={{ color: '#969CA3' }}
                    >
                        <div className="md:w-1/3 flex flex-col items-center gap-2 h-[260px] bg-projects-200 p-5 rounded-lg" >
                            <FaRegClock className='h-10 w-10' />
                            <Typography className="lg:text-lg font-spinnaker text-white">
                                {t("wise.time")}
                            </Typography>
                            <Typography className="lg:text-lg font-spinnaker text-white ml-2">
                                {t("wise.month")}
                            </Typography>
                        </div>
                        <div className="md:w-1/3 flex flex-col items-center h-[260px] bg-projects-200 p-5 rounded-lg" >
                            <IoPeople className='h-10 w-10' />
                            <Typography className="lg:text-lg font-spinnaker text-white">
                                {t("wise.team")}
                            </Typography>
                            <Typography className="lg:text-lg font-spinnaker text-white ml-2">
                                {t("wise.people")}
                            </Typography>
                        </div>
                        <div className="md:w-1/3 flex flex-col items-center h-[260px] bg-projects-200 p-5 rounded-lg" >
                            <FaCode className='h-10 w-10' />
                            <Typography className="lg:text-lg font-spinnaker text-white">
                                {t("wise.stack")}
                            </Typography>
                            <Typography className="lg:text-lg font-spinnaker text-white ml-2">
                                React, Javascript, MongoDB, AntD, Tailwind CSS, Nodemailer, Cloudinary, Vercel,
                                Render.com
                            </Typography>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>

            {/* tercera sección */}
            <div className="flex flex-col m-8 w-full gap-5 items-center">
                <Typography className="lg:text-lg font-spinnaker text-black w-1/2">
                    {t("wise.description")}
                </Typography>
            </div>

            {/* cuarta sección */}
            <div className="budget flex flex-col m-8 mt-4 w-full gap-5 items-center">
                <div className="md:w-1/2 flex flex-col gap-5">
                    <div className="flex justify-around">
                        <p className="font-spinnaker text-projects-200 text-xl">{t("wise.features")}</p>
                    </div>
                    <Typography className="font-spinnaker text-black">
                        {t("wise.features-desc1")}
                    </Typography>
                    <Typography className="font-spinnaker text-black">
                        {t("wise.features-desc2")}
                    </Typography>
                    <Typography className="font-spinnaker text-black">
                        {t("wise.features-desc3")}
                    </Typography>
                </div>
            </div>

            {/* galeria  */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 m-5">
                {data.map(({ imageLink }, index) => (
                    <div
                        key={index}
                        onClick={() => openModal(imageLink)}>
                        <img
                            className="h-[500px] w-full max-w-full rounded-lg object-cover object-center"
                            src={imageLink}
                            alt="gallery-photo"
                        />
                    </div>
                ))}
            </div>

            {/* Modal para imagen ampliada */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="relative h-screen p-4">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg z-10 px-3"
                        >
                            X
                        </button>
                        <img
                            src={selectedImage}
                            alt="Imagen ampliada"
                            className="h-full"
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default Joshua;