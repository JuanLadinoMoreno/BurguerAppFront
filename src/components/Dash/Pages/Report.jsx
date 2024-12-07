import NavDash from '../components/NavDash'
import DataUser from '../components/DataUser'
import BannerSells from '../components/BannerSells'
import TableSales from '../components/TableSales'
import { useGetAllAmount, useGetAlltickets } from '../../../Hooks/useSales'

function Report() {
    
    const {allSales, isLoading} = useGetAlltickets()
    const {totalSales, monthsSales} = useGetAllAmount()
    
    return (
        <>
            <div className="wrapper">
                <NavDash />


                <section className="contMen d-block top-0 w-100">
                    <DataUser />
                    <div className="container">
                    <BannerSells totalSales={totalSales} monthsSales={monthsSales} allSales={allSales}/>
                    <TableSales allSales={allSales} isLoading={isLoading} />
                    
                        

                    </div>

                </section>
            </div>

        </>
    )
}

export default Report