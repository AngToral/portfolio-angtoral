import { Button, Card, CardBody, Collapse, Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography } from "@material-tailwind/react";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Joshua() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.backgroundImage = "url('../fondoVerdee.avif')"
    })

    const [t, i18n] = useTranslation("joshua")

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
            <div className="flex justify-center animate__animated animate__fadeInDown mt-8 mx-6">
                <img
                    className="max-h-48 rounded-lg object-cover object-center mb-4"
                    src="../logo-joshua.png"
                    alt="joshua"
                />
            </div>
            <div className="flex justify-center animate__animated animate__fadeInDown">
                <a target='_blanck' href="https://joshuastraining.com" >
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
                                <Typography className="lg:text-lg font-spinnaker text-projects-200 leading-none">
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
                                <Typography className="lg:text-lg font-spinnaker text-projects-200 eading-none">
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
                                <Typography className="lg:text-lg font-spinnaker text-projects-200 leading-none">
                                    {t("wise.stack")}
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody>
                                <Typography className="lg:text-lg font-spinnaker text-white ml-2">
                                    React, Javascript, MongoDB, AntD, Tailwind CSS, Nodemailer, Cloudinary, Vercel,
                                    Render.com
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                    </Timeline>
                </div>

            </div>
            <div className="flex budget justify-center animate__animated animate__fadeInDown gap-8 md:p-10 p-6 pt-4">
                <div className="md:w-1/2 flex flex-col">
                    <div className="flex justify-around my-6">
                        <Button className="link font-spinnaker text-projects-200" size="lg" onClick={toggleOpenFuncionality}>{t("wise.features")}</Button>
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
            </div>
        </>
    )
}

export default Joshua;