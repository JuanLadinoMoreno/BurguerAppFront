import React, { useEffect } from 'react'
import { useFieldArray } from 'react-hook-form'

function FormSnacks({ control, register, errors, setValue, categoriaSeleccionada }) {

    useEffect(() => {        
        // Registra el valor de 'categoria' con el valor seleccionado en el switch
        // register('categoria', { required: true });
        setValue('categoria', categoriaSeleccionada);
      }, [categoriaSeleccionada, setValue]);

    // const initialValues = {
    //     tamanos: [{ nombre: 'Doble', precio: '150' }],
    //     // tamanos: [{ nombre: '', precio: '' }], // Empezamos con un campo por defecto para tamaño
    //     ingredientesExtra: [{ nombre: '', precio: '' }],
    //   };

    // const { } = useForm({
    //     defaultValues: defaultValues
    //     // defaultValues: {
    //     //     nombre: 'hola',
    //     //     precio: '',
    //     //     tamanos: [{ nombre: '', precio: '' }], // Empezamos con un campo por defecto para tamaño
    //     //     ingredientesExtra: [{ nombre: '', precio: '' }], // Empezamos con un campo por defecto para ingrediente extra
    //     //     sabores: [{ nombre: '', precioAdicional: '' }],
    //     // }
    // })

    const { fields: tamanosFields, append: appendTamanos, remove: removeTamanos } = useFieldArray({
        control,
        name: 'tamanos'
    });


    return (
        <>

            <div className="col-md-6 d-flex justify-content-center align-items-start flex-column">
                <label className="form-label">Categoría</label>
                <input
                    className="form-control text-uppercase"
                    type="text"
                    // defaultValue={categoriaSeleccionada}
                    value={categoriaSeleccionada}
                    // readOnly
                    // placeholder="nombre producto"
                    // nombre del campo para el form
                    {...register('categoria', {
                        required: true
                    })}
                    />
                    {errors.categoria?.type === 'required' && <p className="text-danger"> El campo categoria es requerido</p>}
                <label className="form-label">Nombre Producto</label>
                <input
                    className="form-control"
                    type="text"
                    // placeholder="nombre producto"
                    // nombre del campo para el form
                    {...register('nombre', {
                        required: true
                    })}
                />
                {errors.nombre?.type === 'required' && <p className="text-danger"> El campo nombre es requerido</p>}
            </div>

            <div className="col-md-6 d-flex justify-content-center align-items-start flex-column my-2">
                <label className="form-label">Preparacion</label>
                <input
                    className="form-control"
                    type="text"
                    // placeholder="preparacion"
                    {...register('preparacion', {
                        required: true
                    })}
                />
                {errors.preparacion?.type === 'required' && <p className="text-danger"> El campo nombre es requerido</p>}
            </div>



            <div className="row my-2">

                <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column">
                    <label className="form-label">Ingrediente preparación</label>
                    <input
                        className="form-control"
                        type="text"
                        // placeholder="ingrediente preparacion"
                        {...register('ingrePrep', {
                            required: true
                        })}

                    />
                    {errors.ingrePrep?.type === 'required' && <p className="text-danger"> El campo nombre es requerido</p>}
                </div>

                <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column">
                    <label className="form-label">Pan</label>
                    <input
                        className="form-control"
                        type="text"
                        // placeholder="nombre pan"
                        {...register('pan', {
                            required: true
                        })}
                    />
                    {errors.pan?.type === 'required' && <p className="text-danger"> El campo nombre es requerido</p>}
                </div>
            </div>


            <div className="row my-2">
                <div className="  col-md-5 col-sm-4 d-flex justify-content-center align-items-start flex-column">
                    <label className="form-label">Precio </label>
                    {/* <div className="d-flex"> */}
                    {/* <span>2</span> */}

                    <input
                        className="form-control"
                        type="number"
                        // placeholder="Precio"d
                        {...register('precio', {
                            required: true,
                            valueAsNumber: true
                        })}
                    />
                    {/* </div> */}
                    {errors.precio?.type === 'required' && <p className="text-danger"> El campo precio es requerido</p>}
                </div>

                <div className="col-md-5 col-sm-4 d-flex justify-content-center align-items-start flex-column">
                    <label className="form-label">Stock</label>
                    <input
                        className="form-control"
                        type="number"
                        // placeholder="productos en stock"
                        {...register('stock', {
                            required: true,
                            valueAsNumber: true
                        })}
                    />
                    {errors.stock?.type === 'required' && <p className="text-danger"> El campo stock es requerido</p>}
                </div>

                <div className="col-lg-2 col-sm-4 d-flex justify-content-center align-items-start flex-column">
                    Disponible
                    <input className="form-check-input" type="checkbox"
                        {...register('status')}
                    />
                </div>
            </div>


            {/* TAMAÑOS */}
            <div className="my-2">
                <h4 className="text-warning">Tamaños</h4>
                {tamanosFields.map((item, index) => (
                    <div key={item.id} >
                        <div className="row px-2">
                            <div className="col-md-6 col-sm-12 p-2 ">
                                {/* <label>Tamaños</label> */}
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Nombre del tamaño (Ej. doble/mediano)"
                                    // {...register('tamanos', {
                                    //     required: true
                                    // })}
                                    {...register(`tamanos.${index}.nombre`, { required: 'Campo obligatorio' })}
                                />
                                {errors?.tamanos?.[index]?.nombre && (
                                    <p className="text-danger">{errors.tamanos[index].nombre.message}</p>
                                    // <p className="text-danger">sdfsdfsdfsdfsdfsdf</p>
                                )}

                            </div>
                            <div className="col-md-6 col-sm-12 p-2 d-flex justify-content-center align-items-center gap-2">
                                <div className=' d-flex flex-column'>

                                    <div className=' d-flex justify-content-center align-items-center'>

                                        <span className="fs-4">$</span>
                                        {/* <label>Tamaños</label> */}
                                        <input
                                            className="form-control"
                                            type="number"
                                            placeholder="Precio del tamaño"
                                            {...register(`tamanos.${index}.precio`, { required: 'Campo obligatorio' })}
                                        />
                                    </div>
                                    {errors?.tamanos?.[index]?.nombre && (
                                        <p className="text-danger">{errors.tamanos[index].nombre.message}</p>
                                        // <p className="text-danger">sdfsdfsdfsdfsdfsdf</p>
                                    )}
                                </div>
                                <button className=" btn btn-danger" type="button" onClick={() => removeTamanos(index)}><i className="bi bi-trash"></i></button>
                            </div>
                            {/* <button className="col-md-2 col-sm-3 btn btn-danger" type="button" onClick={() => removeTamanos(index)}>Eliminar</button> */}
                        </div>
                    </div>
                ))}
                <button className="btn btn-outline-primary p-2 d-block" type="button" onClick={() => appendTamanos({ nombre: '', precio: '' })}>
                    Agregar otro tamaño
                </button>
            </div>

            <button className="col-lg-6 btn-prin" type="submit">Guardar</button>

        </>

    )
}

export default FormSnacks