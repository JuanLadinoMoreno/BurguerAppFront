import NavDash from '../components/NavDash'
import DataUser from '../components/DataUser'
import BannerSells from '../components/BannerSells'
import TableSales from '../components/TableSales'
import Graphics from '../components/Graphics'
import { useGetAllAmount, useGetAlltickets } from '../../../Hooks/useSales'
import { useGetAllBranches } from '../../../Hooks/useBranchs'


function Report() {

    const { allSales, isLoading } = useGetAlltickets()
    const { totalSales, monthsSales } = useGetAllAmount()
    const {allBranches} = useGetAllBranches()

    return (
        <>
            <div className="wrapper">
                <NavDash />


                <section className="contMen d-block top-0 w-100">
                    <DataUser />
                    <div className="container-lg">
                        <BannerSells totalSales={totalSales} monthsSales={monthsSales} allSales={allSales} />
                        <Graphics />
                        <TableSales allSales={allSales} isLoading={isLoading} allBranches={allBranches}/>
                    </div>

                </section>
            </div>

        </>
    )
}

export default Report