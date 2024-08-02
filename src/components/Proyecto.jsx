import { Button, Card, CardBody, Collapse, Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography } from "@material-tailwind/react";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

function Proyecto() {
    useEffect(() => {
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../hojas.jpg')"
    })

    const [openFuncionality, setOpenFuncionality] = useState(false);
    const [openDevelopment, setOpenDevelopment] = useState(false);

    const toggleOpenFuncionality = () => {
        setOpenFuncionality(!openFuncionality);
    }
    const toggleOpenDevelopment = () => {
        setOpenDevelopment(!openDevelopment);
    }

    return (
        <>
            <NavBar />
            <div className="flex justify-center animate__animated animate__fadeInDown m-3">
                <img
                    className="max-h-32 max-w-38 rounded-lg object-cover object-center"
                    src="../proyecto.png"
                    alt="budgetwise"
                />
            </div>
            <div className="flex justify-center animate__animated animate__fadeInDown">
                <Typography className="lg:text-2xl font-semibold font-shantell text-white mx-6 mb-6 max-w-[65rem]">
                    La solución web perfecta para simplificar la gestión de gastos de viaje de tus empleados.
                    Nuestra plataforma permite a los empleados enviar de manera rápida y fácil sus justificantes
                    de gastos directamente a Recursos Humanos, eliminando el papeleo tedioso y reduciendo el
                    tiempo dedicado a la administración. Optimiza la eficiencia, asegura la transparencia y
                    facilita el proceso de reembolso para todos los viajes de negocios.
                </Typography>
            </div>
            <div className="flex budget justify-around animate__animated animate__fadeInDown">
                <div className="lg:mx-16 mx-6 max-w-[30rem]" >
                    <Timeline>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon className="bg-white" />
                                <Typography className="lg:text-2xl font-semibold font-shantell text-ang-700 leading-none">
                                    Tiempo de desarrollo
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography className="lg:text-xl font-semibold font-shantell text-white ml-2">
                                    3 meses
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon className="bg-white" />
                                <Typography className="lg:text-2xl font-semibold font-shantell text-ang-700 eading-none">
                                    Equipo
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography className="lg:text-xl font-semibold font-shantell text-white ml-2">
                                    3 personas
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineHeader className="h-3">
                                <TimelineIcon className="bg-white" />
                                <Typography className="lg:text-2xl font-semibold font-shantell text-ang-700 leading-none">
                                    Tecnologías
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody>
                                <Typography className="lg:text-xl font-semibold font-shantell text-white ml-2">
                                    React, Javascript, MongoDB, AntD, Tailwind CSS, Nodemailer, Cloudinary, Netlify,
                                    Render.com, Socket.io
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                    </Timeline>
                </div>
                <div >
                    <div className="flex justify-around mt-6">
                        <Button className="link font-shantell text-ang-700" size="lg" onClick={toggleOpenFuncionality}>Funcionalidades</Button>
                    </div>
                    <Collapse open={openFuncionality}>
                        <Card className="m-4 max-w-7xl">
                            <CardBody>
                                <Typography>
                                    Esta aplicación tiene dos tipos de usuarios, los empleados y los de RRH.
                                    Cada uno de los datos mostrados está filtrado, y si eres RRHH ves los
                                    de toda la empresa, y si eres empleado, solo ves tus datos.
                                </Typography>
                                <Typography>
                                    Los datos de empresa los damos de alta nosotros como dueños de la app,
                                    y luego cada perfil de RRHH da de alta a sus empleados. A su vez, ambos
                                    perfiles puede iniciar sesión (exigida para interactuar con la app)
                                    con su email y su contraseña.
                                </Typography>
                                <Typography>
                                    Se pueden ver gráficas de todos los gastos generados, la lista
                                    de todos los empleados con posibilidad de agregar, editar y eliminar
                                    (funcionalidades solo de RRHH).
                                    Ver todos los gastos de cada empleado, crear (solo empleado), aprobarlos
                                    (solo RRHH), editarlos y eliminarlos. Ver cada viaje, crear, editar y eliminar.
                                    Ver los objetivos, crearlo y crear tareas (solo empleado).
                                    Vista del calendario con los viajes. Del perfil con posibilidad de actualizar
                                    datos, y los de empresa (editar solo posible para RRHH). Y además cuenta con un
                                    chat entre RRHH y los empleados.
                                </Typography>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <div className="flex justify-around my-6">
                        <Button className="link font-shantell text-ang-700" size="lg" onClick={toggleOpenDevelopment}>Mi desarrollo</Button>
                    </div>
                    <Collapse open={openDevelopment}>
                        <Card className="m-4 max-w-7xl">
                            <CardBody>
                                <Typography>
                                    Desde el inicio nos supimos entender para el desarrollo de la web.
                                    Fluyó de manera orgánica, y siempre nos apóyabamos cuando alguien necesitaba
                                    ayuda. No dividimos por tiempo, sino por funcionalidades.
                                    Mi parte del desarrollo ha sido la de Gastos y Viajes.
                                </Typography>
                                <Typography>
                                    Por la parte del back hice todo lo relacionado al login, algunos crud, y algunos
                                    modelos, encriptado de contraseña y chequeo de usuario por token.
                                </Typography>
                                <Typography>
                                    En front, empecé por Gastos, ya que es el núcleo de la web. Al tener conocimientos
                                    administrativos y de RRHH, supe exactamente qué necesitaba plasmar, y cómo.
                                    Con lo cual no escatimé en filtros, y la información quería que quedara
                                    amena para el cliente.
                                </Typography>
                                <Typography>
                                    Aquí mis retos fueron hacer populate a muchas funciones, para mostrar la
                                    información del gasto y del viaje relacionado, usar el contexto para
                                    filtrar la información del empleado o RRHH, crear los correos que se envian
                                    al aprobar los gastos (dos tipos de correos, dependiendo de si el gasto
                                    es personal o con TDC de la empresa), y la parte de subir los justificantes
                                    al final la desarrollo uno de mis compañeros, ya que por tiempo no pude
                                    dedicarle más a que me saliera a mí.
                                </Typography>
                                <Typography>
                                    La parte de viajes fue más fácil y corta de desarrollar, ya que no era
                                    el protagonista.
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