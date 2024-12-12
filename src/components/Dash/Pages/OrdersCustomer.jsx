import { useParams } from 'react-router-dom'
import NavDash from '../components/NavDash'
import DataUser from '../components/DataUser'
import { useGetCustomerCarts } from '../../../Hooks/useCustomers'
import TableCustomerCart from '../components/TableCustomerCart'
import TableSales from '../components/TableSales'


function OrdersCustomer() {
    
    const { cuid } = useParams()
    const {cartsCustomer, isLoading} = useGetCustomerCarts(cuid)
    return (
        <>

            <div className="wrapper">
                <NavDash />


                <section className="contMen d-block top-0 w-100">
                    <DataUser />
                    <div className="container-lg">
                        <TableCustomerCart cartsCustomer={cartsCustomer} customer={cartsCustomer.customer} isLoading={isLoading}/>
                        
                        {/* <TableSales allSales={cartsCustomer}/> */}

                        
                        
                    </div>

                </section>
            </div>
        </>
    )
}

export default OrdersCustomer