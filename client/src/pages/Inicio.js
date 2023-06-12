import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Productos from "../components/Productos";
import { useLoaderData } from "react-router-dom";

const Inicio = () => {
    const [productos, setProductos] = useState([])
    const datos = useLoaderData()
    useEffect(() => {
        setProductos(datos.data)
    }, [datos])
    return <div>
        <Banner />
        <Productos productos={productos} />
    </div>
}

export default Inicio;
