import { useEffect, useState } from 'react'
import { useGetAllBranches } from '../../../Hooks/useBranchs'
import { useGetSalesForCategoryMonth, useGetSalesForMonth } from '../../../Hooks/useSales'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import DatePicker from "react-datepicker"
import { useGetCategories } from '../../../Hooks/useProducts';

function GraphSalesByCategories({allBranches}) {
    const colors = ['#fee7a6', '#fcdb98', '#fbd089', '#f9c47b', '#f7b96d', '#f6ad5f',
        '#f4a250', '#f39642', '#f18b34', '#ef7f26', '#ee7417', '#ec6809']

    // const { allBranches } = useGetAllBranches()
    const { categories } = useGetCategories();
    const [selectedYear, setSelectedYear] = useState(new Date)
    const [selectedCategory, setSelectedCategory] = useState('burguerP')
    const [selectedBranch, setSelectedBranch] = useState(allBranches[0]._id)
    // const [selectedBranch, setSelectedBranch] = useState(
    //     allBranches.length > 0 ? allBranches[0]._id : null
    //   );
    const { salesCategoryMonth } = useGetSalesForCategoryMonth(selectedCategory, selectedYear, selectedBranch)
    
    // useEffect(() => {
    //     if (allBranches.length > 0) {
    //       setSelectedBranch(allBranches[0]._id);
    //     }
    //   }, [allBranches]);
    

    return (
        <div className="col-lg-6 col-md-12   d-flex flex-column justify-content-around align-items-center">
            <h3 className='card-title text-center my-4 p-3'>Ventas por categoría</h3>

            <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <span className='fs-6 mb-1 fst-italic'>Seleccione año</span>
                    <DatePicker
                        selected={selectedYear}
                        onChange={(date) => setSelectedYear(date)}
                        showYearPicker
                        dateFormat="yyyy"
                        placeholderText='Seleccione año'
                    />
                </div>

                <div className='d-flex flex-column justify-content-center align-items-center'>

                    <span className='fs-6 mb-1 fst-italic'>Sucursal a ordenar</span>
                    <select className='form-select text-uppercase' style={{ maxWidth: '200px' }} value={selectedBranch} onChange={(e) => { setSelectedBranch(e.target.value) }}>
                        {
                            allBranches.map((branch) => (
                                <option value={branch.id}> {branch.name} </option>

                            ))
                        }
                    </select>

                </div>

                <div className='d-flex flex-column justify-content-center align-items-center'>

                    <span className='fs-6 mb-1 fst-italic'>Categoria</span>
                    <select className="form-select text-uppercase" onChange={(e) => setSelectedCategory(e.target.value)}>
                        {
                            categories.map((categorie, index) => (
                                <option key={index} value={categorie.ids}>{categorie.nombre}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <ResponsiveContainer className="" width="100%" aspect={2}>
                <LineChart
                    width={500}
                    height={300}
                    data={salesCategoryMonth}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sales" stroke="#f6ad5f" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default GraphSalesByCategories