import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { useFilterDataTickets } from '../../../Hooks/useFilterData';
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

function TableSales({ allSales, isLoading, allBranches }) {

    const { salesDataCopy, setsalesDataCopy, selectedBranch, selectedType, changeFlter, changeFlterBranch, changeFlterType, changeFlterWaiter,  changeFlterClient, changeFlterTicketCode} = useFilterDataTickets({ allSales })
    const [rowSelected, setRowSelected] = useState(null)

    const openModal = (row) => {
        setRowSelected(row)
        console.log(row);
    }

    const columns = [
        {
            name: 'Ticket',
            sortable: true,
            selector: row => row.code,
        },
        {
            name: 'Orden',
            sortable: true,
            selector: row => row.cart._id.substr(-4, 4),
        },
        {
            name: 'Usuario',
            sortable: true,
            selector: row => row.user.firstName,
        },
        {
            name: 'Cliente',
            sortable: true,
            selector: row => row.customer != null ? row.customer.firstName + ' ' + row.customer.lastName : '',
        },
        {
            name: 'Sucursal',
            sortable: true,
            selector: row => row.cart.branch?.name,
        },
        {
            name: 'Tipo',
            sortable: true,
            selector: row => row.cart.orderType,
        },
        {
            name: 'Fecha',
            sortable: true,
            selector: row => new Date(row.purchase_datetime).toLocaleDateString('es-ES'), // Formato ISO 8601: "YYYY-MM-DD"
        },
        {
            name: 'Total',
            selector: row => '$ ' + row.amount,
        },
        {
            name: 'Acciones',
            selector: row => (
                <div className='d-flex jusify-content-center align-items-center'>
                    <div className='d-flex jusify-content-center align-items-center p-2'>

                        {/* <button className='btn btn-primary m-1' onClick={() => { console.log(row.cart._id) }}> <i className="fa-regular fa-eye"></i></button> */}
                        <button className='btn btn-primary text-white m-1' data-bs-toggle="modal" data-bs-target="#modalCustomer" onClick={() => openModal(row)}> <i className="fa-regular fa-eye"></i></button>

                    </div>
                </div>
            ),
        },
    ];

    // crea una copia para poder filtrarlos
    useEffect(() => {
        if (allSales) {
            setsalesDataCopy(allSales);
        }
    }, [allSales]);

    const exportToExcel = () => {

        const data = salesDataCopy.map(ticket => {
            return ({
                Codigo: ticket.code,
                // user: ticket.user.firstName + ticket.user.lastName,
                Vendedor: ticket.user != null ? ticket.user.firstName + ticket.user.lastName : '',
                Cliente: ticket.customer != null ? ticket.customer.firstName + ticket.customer.lastName : '',
                EmailCliente: ticket.customer != null ? ticket.customer.email : '',
                FechaVenta: new Date(ticket.purchase_datetime).toLocaleDateString('es-ES'),
                Monto: ticket.amount,
            })
        })

        utilsExportToExcel(data, 'DatosVentas', 'ventas')

        
    };






    return (
        <>
            <div className=" p-1 mt-3">
                <h3 className='card-title mb-2 p-1'>Tickets de ventas</h3>
                <div className={`container row ${isLoading ? 'disabled' : ''}`}>
                    <div className='col-lg-1 col-md-6  '>
                        <p>Filtrar por codigo</p>
                        <input className="form-control" type="text" onChange={changeFlterTicketCode} />
                    </div>
                    <div className='col-lg-1 col-md-6  '>
                        <p>Filtrar por orden</p>
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
                    {/* <div className='col-lg-2 col-md-6  '>
                                <p>Filtrar por estado</p>
                                <select className='form-select' value={selectedStatus} onChange={changeFlterState} >
                                    <option value="">-Todos-</option>
                                    <option value="created">Creado</option>
                                    <option value="finalized">Finalizado</option>
                                    <option value="canceled">Cancelado</option>
                                </select>
                            </div> */}
                    <div className='col-lg-2 col-md-6  '>
                        <p>Filtrar por tipo</p>
                        <select className='form-select' value={selectedType} onChange={changeFlterType} >
                            <option value="">-Todos-</option>
                            <option value="en mesa">En mesa</option>
                            <option value="para llevar">Para llevar</option>
                        </select>
                    </div>
                    <div className='col-lg-2 col-md-6 d-flex  justify-content-end align-items-center' >

                        <button className={`btn-prin float-end mt-2 mb-2 `} onClick={exportToExcel}>
                            {/* className={`btn-prin float-end mt-2 mb-2 ${isLoading ? 'catSelectActive' : ''}`} */}
                            <i className="fa-solid fa-file-excel fs-4 p-2"></i>
                            {/* <i className="fa-solid fa-download fs-4 p-2"></i> */}
                            Descargar
                        </button>
                    </div>
                </div>

                <DataTable
                    // title='Ventas'
                    columns={columns}
                    data={salesDataCopy}
                    pagination
                    paginationPerPage={7}
                    paginationPosition="bottom"
                    fixedHeader
                    customStyles={customStyles}
                    progressPending={isLoading}
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

                <div className="modal fade" id="modalCustomer" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                        {/* <div className="row"></div> */}
                        <div className="modal-content">
                            <div className="modal-header">
                                {/* <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <section className="container d-flex justify-content-center align-item-center pb-4 mt-0">

                                    <div className="contCarr container">

                                        {

                                            <div>

                                                {
                                                    rowSelected != null ?
                                                        <>
                                                            <div className="d-flex justify-content-end align-items-center gap-5  ">

                                                                <h3 className='float-start '> TIKET: <span className='font-monospace text-success'>{rowSelected.code}</span> </h3>

                                                                <div className='fs-5'>
                                                                    <p className='fw-lighter'>Sucursal:
                                                                        <br />
                                                                        <span className='fw-lighter text-uppercase fs-6'>
                                                                            {rowSelected.cart.branch.name}
                                                                        </span>

                                                                    </p>

                                                                </div>

                                                                <div className='fs-5'>
                                                                    <p className='fw-lighter'>Cliente:
                                                                        <br />
                                                                        <span className='fw-lighter text-uppercase fs-6'>

                                                                            {rowSelected.customer != null ? ' ' + rowSelected.customer.firstName + ' ' + rowSelected.customer.lastName : ' Sin Cliente'}
                                                                        </span>

                                                                    </p>

                                                                </div>

                                                                <div className='fs-5'>
                                                                    <p className='fw-lighter'>Tipo:
                                                                        <br />
                                                                        <span className='fw-lighter text-uppercase fs-6'>
                                                                            {rowSelected.cart.orderType}
                                                                        </span>

                                                                    </p>

                                                                </div>

                                                                <div className='fs-5'>
                                                                    <p className='fw-lighter'>Mesa:
                                                                        <br />
                                                                        <span className='fw-lighter text-uppercase fs-6'>
                                                                            {rowSelected.tableNumber == 0 ? rowSelected.tableNumber : 'N/A'}
                                                                        </span>

                                                                    </p>

                                                                </div>

                                                                <div className="dvCalcu ">
                                                                    <div className="total fs-4">
                                                                        <p>Total</p>
                                                                        <p>💲 {rowSelected.amount} </p>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            {/* <div className=""> */}
                                                            <div className="productsCarr ">

                                                                {

                                                                    rowSelected.productsSell.map((producto, index) => {
                                                                        return (
                                                                            <div className="prodCarr" key={index}>
                                                                                {/* <img className="imgPro" src={producto.productData.urlImg} alt="" /> */}
                                                                                <div className="titu">
                                                                                    <small>Producto</small>

                                                                                    <p>{producto.pid.nombre}</p>

                                                                                </div>

                                                                                <div>
                                                                                    <small>Extras</small>

                                                                                    {
                                                                                        producto.size != null ?
                                                                                            <>
                                                                                                <sapn>Tamaño</sapn>
                                                                                                {/* <br /> */}
                                                                                                <p className="text-end fst-italic text-body-secondary">
                                                                                                    {/* <span className="fs-5">Tamaño: </span> */}
                                                                                                    - {producto.size.nombre} +${producto.size.precio}
                                                                                                </p>
                                                                                            </>
                                                                                            : null
                                                                                    }

                                                                                    {
                                                                                        producto.selectedRevolcado != null ?
                                                                                            <>
                                                                                                <span >Sabor revolcado: </span>
                                                                                                {/* <br /> */}
                                                                                                <p className="text-end fst-italic text-body-secondary">
                                                                                                    - {producto.selectedRevolcado.nombre} +${producto.selectedRevolcado.precio}
                                                                                                </p>
                                                                                            </>
                                                                                            : null
                                                                                    }

                                                                                    {
                                                                                        producto.ingredientesExtra.length > 0 ?
                                                                                            <>
                                                                                                <span>Ingredientes extra: </span>
                                                                                                {/* <br /> */}
                                                                                                <ul className="text-end fst-italic text-body-secondary">
                                                                                                    {/* <li> */}
                                                                                                    {
                                                                                                        producto.ingredientesExtra.map(ingre => (

                                                                                                            <li className="text-end">
                                                                                                                {
                                                                                                                    ' - ' + ingre.nombre + ' +$' + (ingre.precio)
                                                                                                                }

                                                                                                            </li>

                                                                                                        ))
                                                                                                    }
                                                                                                </ul>

                                                                                            </>

                                                                                            : null
                                                                                    }





                                                                                </div>
                                                                                <div className="cantidad">
                                                                                    <small>Cantidad</small>
                                                                                    <p>{producto.quantity}</p>

                                                                                </div>
                                                                                <div className="precio">
                                                                                    <small>Precio</small>
                                                                                    <p>$ {producto.pid.precio}</p>
                                                                                </div>
                                                                                <div className="subtotal">
                                                                                    <small>Subtotal</small>
                                                                                    {/* <p>$ {producto.productData.precio * producto.quantity}</p> */}
                                                                                    <p>$
                                                                                        {
                                                                                            //  carrito.reduce((acc, producto) => acc + 

                                                                                            ((producto.pid.precio) +
                                                                                                (producto.size ? producto.size.precio : 0) +
                                                                                                (producto.selectedRevolcado ? producto.selectedRevolcado.precio : 0) +
                                                                                                (producto.ingredientesExtra.length > 0 ? producto.ingredientesExtra.reduce((acc, prod) => acc + prod.precio, 0) : 0)) *
                                                                                            (producto.quantity)

                                                                                            // (producto.quantity > 1 ? producto.quantity : 1)
                                                                                            // (producto.ingredientesExtra.length > ? )
                                                                                            // , 0)
                                                                                        }
                                                                                    </p>
                                                                                </div>
                                                                                {/* <button className="btnEliminar" onClick={() => deleteProdCart(index)}><i className="bi bi-trash-fill"></i></button> */}
                                                                            </div>
                                                                        )

                                                                    })

                                                                }


                                                            </div>
                                                            {/* </div> */}
                                                        </>



                                                        : ''
                                                }



                                            </div>


                                        }


                                    </div>

                                </section>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )

}

export default TableSales