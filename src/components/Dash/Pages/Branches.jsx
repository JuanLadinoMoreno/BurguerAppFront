import { useGetAllBranches } from "../../../Hooks/useBranchs"
import DataUser from "../components/DataUser"
import NavDash from "../components/NavDash"
import TableBranches from "../components/TableBranches"

function Branches() {
    const { allBranches, setAllBranches, isLoading } = useGetAllBranches()
    return (
        <>
            
            <div className="wrapper">
                <NavDash />


                <section className="contMen d-block top-0 w-100">
                <DataUser />
                <div className="container-lg">
                    <TableBranches allBranches ={allBranches} setAllBranches={setAllBranches} isLoading={isLoading}/>
                </div>

                </section>
            </div>
        </>
    )
}

export default Branches