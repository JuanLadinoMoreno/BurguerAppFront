import React from 'react'
import TableOrders from '../components/TableOrders'
import { useGetAllCarts } from '../../../Hooks/useSales'
import { useGetAllBranches } from '../../../Hooks/useBranchs'
import DataUser from '../components/DataUser'
import NavDash from '../components/NavDash'

function Orders() {

    const {allCarts, isLoadingCart} = useGetAllCarts()
    const {allBranches} = useGetAllBranches()


    return (
        <>
            <div className="wrapper">
                <NavDash />


                <section className="contMen d-block top-0 w-100">
                    <DataUser />
                    <div className="container-lg">
                        <TableOrders isLoadingCart={isLoadingCart} cartsUser={allCarts} allBranches={allBranches} />
                    </div>
                </section>
            </div>

        </>
    )
}

export default Orders