import React from 'react'
import TableProducts from '../components/TableProducts'
import NavDash from '../components/NavDash'
import DataUser from '../components/DataUser'
import { useGetProducts } from '../../../Hooks/useProducts'

function Products() {

    const { productsData, setProductsData, isLoading } = useGetProducts()


    return (
        <>
            
            <div className="wrapper">
                <NavDash />


                <section className="contMen d-block top-0 w-100">
                <DataUser />
                <div className="container">
                <TableProducts productsData={productsData} setProductsData={setProductsData} isLoading={isLoading}/>

                </div>

                </section>
            </div>
        </>
    )
}

export default Products