import { useState } from "react";
import { saveProduct } from "../../../services";
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import NavDash from "../../Dash/components/NavDash";
import DataUser from "../../Dash/components/DataUser";
import FormBurguer from "./components/FormBurguer";
import FormHotDog from "./components/FormHotDog";
import FormBaguette from "./components/FormBaguette";
import FormSandwiche from "./components/FormSandwiche";
import FormBurrito from "./components/FormBurrito";
import { Link } from "react-router-dom";
import { useGetCategories } from "../../../Hooks/useProducts";
import FormDrinkCold from "./components/FormDrinkCold";
import FormDrinkHot from "./components/FormDrinkHot";
import FormSnacks from "./components/FormSnacks";



// import { useHistory } from 'react-router-dom';

const save = async (data) => {
  const lete = await saveProduct(data)
  return lete
}



const onSubmitProductsrrr = async (data) => {

  // const {isCreated} = useCreateProd(data)

  try {

    // console.log('save', save);
    Swal.fire({
      title: "Desea guardar el producto?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {




        // OPCION CON THEN
        saveProduct(data)

          .then((resp) => {
            if (resp === true) {
              // console.log('resp', resp);
              Swal.fire("Producto creado!", "", "info");

            }
            else {
              Swal.fire("No pue posible guardar el producto", "", "danger");

            }
          })
          .catch((err) => {
            Swal.fire("Error guardar el producto", "", "danger");
            // console.log('err', err);
          })

      }
      else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });




    // console.log('data', data);
  } catch (error) {
    console.log('error', error);
  }


}




export default function AddProducts() {

  const { categories } = useGetCategories();

  const [tipoProducto, setTipoProducto] = useState('')



  const { register, formState: { errors }, handleSubmit, control, reset, watch, setValue } = useForm({

    // defaultValues: tipoProducto == 'burguerP' ? defaultValuesBurger : 
    // {
    //   nombre: 'jajajaaja',
    //   tamanos: [{ nombre: 'Mediano', precio: 1240 }]
    // }
    defaultValues: {
      nombre: '',
      // categoria:''
      // // precio: '',
      // tamanos: [{ nombre: '', precio: '' }], // Empezamos con un campo por defecto para tamaño
      // ingredientesExtra: [{ nombre: '', precio: '' }],
      // ingredientesRevolcado: [{ nombre: '', precio: '' }]
      // ingredientes_extra: [{ nombre: '', precio: '' }], // Empezamos con un campo por defecto para ingrediente extra
      // sabores: [{ nombre: '', precioAdicional: '' }],

      // saboresRevolcados: [{ nombre: '', precioAdicional: '' }],
      // // ingredientesExtras: [{ nombre: '', precio: '' }]
    }
  })

  // Observar el valor del tipo de hotdog seleccionado
  const tipoHotdog = watch('tipoHotdog');

  // Manejar arrays dinámicos de tamaños e ingredientes extra
  // const { fields: tamanosFields, append: appendTamanos, remove: removeTamanos } = useFieldArray({
  //   control,
  //   name: 'tamaños'
  // });

  // const { fields: ingredientesFields, append: appendIngrediente, remove: removeIngredientes } = useFieldArray({
  //   control,
  //   name: 'ingredientesExtras'
  // });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'sabores'
  });

  // const { fields: saboresFields, append: appendSabor, remove: removeSabor } = useFieldArray({
  //   control,
  //   name: 'saboresRevolcados',
  // });

  const renderFields = () => {
    switch (tipoProducto) {
      case 'burguerP':
        return (

          <FormBurguer control={control} register={register} errors={errors} setValue={setValue} categoriaSeleccionada="comida" />
        )
      // case 'hotdogP':
      //   return (
      //     <>
      //       <div className="row m-2">
      //         <h4 className="text-warning">Seleccione tipo</h4>
      //         <div className="col-md-6 form-check">
      //           <label className="form-check-label">
      //             <input
      //               className="form-check-input"
      //               type="radio"
      //               value="tradicional"
      //               {...register('tipoHotdog', { required: 'Selecciona el tipo de hotdog' })}
      //               onChange={() => setSelectedRevolcado(false)}
      //             />
      //             Tradicional
      //           </label>
      //         </div>
      //         <div className="col-md-6 form-check">
      //           <label className="form-check-label">
      //             <input
      //               className="form-check-input"
      //               type="radio"
      //               value="revolcado"
      //               {...register('tipoHotdog', { required: 'Selecciona el tipo de hotdog' })}
      //               onChange={() => setSelectedRevolcado(true)}
      //             />
      //             Revolcado
      //           </label>
      //         </div>
      //         {errors.tipoHotdog?.type === 'required' && <p className="text-danger"> Seleccione tradicional o revolcado</p>}
      //       </div>

      //       <div className="col-md-6 d-flex justify-content-center align-items-start flex-column">
      //         <label className="form-label">Nombre Producto</label>
      //         <input
      //           className="form-control"
      //           type="text"
      //           // placeholder="nombre producto"
      //           // nombre del campo para el form
      //           {...register('nombre', {
      //             required: true
      //           })}
      //         />
      //         {errors.nombre?.type === 'required' && <p className="text-danger"> El campo nombre es requerido</p>}
      //       </div>

      //       <div className="col-md-6 d-flex justify-content-center align-items-start flex-column my-2">
      //         <label className="form-label">Preparacion</label>
      //         <input
      //           className="form-control"
      //           type="text"
      //           // placeholder="preparacion"
      //           {...register('preparacion', {
      //             required: true
      //           })}
      //         />
      //         {errors.preparacion?.type === 'required' && <p className="text-danger"> El campo nombre es requerido</p>}
      //       </div>



      //       <div className="row my-2">

      //         <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column">
      //           <label className="form-label">Ingrediente preparación</label>
      //           <input
      //             className="form-control"
      //             type="text"
      //             // placeholder="ingrediente preparacion"
      //             {...register('ingrePrep', {
      //               required: true
      //             })}

      //           />
      //           {errors.ingrePrep?.type === 'required' && <p className="text-danger"> El campo nombre es requerido</p>}
      //         </div>

      //         <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column">
      //           <label className="form-label">Pan</label>
      //           <input
      //             className="form-control"
      //             type="text"
      //             // placeholder="nombre pan"
      //             {...register('pan', {
      //               required: true
      //             })}
      //           />
      //           {errors.pan?.type === 'required' && <p className="text-danger"> El campo nombre es requerido</p>}
      //         </div>
      //       </div>


      //       <div className="d-flex flex-column my-2">
      //         <h4 className="text-warning">Aderezos</h4>

      //         <div className="d-flex justify-content-around align-item-center">



      //           <div className="mb-3">
      //             <p>Catsup</p>
      //             <input type="checkbox"
      //               // value={JSON.stringify({"id": 1, "nombre": "Catsup"})}
      //               value="Catsup"
      //               // checked= {watchAllAde}
      //               {...register("aderesos")}
      //             />
      //           </div>

      //           <div className="mb-2">
      //             <p>Mayonesa</p>
      //             <input type="checkbox"
      //               // value={JSON.stringify({"id": 2, "nombre": "Mayonesa"})}
      //               value="Mayonesa"
      //               // checked= {watchAllAde}
      //               {...register("aderesos")}
      //             />
      //           </div>

      //           <div className="mb-3">
      //             <p>Mostaza</p>
      //             <input type="checkbox"
      //               // value={JSON.stringify({"id": 3, "nombre": "Mostaza"})}
      //               value="Mostaza"
      //               // checked= {watchAllAde}
      //               {...register("aderesos")}
      //             />
      //           </div>

      //         </div>

      //         {/* <div>
      //                       {errors.aderesos && <span className="text-danger"> {errors.aderesos.message}</span>}
      //                   </div> */}

      //       </div>

      //       <div className="container my-2">
      //         <h4 className="text-warning">Vegetales</h4>
      //         <div className="row ">
      //           <div className="mb-3 col-md-4 col-sm-4">
      //             <p>Jitomate</p>
      //             <input type="checkbox"
      //               // value={JSON.stringify({"id": 1, "nombre": "Catsup"})}
      //               value="Jitomate"
      //               // checked={watchAllVeg}
      //               {...register("vegetales")}
      //             />
      //           </div>

      //           <div className="mb-2 col-md-4 col-sm-4">
      //             <p>Cebolla</p>
      //             <input type="checkbox"
      //               // value={JSON.stringify({"id": 2, "nombre": "Mayonesa"})}
      //               value="Cebolla"
      //               // checked={watchAllVeg}
      //               {...register("vegetales")}
      //             />
      //           </div>

      //           <div className="mb-3 col-md-4 col-sm-4">
      //             <p>Rajas</p>
      //             <input type="checkbox"
      //               // value={JSON.stringify({"id": 3, "nombre": "Mostaza"})}
      //               value="Rajas"
      //               // checked={watchAllVeg}
      //               {...register("vegetales")}
      //             />
      //           </div>
      //         </div>
      //         <div className="row ">
      //           <div className="mb-3 col-md-4 col-sm-4">
      //             <p>Aguacate</p>
      //             <input type="checkbox"
      //               // value={JSON.stringify({"id": 3, "nombre": "Mostaza"})}
      //               value="Aguacate"
      //               // checked={watchAllVeg}
      //               {...register("vegetales")}
      //             />
      //           </div>

      //           <div className="mb-3 col-md-4 col-sm-4">
      //             <p>Frijoles</p>
      //             <input type="checkbox"
      //               // value={JSON.stringify({"id": 3, "nombre": "Mostaza"})}
      //               value="Frijoles"
      //               // checked={watchAllVeg}
      //               {...register("vegetales")}
      //             />
      //           </div>

      //           <div className="mb-3 col-md-4 col-sm-4">
      //             <p>Lechuga</p>
      //             <input type="checkbox"
      //               // value={JSON.stringify({"id": 3, "nombre": "Mostaza"})}
      //               value="Lechuga"
      //               // checked={watchAllVeg}
      //               {...register("vegetales")}
      //             />
      //           </div>
      //         </div>
      //       </div>



      //       <div className="row my-2">
      //         <div className="  col-md-5 col-sm-4 d-flex justify-content-center align-items-start flex-column">
      //           <label className="form-label">Precio </label>
      //           {/* <div className="d-flex"> */}
      //           {/* <span>2</span> */}

      //           <input
      //             className="form-control"
      //             type="number"
      //             // placeholder="Precio"d
      //             {...register('precio', {
      //               required: true,
      //               valueAsNumber: true
      //             })}
      //           />
      //           {/* </div> */}
      //           {errors.precio?.type === 'required' && <p className="text-danger"> El campo nombre es requerido</p>}
      //         </div>

      //         <div className="col-md-5 col-sm-4 d-flex justify-content-center align-items-start flex-column">
      //           <label className="form-label">Stock</label>
      //           <input
      //             className="form-control"
      //             type="number"
      //             // placeholder="productos en stock"
      //             {...register('stock', {
      //               required: true,
      //               valueAsNumber: true
      //             })}
      //           />
      //           {errors.tipo?.type === 'required' && <p className="text-danger"> El campo nombre es requerido</p>}
      //         </div>

      //         <div className="col-lg-2 col-sm-4 d-flex justify-content-center align-items-start flex-column">
      //           Disponible
      //           <input className="form-check-input" type="checkbox"
      //             {...register('status')}
      //           />
      //         </div>
      //       </div>

      //     </>
      //   )
      case 'hotdogP':
        return (
          <FormHotDog control={control} register={register} errors={errors} setValue={setValue} categoriaSeleccionada="comida" />
        )
      //         return(
      //           <>
      //           <h2>Crear Hotdog</h2>

      // {/* Nombre del hotdog */}
      // <div>
      //   <label>Nombre del Producto</label>
      //   <input 
      //     {...register('nombre', { required: 'El nombre es requerido' })}
      //     placeholder="Hotdog Tradicional"
      //   />
      //   {errors.nombre && <span>{errors.nombre.message}</span>}
      // </div>

      // {/* Precio base */}
      // <div>
      //   <label>Precio Base</label>
      //   <input 
      //     type="number"
      //     {...register('precioBase', { required: 'El precio es requerido', valueAsNumber: true })}
      //     placeholder="20"
      //   />
      //   {errors.precioBase && <span>{errors.precioBase.message}</span>}
      // </div>

      // {/* Es revolcado disponible */}
      // <div>
      //   <label>¿Es Revolcado Disponible?</label>
      //   <input 
      //     type="checkbox"
      //     {...register('esRevolcadoDisponible')}
      //   />
      // </div>

      // {/* Sabores Revolcados */}
      // <div>
      //   <h3>Sabores Revolcados</h3>
      //   {saboresFields.map((item, index) => (
      //     <div key={item.id}>
      //       <input
      //         placeholder="Nombre del Sabor"
      //         {...register(`saboresRevolcados.${index}.nombre`, { required: 'El nombre del sabor es requerido' })}
      //       />
      //       <input
      //         type="number"
      //         placeholder="Precio Adicional"
      //         {...register(`saboresRevolcados.${index}.precioAdicional`, { valueAsNumber: true })}
      //       />
      //       <button type="button" onClick={() => removeSabor(index)}>Eliminar</button>
      //     </div>
      //   ))}
      //   <button type="button" onClick={() => appendSabor({ nombre: '', precioAdicional: '' })}>
      //     Añadir Sabor Revolcado
      //   </button>
      // </div>

      // {/* Ingredientes Extras */}
      // <div>
      //   <h3>Ingredientes Extras</h3>
      //   {ingredientesFields.map((item, index) => (
      //     <div key={item.id}>
      //       <input
      //         placeholder="Nombre del Ingrediente"
      //         {...register(`ingredientesExtras.${index}.nombre`, { required: 'El nombre del ingrediente es requerido' })}
      //       />
      //       <input
      //         type="number"
      //         placeholder="Precio"
      //         {...register(`ingredientesExtras.${index}.precio`, { valueAsNumber: true })}
      //       />
      //       <button type="button" onClick={() => removeIngrediente(index)}>Eliminar</button>
      //     </div>
      //   ))}
      //   <button type="button" onClick={() => appendIngrediente({ nombre: '', precio: '' })}>
      //     Añadir Ingrediente Extra
      //   </button>
      // </div>

      // {/* Botón para enviar */}
      // <button type="submit">Crear Hotdog</button>
      //           </>
      //         )
      case 'bagP':
        return (
          <FormBaguette control={control} register={register} errors={errors} setValue={setValue} categoriaSeleccionada="comida" />
        )
      case 'sandP':
        return (
          <FormSandwiche control={control} register={register} errors={errors} setValue={setValue} categoriaSeleccionada="comida" />
        )
      case 'burrP':
        return (
          <FormBurrito control={control} register={register} errors={errors} setValue={setValue} categoriaSeleccionada="comida" />
        )
      case 'bebidasF':
        return (
          <FormDrinkCold control={control} register={register} errors={errors} setValue={setValue} categoriaSeleccionada="bebida" />
        )
      case 'bebidasC':
        return (
          <FormDrinkHot control={control} register={register} errors={errors} setValue={setValue} categoriaSeleccionada="bebida" />
        )
      case 'snacksP':
        return (
          <FormSnacks control={control} register={register} errors={errors} setValue={setValue} categoriaSeleccionada="snack" />
        )
      default:
        return null
    }
  }


  const onSubmitProducts = async (data) => {

    // const {isCreated} = useCreateProd(data)

    try {

      const result = await Swal.fire({
        title: "Desea guardar el producto?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      })

      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        try {

          const resp = await saveProduct(data)

          if (resp) {
            // console.log('resp', resp);
            Swal.fire("Producto creado!", "", "info");
            reset()
          }
          else {
            Swal.fire("No pue posible guardar el producto", "", "danger");

          }
        } catch (error) {

          if (error.response) {
            if (error.response.status === 409) {
              Swal.fire("Problema al guardar producto", error.response.data.error, "error");
            }

            else if (error.response.status === 403) {
              Swal.fire("Permiso denegado", error.response.data.message[0], "warning");
            } else {
              Swal.fire("Error al eliminar el producto", err.response.data.message || "Error desconocido", "danger");
            }

          }
          else {
            Swal.fire("Error al guardar el producto", "Error desconocido", "danger");
          }
        }


      }
      else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        reset()

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

        <div className="main">
          <DataUser />




          {/* <div className="main"> */}
          <section className="container d-flex justify-content-center align-item-center pb-4">

            <form onSubmit={handleSubmit(onSubmitProducts)} className=" d-flex flex-column justify-content-center align-item-center gap-3 p-3 w-75 border-warning border-2 border-opacity-50 shadow-lg">

              <h2>Crear Producto</h2>
              <div className=" d-flex justify-content-end">
                <Link className="btn btn-warning " to={'/menu/products'}>Regresar</Link>
              </div>

              {/* <div className="d-flex justify-content-between align-items-center"> */}
              <div className="row">

                <div className="d-flex justify-content-center align-items-start flex-column m-2 " onChange={(e) => { setTipoProducto(e.target.value) }}>
                  <label className="form-label">Categoría</label>
                  <select className="form-select text-uppercase"  {...register('tipo')}>
                    <option value="">-Sleccione Categoria-</option>
                    {/* <option value="burguerP">Hamburguesa</option>
                  <option value="hotdogP" >Hot dog</option>
                  <option value="bagP">Baguette</option>
                  <option value="sandP">Sandwiche</option>
                  <option value="burrP">Burrito</option> */}

                    {
                      categories.map(categorie => (
                        <option value={categorie.ids}>{categorie.nombre}</option>
                      ))
                    }
                  </select>
                </div>


                {
                  renderFields()
                }


              </div>
              {/* boton guardard */}

              {/* <div className=" d-flex justify-content-end">
              <Link className="btn btn-warning " to={'/menu/products'}>Regresar</Link>
            </div> */}
            </form>

            {/* <form onSubmit={handleSubmit((data) => { console.log('data hotdog', data) })}>
            <h2>Pedido Hotdog: {hotdog.nombre}</h2>

            <div>
              <label>Tipo de Hotdogssssssss:</label>
              <div>
                <label>
                  <input
                    type="radio"
                    value="tradicional"
                    {...register('tipoHotdog', { required: 'Selecciona el tipo de hotdog' })}
                    onChange={() => setSelectedRevolcado(false)}
                  />
                  Tradicional (precio: ${hotdog.precioBase})
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value="revolcado"
                    {...register('tipoHotdog', { required: 'Selecciona el tipo de hotdog' })}
                    onChange={() => setSelectedRevolcado(true)}
                  />
                  Revolcado
                </label>
              </div>
              {errors.tipoHotdog && <p>{errors.tipoHotdog.message}</p>}
            </div>

            {selectedRevolcado && (
              <div>
                <label>Selecciona el Sabor del Revolcado:</label>
                <Controller
                  name="saborRevolcado"
                  control={control}
                  rules={{ required: 'Selecciona un sabor' }}
                  render={({ field }) => (
                    <select {...field}>
                      <option value="">--Selecciona un sabor--</option>
                      {hotdog.sabores.map((sabor, index) => (
                        <option key={index} value={sabor.nombre}>
                          {sabor.nombre} (+${sabor.precioAdicional})
                        </option>
                      ))}
                    </select>
                  )}
                />
                {errors.saborRevolcado && <p>{errors.saborRevolcado.message}</p>}
              </div>
            )}

            <div>
              <button type="submit">Añadir al carrito</button>
            </div>
          </form> */}
          </section>

        </div>
      </div>
      {/* </div> */}



    </>





  )
}
