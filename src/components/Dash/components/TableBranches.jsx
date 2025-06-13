import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ModalBranch from './ModalBranch';
import { updateBranch } from "../../../services/branchServices";

function TableBranches({ allBranches, setAllBranches, isLoading }) {

    const { register, formState: { errors }, handleSubmit, setValue } = useForm()
    const [allBranchesCopy, setAllBranchesCopy] = useState([])
    const [rowSelected, setRowSelected] = useState({})
    // const { uUpdateBranch } = useUpdateBranch()

    useEffect(() => {
        if (allBranches) {
            setAllBranchesCopy(allBranches);

        }
    }, [allBranches]);

    const changeFlter = (e) => {

        const searchText = e.target.value.toLowerCase()

        if (searchText === "")
            setAllBranchesCopy(allBranches)

        const dataFilter = allBranches.filter(record => {
            return record.name.toLowerCase().includes(searchText)
        })
        setAllBranchesCopy(dataFilter)


    }

    useEffect(() => {
        if (rowSelected) {
            setValue('name', rowSelected.name);
            setValue('address', rowSelected.address);
            setValue('phone', rowSelected.phone);
            setValue('status', rowSelected.status);
        }

    }, [rowSelected, setValue])

    const openModal = (row) => {
        setRowSelected(row)
    }

    const handleUpdateBranch = async (branch) => {
        try {
            const result = await Swal.fire({
                title: "Quiere actualizar la sucursal?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Yes",
                denyButtonText: `No`
            });

            if (result.isConfirmed) {
                try {


                    const resp = await updateBranch(rowSelected._id, branch);
                    if (resp.status === 200) {

                        const clonBranches = structuredClone(allBranches);

                        const index = clonBranches.findIndex(branch => branch._id === rowSelected._id);

                        if (index !== -1) {
                            clonBranches[index] = {
                                ...clonBranches[index],
                                ...resp.data.payload
                            }
                        }
                        setAllBranches(clonBranches);

                        Swal.fire(`Sucursal actualizada `, '', "info");

                        const modalElement = document.getElementById('modalBranch');
                        const modalInstance = bootstrap.Modal.getInstance(modalElement); // Obtener la instancia del modal
                        modalInstance.hide();
                    } 
                    else {
                        Swal.fire("No fue posible actualizar la sucursal", "", "danger");
                    }
                } catch (err) {              
                    // Asegúrate de que el error capturado provenga de la API y tenga el formato esperado
                    if (err.response) {
                        if (Array.isArray(err.response.data.message)) {
                            Swal.fire("Error al actualizar", err.response.data?.message[0], "warning");
                        } else if (Array.isArray(err.response.data.error)) {
                            const erro = err.response.data.error.join('<br>')
                            return Swal.fire({
                                icon: 'warning',
                                // title: 'Permisos denegados',
                                // text: err
                                html: erro
                            });
                        }
                        // if (err.response.status === 403) {
                        //     const errorMessage = err.response.data.message[0];
                        //     Swal.fire("Permiso denegado", errorMessage, "warning");
                    } else {
                        Swal.fire("Error al actualizar sucursal", "Error desconocido", "danger");
                    }
                }
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        } catch (error) {
            console.log('error', error);
        }
    };

    const columns = [
        {
            name: 'Sucursal',
            selector: row => row.name,
            sortable: true,
            // style: {
            //     backgroundColor: 'rgba(242, 38, 19, 0.9)',
            //     color: 'white',
            //     '&:hover': {
            //         cursor: 'not-allowed',
            //     },
            // },
        },
        {
            name: 'Dirección',
            selector: row => row.address,
            sortable: true,
        },
        {
            name: 'Telefono',
            selector: row => row.phone,
            sortable: true,
        },
        {
            name: 'Estado',
            selector: row => row.status,
            sortable: true,
            cell: row => (
                <span
                    style={{
                        display: 'inline-block',
                        padding: '5px 10px',
                        borderRadius: '20px',
                        color: 'white',
                        backgroundColor: row.status === true ? 'cornflowerblue' :
                            row.status === false ? 'tomato' :
                                'transparent',
                        // color: row.status === 'finalized' ? 'white' : 'black',
                        // border: row.status === 'finalized' ? '1px solid red' : 'none',
                        textAlign: 'center',
                        letterSpacing: '1px',
                        fontSize: '12px',
                    }}
                >
                    {row.status === true ? 'Disponible' : 'No disponible'}
                </span>
            ),
        },
        {
            name: 'Acciones',
            selector: row => (
                <div className='d-flex jusify-content-center align-items-center'>
                    <div className='d-flex jusify-content-center align-items-center p-2'>
                        <button className='btn btn-warning text-white m-1' data-bs-toggle="modal" data-bs-target="#modalBranch" onClick={() => openModal(row)}> <i className="bi bi-pencil"></i></button>
                    </div>
                </div>
            ),
        },

    ];

    return (
        <>
            <h3 className='text-center m-3 text-uppercase'> Lista de suscursales </h3>
            <div className='row d-flex justify-content-between align-items-center'>
                <div className='col-lg-4'>
                    <label htmlFor="filterBranch">Filtrar por nombre de sucursal</label>
                    <input id="filterBranch" className="form-control" type="text" onChange={changeFlter} />
                </div>
                <div className='col-lg-4 d-flex justify-content-center align-items-center'>
                    <Link to={"/dash/addbranch"} className=' btn-prin m-1' > <i className="fab fa-plus m-1"></i> Crear </Link>
                </div>

            </div>
            <DataTable
                // title="Movie List"
                columns={columns}
                data={allBranchesCopy}
                // defaultSortFieldId={1}
                // selectableRows
                // onRowDoubleClicked={(row) => openModal(row)}
                // onRowDoubleClicked={(e) => {console.log('jkjhkjhkjhkjhkjhk',e)}}
                // pointerOnHover='true'
                // highlightOnHover= 'true'
                pagination
                // paginationPerPage={2}
                paginationPosition="bottom"
                fixedHeader
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

            <div className="modal fade" id="modalBranch" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    {/* <div className="row"></div> */}
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <section className="container d-flex justify-content-center align-item-center pb-4 mt-0">



                                <form onSubmit={handleSubmit(handleUpdateBranch)} className=" d-flex flex-column justify-content-center align-item-center gap-3 p-3 w-50 border-warning border-2 border-opacity-50 shadow-lg">

                                    <h2>Actualizar sucursal</h2>
                                    <div className="row">

                                        <div className="col-lg-12 d-flex justify-content-center align-items-start flex-column mb-3">
                                            <label className="form-label">Nombre</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                // placeholder="nombre producto"
                                                // nombre del campo para el form
                                                {...register('name', {
                                                    required: true
                                                })}
                                            />
                                            {errors.name?.type === 'required' && <p className="text-danger"> El campo nombre es requerido</p>}
                                        </div>

                                        <div className="col-lg-12 d-flex justify-content-center align-items-start flex-column mb-3">
                                            <label className="form-label">Dirección</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                // placeholder="nombre producto"
                                                // nombre del campo para el form
                                                {...register('address', {
                                                    required: true
                                                })}
                                            />
                                            {errors.address?.type === 'required' && <p className="text-danger"> El campo dirección es requerido</p>}
                                        </div>
                                        <div className="col-lg-12 d-flex justify-content-center align-items-start flex-column mb-3">
                                            <label className="form-label">Telefono</label>
                                            <input
                                                className="form-control"
                                                type="tel"
                                                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                // maxlength="12" 
                                                placeholder="000-000-0000"
                                                // nombre del campo para el form
                                                {...register('phone', {
                                                    required: true
                                                })}
                                            />
                                            {errors.phone?.type === 'required' && <p className="text-danger"> El campo telefono es requerido</p>}
                                        </div>

                                        {/* <div className="col-lg-8 d-flex justify-content-center align-items-start flex-column mb-3">
                                            <label className="form-label">Disponible</label>
                                            <input
                                                className="form-control"
                                                type="checkbox"
                                                {...register('status', {
                                                    required: true
                                                })}

                                            />
                                            {errors.status?.type === 'required' && <p className="text-danger"> Estado es obligatorio</p>}
                                        </div> */}

                                        <div className="form-check form-switch col-lg-2 col-sm-4 d-flex justify-content-center align-items-center flex-column">
                                            Disponible
                                            <input className="form-check-input" type="checkbox"
                                                {...register('status')}
                                            />
                                            {errors.status?.type === 'required' && <p className="text-danger"> esatdo es obligatorio</p>}
                                        </div>

                                    </div>

                                    <button className="btn-prin w-50" type="submit">Actualizar</button>

                                    {/* <div className="register">
                                <p>Ya tienes cuenta? <Link to="/session/login" > Inicia sesión </Link></p>
                            </div> */}


                                </form>

                            </section>
                        </div>

                    </div>
                </div>
            </div>




        </>
    )
}

export default TableBranches