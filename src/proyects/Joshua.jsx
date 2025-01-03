import { Accordion, AccordionBody, AccordionHeader, Card, CardBody, CardHeader, Step, Stepper, Typography } from "@material-tailwind/react";
import '../App.css'
import { useTranslation } from "react-i18next";

const Joshua = ({ openAccordion, activeStep, handleOpenAccordion, setActiveStep, Icon }) => {

    const [t, i18n] = useTranslation("binnacle")

    return (
        <div>
            <div className="mx-6 animate__animated animate__fadeInDown">
                <Accordion open={openAccordion === 3} icon={<Icon id={3} open={openAccordion} />}>
                    <AccordionHeader onClick={() => handleOpenAccordion(3)} className="md:text-2xl text-lg font-semibold font-spinnaker text-white hover:text-white">
                        <div className="flex flex-col md:flex-row justify-start">
                            {t("joshua.tittle")}
                            <p className="italic md:ml-2">({t("joshua.beginning")}. 2024)</p>
                        </div>
                    </AccordionHeader>
                    <AccordionBody>
                        <div>
                            <p className="font-spinnaker md:text-xl text-white mx-5 font-semibold md:font-light">
                                {t("joshua.description1")}
                            </p>
                            <p className="font-spinnaker md:text-xl text-white mx-5 font-semibold md:font-light">
                                {t("joshua.description2")}
                            </p>
                            <p className="font-spinnaker md:text-xl text-white mx-5 font-semibold md:font-light">
                                {t("joshua.description3")}
                            </p>
                        </div>
                        <div className="w-full">
                            <CardHeader floated={false} shadow={false} color="transparent" className="grid h-24 lg:p-4 place-items-center">
                                <div className="w-full lg:px-20 px-4 pt-4 pb-8">
                                    <Stepper
                                        activeStep={activeStep}
                                        lineClassName="bg-white/50"
                                        activeLineClassName="bg-white"
                                    >
                                        <Step
                                            className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                                            activeClassName="ring-0 !bg-white text-white"
                                            completedClassName="!bg-white text-white"
                                            onClick={() => setActiveStep(39)}
                                        >
                                            <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                                <Typography className="lg:text-xl font-semibold font-spinnaker text-white mx-12">
                                                    1
                                                </Typography>
                                            </div>
                                        </Step>
                                        <Step
                                            className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                                            activeClassName="ring-0 !bg-white text-white"
                                            completedClassName="!bg-white text-white"
                                            onClick={() => setActiveStep(40)}
                                        >
                                            <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                                <Typography className="lg:text-xl font-semibold font-spinnaker text-white">
                                                    2
                                                </Typography>
                                            </div>
                                        </Step>
                                        <Step
                                            className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                                            activeClassName="ring-0 !bg-white text-white"
                                            completedClassName="!bg-white text-white"
                                            onClick={() => setActiveStep(41)}
                                        >
                                            <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                                <Typography className="lg:text-xl font-semibold font-spinnaker text-white">
                                                    3
                                                </Typography>
                                            </div>
                                        </Step>
                                        <Step
                                            className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                                            activeClassName="ring-0 !bg-white text-white"
                                            completedClassName="!bg-white text-white"
                                            onClick={() => setActiveStep(42)}
                                        >
                                            <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                                <Typography className="lg:text-xl font-semibold font-spinnaker text-white">
                                                    4
                                                </Typography>
                                            </div>
                                        </Step>
                                        <Step
                                            className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                                            activeClassName="ring-0 !bg-white text-white"
                                            completedClassName="!bg-white text-white"
                                            onClick={() => setActiveStep(43)}
                                        >
                                            <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                                <Typography className="lg:text-xl font-semibold font-spinnaker text-white">
                                                    5
                                                </Typography>
                                            </div>
                                        </Step>
                                        <Step
                                            className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                                            activeClassName="ring-0 !bg-white text-white"
                                            completedClassName="!bg-white text-white"
                                            onClick={() => setActiveStep(44)}
                                        >
                                            <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                                <Typography className="lg:text-xl font-semibold font-spinnaker text-white">
                                                    6
                                                </Typography>
                                            </div>
                                        </Step>
                                    </Stepper>
                                </div>
                            </CardHeader>
                        </div>
                        <div>
                            {activeStep === 39 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-100 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            19/12: Primera reunión con el cliente. Definimos qué quiere, una ecommerce para vender sus servicios online y presenciales de entrenador personal. Paleta de colores, y debemos crear personal branding para la imagen de la web.
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                        <div>
                            {activeStep === 40 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-100 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            23/12: creo un archivo con toda la información que necesitaré para iniciar el proyecto: funcionalidades, estructura de datos, endpoints, visualizaciones de usuarios. Además, creo bocetos para el logo de la marca personal.
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                        <div>
                            {activeStep === 41 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-100 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            26/12: empiezo backend, instalo todas las tecnologías y dependencias. Queda crear los correos que se enviarán en ciertas circunstancias.
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                        <div>
                            {activeStep === 42 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-100 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            28/12: sigo con el backend, haciendo los correos que se enviarán. Empiezo el front con Vite.
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                        <div>
                            {activeStep === 43 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-100 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            29/12: Comencé a maquetar la Home page, haciendo el navbar, instalando tailwind css.
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                        <div>
                            {activeStep === 44 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-100 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            31/12: hago cambios en los logos dispuestos en la pestaña y el navbar. Estilo el Home, quería que el navbar fuera transparente al inicio y con el scroll que tenga el color, no sabía cómo hacerlo, y vi que se podía con un addEventListener useEffect. Luego estilé el texto inicial con el primer call to action, teniendo el cuenta las posibles palabras claves para el h1.
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                    </AccordionBody>
                </Accordion>
            </div>
        </div>
    )
}

export default Joshua