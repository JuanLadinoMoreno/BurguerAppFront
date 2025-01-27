import { useState, useEffect } from "react";

export const useFilterData = ({cartsUser=[]}) => {
    try {
        const [salesDataCopy, setsalesDataCopy] = useState([])
        const [selectedType, setSelectedType] = useState("")
        const [selectedStatus, setSelectedStatus] = useState("")
        const [selectedBranch, setSelectedBranch] = useState("")
        const [selectedClient, setSelectedClient] = useState("")
        const [selectedWaiter, setSelectedWaiter] = useState("")
        const [selectedId, setSelectedId] = useState("")

        const applyFilters = () => {
            let filteredData = cartsUser;
    
            if (selectedId.trim() !== "") {
                filteredData = filteredData.filter(record =>
                    record._id.toLowerCase().includes(selectedId)
                );
            }
            if (selectedType.trim() !== "") {
                filteredData = filteredData.filter(record =>
                    record.orderType.toLowerCase().includes(selectedType)
                );
            }
    
            if (selectedStatus.trim() !== "") {
                filteredData = filteredData.filter(record =>
                    record.status.toLowerCase().includes(selectedStatus)
                );
            }
    
            if (selectedBranch.trim() !== "") {
                filteredData = filteredData.filter(record =>
                    record.branch.name.toLowerCase().includes(selectedBranch)
                );
            }
            if (selectedClient.trim() !== "") {
                filteredData = filteredData.filter(record =>
                    record.customer?.firstName?.toLowerCase().includes(selectedClient)
                );
            }
            if (selectedWaiter.trim() !== "") {
                filteredData = filteredData.filter(record =>
                    record.user?.firstName?.toLowerCase().includes(selectedWaiter)
                );
            }           
            setsalesDataCopy(filteredData); // Actualiza los datos filtrados
        };

        const changeFlter = e => setSelectedId(e.target.value.toLowerCase());
        const changeFlterBranch = e => setSelectedBranch(e.target.value.toLowerCase());
        const changeFlterClient = e => setSelectedClient(e.target.value.toLowerCase());
        const changeFlterWaiter = e => setSelectedWaiter(e.target.value.toLowerCase());
        const changeFlterState = e => setSelectedStatus(e.target.value.toLowerCase());
        const changeFlterType = e => setSelectedType(e.target.value.toLowerCase());
    
        useEffect(() => {
            applyFilters();
        }, [selectedType, selectedStatus, selectedBranch, selectedClient, selectedId, selectedWaiter]);
    
        return {salesDataCopy, setsalesDataCopy, selectedId, selectedClient, selectedBranch, selectedStatus, selectedType, selectedWaiter, changeFlter, changeFlterBranch, changeFlterClient, changeFlterState, changeFlterType, changeFlterWaiter}

    } catch (error) {

    }
}