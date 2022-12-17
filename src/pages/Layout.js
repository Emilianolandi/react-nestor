import { Outlet } from "react-router-dom"

import Navegation from "../components/Navegation"

export default function Layout (){
    return (
        <>
        <Navegation />
        {/* El outlet es el lugar donde se muestra el contenudo
        de cada pagina */}
        <Outlet />
        
        </>
    )
}