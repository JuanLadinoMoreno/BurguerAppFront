import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import ModalDataOrder from './ModalDataOrder';
import { useFilterData } from '../../../Hooks/useFilterData';
import { utilsExportToExcel } from '../../../utils/excelUtils';


const customStyles = {
    // rows: {
    // 	style: {
    // 		minHeight: '72px', // override the row height
    // 	},
    // },
    headCells: {
        style: {
            fontSize: '18px',
            color: '#EC6809',
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
        },
    },
    // cells: {
    // 	style: {
    // 		paddingLeft: '8px', // override the cell padding for data cells
    // 		paddingRight: '8px',
    // 	},
    // },d
};


function TableOrders({ isLoadingCart, cartsUser, allBranches }) {

    const { salesDataCopy, selectedId, setsalesDataCopy, selectedClient, selectedBranch, selectedStatus, selectedType, changeFlter, changeFlterBranch, changeFlterClient, changeFlterState, changeFlterType, changeFlterWaiter } = useFilterData({ cartsUser })

    // const [allSalesDataCopy, setAllSalesDataCopy] = useState([])
    const [rowSelected, setRowSelected] = useState(null)

    // crea una copia para poder filtrarlos  
    useEffect(() => {
        if (cartsUser) {
            setsalesDataCopy(cartsUser);
        }
    }, [cartsUser]);

    const openModal = (row) => {
        setRowSelected(row)
    }

    const exportToExcel = () => {
    
            const data = salesDataCopy.map(ticket => {
                return ({
                    Codigo: ticket._id.substr(-4, 4),
                    Estatus: ticket.status,
                    Tipo: ticket.orderType,
                    Vendedor: ticket.user != null ? ticket.user.firstName + ' ' + ticket.user.lastName : '',
                    Cliente: ticket.customer != null ? ticket.customer.firstName + ' ' + ticket.customer.lastName : '',
                    EmailCliente: ticket.customer != null ? ticket.customer.email : '',
                    Sucarsal: ticket.branch.name,
                    FechaVenta: new Date(ticket.createdAt).toLocaleDateString('es-ES'),
                    Monto: ticket.totalPrice,
                })
            })
    
            utilsExportToExcel(data, 'Ordenes', 'ordenes')
    
            
        };

    const columns = [
        {
            name: 'Orden',
            sortable: true,
            selector: row => row._id.substr(-4, 4),
        },
        {
            name: 'Status',
            sortable: true,
            selector: row => row.status,
            cell: row => (
                <span
                    style={{
                        display: 'inline-block',
                        padding: '5px 10px',
                        borderRadius: '20px',
                        color: 'white',
                        backgroundColor: row.status === 'created' ? 'dodgerblue' :
                            row.status === 'finalized' ? 'forestgreen' :
                                row.status === 'canceled' ? 'red' :
                                    'transparent',
                        // color: row.status === 'finalized' ? 'white' : 'black',
                        // border: row.status === 'finalized' ? '1px solid red' : 'none',
                        textAlign: 'center',
                        letterSpacing: '1px',
                        fontSize: '0.85rem'
                    }}
                >
                    {row.status}
                </span>
            ),
            // conditionalCellStyles: [
            //     {
            //         when: row => row.status === 'created',
            //         classNames: ['text-success rounded-pill'],
            //         // style: {
            //         //     backgroundColor: 'green',
            //         //     color: 'white',
            //         //     borderRadius:'20px',
            //         //     margin:'18px',
            //         //     text:'center',
            //         //     '&:hover': {
            //         //         cursor: 'pointer',
            //         //         color: 'blue',
            //         //     },
            //         // },
            //     },
            //     {
            //         when: row => row.status === 'finalized',
            //         // classNames: ['badge text-bg-success rounded-pill m-5'],
            //         style: {
            //             backgroundColor: 'green',
            //             color: 'white',
            //             borderRadius:'20px',
            //             margin:'18px',
            //             text:'center',
            //             '&:hover': {
            //                 cursor: 'pointer',
            //                 color: 'blue',
            //             },
            //         },
            //     },
            // ],
        },
        {
            name: 'Mesero',
            sortable: true,
            selector: row => row.user != null ? row.user.firstName + ' ' + row.user.lastName : '',
        },
        {
            name: 'Cliente',
            sortable: true,
            selector: row => row.customer != null ? row.customer.firstName + ' ' + row.customer.lastName : '',
        },
        {
            name: 'Sucursal',
            sortable: true,
            selector: row => row.branch?.name,
        },
        {
            name: 'Tipo',
            sortable: true,
            selector: row => row.orderType,
        },
        {
            name: 'Fecha',
            sortable: true,
            selector: row => new Date(row.createdAt).toLocaleDateString('es-ES'), // Formato ISO 8601: "YYYY-MM-DD"
        },
        {
            name: 'Total',
            selector: row => '$ ' + row.totalPrice,
        },
        {
            name: 'Acciones',
            selector: row => (
                <div className='d-flex jusify-content-center align-items-center'>
                    <div className='d-flex jusify-content-center align-items-center p-2'>

                        {/* <button className='btn btn-primary m-1' onClick={() => { console.log(row.cart._id) }}> <i className="fa-regular fa-eye"></i></button> */}
                        <button className='btn btn-primary text-white m-1' data-bs-toggle="modal" data-bs-target="#modalOrderCustomer" onClick={() => openModal(row)}> <i className="fa-regular fa-eye"></i></button>

                    </div>
                </div>
            ),
        },
    ];

    return (
        <>
            <div className=" p-1 mt-3">

                <h3 className='card-title mb-2 p-1'>
                    <span className='fs-4 '>Ordenes:</span>
                </h3>

                {/* <div className={`container row ${isLoading ? 'disabled' : ''}`}> */}

                {
                    isLoadingCart ?

                        <span></span> :

                        <div className={`container row `}>
                            <div className='col-lg-2 col-md-2  '>
                                <p>Filtrar por código</p>
                                <input className="form-control" type="text" onChange={changeFlter} />
                            </div>

                            <div className='col-lg-2 col-md-6  '>
                                <p>Filtrar por nombre mesero</p>
                                <input className="form-control" type="text" onChange={changeFlterWaiter} />
                            </div>

                            <div className='col-lg-2 col-md-6  '>
                                <p>Filtrar por nombre cliente</p>
                                <input className="form-control" type="text" onChange={changeFlterClient} />
                            </div>

                            <div className='col-lg-2 col-md-6  '>
                                <p>Filtrar por sucursal</p>
                                <select className='form-select' value={selectedBranch} onChange={changeFlterBranch} >
                                    <option value="">-Todos-</option>
                                    {
                                        allBranches.map(branch => (
                                            <option value={branch.name.trim().toLowerCase()}>{branch.name.trim()}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-6  '>
                                <p>Filtrar por estado</p>
                                <select className='form-select' value={selectedStatus} onChange={changeFlterState} >
                                    <option value="">-Todos-</option>
                                    <option value="created">Creado</option>
                                    <option value="finalized">Finalizado</option>
                                    <option value="canceled">Cancelado</option>
                                </select>
                            </div>
                            <div className='col-lg-2 col-md-6  '>
                                <p>Filtrar por tipo</p>
                                <select className='form-select' value={selectedType} onChange={changeFlterType} >
                                    <option value="">-Todos-</option>
                                    <option value="en mesa">En mesa</option>
                                    <option value="para llevar">Para llevar</option>
                                </select>
                            </div>

                            <div className='col-lg-2 col-md-6 d-flex  justify-content-end align-items-center' >

                                <button className={`btn-prin float-end mt-2 mb-2 `} onClick={exportToExcel} >
                                    {/* className={`btn-prin float-end mt-2 mb-2 ${isLoading ? 'catSelectActive' : ''}`} */}
                                    <i className="fa-solid fa-file-excel fs-4 p-2"></i>
                                    {/* <i className="fa-solid fa-download fs-4 p-2"></i> */}
                                    Descargar
                                </button>
                            </div>
                        </div>
                }

                <DataTable
                    // title='Ventas'
                    columns={columns}
                    data={salesDataCopy}
                    pagination
                    paginationPerPage={7}
                    paginationPosition="bottom"
                    fixedHeader
                    customStyles={customStyles}
                    // conditionalRowStyles={conditionalRowStyles}
                    progressPending={isLoadingCart}
                    progressComponent={
                        <div className='container d-flex justify-content-center align-items-center h-50 overflow-y-hidden'>
                            <l-dot-spinner
                                size="80"
                                speed="1.1"
                                color="#0F1854"
                            ></l-dot-spinner>
                        </div>
                    }
                />

                <ModalDataOrder rowSelected={rowSelected} />

            </div>
        </>
    )
}

export default TableOrders