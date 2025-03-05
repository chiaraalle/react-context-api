import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function DefaultLayout(){
    return (
        <>
            <Header /> {/* Header è il componente che ci permette di visualizzare la barra di navigazione */}
            <Outlet /> {/* Outlet è il componente che ci permette di definire dove verranno visualizzati i componenti figli all'interno di un layout */}
        </>
    )
}

export default DefaultLayout;