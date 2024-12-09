import { useEffect, useState } from "react"
import { getAllSales, getMonthSales, getSalesforMonth, getTotalAmount } from "../services/ticketsServices"

export const useGetAlltickets = () => {
    const [allSales, setAllSales] = useState([])
    const [isLoading, setIsLoading] = useState(true)



    useEffect(() => {

        const getTickets = async () => {
            try {
                const resp = await getAllSales();
                setAllSales(resp.data.payload)
            } catch (error) {
                console.log(error);
            }
        }

        // getTickets()

        setTimeout(() => {

            getTickets()

            setIsLoading(false);
        }, 1500);

    }, []);

    return { allSales, isLoading, setIsLoading }
}


// const [totalTickets, setTotalTickets] = useState(0)

export const useGetAllAmount = () => {

    const [totalSales, setTotalSales] = useState(0)
    const [monthsSales, setMonthsSales] = useState(0)

    const getAllAmount = async () => {
        try {
            const totalSalesR = await getTotalAmount()
            const monthSalesR = await getMonthSales()
            console.log('totalSalesR', totalSalesR);
            setTotalSales(totalSalesR.data.payload.lenght == 0 ? 0 : totalSalesR.data.payload[0].total)
            setMonthsSales(monthSalesR.data.payload.lenght == 0 ? 0 : monthSalesR.data.payload[0].total)
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {

        getAllAmount();

    }, [])

    return { totalSales, monthsSales }

}

export const useGetSalesForMonth = () => {
    const [salesForMonth, setSalesForMonth] = useState([])


    const getSalesMonth = async () => {
        try {
            const resp = await getSalesforMonth()
            console.log('resp', resp);
            setSalesForMonth(resp.data.payload)
        } catch (error) {
            console.log(error);
        }

    }
        useEffect(() => {

            getSalesMonth();
            console.log('salesForMonth', salesForMonth);


        }, [])

    return { salesForMonth }
}