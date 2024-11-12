import React, { useEffect } from 'react'
import ItemListContainer from '../components/Pages/Menu/ItemListContainer'
import { useParams } from 'react-router-dom';
import { useGetProducts, useGetProductsCat } from '../Hooks/useProducts';
import { Head } from '../components/Head';
import NavDash from '../components/Dash/components/NavDash';

export const Category = () => {
  const { id } = useParams();

  const { productsData } = useGetProductsCat(id);


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

  return (
    <>
      {/* <Head title={'Menu'}/> */}

      <div className="wrapper">

        <NavDash />

        <div className="main ">
        
          <ItemListContainer productsData={productsData} />
          
        </div>

      </div>



    </>
  )

}
