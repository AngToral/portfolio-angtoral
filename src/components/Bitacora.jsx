import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Accordion, AccordionBody, AccordionHeader, Card, CardBody, CardHeader, IconButton, Step, Stepper, Typography } from "@material-tailwind/react";
import '../App.css'

function Bitacora() {
    useEffect(() => {
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('../bitacora.jpeg')"
    })

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
            <div className="flex justify-center animate__animated animate__fadeInDown">
                <Typography className="md:text-2xl font-bold font-shantell text-white m-6 max-w-[65rem]">
                    En esta sección cuento día a día mi proceso de desarrollo de cada uno de mis proyectos.
                </Typography>
            </div>
            <div className="mx-6 animate__animated animate__fadeInDown">
                <Accordion open={openAccordion === 1} icon={<Icon id={1} open={openAccordion} />}>
                    <AccordionHeader onClick={() => handleOpenAccordion(1)} className="md:text-2xl font-semibold font-shantell text-white hover:text-white">Portfolio (Jul. 2024)</AccordionHeader>
                    <AccordionBody>
                        <div className="w-full py-4 px-8">
                            <CardHeader floated={false} variant="gradient" color="gray" className="grid h-24 lg:p-4 place-items-center">
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
                                                <Typography className="lg:text-xl font-semibold font-shantell text-white mx-12">
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
                                                <Typography className="lg:text-xl font-semibold font-shantell text-white">
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
                                                <Typography className="lg:text-xl font-semibold font-shantell text-white">
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
                                                <Typography className="lg:text-xl font-semibold font-shantell text-white">
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
                                                <Typography className="lg:text-xl font-semibold font-shantell text-white">
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
                                                <Typography className="lg:text-xl font-semibold font-shantell text-white">
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
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-500 mb-6">
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
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-500 mb-6">
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
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-500 mb-6">
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
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-500 mb-6">
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
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-500 mb-6">
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
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-500 mb-6">
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
            <div className="mx-6 animate__animated animate__fadeInDown">
                <Accordion open={openAccordion === 2} icon={<Icon id={2} open={openAccordion} />}>
                    <AccordionHeader onClick={() => handleOpenAccordion(2)} className="md:text-2xl font-semibold font-shantell text-white hover:text-white">Fotografía (Ago. 2024)</AccordionHeader>
                    <AccordionBody>
                        <div className="w-full py-4 px-8">
                            <CardHeader floated={false} variant="gradient" color="gray" className="grid h-24 lg:p-4 place-items-center">
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
                                            onClick={() => setActiveStep(7)}
                                        >
                                            <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                                <Typography className="lg:text-xl font-semibold font-shantell text-white mx-12">
                                                    1
                                                </Typography>
                                            </div>
                                        </Step>
                                        <Step
                                            className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                                            activeClassName="ring-0 !bg-white text-white"
                                            completedClassName="!bg-white text-white"
                                            onClick={() => setActiveStep(8)}
                                        >
                                            <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                                <Typography className="lg:text-xl font-semibold font-shantell text-white mx-12">
                                                    2
                                                </Typography>
                                            </div>
                                        </Step>
                                        <Step
                                            className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                                            activeClassName="ring-0 !bg-white text-white"
                                            completedClassName="!bg-white text-white"
                                            onClick={() => setActiveStep(9)}
                                        >
                                            <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                                <Typography className="lg:text-xl font-semibold font-shantell text-white mx-12">
                                                    3
                                                </Typography>
                                            </div>
                                        </Step>
                                        <Step
                                            className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                                            activeClassName="ring-0 !bg-white text-white"
                                            completedClassName="!bg-white text-white"
                                            onClick={() => setActiveStep(10)}
                                        >
                                            <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                                <Typography className="lg:text-xl font-semibold font-shantell text-white mx-12">
                                                    4
                                                </Typography>
                                            </div>
                                        </Step>
                                        <Step
                                            className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                                            activeClassName="ring-0 !bg-white text-white"
                                            completedClassName="!bg-white text-white"
                                            onClick={() => setActiveStep(11)}
                                        >
                                            <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                                <Typography className="lg:text-xl font-semibold font-shantell text-white mx-12">
                                                    5
                                                </Typography>
                                            </div>
                                        </Step>
                                        <Step
                                            className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                                            activeClassName="ring-0 !bg-white text-white"
                                            completedClassName="!bg-white text-white"
                                            onClick={() => setActiveStep(12)}
                                        >
                                            <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                                <Typography className="lg:text-xl font-semibold font-shantell text-white mx-12">
                                                    6
                                                </Typography>
                                            </div>
                                        </Step>
                                    </Stepper>
                                </div>
                            </CardHeader>
                            <CardHeader floated={false} variant="gradient" color="gray" className="grid h-24 lg:p-4 place-items-center">
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
                                            onClick={() => setActiveStep(13)}
                                        >
                                            <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                                <Typography className="lg:text-xl font-semibold font-shantell text-white mx-12">
                                                    7
                                                </Typography>
                                            </div>
                                        </Step>
                                        <Step
                                            className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                                            activeClassName="ring-0 !bg-white text-white"
                                            completedClassName="!bg-white text-white"
                                            onClick={() => setActiveStep(14)}
                                        >
                                            <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                                <Typography className="lg:text-xl font-semibold font-shantell text-white mx-12">
                                                    8
                                                </Typography>
                                            </div>
                                        </Step>
                                        <Step
                                            className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                                            activeClassName="ring-0 !bg-white text-white"
                                            completedClassName="!bg-white text-white"
                                            onClick={() => setActiveStep(15)}
                                        >
                                            <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                                <Typography className="lg:text-xl font-semibold font-shantell text-white mx-12">
                                                    9
                                                </Typography>
                                            </div>
                                        </Step>
                                        <Step
                                            className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                                            activeClassName="ring-0 !bg-white text-white"
                                            completedClassName="!bg-white text-white"
                                            onClick={() => setActiveStep(16)}
                                        >
                                            <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                                <Typography className="lg:text-xl font-semibold font-shantell text-white mx-12">
                                                    10
                                                </Typography>
                                            </div>
                                        </Step>
                                        <Step
                                            className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                                            activeClassName="ring-0 !bg-white text-white"
                                            completedClassName="!bg-white text-white"
                                            onClick={() => setActiveStep(17)}
                                        >
                                            <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                                <Typography className="lg:text-xl font-semibold font-shantell text-white mx-12">
                                                    11
                                                </Typography>
                                            </div>
                                        </Step>
                                        <Step
                                            className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                                            activeClassName="ring-0 !bg-white text-white"
                                            completedClassName="!bg-white text-white"
                                            onClick={() => setActiveStep(18)}
                                        >
                                            <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                                <Typography className="lg:text-xl font-semibold font-shantell text-white mx-12">
                                                    12
                                                </Typography>
                                            </div>
                                        </Step>
                                    </Stepper>
                                </div>
                            </CardHeader>
                            <CardHeader floated={false} variant="gradient" color="gray" className="grid h-24 lg:p-4 place-items-center">
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
                                            onClick={() => setActiveStep(19)}
                                        >
                                            <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                                <Typography className="lg:text-xl font-semibold font-shantell text-white mx-12">
                                                    13
                                                </Typography>
                                            </div>
                                        </Step>
                                        <Step
                                            className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
                                            activeClassName="ring-0 !bg-white text-white"
                                            completedClassName="!bg-white text-white"
                                            onClick={() => setActiveStep(20)}
                                        >
                                            <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                                                <Typography className="lg:text-xl font-semibold font-shantell text-white mx-12">
                                                    14
                                                </Typography>
                                            </div>
                                        </Step>
                                    </Stepper>
                                </div>
                            </CardHeader>
                        </div>
                        <div>
                            {activeStep === 7 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-500 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            05 de agosto, 13:30. Busco librerías que conecten con la idea que tengo. Escribo las
                                            funcionalidades, pantallas, schemas y respuestas. Empiezo el backend. Creo carpetas,
                                            inicio git, instalo dependencias, uno con MongoDB, hago crud, creo rutas, instalo cors,
                                            creo back de usuarios. 21:00.
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                        <div>
                            {activeStep === 8 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-500 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            06 de agosto, 16:00. Empiezo con el backend del login, instalo bcryptjs, jwt. Verifico que todo funciona
                                            con postman. Inicio frontend, instalo dotenv, creo apis. 19:00
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                        <div>
                            {activeStep === 9 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-500 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            07 de agosto, 14:00. Empiezo frontend del login. Instalo tailwindcss, react-router-dom,
                                            librería material-tailwind y antd. Pienso un diseño para la home. Instalo sass, y empiezo
                                            con pantalla de login. 19:00.
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                        <div>
                            {activeStep === 10 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-500 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            08 de agosto, 16:30. Sigo con la pantalla del login. Importo fuente desde local que
                                            descargué de freefaces. Controlo los mensaje de error del back al front. Instalo
                                            react-js-loader. 21:00.
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                        <div>
                            {activeStep === 11 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-500 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            09 de agosto, 12:30. Sigo con los loaders en el login, y hago el back de envío de
                                            correos para cambiar contraseña. Instalo nodemailer. Creo correo de envío para cambio
                                            de contraseña por olvido, creo función de envío de backend, creo pantalla de frontend,
                                            creo función de cambio. Descubro useParams para conseguir el user a cambiar la contraseña
                                            por la url. 21:00.
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                        <div>
                            {activeStep === 12 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-500 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            12 de agosto, 16:00. Empiezo con el register. Tuve problemas con como pasaba los datos al
                                            back y no lo leía como un json. Intento meter un navbar, pero no va quedando como quiero.
                                            19:00.
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                        <div>
                            {activeStep === 13 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-500 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            13 de agosto, 15:00. Sigo con el home, ubicando el navbar como quiero. Al final uso Flex
                                            de AntD, que me facilita las ubicaciones. Hemos (la fotógrafa y yo) creado un concepto de
                                            la web, con lo que reestructuro el navbar. Creamos firma como logo para insertar. 22:00.
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                        <div>
                            {activeStep === 14 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-500 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            14 de agosto, 14:00. Termino con el home, con la foto y colores definitivos. Instalo i18next
                                            para hacer la web en inglés y español, empezando con Home. Instalo react icons. Busco liberías
                                            para hacer scroll chulos, react-scroll-motion. Estuve un rato aprendiendo la librería, y ver
                                            cuál animación quedaba mejor. 22:00.
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                        <div>
                            {activeStep === 15 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-500 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            16 de agosto, 19:00. Busco dos fuentes de google-fonts. La instalo, estructuro la animación y
                                            las posiciones de las imágenes en servicios. Inserto imagen de fondo en modo móvil en la
                                            entrada. 22:00.
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                        <div>
                            {activeStep === 16 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-500 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            19 de agosto, 16:00. Hago la parte front del “contáctame”, y el footer. Conecto el botón de
                                            arriba de contacto con el form. Me estaba costando porque estaba metiendo el id en un div
                                            dentro de todo el componente, y tiene que ser al inicio del todo. Comienzo pantalla de Sobre
                                            mí. 21:00.
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                        <div>
                            {activeStep === 17 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-500 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            20 de agosto, 20:00. Coloco un blanco transparente debajo del menú en el Home, para que se distinga
                                            mejor las letras. Inicio el back y el front de la pantalla de galería. Instalo multer. Agrego cambio
                                            de nombre a fichero en CRUD. 23:00.
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                        <div>
                            {activeStep === 18 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-500 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            21 de agosto, 20:00.Creo las apis en el front de la galeria, la creación de fotos funciona con
                                            Postman. Instalo cloudinary, creo función de upload, compruebo con Postman que funciona. Este
                                            tema de subir imágenes en un schema donde también hay texto, en el trabajo final se me complicó,
                                            y se me vuelve a complicar. Veo engorroso tener que crear dos funciones (una de crear texto y otra
                                            de actualizar con imagen). Me enfrasco en hacerlo en una sola función, pero aunque no sé si es posible,
                                            de momento lo trabajaré por separado. Estuve mucho tiempo intentado ver cómo puedo guardar las fotos
                                            dentro de una carpeta en Cloudinary, pero nada me ha funcionado. De momento, creo schema de foto y
                                            actualizo con la foto correctamente. Tengo que probar a crear de cero (llamando a las dos funciones
                                            en una misma call). 02:45.
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                        <div>
                            {activeStep === 19 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-500 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            22 de agosto, 14:00. Voy pintando las imágenes en la pantalla, hago un componente de cards para las mismas.
                                            Creo función de eliminar fotos, y está ok, pero no refresca página. AL final era un tontería, estaba pasando
                                            la variable al modal equivocado. Cambio estilo de botones predeterminados de antd. Luego, hago función de crear
                                            para hacerlo desde el front, y pruebo que vaya ok. Tengo problemas con el onFinish, porque no me agarra el
                                            console.log desde el Form, y no logro ver si me agarra o no los valores. Luego de haberlo solucionado, colocando
                                            un modal render dentro del modal donde se metía el form, queda solucionar que se guarde bien la fecha, el resto
                                            de los datos están ok. AL final tuve que instalar dayjs para transformar los valores del datepicker. Me estresan
                                            las fechas en React.js. 00:00.
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                        <div>
                            {activeStep === 20 ?
                                <Card className="animate__animated animate__fadeIn mt-6 bg-ang-500 mb-6">
                                    <CardBody >
                                        <Typography className="lg:text-xl font-spinnaker text-white">
                                            23 de agosto, 16:00. Hoy toca algo que posiblemente me tome mucho tiempo, crear la entrada de la foto desde cero
                                            con el texto que lleva todo el modelo. Empiezo por hacer la API, y la vinculo a la función del front, y pruebo.
                                            Tuve que usar a chatgpt, porque me subía el texto, pero no la imagen. Al final, me dio la función en una sola como
                                            quería en un inicio. Luego me subía la imagen sin el texto, luego de nuevo solo el texto, hasta que me daba error
                                            el message de antd. Y luego de varios cambios, ya funciona. Ahora tengo que colocarle un loader. Luego, condicioné
                                            los parámetros que hay que llenar en back y en front, los mensajes de error, y qué pintar cuando falte el 2do tema.
                                            Empiezo con editar, tuve unos problemas también, y al final el error estaba en que me faltaba colocar el cloudinary
                                            en la función de update. Hago unos arreglos visuales, como el empty y los loaders. 00:00
                                        </Typography>
                                    </CardBody>
                                </Card> :
                                null
                            }
                        </div>
                    </AccordionBody>
                </Accordion>
            </div>
        </>

    )
}

export default Bitacora;