import React from 'react'
import DataUser from '../components/DataUser'
import NavDash from '../components/NavDash'
import { useGetCustomers } from '../../../Hooks/useCustomers'
import TableCustomers from '../components/TableCustomers'

function Customers() {
    const {usersData, setUsersData, isLoading} =  useGetCustomers()
    
    return (
        <>
            
            <div className="wrapper">
                <NavDash />


                <section className="contMen d-block top-0 w-100">
                <DataUser />
                <div className="container-lg">
                <TableCustomers usersData={usersData} setUsersData={setUsersData} isLoading={isLoading} />
                {/* <TableProducts productsData={productsData} setProductsData={setProductsData} isLoading={isLoading}/> */}
                {/* <TableUsers usersData={usersData} setUsersData={setUsersData} isLoading={isLoading}/> */}

                </div>

                </section>
            </div>
        </>
    )
}

export default Customers