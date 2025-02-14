import React from 'react'
import NavDash from '../components/NavDash'
import DataUser from '../components/DataUser'
import ModalBranch from '../components/ModalBranch'
import { useForm } from 'react-hook-form'
import { useCreateBranch } from '../../../Hooks/useBranchs'
import { Link } from 'react-router-dom'


function CreateBranches() {
    const { register, formState: { errors }, handleSubmit, reset } = useForm()

    const onCreateBranch = async (data) => {

        // const {isCreated} = useCreateProd(data)

        try {

            // console.log('save', save);
            const result = await Swal.fire({
                title: "Desea crear nueva sucursal?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Guardar",
                denyButtonText: `No Guardar`
            })

            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                try {

                    //   const resp = await onRegister(data)

                    const resp = await useCreateBranch(data)
                    // await creaCustomer(data);

                    if (resp) {
                        // console.log('resp', resp);
                        Swal.fire("Sucursal creado!", "", "info");
                        reset()

                    }
                    else {
                        Swal.fire("No pue posible crear la sucursal", "", "danger");

                    }
                } catch (error) {
                    console.log('error', error);

                    if (error.response) {
                        Swal.fire("Permiso denegado", error.response.data.error, "warning");
                        // if (err.response.status === 403) {
                        //     const errorMessage = err.response.data.message[0];
                        //     Swal.fire("Permiso denegado", errorMessage, "warning");
                        // } else {
                        //     Swal.fire("Error al eliminar el producto", err.response.data.message || "Error desconocido", "danger");
                        // }
                    } else {
                        Swal.fire("Error al crear el cliente", "Error desconocido", "danger");
                    }
                }


            }
            else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");

            }

            // console.log('data', data);
        } catch (error) {
            Swal.fire("Error guardar el carrrito", "", "danger");
            // console.log('error', error);
        }


    }
    return (
        <>

            <div className="wrapper">
                <NavDash />

                <section className="contMen d-block top-0 w-100">

                    <DataUser />

                    <div className="container d-flex justify-content-center align-item-center mt-4">
                        <form onSubmit={handleSubmit(onCreateBranch)} className=" d-flex flex-column justify-content-center align-item-center gap-3 p-3 w-50 border-warning border-2 border-opacity-50 shadow-lg">

                            <h2>Crear sucursal</h2>
                            <div className=" d-flex justify-content-end">
                                <Link className="btn btn-warning " to={'/dash/branches'}>Regresar</Link>
                            </div>

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
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                        maxlength="12"
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

                            <button className="btn-prin w-50" type="submit">Crear</button>

                            {/* <div className="register">
                <p>Ya tienes cuenta? <Link to="/session/login" > Inicia sesión </Link></p>
            </div> */}


                        </form>
                    </div>



                </section>
            </div>


        </>
    )
}

export default CreateBranches