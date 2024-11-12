import React, { useEffect } from 'react'
import { useFieldArray } from 'react-hook-form';

function FormBaguette({ control, register, errors, setValue, categoriaSeleccionada }) {

    useEffect(() => {        
        // Registra el valor de 'categoria' con el valor seleccionado en el switch
        // register('categoria', { required: true });
        setValue('categoria', categoriaSeleccionada);
      }, [categoriaSeleccionada, setValue]);


    const { fields: tamanosFields, append: appendTamanos, remove: removeTamanos } = useFieldArray({
        control,
        name: 'tamanos'
    });

    const { fields: ingredientesFields, append: appendIngredientes, remove: removeIngredientes } = useFieldArray({
        control,
        name: 'ingredientesExtra'
    });


    return (
        <>

            <div className="col-md-6 d-flex justify-content-center align-items-start flex-column">
                <label className="form-label">Categoría</label>
                <input
                    className="form-control text-uppercase"
                    type="text"
                    defaultValue='comida'
                    readOnly
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

            {/*  
                  ACA VA EL MENU DE CATEGORIA
            */}


            {/* VEGETALES */}
            <div className="container my-2">
                <h4 className="text-warning">Vegetales</h4>
                <div className="row ">
                    <div className="mb-3 col-md-4 col-sm-4">
                        <p>Jitomate</p>
                        <input type="checkbox"
                            // value={JSON.stringify({"id": 1, "nombre": "Catsup"})}
                            value="jitomate"
                            // checked={watchAllVeg}
                            {...register("vegetales")}
                        />
                    </div>

                    <div className="mb-2 col-md-4 col-sm-4">
                        <p>Cebolla</p>
                        <input type="checkbox"
                            // value={JSON.stringify({"id": 2, "nombre": "Mayonesa"})}
                            value="cebolla"
                            // checked={watchAllVeg}
                            {...register("vegetales")}
                        />
                    </div>

                    <div className="mb-3 col-md-4 col-sm-4">
                        <p>Rajas</p>
                        <input type="checkbox"
                            // value={JSON.stringify({"id": 3, "nombre": "Mostaza"})}
                            value="rajas"
                            // checked={watchAllVeg}
                            {...register("vegetales")}
                        />
                    </div>
                </div>
                <div className="row ">
                    <div className="mb-3 col-md-4 col-sm-4">
                        <p>Aguacate</p>
                        <input type="checkbox"
                            // value={JSON.stringify({"id": 3, "nombre": "Mostaza"})}
                            value="aguacate"
                            // checked={watchAllVeg}
                            {...register("vegetales")}
                        />
                    </div>

                    <div className="mb-3 col-md-4 col-sm-4">
                        <p>Frijoles</p>
                        <input type="checkbox"
                            // value={JSON.stringify({"id": 3, "nombre": "Mostaza"})}
                            value="frijoles"
                            // checked={watchAllVeg}
                            {...register("vegetales")}
                        />
                    </div>

                    <div className="mb-3 col-md-4 col-sm-4">
                        <p>Lechuga</p>
                        <input type="checkbox"
                            // value={JSON.stringify({"id": 3, "nombre": "Mostaza"})}
                            value="lechuga"
                            // checked={watchAllVeg}
                            {...register("vegetales")}
                        />
                    </div>
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


            {/* INGREDIENTE EXTRA */}
            <div className="my-2">
                <h4 className="text-warning">Ingredientes Extra</h4>
                {ingredientesFields.map((item, index) => (
                    <div key={item.id} className="row">

                        <div className="col-md-6 col-sm-12 p-2">
                            <input
                                className=" form-control"
                                type="text"
                                placeholder="Nombre del ingrediente extra"
                                {...register(`ingredientesExtra.${index}.nombre`, { required: 'Campo obligatorio' })}
                            />
                        </div>

                        <div className="col-md-6 col-sm-12 p-2 d-flex align-items-center gap-2">
                            <span className="fs-4">$</span>
                            {/* <label>Tamaños</label> */}
                            <input
                                className="form-control"
                                type="number"
                                placeholder="Precio del ingrediente extra"
                                {...register(`ingredientesExtra.${index}.precio`, { required: 'Campo obligatorio' })}
                            />
                            <button className=" btn btn-danger" type="button" onClick={() => removeIngredientes(index)}><i className="bi bi-trash"></i></button>
                        </div>

                    </div>
                ))}
                <button className="btn btn-outline-primary p-2 d-block" type="button" onClick={() => appendIngredientes({ nombre: '', precio: '' })}>
                    Agregar Ingrediente Extra
                </button>
            </div>

            <button className="col-lg-6 btn-prin" type="submit">Guardar</button>

        </>

    )
}

export default FormBaguette