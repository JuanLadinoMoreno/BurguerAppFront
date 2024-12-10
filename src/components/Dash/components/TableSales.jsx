import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


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

function TableSales({ allSales, isLoading}) {

    const [rowSelected, setRowSelected] = useState(null)
    const [allSalesDataCopy, setAllSalesDataCopy] = useState([])

    const openModal = (row) => {
        setRowSelected(row)
    }

    const columns = [
        {
            name: 'Codigo',
            sortable: true,
            selector: row => row.code,
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
            setAllSalesDataCopy(allSales);
        }
    }, [allSales]);

    const changeFlter = (e) => {

        const searchText = e.target.value.toLowerCase()

        if (searchText === "")
            setAllSalesDataCopy(allSales)

        const dataFilter = allSales.filter(record => {
            return record.code.toLowerCase().includes(searchText)
        })
        setAllSalesDataCopy(dataFilter)


    }



    const exportToExcel = () => {

        const data = allSales.map(ticket => {
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

        // Crea una hoja de trabajo con los datos
        const ws = XLSX.utils.json_to_sheet(data);

        // Crea un libro de trabajo y añade la hoja
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Productos');

        // Genera el archivo Excel
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

        // Guarda el archivo usando FileSaver
        const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
        saveAs(blob, 'ventas.xlsx');
    };






    return (
        <>
            <div className=" p-1 mt-3">
                <h3 className='card-title mb-2 p-1'>Tickets de ventas</h3>
                <div className={`container row ${isLoading ? 'disabled' : ''}`}>
                    <div className='col-lg-4 col-md-6  '>
                        <p>Filtrar por código</p>
                        <input className="form-control" type="text" onChange={changeFlter} />
                    </div>
                    <div className='col-lg-8 col-md-6 d-flex  justify-content-end align-items-center' >

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
                    data={allSalesDataCopy}
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
                                                                    <p className='fw-lighter'>Cliente:
                                                                        <br />
                                                                        <span className='fw-lighter text-uppercase fs-6'>

                                                                            {rowSelected.customer != null ? ' ' + rowSelected.customer.firstName + ' ' + rowSelected.customer.lastName : ' Sin Cliente'}
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