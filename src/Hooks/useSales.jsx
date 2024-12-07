import { useEffect, useState } from "react"
import { getAllSales, getMonthSales, getTotalAmount } from "../services/ticketsServices"

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