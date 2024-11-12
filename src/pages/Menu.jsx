
import React, { useContext, useEffect, useState } from 'react'
import ItemListContainer from '../components/Pages/Menu/ItemListContainer'
import { useGetProducts } from '../Hooks/useProducts';
import { Head } from '../components/Head';
import NavBar from "../components/NavBar"
import NavDash from '../components/Dash/components/NavDash';
import { CarContext } from '../context/CarContext';


export default function Menu() {

    const { productsData, setProductsData, isLoading } = useGetProducts()

    const { setCount,
        setIsEdit,
        setIdCard } = useContext(CarContext)

    useEffect(() => {
        // Añadir la clase no-scroll a html y body al cargar la página
        document.documentElement.classList.add('no-scroll');
        document.body.classList.add('no-scroll');

        // Limpiar al desmontar el componente
        return () => {
            document.documentElement.classList.remove('no-scroll');
            document.body.classList.remove('no-scroll');
        };
    }, []);

    const clearsObjects = () => {
        setCount([]);
        setIsEdit(false)
        setIdCard('')
    }

    useEffect(() => {

        clearsObjects()

    }, [])




    return (
        <>
            <div className=" wrapper">

                <NavDash />

                {/* <Head title={'Menu'}/>
                <NavBar/> */}
                {/* <div className="contMen"> */}
                <div className="main">

                    <ItemListContainer productsData={productsData} setProductsData={setProductsData} isLoading={isLoading} />
                </div>
            </div>
            
        </>
    )
}
