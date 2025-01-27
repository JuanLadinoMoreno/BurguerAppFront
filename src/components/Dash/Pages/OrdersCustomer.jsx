import { useParams } from 'react-router-dom'
import NavDash from '../components/NavDash'
import DataUser from '../components/DataUser'
import { useGetCustomerCarts } from '../../../Hooks/useCustomers'
import TableCustomerCart from '../components/TableCustomerCart'
import TableSales from '../components/TableSales'
import { useGetAllBranches } from '../../../Hooks/useBranchs'


function OrdersCustomer() {
    
    const { cuid } = useParams()
    const {cartsCustomer, isLoading} = useGetCustomerCarts(cuid)
    const {allBranches} = useGetAllBranches()
    return (
        <>

            <div className="wrapper">
                <NavDash />


                <section className="contMen d-block top-0 w-100">
                    <DataUser />
                    <div className="container-lg">
                        <TableCustomerCart cartsUser={cartsCustomer} isLoading={isLoading} allBranches={allBranches}/>
                        
                        {/* <TableSales allSales={cartsCustomer}/> */}

                        
                        
                    </div>

                </section>
            </div>
        </>
    )
}

export default OrdersCustomer