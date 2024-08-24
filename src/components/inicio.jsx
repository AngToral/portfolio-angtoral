import { Button } from "@material-tailwind/react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Inicio() {
    useEffect(() => {
        document.body.style.backgroundImage = "url('../inicio.webp')"
        document.body.style.backgroundSize = "contain"
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundPosition = "center center"
    })

    const navigate = useNavigate();

    function handleHome() {
        navigate("/home")
    }

    return (
        <>
            <div className="h-screen flex justify-center items-center animate__animated animate__fadeIn">
                <Button variant="gradient" size="lg" className="inicio rounded-full" onClick={handleHome}>
                    Welcome!
                </Button>
            </div>
        </>
    )
}

export default Inicio