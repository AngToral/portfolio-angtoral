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
import { useTranslation } from 'react-i18next';

function App() {
  useEffect(() => {
    document.body.style.background = "#42490d"
  })

  const [t, i18n] = useTranslation("home")
  const navigate = useNavigate();

  function handleProyecto() {
    navigate("/budget-wise")
  }
  function handleMariana() {
    navigate("/mariana-mendoza")
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
              className="animate__animated animate__backInRight md:h-96 md:w-96 h-80 w-80 object-cover object-center"
              src="../angela.avif"
              alt="foto-perfil-angela-toral"
            />
          </div>
          <div className="info animate__animated animate__backInLeft flex flex-col">
            <h1 className="font-eyesomeScript text-brand-200 texto mb-2 text-5xl">
              Angela Toral
            </h1>
            <h2 className="font-spinnaker text-brand-200 texto mb-2 text-3xl">
              Web Developer
            </h2>
            <h3 className="font-spinnaker text-brand-200 texto mb-2 text-2xl">
              webdeveloper@angelatoral.es
            </h3>
            <div className='mt-2 inline-flex'>
              <IconContext.Provider
                value={{ color: '#39350f' }}
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
                        <a className="font-spinnaker text-ang-200 mb-1" target='_blanck' href="../cv-angela-toral-en.pdf" download={true} onClick={toggleOpen}>
                          English
                        </a>
                        <a className="font-spinnaker text-ang-200" target='_blanck' href="../cv-angela-toral-es.pdf" download={true} onClick={toggleOpen}>
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
            <div className="animate__animated animate__fadeIn mt-6 w-3/4 bg-ang-50 mb-6">
              <h2 className="font-spinnaker text-black mb-2 md:text-3xl font-bold">
                {t("me.aboutme")}
              </h2>
              <Typography className="font-spinnaker text-black mb-2 md:text-2xl">
                {t("me.first")}
              </Typography>  <br />
              <Typography className="font-spinnaker text-black mb-2 md:text-2xl">
                {t("me.second")}
              </Typography>  <br />
              <Typography className="font-spinnaker text-black mb-2 md:text-2xl">
                {t("me.five")}
              </Typography>
              <Typography className="font-spinnaker text-black mb-2 md:text-2xl">
                {t("me.four")}
              </Typography>
              <Typography className="font-spinnaker text-black mb-2 md:text-2xl">
                {t("me.third")}
              </Typography>  <br />
              <Typography className="font-spinnaker text-black mb-2 md:text-2xl">
                {t("me.six")}
              </Typography>  <br />
              <Typography className="font-spinnaker text-black mb-2 md:text-2xl">
                {t("me.seven")}
              </Typography>
              <Typography className="font-spinnaker text-black mb-2 md:text-2xl">
                {t("me.eight")}
              </Typography>
              <Typography className="font-spinnaker text-black mb-2 md:text-2xl">
                {t("me.nine")}
              </Typography>
              <Typography className="font-spinnaker text-black mb-2 md:text-2xl">
                {t("me.ten")}
              </Typography>
              <Typography className="font-spinnaker text-black mb-2 md:text-2xl">
                {t("me.eleven")}
              </Typography>  <br />
              <Typography className="font-spinnaker text-black mb-2 md:text-2xl">
                {t("me.twelve")}
              </Typography>  <br />
            </div>
          </div>
        </div>
      </div>
      {/* Proyectos */}
      <div className='proyecto lg:px-6 items-start flex py-16 place-content-center'>

        <div className='flex flex-col items-center justify-center lg:w-1/3 ml-6'>
          <div className='h-[200px] flex items-center'>
            <img className='max-h-[180px] mr-4' src='../logo-joshua.png' />
          </div>
          <Typography className="flex justify-center font-spinnaker text-ang-300 md:text-xl">
            Una aplicación web para un boxeador de Países Bajos, donde cada cliente podrá disfrutar del contenido deportivo de Joshua según su suscripción.
          </Typography>
          <Button onClick={handleProyecto} className='font-spinnaker text-ang-300 mt-8 w-1/2'>
            {t("budgetwise.more")}
          </Button>
        </div>

        <div className='flex flex-col items-center justify-center lg:w-1/3 ml-6'>
          <div className='h-[200px] flex items-center'>
            <img className='max-h-[200px] mr-4' src='../mariana.avif' />
          </div>
          <Typography className="flex justify-center font-spinnaker text-ang-300 md:text-xl">
            Una web para un fotógrafa profesional de Países Bajos, para mostrar su trabajo y captar clientes nuevos.
          </Typography>
          <Button onClick={handleMariana} className='font-spinnaker text-ang-300 mt-8 w-1/2'>
            {t("budgetwise.more")}
          </Button>
        </div>

        <div className='flex flex-col justify-center items-center lg:w-1/3'>
          <div className='h-[200px] flex items-center'>
            <img className='max-w-[400px] mr-4' src='../proyecto.png' />
          </div>
          <div className='flex justify-center mr-10 max-w-[500px] flex-col items-center'>
            <Typography className="ml-10 font-spinnaker text-ang-300 md:text-xl">
              {t("budgetwise.resume")}
            </Typography>
            <Button onClick={handleProyecto} className='font-spinnaker text-ang-300 mt-8 w-1/2'>
              {t("budgetwise.more")}
            </Button>
          </div>
        </div>

      </div >
      <div className='final'>
        <Marquee className='py-8' pauseOnHover="true" autoFill="true">
          <img className='lg:h-24 h-16 mr-4' src='../mongo.png' />
          <img className='lg:h-24 h-16 mr-4' src='../css.png' />
          <img className='lg:h-24 h-16 mr-4' src='../html.png' />
          <img className='lg:h-24 h-16 mr-4' src='../js.png' />
          <img className='lg:h-24 h-16 mr-4' src='../react.png' />
          <img className='lg:h-24 h-16 mr-4' src='../vite.svg' />
          <img className='lg:h-24 h-16 mr-4' src='../github.png' />
          <img className='lg:h-16 h-10 mr-4' src='../nodejs.svg' />
          <img className='lg:h-20 h-12 mr-4' src='../express.png' />
          <img className='lg:h-20 h-12 mr-4' src='../wordpress.png' />
        </Marquee>
        <div>
          <div className='flex flex-wrap pt-6 pb-6 justify-around gap-0'>
            <ScrollAnimation animateIn="animate__animated animate__backInRight" animateOnce={true}>
              <h2 className='flex justify-center font-spinnaker text-black md:text-3xl text-xl font-bold'>{t("edusection.education")}</h2>
              <div className="m-4 bg-ang-50">
                <div className='flex align-center'>
                  <div className='m-6 items-center flex place-content-center'>
                    <img
                      className="p-2 bg-white max-w-[165px] rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                      src="../nett.png"
                      alt="nuclio"
                    />
                  </div>
                  <div className='align-center place-content-center mr-4'>
                    <div className='flex '>
                      <Typography className="font-spinnaker text-black mb-2 md:text-2xl font-semibold">{t("edusection.dwa")}</Typography>
                    </div>
                    <div className='flex'>
                      <Typography className="font-spinnaker text-black mb-2 md:text-xl">Nett Digital School, Madrid ({t("edusection.act")})</Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-4 bg-ang-50">
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
                      <Typography className="font-spinnaker text-black mb-2 md:text-2xl font-semibold">{t("edusection.master")}</Typography>
                    </div>
                    <div className='flex'>
                      <Typography className="font-spinnaker text-black mb-2 md:text-xl">Nuclio Digital School, Madrid (2024)</Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-4 bg-ang-50">
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
                      <Typography className="font-spinnaker text-black mb-2 md:text-2xl font-semibold">{t("edusection.ade")}</Typography>
                    </div>
                    <div className='flex'>
                      <Typography className="font-spinnaker text-black mb-2 md:text-xl">Universidad Católica Andrés Bello, Caracas (2019)</Typography>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            {/* Cambio de sección a Experiencia */}
            <div>
              <ScrollAnimation animateIn="animate__animated animate__backInLeft" animateOnce={true}>
                <h2 className='flex justify-center font-spinnaker text-black md:text-3xl text-xl font-bold'>{t("expsection.experience")}</h2>
                <Card className="p-4 m-4 bg-ang-900 max-w-[600px]">
                  <div className='flex align-center'>
                    <div className='align-center place-content-center'>
                      <div className='flex '>
                        <h3 className="font-spinnaker text-black mb-2 md:text-2xl font-bold">Web Developer</h3>
                      </div>
                      <div className='flex'>
                        <Typography className="font-spinnaker text-black mb-2 md:text-base">Esedigital, Madrid ({t("expsection.four")})</Typography>
                      </div>
                      <div className='flex'>
                        <div>
                          <Typography className="font-spinnaker text-black my-2 md:text-xl">
                            {t("expsection.four-one")}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 m-4 bg-ang-900 max-w-[600px]">
                  <div className='flex align-center'>
                    <div className='align-center place-content-center'>
                      <div className='flex '>
                        <h3 className="font-spinnaker text-black mb-2 md:text-2xl font-bold">💻 Web Development - {t("expsection.proyects")}</h3>
                      </div>
                      <div className='flex'>
                        <Typography className="font-spinnaker text-black mb-2 md:text-base">({t("expsection.three")})</Typography>
                      </div>
                      <div className='flex'>
                        <div>
                          <Typography className="font-spinnaker text-black my-2 md:text-xl">
                            🔥 {t("expsection.three-four")} (Full Stack - MERN)
                          </Typography>
                          <a className="flex items-center text-black italic link2 font-spinnaker m-4 md:text-xl" target='_blanck' href="https://www.joshuastraining.com/" >
                            {t("expsection.three-two")} &nbsp; <p className='text-red-600 text-2xl'>!!</p>
                          </a>
                          <Typography className="font-spinnaker text-black mb-1 md:text-xl">
                            🔥 {t("expsection.three-one")} (Full Stack - MERN)
                          </Typography>
                          <a className="flex items-center text-black italic link2 font-spinnaker m-4 md:text-xl" target='_blanck' href="https://www.nanamendozago.com/" >
                            {t("expsection.three-two")} &nbsp; <p className='text-red-600 text-2xl'>!!</p>
                          </a>
                          <Typography className="font-spinnaker text-black my-2 md:text-xl">
                            🔥 {t("expsection.three-three")} BudgetWise (Full Stack - MERN)
                          </Typography>
                          <a className="flex items-center text-black italic link2 font-spinnaker m-4 md:text-xl" target='_blanck' href="https://bw-budgetwise.netlify.app/login" >
                            {t("expsection.three-two")} &nbsp; <p className='text-red-600 text-2xl'>!!</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollAnimation>
              <ScrollAnimation animateIn="animate__animated animate__backInLeft" animateOnce={true}>
                <Card className="p-4 m-4 bg-ang-900 max-w-[600px]">
                  <div className='flex align-center'>
                    <div className='align-center place-content-center'>
                      <div className='flex '>
                        <Typography className="font-spinnaker text-black mb-2 md:text-2xl font-bold">{t("expsection.two")}</Typography>
                      </div>
                      <div className='flex'>
                        <Typography className="font-spinnaker text-black mb-2 md:text-base">NVLS, Madrid ({t("expsection.two-one")})</Typography>
                      </div>
                      <div className='flex'>
                        <div>
                          <Typography className="font-spinnaker text-black mb-2 md:text-xl">
                            {t("expsection.two-two")}
                          </Typography>
                          <Typography className="font-spinnaker text-black mb-2 md:text-xl">
                            {t("expsection.two-three")}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollAnimation>
              <ScrollAnimation animateIn="animate__animated animate__backInLeft" animateOnce={true}>
                <Card className="p-4 m-4 bg-ang-900 max-w-[600px]">
                  <div className='flex align-center'>
                    <div className='align-center place-content-center'>
                      <div className='flex'>
                        <Typography className="font-spinnaker text-black mb-2 md:text-2xl font-bold">{t("expsection.one")}</Typography>
                      </div>
                      <div className='flex'>
                        <Typography className="font-spinnaker text-black mb-2 md:text-base">UCAB, Caracas ({t("expsection.one-one")})</Typography>
                      </div>
                      <div className='flex'>
                        <Typography className="font-spinnaker text-black mb-2 md:text-xl">
                          {t("expsection.one-two")}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div >
      <footer className="flex w-full flex-col lg:flex-row items-center justify-center gap-y-6 gap-x-12 border-t border-ang-400 py-6 text-center lg:justify-between">
        <ul className="ml-6 flex flex-wrap justify-center items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              className="font-spinnaker text-ang-400"
            >
              webdeveloper@angelatoral.es
            </Typography>
          </li>
          <li>
            <Typography
              target='_blanck'
              as="a"
              download={true}
              href="../cv-angela-toral-en.pdf"
              className="font-spinnaker text-ang-400 link"
            >
              CV
            </Typography>
          </li>
          <li>
            <Typography
              target='_blanck'
              as="a"
              href="https://www.linkedin.com/in/angela-toral/"
              className="font-spinnaker text-ang-400 link"
            >
              LinkedIn
            </Typography>
          </li>
          <li>
            <Typography
              target='_blanck'
              as="a"
              href="https://github.com/AngToral"
              className="mr-6 font-spinnaker text-ang-400 link"
            >
              GitHub
            </Typography>
          </li>
        </ul>
        <img src="./logo-angelatoral-claro.png" alt="logo" className="h-48" />
        <div>
          <Typography className="md:mr-6 font-spinnaker text-ang-400">
            Since 2024 - React, Vite, Javascript, Tailwind CSS, Material-Tailwind
          </Typography>
        </div>
      </footer>
    </>
  )
}

export default App
