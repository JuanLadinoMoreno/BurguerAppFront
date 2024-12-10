import NavDash from '../components/NavDash'
import DataUser from '../components/DataUser'
import BannerSells from '../components/BannerSells'
import TableSales from '../components/TableSales'
import Graphics from '../components/Graphics'
import { useGetAllAmount, useGetAlltickets, useGetSalesForCategoryMonth, useGetSalesForMonth } from '../../../Hooks/useSales'
import { useGetCategories } from '../../../Hooks/useProducts'

function Report() {
    
    const {allSales, isLoading} = useGetAlltickets()
    const {totalSales, monthsSales} = useGetAllAmount()
    const {salesForMonth} = useGetSalesForMonth()
    const {salesCategoryMonth} = useGetSalesForCategoryMonth('burguerP')
    const { categories } = useGetCategories();
    
    return (
        <>
            <div className="wrapper">
                <NavDash />


                <section className="contMen d-block top-0 w-100">
                    <DataUser />
                    <div className="container">
                    <BannerSells totalSales={totalSales} monthsSales={monthsSales} allSales={allSales}/>
                    <Graphics salesForMonth={salesForMonth} salesCategoryMonth= {salesCategoryMonth} categories={categories}/>
                    <TableSales allSales={allSales} isLoading={isLoading} />
                    
                        

                    </div>

                </section>
            </div>

        </>
    )
}

export default Report