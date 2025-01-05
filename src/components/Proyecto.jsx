import { Button, Card, CardBody, Collapse, Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography } from "@material-tailwind/react";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Proyecto() {
    useEffect(() => {
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../hojas.webp')"
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

    return (
        <>
            <NavBar />
            <div className="flex justify-center animate__animated animate__fadeInDown mt-8">
                <img
                    className="max-h-32 max-w-38 rounded-lg object-cover object-center"
                    src="../proyecto.png"
                    alt="budgetwise"
                />
            </div>
            <div className="flex justify-center animate__animated animate__fadeInDown">
                <Typography className="lg:text-2xl font-spinnaker text-white mx-6 mb-8 max-w-[65rem]">
                    {t("wise.description")}
                </Typography>
            </div>
            <div className="flex justify-center animate__animated animate__fadeInDown">
                <a target='_blanck' href="https://bw-budgetwise.netlify.app/login" >
                    <Typography className="flex link font-spinnaker lg:text-2xl text-white mx-6 mb-8 max-w-[65rem] italic">
                        {t("wise.goto")}
                    </Typography>
                </a>
            </div>
            <div className="flex budget justify-around animate__animated animate__fadeInDown">
                <div className="lg:mx-10 mx-6 max-w-[30rem]" >
                    <Timeline>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon className="bg-white" />
                                <Typography className="lg:text-2xl font-semibold font-spinnaker text-ang-700 leading-none">
                                    {t("wise.time")}
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography className="lg:text-xl font-semibold font-spinnaker text-white ml-2">
                                    {t("wise.month")}
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon className="bg-white" />
                                <Typography className="lg:text-2xl font-semibold font-spinnaker text-ang-700 eading-none">
                                    {t("wise.team")}
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography className="lg:text-xl font-semibold font-spinnaker text-white ml-2">
                                    {t("wise.people")}
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineHeader className="h-3">
                                <TimelineIcon className="bg-white" />
                                <Typography className="lg:text-2xl font-semibold font-spinnaker text-ang-700 leading-none">
                                    {t("wise.stack")}
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody>
                                <Typography className="lg:text-xl font-semibold font-spinnaker text-white ml-2">
                                    React, Javascript, MongoDB, AntD, Tailwind CSS, Nodemailer, Cloudinary, Netlify,
                                    Render.com, Socket.io
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                    </Timeline>
                </div>
                <div >
                    <div className="flex justify-around mt-6">
                        <Button className="link font-spinnaker text-ang-700" size="lg" onClick={toggleOpenFuncionality}>{t("wise.features")}</Button>
                    </div>
                    <Collapse open={openFuncionality}>
                        <Card className="m-4 max-w-7xl">
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
                <div>
                    <div className="flex justify-around my-6">
                        <Button className="link font-spinnaker text-ang-700" size="lg" onClick={toggleOpenDevelopment}>{t("wise.dev")}</Button>
                    </div>
                    <Collapse open={openDevelopment}>
                        <Card className="m-4 max-w-7xl">
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
        </>
    )
}

export default Proyecto;