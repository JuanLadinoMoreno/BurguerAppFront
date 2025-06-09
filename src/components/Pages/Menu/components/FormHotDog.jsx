import React, { useEffect } from 'react'
import { useFieldArray } from 'react-hook-form';

function FormHotDog({ control, register, errors, setValue, categoriaSeleccionada }) {

    useEffect(() => {
        
        // Registra el valor de 'categoria' con el valor seleccionado en el switch
        // register('categoria', { required: true });
        setValue('categoria', categoriaSeleccionada);
      }, [categoriaSeleccionada, setValue]);


    const { fields: ingredientesFields, append: appendIngredientes, remove: removeIngredientes } = useFieldArray({
        control,
        name: 'ingredientesExtra'
    });

    const { fields: revolcadoFields, append: appendRevolcado, remove: removeRevolcado } = useFieldArray({
        control,
        name: 'ingredientesRevolcado',
    });


    return (
        <>

            {/* <div className="row m-2">
                <h4 className="text-warning">Seleccione tipo</h4>
                <div className="col-md-6 form-check">
                    <label className="form-check-label">
                        <input
                            className="form-check-input"
                            type="radio"
                            value="tradicional"
                            {...register('tipoHotdog', { required: 'Selecciona el tipo de hotdog' })}
                            onChange={() => setSelectedRevolcado(false)}
                        />
                        Tradicional
                    </label>
                </div>
                <div className="col-md-6 form-check">
                    <label className="form-check-label">
                        <input
                            className="form-check-input"
                            type="radio"
                            value="revolcado"
                            {...register('tipoHotdog', { required: 'Selecciona el tipo de hotdog' })}
                            onChange={() => setSelectedRevolcado(true)}
                        />
                        Revolcado
                    </label>
                </div>
                {errors.tipoHotdog?.type === 'required' && <p className="text-danger"> Seleccione tradicional o revolcado</p>}
            </div> */}



            <div className="col-md-6 d-flex justify-content-center align-items-start flex-column">
                <label className="form-label">Tipo</label>
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
                {errors.categoria?.type === 'required' && <p className="text-danger"> El campo tipo es requerido</p>}
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


            <div className="d-flex flex-column my-2">
                <h4 className="text-warning">Aderezos</h4>

                <div className="d-flex justify-content-around align-item-center">



                    <div className="mb-3">
                        <p>Catsup</p>
                        <input type="checkbox"
                            // value={JSON.stringify({"id": 1, "nombre": "Catsup"})}
                            value="Catsup"
                            // checked= {watchAllAde}
                            {...register("aderesos")}
                        />
                    </div>

                    <div className="mb-2">
                        <p>Mayonesa</p>
                        <input type="checkbox"
                            // value={JSON.stringify({"id": 2, "nombre": "Mayonesa"})}
                            value="Mayonesa"
                            // checked= {watchAllAde}
                            {...register("aderesos")}
                        />
                    </div>

                    <div className="mb-3">
                        <p>Mostaza</p>
                        <input type="checkbox"
                            // value={JSON.stringify({"id": 3, "nombre": "Mostaza"})}
                            value="Mostaza"
                            // checked= {watchAllAde}
                            {...register("aderesos")}
                        />
                    </div>

                </div>

                {/* <div>
                            {errors.aderesos && <span className="text-danger"> {errors.aderesos.message}</span>}
                        </div> */}

            </div>

            <div className="container my-2">
                <h4 className="text-warning">Vegetales</h4>
                <div className="row ">
                    <div className="mb-3 col-md-4 col-sm-4">
                        <p>Jitomate</p>
                        <input type="checkbox"
                            // value={JSON.stringify({"id": 1, "nombre": "Catsup"})}
                            value="Jitomate"
                            // checked={watchAllVeg}
                            {...register("vegetales")}
                        />
                    </div>

                    <div className="mb-2 col-md-4 col-sm-4">
                        <p>Cebolla</p>
                        <input type="checkbox"
                            // value={JSON.stringify({"id": 2, "nombre": "Mayonesa"})}
                            value="Cebolla"
                            // checked={watchAllVeg}
                            {...register("vegetales")}
                        />
                    </div>

                    <div className="mb-3 col-md-4 col-sm-4">
                        <p>Rajas</p>
                        <input type="checkbox"
                            // value={JSON.stringify({"id": 3, "nombre": "Mostaza"})}
                            value="Rajas"
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
                            value="Aguacate"
                            // checked={watchAllVeg}
                            {...register("vegetales")}
                        />
                    </div>

                    <div className="mb-3 col-md-4 col-sm-4">
                        <p>Frijoles</p>
                        <input type="checkbox"
                            // value={JSON.stringify({"id": 3, "nombre": "Mostaza"})}
                            value="Frijoles"
                            // checked={watchAllVeg}
                            {...register("vegetales")}
                        />
                    </div>

                    <div className="mb-3 col-md-4 col-sm-4">
                        <p>Lechuga</p>
                        <input type="checkbox"
                            // value={JSON.stringify({"id": 3, "nombre": "Mostaza"})}
                            value="Lechuga"
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


            {/* <div>
                <label>¿Es Revolcado Disponible?</label>
                <input
                    type="checkbox"
                    {...register('esRevolcadoDisponible')}
                />
            </div> */}


            {/* INGREDIENTE REVOLCADO */}
            <div className="my-2">
                <h4 className="text-warning">Sabores revolvado</h4>
                {revolcadoFields.map((item, index) => (
                    <div key={item.id} className="row">

                        <div className="col-md-6 col-sm-12 p-2">
                            <input
                                className=" form-control"
                                type="text"
                                placeholder="Nombre revolcado"
                                {...register(`ingredientesRevolcado.${index}.nombre`, { required: 'Campo obligatorio' })}
                            />
                        </div>

                        <div className="col-md-6 col-sm-12 p-2 d-flex align-items-center gap-2">
                            <span className="fs-4">$</span>
                            {/* <label>Tamaños</label> */}
                            <input
                                className="form-control"
                                type="number"
                                min={0}
                                placeholder="Precio extra"
                                {...register(`ingredientesRevolcado.${index}.precio`, { 
                                    required: 'Campo obligatorio',
                                    valueAsNumber:true,
                                })}
                            />
                            <button className=" btn btn-danger" type="button" onClick={() => removeRevolcado(index)}><i className="bi bi-trash"></i></button>
                        </div>

                    </div>
                ))}
                <button className="btn btn-outline-primary p-2 d-block" type="button" onClick={() => appendRevolcado({ nombre: '', precio: '' })}>
                    Agregar Ingrediente Extra
                </button>
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
                                min={0}
                                placeholder="Precio del ingrediente extra"
                                {...register(`ingredientesExtra.${index}.precio`, { 
                                    required: 'Campo obligatorio',
                                    valueAsNumber:true,
                                })}
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

export default FormHotDog