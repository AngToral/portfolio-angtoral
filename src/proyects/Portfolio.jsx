import { Accordion, AccordionBody, AccordionHeader, Card, CardBody, CardHeader, Step, Stepper, Typography } from "@material-tailwind/react";
import '../App.css'
import { useTranslation } from "react-i18next";

const Portfolio = ({ openAccordion, activeStep, handleOpenAccordion, setActiveStep, Icon }) => {

    const [t, i18n] = useTranslation("binnacle")

    return (
        <div>
            <div className="mx-6 animate__animated animate__fadeInDown">
                <Accordion open={openAccordion === 1} icon={<Icon id={1} open={openAccordion} />}>
                    <AccordionHeader onClick={() => handleOpenAccordion(1)} className="md:text-2xl text-lg font-semibold font-spinnaker text-white hover:text-white">
                        <div className="flex flex-col md:flex-row justify-start">
                            {t("portfolio.tittle")}
                            <p className="italic md:ml-2">(Jul. 2024)</p>
                        </div>
                    </AccordionHeader>
                    <AccordionBody>
                        <div>
                            <p className="font-spinnaker md:text-xl text-white mx-5 font-semibold md:font-light">
                                {t("portfolio.description1")}
                            </p>
                            <p className="font-spinnaker md:text-xl text-white mx-5 font-semibold md:font-light">
                                {t("portfolio.description2")}
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
                                            onClick={() => setActiveStep(1)}
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
                                            onClick={() => setActiveStep(2)}
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
                                            onClick={() => setActiveStep(3)}
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
                                            onClick={() => setActiveStep(4)}
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
                                            onClick={() => setActiveStep(5)}
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
                                            onClick={() => setActiveStep(6)}
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
                            {activeStep === 1 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-100 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            Este proyecto lo empiezo el 23 de julio a las 13:30, pensando la paleta de colores, la información relevante,
                                            arquitectura de la información, creando el video de mi proyecto final de master, el prototipo
                                            de home, y añadir tareas a Trello. Seleccioné fotos tomadas por mí para ponerlas de fondo.
                                            Mi primer desafío ha sido instalar una nueva librería para
                                            mí, Material-Tailwind. Y luego, hacerme con ella. Tardé un rato. Entre entender el código, luego
                                            modificar colores… Solo pude hacer el navbar, y ni siquiera salió como tenía previsto. Mi segundo
                                            desafío es mostrar la fuente que quiero de google fonts. Y sigo con el inicio de la página con
                                            mi información. Esta parte requiere un responsive. Cierro a las 22:30.
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                        <div>
                            {activeStep === 2 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-100 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            24 de julio: empecé a las 14:30, sigo en el inicio, con mi información de contacto, y sigo con el navbar que en
                                            la noche se me ocurrió que lo que me puede estar molestando es que el fondo opaca el color que quiero.
                                            Y busco la fuente de googles fonts que quiero. He centrado la información, descargado iconos de React-icons
                                            para los enlaces a mi información, me rendí con el navbar. Tenía razón de qué pasaba, pero no se soluciona
                                            por como está compuesto el navbar.  Y ya tengo la fuente que quiero implementada. Otro problema que salió,
                                            es que el encabezado sí se desaparecía con el navbar sticky, pero luego las cards no. Tuve que arreglar el
                                            z-index del navbar. Me peleé un poco con el CSS de la parte del video, no salía como quería. Luego, al instalar
                                            el react-fast-marquee, no funcionaba. Lo hice 5 veces, hasta que me di cuenta que el texto estaba en negro, y sí
                                            que estaba funcionando. Me he mareado con el CSS de la experiencia y la educación. Divs dentro de divs me crea
                                            un inception curioso. Tengo que modificar el svg de mi universidad porque los bordes terminan muy justos y no me
                                            gusta. Lo he arreglado con Procreate. Mañana lo cambio en la web. Cierro a las 22:15.
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                        <div>
                            {activeStep === 3 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-100 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            25 de julio: empiecé a las 13:20. Cambio la imagen de la universidad primero. Sigo arreglando el CSS de la educación y la
                                            experiencia hasta que quedó como me gusta. Hice el footer, y luego subí el CV para descargar.  Luego he pasado
                                            a investigar librería de animaciones para implementar alguna. Luego de buscar, me he instalado animate.css.
                                            Busqué por un buen rato librerías para que al hacer scroll aparecieran las animaciones, y por fin funcionó con
                                            react-animate-on-scroll. He vuelto a cambiar de colores, porque cambié el fondo de la experiencia y
                                            educación para que combinara mejor. He creado la ruta hacia el proyecto y hacia Home.
                                            He sacado el navbar en otro componente para importarlo fácil en todas las pantallas. Cierro a las 23:00.
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                        <div>
                            {activeStep === 4 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-100 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            26 de julio: empecé a las 14:00. Empecé con el proyecto de FM directamente. Tardé en visualizar cómo plasmar la información.
                                            Usé a chat-GPT para el encabezado del proyecto, ya que quería que fuera como si vendiera la app.
                                            Hoy se interrumpió el tiempo de código por una llamada que tuve.
                                            De cuando en cuando, entre la conversación apañaba cosas.
                                            Culminé la pantalla del proyecto, y me dediqué a implementar animaciones.
                                            Luego pasé a la pantalla de mi historia, y cerré a las 22:15.
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                        <div>
                            {activeStep === 5 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-100 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            29 de julio: el fin de semana ha sido para descansar y estar con la familia. Hoy retomo a las 12:00, haciendo ajustes
                                            para convertir todo a responsive. No sabía cómo cambiar el fondo de cada ruta independiente. Investigué
                                            y ahora puedo personalizar los fondos como quiera. Primero busqué solo en color, y ya luego con imágenes.
                                            Lo enlacé con poner la foto de fondo más oscura.
                                            Terminé el responsive de home, proyecto, mi historia, y empecé con la última pantalla, la de bitácora.
                                            Tardé en pensar cómo quería plasmarlo. Ahora a hacerlo responsive. Cierro a las 22:00
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                        <div>
                            {activeStep === 6 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-100 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            30 de julio: abro a las 13:30. Seguimos con el responsive de Bitácora.
                                            Cambié un par de cosas para que se viera y entendiera bien al ser responsive.
                                            Agrego la ruta inicial con la imagen del prototipo del home del portfolio,
                                            como un antes del real. Hosting, dominio y ¡listo!
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

export default Portfolio