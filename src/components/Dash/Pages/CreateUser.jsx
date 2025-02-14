import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import NavDash from '../components/NavDash'
import DataUser from '../components/DataUser'
import { Link } from 'react-router-dom'
import { useCreateUser } from '../../../Hooks/useUsers'
import { onRegister, onRegisterUser } from '../../../services'
import { useGetBranchesAvailables } from '../../../Hooks/useBranchs'


function CreateUser() {

    const { branches } = useGetBranchesAvailables()

    const { register, formState: { errors }, handleSubmit, reset, setValue } = useForm()

    useEffect(() => {
        if (branches.length > 0) {
            setValue('branch', branches[0].id); // Seleccionar el primer valor disponible
        }
    }, [branches, setValue]);

    const onSubmitUser = async (data) => {

        // const {isCreated} = useCreateProd(data)

        try {

            // console.log('save', save);
            const result = await Swal.fire({
                title: "Desea crear el usuario?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Save",
                denyButtonText: `Don't save`
            })

            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                try {

                    //   const resp = await onRegister(data)
                    const resp = await onRegisterUser(data)
                    console.log('resp', resp);


                    if (resp) {
                        // console.log('resp', resp);
                        Swal.fire("Usuario creado!", "", "info");
                        reset()
                    }
                    else {
                        Swal.fire("No pue posible guardar el usuario", "", "danger");

                    }
                } catch (error) {
                    console.log(error);

                    if (error.response) {
                        Swal.fire("Permiso denegado", error.response.data.error, "warning");
                        // if (err.response.status === 403) {
                        //     const errorMessage = err.response.data.message[0];
                        //     Swal.fire("Permiso denegado", errorMessage, "warning");
                        // } else {
                        //     Swal.fire("Error al eliminar el producto", err.response.data.message || "Error desconocido", "danger");
                        // }
                    } else {
                        Swal.fire("Error al eliminar el producto", "Error desconocido", "danger");
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
                        {/* <form onSubmit={handleSubmit(onSubmitRegister)} className=" d-flex flex-column justify-content-center align-item-center gap-3 p-3 "> */}
                        <form onSubmit={handleSubmit(onSubmitUser)} className=" d-flex flex-column justify-content-center align-item-center gap-3 p-3 w-50 border-warning border-2 border-opacity-50 shadow-lg">

                            <h2>Registar usuario</h2>

                            <div className=" d-flex justify-content-end">
                                <Link className="btn btn-warning " to={'/dash/users'}>Regresar</Link>
                            </div>
                            <div className="row">

                                <div className="col-lg-12 d-flex justify-content-center align-items-start flex-column mb-3">
                                    <label className="form-label">Nombre</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        // placeholder="nombre producto"
                                        // nombre del campo para el form
                                        {...register('firstName', {
                                            required: true
                                        })}
                                    />
                                    {errors.firstName?.type === 'required' && <p className="text-danger"> El campo nombre es requerido</p>}
                                </div>

                                <div className="col-lg-12 d-flex justify-content-center align-items-start flex-column mb-3">
                                    <label className="form-label">Apellidos</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        // placeholder="nombre producto"
                                        // nombre del campo para el form
                                        {...register('lastName', {
                                            required: true
                                        })}
                                    />
                                    {errors.lastName?.type === 'required' && <p className="text-danger"> El campo apellido es requerido</p>}
                                </div>

                                <div className="col-lg-8 d-flex justify-content-center align-items-start flex-column mb-3">
                                    <label className="form-label">Correo electrónico</label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        {...register('email', {
                                            required: true
                                        })}

                                    />
                                    {errors.email?.type === 'required' && <p className="text-danger"> Correo electronico es obligatorio</p>}
                                </div>

                                <div className="col-lg-4 d-flex justify-content-center align-items-start flex-column mb-3">
                                    <label className="form-label">Edad</label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        {...register('age', {
                                            required: true
                                        })}
                                    />
                                    {errors.age?.type === 'required' && <p className="text-danger"> El campo edad es requerido</p>}
                                </div>

                                <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column mb-3">
                                    <label className="form-label">Tipo</label>
                                    <select className="form-select" {...register('tipo')}>
                                        <option value="admin">Adminstrador</option>
                                        <option value="user" >Usuario</option>
                                    </select>
                                </div>
                                <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column mb-3">
                                    <label className="form-label">Sucursal</label>
                                    <select className="form-select" {...register('branch')}>
                                        {
                                            branches.map(branch => (
                                                <option value={branch.id} >{branch.name}</option>
                                            ))
                                        }
                                    </select>
                                    {errors.branch?.type === 'required' && <p className="text-danger"> Debe seleccionar una sucursal</p>}
                                </div>
                                <div className="row">


                                    <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column mb-3">
                                        <label className="form-label">Contraseña</label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            {...register('password', {
                                                required: true,
                                                minLength: 6
                                            })}

                                        />
                                        {errors.password?.type === 'required' && <p className="text-danger"> La contraseña es oblogatoria es requerido</p>}
                                        {errors.password?.type === 'minLength' && <p className="text-danger"> Passwordesss must have at least 6 characters</p>}
                                    </div>
                                </div>

                            </div>

                            <button className="btn-prin w-50" type="submit">Registrar</button>

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

export default CreateUser