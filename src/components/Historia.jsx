import { Carousel, Typography } from "@material-tailwind/react";
import NavBar from "./NavBar";
import { useEffect } from "react";


function Historia() {
    useEffect(() => {
        document.body.style.background = "black"
    })

    return (
        <>
            <NavBar />
            <Carousel
                transition={{ duration: 1 }}
                className="rounded-xl m-6 h-[56rem] animate__animated animate__fadeIn"
                loop={true}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                <div className="relative h-full w-full">
                    <img
                        src="../historia1.jpeg"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                className="md:text-4xl font-bold font-shantell text-ang-300 mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                ¡Hola!
                            </Typography>
                            <Typography className="md:text-3xl font-semibold font-shantell text-ang-300 texto mb-2">
                                En esta sección quiero contarte un poco de mi historia, quién soy, y
                                cómo llegué a donde estoy.
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="../historia2.jpeg"
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                        <div className="w-3/4 pl-12 md:w-3/4 md:pl-20 lg:pl-32">
                            <Typography className="lg:text-3xl font-semibold font-shantell text-ang-300 texto mb-2">
                                Quiero empezar contando un poco lo que ocupa mi tiempo libre y mis aficiones.
                            </Typography>
                            <Typography className="lg:text-3xl font-semibold font-shantell text-ang-300 texto mb-2">
                                Amo a los animales, y por eso tengo 4 perros y 3 gatos que son mi vida.
                            </Typography>
                            <Typography className="lg:text-3xl font-semibold font-shantell text-ang-300 texto mb-2">
                                Me gusta leer. Todas las mañana leo un poco. De crecimiento personal, o alguna novela
                                policíaca o thriller.
                            </Typography>
                            <Typography className="lg:text-3xl font-semibold font-shantell text-ang-300 texto mb-2">
                                Desde el 2021 me alucina la halterofilia. Empecé con crossfit, pero el powerlifting
                                me fascinó.
                            </Typography>
                            <Typography className="lg:text-3xl font-semibold font-shantell text-ang-300 texto mb-2">
                                Me encanta hacer manualidades. Hago maquetas, rompecabezas, e ilustro digitalmente.
                                Y desde este año, programar ocupa horas de mis días, y en mis sueños.
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="../historia3.jpeg"
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                        <div className="w-3/4 pl-12 md:pl-20 lg:pl-32">
                            <Typography className="lg:text-3xl font-semibold font-shantell text-ang-300 texto mb-2">
                                Nací en Caracas, Venezuela, y mis decisiones profesionales empiezan a mis 18
                                años, cuando terminé el bachiller: ¿qué carrera cursar? Tuve en mis opciones
                                Arquitectura, Turismo y Economía.
                            </Typography>
                            <Typography className="lg:text-3xl font-semibold font-shantell text-ang-300 texto mb-2">
                                Empecé Economía, y aunque no se me daba mal, no me estaba enamorando mi futuro
                                laboral. Estando en un país donde las normas económicas son utopía, aprender
                                de la materia y entender el por qué de todo, me ha enriquecido mucho. Pero no me veía
                                trabajando de ello. A los 3 semestres, el poder adquisitivo en mi familia empezó
                                a decaer, con lo que decidí trabajar en la universidad para pagarme la carrera.
                            </Typography>
                            <Typography className="lg:text-3xl font-semibold font-shantell text-ang-300 texto mb-2">
                                Me quedaba 1 año para graduarme y decidí estudiar a Administración de Empresas,
                                y con la carrera, cambié el trabajo también, uno en Compras. Aquí todo se veía
                                más claro. Estaba a gusto. En esta época tuve la oportunidad de colarme a clases
                                de Ingeniería Informática, y tampoco se me daba mal. Aquí empezó la espinita de la
                                programación.
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="../historia4.jpeg"
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                        <div className="w-3/4 pl-12 md:w-3/4 md:pl-20 lg:pl-32">
                            <Typography className="lg:text-3xl font-semibold font-shantell text-ang-300 texto mb-2">
                                La situación de mi país estaba cada vez peor, se hacía muy difícil seguir
                                adelante, y como muchos, planificar mi emigración era parte de mi día a día.
                                Lo primero era terminar la carrera, y sin siquiera esperar a  tener el título
                                en mis manos, a mis 24 años
                                abandoné mi país a buscar mejores oportunidades.
                            </Typography>
                            <Typography className="lg:text-3xl font-semibold font-shantell text-ang-300 texto mb-2">
                                Al tener sangre española, era lógico decidir que mi camino tenía
                                que ser volver a mis raices, pero dejar mi vida atrás, con una mano delante
                                y otra detrás, sin familia, ni amigos, y toda mi vida en solo dos maletas, no diré que
                                fue fácil. Sin embargo, mis esperanzas de tener una vida mejor, era lo que
                                me motivaba a seguir adelante. No tardé mucho en conseguir mi primer trabajo,
                                y ahora puedo decir que tengo la vida que siempre busqué.
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="../historia5.jpg"
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                        <div className="w-3/4 pl-12 md:w-3/4 md:pl-20 lg:pl-32">
                            <Typography className="lg:text-3xl font-semibold font-shantell text-ang-300 texto mb-2">
                                Tener metas es lo que hace que cualquier humano tenga
                                ganas de despertar cada mañana. Y mi espinita de programadora seguía latente.
                                Investigué, y en un abrir y cerrar de ojos, ya estaba empezando mi Master
                                en Full Stack Development. He de decir que estoy enamorada de esta profesión,
                                me encanta aprender algo nuevo todos los días, crear, resolver problemas, y
                                es que ni me doy cuenta del tiempo cuando estoy programando.
                            </Typography>
                            <Typography className="lg:text-3xl font-semibold font-shantell text-ang-300 texto mb-2">
                                Ahora, después del máster, quiero desarrollar proyectos, seguir aprendiendo,
                                y por supuesto, vivir de esto.
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="../historia-final.jpeg"
                        alt="image 3"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                        <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                            <Typography
                                className="md:text-4xl font-bold font-shantell text-ang-300 mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                ¡Gracias!
                            </Typography>
                            <Typography className="md:text-3xl font-semibold font-shantell text-ang-300 texto mb-2">
                                Por leer mi historia, y conocerme un poco más
                            </Typography>
                        </div>
                    </div>
                </div>
            </Carousel>
        </>

    )
}

export default Historia;