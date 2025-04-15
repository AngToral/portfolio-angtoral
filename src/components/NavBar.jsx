import { Button, Collapse, IconButton, Menu, MenuHandler, MenuItem, MenuList, Navbar } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleDown } from "react-icons/fa";

function NavBar() {
    const navigate = useNavigate();

    function handleHome() {
        navigate("/")
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

    const [t, i18n] = useTranslation("home")

    return (
        <>
            <div className="max-h-[768px] sticky top-0 z-50">
                <Navbar className="fixed border-transparent bg-ang-100 sticky top-0 z-50 h-max max-w-full rounded-none px-4 py-2 lg:px-8">
                    <div className="flex justify-between items-center">
                        <Button
                            variant="text"
                            size="lg"
                            className="normal-case font-spinnaker hidden lg:inline-block text-ang-400 text-lg"
                            onClick={handleHome}
                        >
                            <img src="logo-angelatoral-menu.png" alt="logo-angela-toral" className="h-16" />
                        </Button>
                        <div className="flex items-center">
                            <div className="flex items-center lg:flex-row flex-row-reverse">
                                <div className="flex items-center gap-x-1 mr-6">
                                    {/* <Button
                                        variant="text"
                                        className="normal-case font-spinnaker hidden lg:inline-block text-ang-400 text-lg"
                                        onClick={handleBitacora}
                                    >
                                        <span>{t("navbar.binnacle")}</span>
                                    </Button> */}
                                    <Button
                                        variant="text"
                                        className="normal-case font-spinnaker hidden lg:inline-block text-ang-400 text-lg"
                                        onClick={handleHistoria}
                                    >
                                        <span>{t("navbar.history")}</span>
                                    </Button>
                                    <Menu>
                                        <MenuHandler>
                                            <Button variant="text" className="font-spinnaker flex text-ang-400 text-lg normal-case">
                                                {t("navbar.language")}<FaAngleDown />
                                            </Button>
                                        </MenuHandler>
                                        <MenuList className="bg-black/70 border-foto-100">
                                            <MenuItem onClick={() => i18n.changeLanguage("es")} className="text-ang-300 font-display" data-lenguage="es">🇪🇸 Español</MenuItem>
                                            <MenuItem onClick={() => i18n.changeLanguage("en")} className="text-ang-300 font-display" data-lenguage="en">🇬🇧 English</MenuItem>
                                        </MenuList>
                                    </Menu>
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
                                            color="#eee0c9"
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
                                            color="#eee0c9"

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
                        <div className="flex justify-center gap-x-2">
                            <button onClick={handleHome} className="font-spinnaker text-ang-400 bg-ang-200 p-3 rounded-lg text-sm">
                                <span >Home</span>
                            </button>
                            <button onClick={handleBitacora} className="font-spinnaker text-ang-400 bg-ang-200 p-3 rounded-lg text-sm">
                                <span>{t("navbar.binnacle")}</span>
                            </button>
                            <button onClick={handleHistoria} className="font-spinnaker text-ang-400 bg-ang-200 p-3 rounded-lg text-sm">
                                <span>{t("navbar.history")}</span>
                            </button>
                        </div>
                    </Collapse>
                </Navbar>
            </div>
        </>
    )
}
export default NavBar;