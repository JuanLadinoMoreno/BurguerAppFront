import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGetSalesForCategoryMonth, useGetSalesForMonth } from '../../../Hooks/useSales';
import { useState } from 'react';
import { useGetAllBranches } from '../../../Hooks/useBranchs';
import GraphSalesFormonth from './GraphSalesFormonth';
import GraphSalesByCategories from './GraphSalesByCategories';


function Graphics() {
  const { allBranches, isLoading } = useGetAllBranches()

  if (isLoading || allBranches.length === 0) {
    return <div>
      <l-dot-spinner
        size="40"
        speed="1.1"
        color="#0F1854"
      >
      </l-dot-spinner>
    </div>

  }

  return (
    <>
      <div className="">
        <div className="row">
          <GraphSalesFormonth allBranches={allBranches} />

          <GraphSalesByCategories allBranches={allBranches} />
        </div>
      </div>



    </>
  )
}

export default Graphics