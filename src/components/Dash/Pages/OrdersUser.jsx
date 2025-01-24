import { useParams } from 'react-router-dom'
import NavDash from '../components/NavDash'
import DataUser from '../components/DataUser'
import TableUserCart from '../components/TableUserCart'
import { useGetAllUserCarts } from '../../../Hooks/useUsers'
import { useGetAllBranches } from '../../../Hooks/useBranchs'

function OrdersUser() {
    const { uid } = useParams()
    const {cartsUser, isLoading} = useGetAllUserCarts(uid)
    const {allBranches} = useGetAllBranches()
    
    return (
        <div className="wrapper">
            <NavDash />


            <section className="contMen d-block top-0 w-100">
                <DataUser />
                <div className="container-lg">
                    <TableUserCart cartsUser={cartsUser} isLoading={isLoading} allBranches={allBranches}/>

                </div>

            </section>
        </div>
    )
}

export default OrdersUser