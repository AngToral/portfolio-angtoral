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
              Full Stack Developer
            </h2>
            <h2 className="font-spinnaker text-brand-200 texto mb-2 text-2xl">
              angtoral.dev@gmail.com
            </h2>
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
              <Typography className="font-spinnaker text-black mb-2 md:text-3xl font-bold">
                {t("me.aboutme")}
              </Typography>
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
      <div className='proyecto lg:px-6 items-center flex pt-4 pb-6 place-content-center bg-ang-100'>
        <div className='flex flex-col items-center justify-center lg:w-1/2'>
          <ScrollAnimation animateIn="animate__animated animate__backInLeft" animateOnce={true}>
            <video className="rounded-lg" controls>
              <source src="../budgetwise.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </ScrollAnimation>
          <div className='flex justify-center mr-10 max-w-[500px]'>
            <ScrollAnimation animateIn="animate__animated animate__backInLeft" animateOnce={true}>
              <Typography className="ml-10 mt-6 font-spinnaker text-ang-300 md:text-xl">
                {t("budgetwise.resume")}
              </Typography>
              <div className='flex justify-center'>
                <Button onClick={handleProyecto} className='font-spinnaker text-ang-300 mt-4'>
                  {t("budgetwise.more")}
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className='proyecto flex flex-col items-center justify-center lg:w-1/2 ml-6'>
          <ScrollAnimation animateIn="animate__animated animate__backInRight" animateOnce={true}>
            <img className='max-h-72 w-auto mr-4' src='../mariana.avif' />
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__animated animate__backInRight" animateOnce={true}>
            <Typography className="flex justify-center font-spinnaker text-ang-300 md:text-xl">
              {t("mariana.functions1")}
            </Typography>
            <Typography className="flex justify-center mt-6 font-spinnaker text-ang-300 md:text-xl">
              {t("mariana.functions2")}
            </Typography>
            <div className='flex justify-center'>
              <a href="https://www.nanamendozago.com/" target="_blanck">
                <Button className='font-spinnaker text-ang-300 mt-4'>
                  {t("expsection.three-two")}
                </Button>
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div >
      <div className='final'>
        <Marquee className='mb-6 p-4' pauseOnHover="true" autoFill="true">
          <img className='lg:h-24 h-16 mr-4' src='../mongo.png' />
          <img className='lg:h-24 h-16 mr-4' src='../css.png' />
          <img className='lg:h-24 h-16 mr-4' src='../html.png' />
          <img className='lg:h-24 h-16 mr-4' src='../js.png' />
          <img className='lg:h-24 h-16 mr-4' src='../react.png' />
          <img className='lg:h-24 h-16 mr-4' src='../vite.svg' />
          <img className='lg:h-24 h-16 mr-4' src='../github.png' />
          <img className='lg:h-16 h-10 mr-4' src='../nodejs.svg' />
          <img className='lg:h-20 h-12 mr-4' src='../express.png' />
        </Marquee>
        <div>
          <div className='flex flex-wrap pt-6 pb-6 justify-around gap-0'>
            <ScrollAnimation animateIn="animate__animated animate__backInRight" animateOnce={true}>
              <Typography className='flex justify-center font-spinnaker text-black md:text-3xl text-xl font-bold'>{t("edusection.education")}</Typography>
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
                <Typography className='flex justify-center font-spinnaker text-black md:text-3xl text-xl font-bold'>{t("expsection.experience")}</Typography>
                <Card className="p-4 m-4 bg-ang-900 max-w-[600px]">
                  <div className='flex align-center'>
                    <div className='align-center place-content-center'>
                      <div className='flex '>
                        <Typography className="font-spinnaker text-black mb-2 md:text-2xl font-bold">💻 Web Developer</Typography>
                      </div>
                      <div className='flex'>
                        <Typography className="font-spinnaker text-black mb-2 md:text-base">({t("expsection.three")})</Typography>
                      </div>
                      <div className='flex'>
                        <div>
                          <Typography className="font-spinnaker text-black my-2 md:text-xl">
                            🔥 {t("expsection.three-four")} (Full Stack - MERN)
                          </Typography>
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
      <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-ang-400 py-6 text-center md:justify-between">
        <ul className="ml-6 flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              className="font-spinnaker text-ang-400"
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
        <div>
          <Typography className="mr-6 font-spinnaker text-ang-400">
            2024 - React, Vite, Javascript, Tailwind CSS, Material-Tailwind
          </Typography>
        </div>
      </footer>
    </>
  )
}

export default App
