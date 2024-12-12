import { useEffect, useState } from 'react';
import DataTable, { Alignment } from 'react-data-table-component';
import ModalDataOrder from './ModalDataOrder';

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

function TableCustomerCart({ cartsCustomer, customer, isLoading }) {

    const [rowSelected, setRowSelected] = useState(null)
    const [salesDataCopy, setsalesDataCopy] = useState([])
    const [customerName, setCustomerName] = useState('')


    useEffect(() => {

        console.log('cartsCustomer---------', cartsCustomer);
        // console.log('cartsCustomer---------', cartsCustomer[0].customer.firstName);
        setCustomerName(cartsCustomer[0]?.customer)

    }, [cartsCustomer])

    // crea una copia para poder filtrarlos
    useEffect(() => {
        if (cartsCustomer) {
            setsalesDataCopy(cartsCustomer);
        }
    }, [cartsCustomer]);

    const changeFlter = (e) => {

        const searchText = e.target.value.toLowerCase()

        if (searchText === "")
            setsalesDataCopy(cartsCustomer)

        const dataFilter = cartsCustomer.filter(record => {
            return record._id.toLowerCase().includes(searchText)
        })
        setsalesDataCopy(dataFilter)


    }


    const openModal = (row) => {
        console.log('row-------->   ', row);

        setRowSelected(row)
    }

    const conditionalRowStyles = [
        {
            when: row => row.status == 'created',
            style: {
                backgroundColor: 'green',
                color: 'white',
                '&:hover': {
                    cursor: 'pointer',
                },
            },
        },
    ]


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
                        <button className='btn btn-primary text-white m-1' data-bs-toggle="modal" data-bs-target="#modalSalesCustomer" onClick={() => openModal(row)}> <i className="fa-regular fa-eye"></i></button>

                    </div>
                </div>
            ),
        },
    ];


    return (
        <>
            <div className=" p-1 mt-3">

                <h3 className='card-title mb-2 p-1'>
                    Ordenes de:
                    <span className='fs-4 text-uppercase'>{' ' + customerName?.firstName + ' ' + customerName?.lastName}</span>
                </h3>

                {/* <div className={`container row ${isLoading ? 'disabled' : ''}`}> */}
                <div className={`container row `}>
                    <div className='col-lg-4 col-md-6  '>
                        <p>Filtrar por código</p>
                        <input className="form-control" type="text" onChange={changeFlter} />
                    </div>
                    <div className='col-lg-8 col-md-6 d-flex  justify-content-end align-items-center' >

                        <button className={`btn-prin float-end mt-2 mb-2 `} >
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
                    // expandableRows
                    // expandableRowExpanded={rowPreExpanded}
                    expandableRows
                    expandableRowExpanded={row => row.defaultExpanded}
                    expandableRowsComponent={({ data }) => (
                        <ModalDataOrder rowSelected={data} />
                    )}
                    pagination
                    paginationPerPage={7}
                    paginationPosition="bottom"
                    fixedHeader
                    customStyles={customStyles}
                    // conditionalRowStyles={conditionalRowStyles}
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

                <div className="modal fade" id="modalSalesCustomer" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

                                                                <h3 className='float-start '> Orden: <span className='font-monospace text-success'>{rowSelected._id.substr(-4, 4)}</span> </h3>

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
                                                                        <p>💲 {rowSelected.totalPrice} </p>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            {/* <div className=""> */}
                                                            <div className="productsCarr ">

                                                                {

                                                                    rowSelected.products.map((producto, index) => {
                                                                        { console.log('producto', producto) }
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

export default TableCustomerCart