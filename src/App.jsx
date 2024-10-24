import { useEffect, useState } from 'react'
import './App.css'
import {
  Typography,
  Button,
  Card,
  CardBody,
  Collapse,
} from "@material-tailwind/react";
import { FaGithub, FaLinkedin, FaRegFileAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Marquee from 'react-fast-marquee';
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { useNavigate } from "react-router-dom";
import NavBar from './components/NavBar';

function App() {
  useEffect(() => {
    document.body.style.background = "black"
  })

  const navigate = useNavigate();

  function handleProyecto() {
    navigate("/proyecto")
  }

  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <NavBar />
      <div className='encabezado'>
        <div className='items-center flex flex-wrap pt-10 place-content-center'>
          <div >
            <img
              className="animate__animated animate__backInRight h-96 w-96 rounded-full object-cover object-center"
              src="../angela.webp"
              alt="foto-perfil-angela"
            />
          </div>
          <div className="info animate__animated animate__backInLeft flex flex-col">
            <Typography variant="h1" className="font-shantell text-ang-400 texto mb-2">
              Angela Toral
            </Typography>
            <Typography variant="h3" className="font-shantell text-ang-400 texto mb-2">
              FULL STACK DEVELOPER
            </Typography>
            <Typography variant="h4" className="font-shantell text-ang-400 texto mb-2">
              angtoral.dev@gmail.com
            </Typography>
            <div className='mt-2 inline-flex'>
              <IconContext.Provider
                value={{ color: '#facaca' }}
              >
                <a target='_blanck' href="https://www.linkedin.com/in/angela-toral/">
                  <FaLinkedin className='link ml-4 h-10 w-10' />
                </a>
                <a target='_blanck' href="https://github.com/AngToral">
                  <FaGithub className='link ml-4 h-10 w-10' />
                </a>
                <div>
                  <a onClick={toggleOpen}>
                    <FaRegFileAlt className='link ml-4 h-10 w-10 mb-2' />
                  </a>
                  <Collapse open={open}>
                    <Card className="bg-black">
                      <CardBody className='flex flex-col'>
                        <a className="font-spinnaker text-ang-400 mb-1" target='_blanck' href="../cv-angela-toral-en.pdf" download={true} onClick={toggleOpen}>
                          English
                        </a>
                        <a className="font-spinnaker text-ang-400" target='_blanck' href="../cv-angela-toral-es.pdf" download={true} onClick={toggleOpen}>
                          Español
                        </a>
                      </CardBody>
                    </Card>
                  </Collapse>
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div>
          <div className='animate__animated animate__backInLeft flex justify-center'>
            <Card className="animate__animated animate__fadeIn mt-6 w-3/4 bg-ang-500 mb-6">
              <CardBody >
                <Typography className="font-spinnaker text-ang-300 mb-2 md:text-3xl font-bold">
                  Sobre mí
                </Typography>
                <Typography className="font-spinnaker text-ang-300 mb-2 md:text-2xl">
                  Soy Angela, una persona organizada, perseverante, consigo solución a cualquier problema,
                  creativa, me encanta aprender, trabajar en equipo, y mejorar siempre.
                </Typography>
                <Typography className="font-spinnaker text-ang-300 mb-2 md:text-2xl">
                  Tengo una licenciatura en ADE, y llevo más de 10 años trabajando como administrativa.
                  Este 2024 he decidido diversificar mi camino laboral, y estudié un Master en Full Stack Development.
                  Y, ¿por qué desarrollo web? Desde siempre me ha gustado mucho la programación,
                  pero nunca he tenido el tiempo, dinero o valor de empezar este camino.
                  Ahora ya he decidido lanzarme al agua, y estoy forjando mi camino laboral como desarrolladora.
                </Typography>
                <Typography className="font-spinnaker text-ang-300 mb-2 md:text-2xl">
                  Ha sido un acierto emprender esta carrera. Cuando me
                  siento a programar, se me pasa el tiempo volando. ¡Me encanta!
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <div className='ml-6 items-center flex pt-6 pb-6 place-content-center'>
        <div className='proyecto flex items-center justify-center'>
          <ScrollAnimation animateIn="animate__animated animate__backInRight" animateOnce={true}>
            <video className="rounded-lg" controls>
              <source src="../budgetwise.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </ScrollAnimation>
          <div className='flex justify-center mr-10 max-w-[500px]'>
            <ScrollAnimation animateIn="animate__animated animate__backInLeft" animateOnce={true}>
              <Typography variant="h4" className="ml-10 font-spinnaker text-ang-300">
                Una app web que realicé con mis compañeros para el TFM, que gestiona
                los gastos de viajes de empleados en las empresas.
              </Typography>
              <div className='flex justify-center'>
                <Button onClick={handleProyecto} className='font-spinnaker text-ang-300 mt-4'>
                  ...más
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div >
      <div className='final'>
        <Marquee className='mb-6 p-4 bg-ang-500' pauseOnHover="true" autoFill="true">
          <img className='h-24 mr-4' src='../mongo.png' />
          <img className='h-24 mr-4' src='../css.png' />
          <img className='h-24 mr-4' src='../html.png' />
          <img className='h-24 mr-4' src='../js.png' />
          <img className='h-24 mr-4' src='../react.png' />
          <img className='h-24 mr-4' src='../vite.svg' />
          <img className='h-24 mr-4' src='../github.png' />
          <img className='h-24 mr-4' src='../node.png' />
        </Marquee>
        <div>
          <div className='flex flex-wrap pt-6 pb-6 justify-around gap-0 bg-ang-500'>
            <ScrollAnimation animateIn="animate__animated animate__backInRight" animateOnce={true}>
              <Typography className='flex justify-center font-shantell text-white md:text-3xl font-bold'>Educación</Typography>
              <Card className="m-4 bg-ang-50">
                <div className='flex align-center'>
                  <div className='m-6 items-center flex place-content-center'>
                    <img
                      className="p-2 bg-white md:h-28 md:w-38 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                      src="../nuclio.png"
                      alt="nuclio"
                    />
                  </div>
                  <div className='align-center place-content-center mr-4'>
                    <div className='flex '>
                      <Typography className="font-spinnaker text-white mb-2 md:text-2xl font-bold">Master en Full Stack Development</Typography>
                    </div>
                    <div className='flex'>
                      <Typography className="font-spinnaker text-white mb-2 md:text-xl font-semibold">Nuclio Digital School, Madrid (2024)</Typography>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="m-4 bg-ang-50">
                <div className='flex align-center'>
                  <div className='m-6 items-center flex place-content-center'>
                    <img
                      className="p-2 bg-white max-h-40 max-w-48 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                      src="../ucab.png"
                      alt="ucab"
                    />
                  </div>
                  <div className='align-center place-content-center mr-4'>
                    <div className='flex'>
                      <Typography className="font-spinnaker text-white mb-2 md:text-2xl font-bold">Administración de Empresas</Typography>
                    </div>
                    <div className='flex'>
                      <Typography className="font-spinnaker text-white mb-2 md:text-xl font-semibold">Universidad Católica Andrés Bello, Caracas (2019)</Typography>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
            {/* Cambio de sección a Experiencia */}
            <div>
              <ScrollAnimation animateIn="animate__animated animate__backInLeft" animateOnce={true}>
                <Typography className='flex justify-center font-shantell text-white md:text-3xl font-bold'>Experiencia</Typography>
                <Card className="p-4 m-4 bg-ang-50 max-w-[600px]">
                  <div className='flex align-center'>
                    <div className='align-center place-content-center'>
                      <div className='flex '>
                        <Typography className="font-spinnaker text-white mb-2 md:text-2xl font-bold">Web Developer</Typography>
                      </div>
                      <div className='flex'>
                        <Typography className="font-spinnaker text-white mb-2 md:text-base font-semibold">(Abril 2024 - Actualidad)</Typography>
                      </div>
                      <div className='flex'>
                        <div>
                          <Typography className="font-spinnaker text-white mb-2 md:text-xl font-semibold">
                            💻 Para Noviembre 2024 estoy creando una web para un boxeador profesional de Países Bajos (Full Stack - MERN)
                          </Typography>
                          <Typography className="font-spinnaker text-white mb-2 md:text-xl font-semibold">
                            💻 Desde Agosto hasta Octubre de 2024 he creado una web para un fotógrafa profesional de Países Bajos, donde mostrar su trabajo
                            para captar clientes nuevos, mostrar sus reseñas, y con un apartado de blog donde subir fotos con texto escrito por ella,
                            y otro apartado de galería donde sube sus fotos con tópicos (Full Stack - MERN)
                          </Typography>
                          <Typography className="font-spinnaker text-white mb-2 md:text-xl font-semibold">
                            💻 Desde Abril hasta Julio de 2024 he creado con 3 compañeros una aplicación web destinada a empresas que necesitan gestionar
                            los gastos de viajes de sus empleados, BudgetWise (Full Stack - MERN)
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollAnimation>
              <ScrollAnimation animateIn="animate__animated animate__backInLeft" animateOnce={true}>
                <Card className="p-4 m-4 bg-ang-50 max-w-[600px]">
                  <div className='flex align-center'>
                    <div className='align-center place-content-center'>
                      <div className='flex '>
                        <Typography className="font-spinnaker text-white mb-2 md:text-2xl font-bold">Administrativa Financiera-RHH</Typography>
                      </div>
                      <div className='flex'>
                        <Typography className="font-spinnaker text-white mb-2 md:text-base font-semibold">NVLS, Madrid (ene. 2020 - jul. 2024)</Typography>
                      </div>
                      <div className='flex'>
                        <div>
                          <Typography className="font-spinnaker text-white mb-2 md:text-xl font-semibold">
                            En todo este tiempo he trabajo en el departamento de Finanzas-RRHH y el de Producción.
                          </Typography>
                          <Typography className="font-spinnaker text-white mb-2 md:text-xl font-semibold">
                            He desarrollado tareas como Responsable de Proveedores manteniendo el
                            control de toda la facturación de proveedores, pagos y vencimiento de
                            facturas, cartera de proveedores, pedidos de compra, control de inventario, e
                            ingreso y despacho de material.
                            Y como Responsable de Jornada, gestioné los fichajes de los empleados, incidencias,
                            vacaciones, ausencias, permisos retribuidos del personal, y pagos en especie.
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollAnimation>
              <ScrollAnimation animateIn="animate__animated animate__backInLeft" animateOnce={true}>
                <Card className="p-4 m-4 bg-ang-50 max-w-[600px]">
                  <div className='flex align-center'>
                    <div className='align-center place-content-center'>
                      <div className='flex'>
                        <Typography className="font-spinnaker text-white mb-2 md:text-2xl font-bold">Administrativa de Compras</Typography>
                      </div>
                      <div className='flex'>
                        <Typography className="font-spinnaker text-white mb-2 md:text-base font-semibold">UCAB, Caracas (sep. 2015 - ene. 2019)</Typography>
                      </div>
                      <div className='flex'>
                        <Typography className="font-spinnaker text-white mb-2 md:text-xl font-semibold">
                          En este período ascendí desde becaria hasta especialista de
                          Compras, pasando por unos meses donde tuve que asumir el
                          liderazgo del departamento, desarrollando así mi responsabilidad,
                          visión estratégica y capacidad analítica.</Typography>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div >
      <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
        <ul className="ml-6 flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              className="font-shantell text-ang-400"
            >
              angtoral.dev@gmail.com
            </Typography>
          </li>
          <li>
            <Typography
              target='_blanck'
              as="a"
              download={true}
              href="../cv-angela-toral-en.pdf"
              className="font-shantell text-ang-400 link"
            >
              CV
            </Typography>
          </li>
          <li>
            <Typography
              target='_blanck'
              as="a"
              href="https://www.linkedin.com/in/angela-toral/"
              className="font-shantell text-ang-400 link"
            >
              Linked In
            </Typography>
          </li>
          <li>
            <Typography
              target='_blanck'
              as="a"
              href="https://github.com/AngToral"
              className="mr-6 font-shantell text-ang-400 link"
            >
              GitHub
            </Typography>
          </li>
        </ul>
        <div>
          <Typography className="mr-6 font-shantell text-ang-400">
            2024 - React, Vite, Javascript, Tailwind CSS, Material-Tailwind
          </Typography>
        </div>
      </footer>
    </>
  )
}

export default App
