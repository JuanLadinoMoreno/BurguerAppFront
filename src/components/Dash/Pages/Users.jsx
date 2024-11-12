import React from 'react'
import NavDash from '../components/NavDash'
import DataUser from '../components/DataUser'
import TableUsers from '../components/TableUsers'
import { useGetUsers } from '../../../Hooks/useUsers'

function Users() {
    const {usersData, setUsersData, isLoading} =  useGetUsers()

    return (
        <>
                
            
            <div className="wrapper">
                <NavDash />


                <section className="contMen d-block top-0 w-100">
                <DataUser />
                <div className="container">
                {/* <TableProducts productsData={productsData} setProductsData={setProductsData} isLoading={isLoading}/> */}
                <TableUsers usersData={usersData} setUsersData={setUsersData} isLoading={isLoading}/>

                </div>

                </section>
            </div>
        </>
    )
}

export default Users