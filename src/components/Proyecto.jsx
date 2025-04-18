import { Button, Card, CardBody, Carousel, Collapse, Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography } from "@material-tailwind/react";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Proyecto() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.backgroundImage = "url('../fondoVerdee.avif')"
    })

    const [t, i18n] = useTranslation("budget")

    const [openFuncionality, setOpenFuncionality] = useState(true);
    const [openDevelopment, setOpenDevelopment] = useState(true);

    const toggleOpenFuncionality = () => {
        setOpenFuncionality(!openFuncionality);
    }
    const toggleOpenDevelopment = () => {
        setOpenDevelopment(!openDevelopment);
    }

    const data = [
        {
            imageLink:
                "./bw-dashboard.webp",
        },
        {
            imageLink:
                "./bw-gastos.webp",
        },
        {
            imageLink:
                "./bw-viajes.webp",
        },
        {
            imageLink:
                "./bw-nuevo-viaje.webp",
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
            <div className="flex justify-center animate__animated animate__fadeInDown mt-8 mx-6">
                <img
                    className="max-h-24 rounded-lg object-cover object-center"
                    src="../proyecto.png"
                    alt="budgetwise"
                />
            </div>
            <div className="flex justify-center animate__animated animate__fadeInDown">
                <a target='_blanck' href="https://bw-budgetwise.netlify.app/login" >
                    <Typography className="flex link font-spinnaker lg:text-lg text-white mx-6 mb-8 max-w-[65rem] italic">
                        {t("wise.goto")}
                    </Typography>
                </a>
            </div>
            <div className="flex md:flex-row flex-col justify-center animate__animated animate__fadeInDown p-6 pt-0 gap-10">

                <Typography className="lg:text-lg font-spinnaker text-white mx-6 md:w-1/2 items-center flex">
                    {t("wise.description")}
                </Typography>

                <div className="md:w-2/5" >
                    <Timeline>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon className="bg-white" />
                                <Typography className="lg:text-lg font-spinnaker text-ang-700 leading-none">
                                    {t("wise.time")}
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography className="lg:text-lg font-spinnaker text-white ml-2">
                                    {t("wise.month")}
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon className="bg-white" />
                                <Typography className="lg:text-lg font-spinnaker text-ang-700 eading-none">
                                    {t("wise.team")}
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography className="lg:text-lg font-spinnaker text-white ml-2">
                                    {t("wise.people")}
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineHeader className="h-3">
                                <TimelineIcon className="bg-white" />
                                <Typography className="lg:text-lg font-spinnaker text-ang-700 leading-none">
                                    {t("wise.stack")}
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody>
                                <Typography className="lg:text-lg font-spinnaker text-white ml-2">
                                    React, Javascript, MongoDB, AntD, Tailwind CSS, Nodemailer, Cloudinary, Netlify,
                                    Render.com, Socket.io
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                    </Timeline>
                </div>

            </div>
            <div className="flex budget justify-center animate__animated animate__fadeInDown gap-8 md:p-10 p-6 pt-4">
                <div className="md:w-1/2 flex flex-col">
                    <div className="flex justify-around my-6">
                        <Button className="link font-spinnaker text-ang-700" size="lg" onClick={toggleOpenFuncionality}>{t("wise.features")}</Button>
                    </div>
                    <Collapse open={openFuncionality}>
                        <Card className="">
                            <CardBody>
                                <Typography className="font-spinnaker">
                                    {t("wise.features-desc1")}
                                </Typography>
                                <Typography className="font-spinnaker">
                                    {t("wise.features-desc2")}
                                </Typography>
                                <Typography className="font-spinnaker">
                                    {t("wise.features-desc3")}
                                </Typography>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div className="md:w-1/2">
                    <div className="flex justify-around my-6">
                        <Button className="link font-spinnaker text-ang-700" size="lg" onClick={toggleOpenDevelopment}>{t("wise.dev")}</Button>
                    </div>
                    <Collapse open={openDevelopment}>
                        <Card className="max-w-7xl">
                            <CardBody>
                                <Typography className="font-spinnaker">
                                    {t("wise.dev-desc1")}
                                </Typography>
                                <Typography className="font-spinnaker">
                                    {t("wise.dev-desc2")}
                                </Typography>
                                <Typography className="font-spinnaker">
                                    {t("wise.dev-desc3")}
                                </Typography>
                                <Typography className="font-spinnaker">
                                    {t("wise.dev-desc4")}
                                </Typography>
                                <Typography className="font-spinnaker">
                                    {t("wise.dev-desc5")}
                                </Typography>
                            </CardBody>
                        </Card>
                    </Collapse>
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

export default Proyecto;