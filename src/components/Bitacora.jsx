import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Accordion, AccordionBody, AccordionHeader, Card, CardBody, CardHeader, Carousel, Step, Stepper, Typography } from "@material-tailwind/react";
import '../App.css'
import Portfolio from "../proyects/Portfolio";
import Mariana from "../proyects/Mariana";
import { useTranslation } from "react-i18next";

function Bitacora() {
    useEffect(() => {
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('../bitacora.webp')"
    })

    const [t, i18n] = useTranslation("binnacle")

    const [openAccordion, setOpenAccordion] = useState(0);
    const [activeStep, setActiveStep] = useState(0);

    const handleOpenAccordion = (value) => setOpenAccordion(openAccordion === value ? 0 : value);

    function Icon({ id, open }) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        );
    }

    return (
        <>
            <NavBar />
            <div className="flex flex-col justify-center items-center animate__animated animate__fadeInDown">
                <p className="md:text-2xl text-lg font-bold font-spinnaker text-white mt-6">
                    {t("notebook.tittle")}
                </p>
                <p className="md:text-lg font-spinnaker text-white max-w-[65rem] m-6">
                    {t("notebook.description")}
                </p>
            </div>
            <Portfolio
                openAccordion={openAccordion}
                activeStep={activeStep}
                handleOpenAccordion={handleOpenAccordion}
                setActiveStep={setActiveStep}
                Icon={Icon}
            />
            <Mariana
                openAccordion={openAccordion}
                activeStep={activeStep}
                handleOpenAccordion={handleOpenAccordion}
                setActiveStep={setActiveStep}
                Icon={Icon}
            />
        </>

    )
}

export default Bitacora;