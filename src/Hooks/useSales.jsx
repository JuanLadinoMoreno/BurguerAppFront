import { useEffect, useState } from "react"
import { getAllSales, getMonthSales, getSalesForCategoriesMonth, getSalesforMonth, getTotalAmount } from "../services/ticketsServices"
import { getAllCarts } from "../services"

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

export const useGetSalesForMonth = (year, branch) => {
    const yearr = new Date("2025-01-01")
    const [salesForMonth, setSalesForMonth] = useState([])


    const getSalesMonth = async () => {
        if (!branch) return;
        try {
            const resp = await getSalesforMonth(year, branch)
            setSalesForMonth(resp.data.payload)
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        getSalesMonth();
    }, [year, branch])

    return { salesForMonth }
}

export const useGetSalesForCategoryMonth = (category,year, branch) => {
    const [salesCategoryMonth, setSalesCategoryMonth] = useState([])


    const getSalesCategoryMonth = async () => {
        if (!branch || !category) return;
        try {
            const resp = await getSalesForCategoriesMonth(category, year, branch)
            setSalesCategoryMonth(resp.data.payload)
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        getSalesCategoryMonth();
    }, [category, year, branch])

    return { salesCategoryMonth }
}

export const useGetAllCarts = () => {
    const [allCarts, setAllCarts] = useState([])
    const [isLoadingCart, setIsLoadingCart] = useState(true)

    useEffect(() => {

        const getTickets = async () => {
            try {
                const resp = await getAllCarts();
                setAllCarts(resp.data.payload)
            } catch (error) {
                console.log(error);
            }
        }

        setTimeout(() => {

            getTickets()

            setIsLoadingCart(false);
        }, 1500);

    }, []);

    return { allCarts, isLoadingCart }
}