import { Button, Collapse, IconButton, Navbar } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBar() {
    const navigate = useNavigate();

    function handleHome() {
        navigate("/home")
    }
    function handleBitacora() {
        navigate("/bitacora")
    }
    function handleHistoria() {
        navigate("/historia")
    }

    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <>
            <div className="max-h-[768px] sticky top-0 z-50">
                <Navbar className="fixed border-transparent bg-black sticky top-0 z-50 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                    <div className="flex justify-between items-center">
                        <Button
                            variant="text"
                            size="lg"
                            className="font-shantell hidden lg:inline-block text-ang-300 text-lg"
                            onClick={handleHome}
                        >
                            <span>Home</span>
                        </Button>
                        <div className="flex items-center">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-x-1 mr-6">
                                    <Button
                                        variant="text"
                                        size="lg"
                                        className="font-shantell hidden lg:inline-block text-ang-300 text-lg"
                                        onClick={handleBitacora}
                                    >
                                        <span>Bitácora</span>
                                    </Button>
                                    <Button
                                        variant="text"
                                        size="lg"
                                        className="font-shantell hidden lg:inline-block text-ang-300 text-lg"
                                        onClick={handleHistoria}
                                    >
                                        <span>Mi Historia</span>
                                    </Button>
                                </div>
                                <IconButton
                                    variant="text"
                                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                    ripple={false}
                                    onClick={() => setOpenNav(!openNav)}
                                >
                                    {openNav ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            className="h-6 w-6"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <Collapse open={openNav}>
                        <div className="flex justify-center gap-x-1">
                            <Button variant="gradient" size="sm" onClick={handleHome} className="font-shantell text-ang-300">
                                <span>Home</span>
                            </Button>
                            <Button variant="gradient" size="sm" onClick={handleBitacora} className="font-shantell text-ang-300">
                                <span>Bitácora</span>
                            </Button>
                            <Button variant="gradient" size="sm" onClick={handleHistoria} className="font-shantell text-ang-300">
                                <span>Mi Historia</span>
                            </Button>
                        </div>
                    </Collapse>
                </Navbar>
            </div>
        </>
    )
}
export default NavBar;