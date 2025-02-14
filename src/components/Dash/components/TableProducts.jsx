import React, { useEffect, useState } from 'react'
import DataTable, { createTheme } from 'react-data-table-component';
import { useDeleteProduct, useUpdateProduct } from '../../../Hooks/useProducts';
import { useFieldArray, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FormBurguer from '../../Pages/Menu/components/FormBurguer';
import FormHotDog from '../../Pages/Menu/components/FormHotDog';
import FormBaguette from '../../Pages/Menu/components/FormBaguette';
import FormSandwiche from '../../Pages/Menu/components/FormSandwiche';
import FormBurrito from '../../Pages/Menu/components/FormBurrito';
import FormDrinkCold from '../../Pages/Menu/components/FormDrinkCold';
import FormDrinkHot from '../../Pages/Menu/components/FormDrinkHot';
import FormSnacks from '../../Pages/Menu/components/FormSnacks';



function TableProducts({ productsData, setProductsData, isLoading }) {

    const { register, formState: { errors }, handleSubmit, watch, setValue, control } = useForm()

    // const [records, setRecords] = useState(productsData)
    const [productSelected, setProductSelected] = useState({})
    // const [allProductsData, setAllProductsData] = useState(productsData)
    const [productsDataCopy, setProductsDataCopy] = useState([])

    const { fields: tamanosFields, append: appendTamanos, remove: removeTamanos } = useFieldArray({
        control,
        name: 'tamanos'
    });

    const { fields: ingredientesFields, append: appendIngredientes, remove: removeIngredientes } = useFieldArray({
        control,
        name: 'ingredientesExtra'
    });

    const { fields: revolcadoFields, append: appendRevolcado, remove: removeRevolcado } = useFieldArray({
        control,
        name: 'ingredientesRevolcado',
    });


    // crea una copia para poder filtrarlos
    useEffect(() => {
        if (productsData) {
            setProductsDataCopy(productsData);
        }
    }, [productsData]);



    useEffect(() => {
        if (productSelected) {
            // if (productSelected.tipo === 'burguerP') {

            setValue('nombre', productSelected.nombre);
            setValue('preparacion', productSelected.preparacion);
            setValue('ingrePrep', productSelected.ingrePrep);
            setValue('pan', productSelected.pan);
            setValue('tipo', productSelected.tipo);
            setValue('precio', productSelected.precio);
            setValue('stock', productSelected.stock);
            setValue('aderesos', productSelected.aderesos);
            setValue('vegetales', productSelected.vegetales);
            setValue('status', productSelected.status);
            setValue('categoria', productSelected.categoria);
            setValue('tipo', productSelected.tipo);
            setValue('tamanos', productSelected.tamanos);
            setValue('ingredientesExtra', productSelected.ingredientesExtra);
            setValue('ingredientesRevolcado', productSelected.ingredientesRevolcado);
            // }
        }
    }, [productSelected, setValue]);

    const updateProduct = async (product) => {
        console.log(product);
        
        try {
            const result = await Swal.fire({
                title: "Quiere actualizar el producto?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Yes",
                denyButtonText: `No`
            });
            console.log('product', product);

            if (result.isConfirmed) {
                try {


                    const resp = await useUpdateProduct(productSelected._id, product);

                    if (resp) {
                        console.log('resp.data.payload', resp);

                        const clonProds = structuredClone(productsData);
                        const index = clonProds.findIndex(prod => prod.id === productSelected._id);
                        if (index !== -1) {
                            clonProds[index] = {
                                ...clonProds[index],
                                ...resp.data.payload
                            }
                        }
                        setProductsData(clonProds);

                        Swal.fire(`Producto actualizado `, `ID: ${resp.data.payload.id.substr(-4,4)}`, "info");
                        const modalElement = document.getElementById('modalProduct');
                        const modalInstance = bootstrap.Modal.getInstance(modalElement); // Obtener la instancia del modal
                        modalInstance.hide();
                        // Swal.fire(`Producto actualizado `, `ID:`, "info");
                        // window.location.href = '/menu/products'
                    } else {
                        Swal.fire("No fue posible actualizar el producto", "", "danger");
                    }
                } catch (err) {
                    // Asegúrate de que el error capturado provenga de la API y tenga el formato esperado
                    if (err.response) {
                        Swal.fire("Error al actualizar", err.response.data.message[0], "warning");
                        // if (err.response.status === 403) {
                        //     const errorMessage = err.response.data.message[0];
                        //     Swal.fire("Permiso denegado", errorMessage, "warning");
                        // } else {
                        //     Swal.fire("Error al eliminar el producto", err.response.data.message || "Error desconocido", "danger");
                        // }
                    } else {
                        Swal.fire("Error al actualizar el producto", "Error desconocido", "danger");
                    }
                    console.log('err', err);
                }
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        } catch (error) {
            console.log('error', error);
        }
    };

    const deleteProdId = async (id) => {
        try {
            const result = await Swal.fire({
                title: "Do you want delete product?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Yes",
                denyButtonText: `No`
            });

            if (result.isConfirmed) {
                try {
                    const resp = await useDeleteProduct(id);

                    if (!resp) {
                        const clonProds = structuredClone(productsData);
                        const index = clonProds.findIndex(prod => prod.id === id);
                        clonProds.splice(index, 1);
                        setProductsData(clonProds);

                        Swal.fire("Producto eliminado!", "", "info");
                    } else {
                        Swal.fire("No fue posible eliminar el producto", "", "danger");
                    }
                } catch (err) {
                    // Asegúrate de que el error capturado provenga de la API y tenga el formato esperado
                    if (err.response) {
                        Swal.fire("Permiso denegado", err.response.data.message[0], "warning");
                        // if (err.response.status === 403) {
                        //     const errorMessage = err.response.data.message[0];
                        //     Swal.fire("Permiso denegado", errorMessage, "warning");
                        // } else {
                        //     Swal.fire("Error al eliminar el producto", err.response.data.message || "Error desconocido", "danger");
                        // }
                    } else {
                        Swal.fire("Error al eliminar el producto", "Error desconocido", "danger");
                    }
                    console.log('err', err);
                }
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        } catch (error) {
            console.log('error', error);
        }
    };


    const openModal = (row) => {
        console.log('row -------->  ', row);

        setProductSelected(row)
    }

    //mantiene escuchando el arreglo de aderesos que se pasaron al seleccionar
    const selectedAderesos = watch('aderesos') || [];
    const selectedVegetales = watch('vegetales') || [];




    const changeFlter = (e) => {
        const searchText = e.target.value.toLowerCase()

        if (searchText === "")
            setProductsDataCopy(productsData)

        const dataFilter = productsData.filter(record => {
            return record.nombre.toLowerCase().includes(searchText)
        })
        setProductsDataCopy(dataFilter)
        console.log('productsData', productsData);


    }


    const renderFields = () => {
        switch (productSelected.tipo) {
            case 'burguerP':
                return (

                    <FormBurguer control={control} register={register} errors={errors} setValue={setValue} categoriaSeleccionada="comida"/>
                )
            case 'hotdogP':
                return (
                    <FormHotDog control={control} register={register} errors={errors} setValue={setValue} categoriaSeleccionada="comida"/>
                )
            case 'bagP':
                return (
                    <FormBaguette control={control} register={register} errors={errors} setValue={setValue} categoriaSeleccionada="comida"/>
                )
            case 'sandP':
                return (
                    <FormSandwiche control={control} register={register} errors={errors} setValue={setValue} categoriaSeleccionada="comida"/>
                )
            case 'burrP':
                return (
                    <FormBurrito control={control} register={register} errors={errors} setValue={setValue} categoriaSeleccionada="comida"/>
                )
            case 'bebidasF':
                return (
                    <FormDrinkCold control={control} register={register} errors={errors} setValue={setValue} categoriaSeleccionada="bebida"/>
                )
            case 'bebidasC':
                return (
                    <FormDrinkHot control={control} register={register} errors={errors} setValue={setValue} categoriaSeleccionada="bebida"/>
                )
            case 'snacksP':
                return (
                    <FormSnacks control={control} register={register} errors={errors} setValue={setValue} categoriaSeleccionada="snack"/>
                )
            default:
                return null
        }
    }

    const columns = [
        // {
        //     name: '',
        //     selector: row => row.thumbnail,
        //     sortable: true,
        // },
        {
            name: 'ID',
            selector: row => row.id.substr(-4,4),
            sortable: true,
        },
        {
            name: 'Nombre',
            selector: row => row.nombre,
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
            name: 'Tipo',
            selector: row => row.tipo,
            sortable: true,
        },
        {
            name: 'Acciones',
            selector: row => (
                <div className='d-flex jusify-content-center align-items-center'>
                    <div className='d-flex jusify-content-center align-items-center p-2'>


                        <button className='btn btn-danger m-1' onClick={() => deleteProdId(row._id)}> <i className="bi bi-trash"></i></button>
                        <button className='btn btn-warning text-white m-1' data-bs-toggle="modal" data-bs-target="#modalProduct" onClick={() => openModal(row)}> <i className="bi bi-pencil"></i></button>
                    </div>
                </div>
            ),
        },
        // {
        //     name: 'Editar',
        //     selector: row => (
        //         <button className='btn btn-warning text-white' data-bs-toggle="modal" data-bs-target="#modalProduct" onClick={() => openModal(row)}> <i className="bi bi-pencil"></i></button>
        //     ),
        // },

    ];

    const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    };

    // createTheme creates a new theme named solarized that overrides the build in dark theme
    createTheme('solarized', {
        text: {
            primary: '#268bd2',
            secondary: '#2aa198',
        },
        background: {
            default: '#002b36',
        },
        context: {
            background: '#cb4b16',
            text: '#FFFFFF',
        },
        divider: {
            default: '#073642',
        },
        action: {
            button: 'rgba(0,0,0,.54)',
            hover: 'rgba(0,0,0,.08)',
            disabled: 'rgba(0,0,0,.12)',
        },
    }, 'dark');




    return (
        <>
            {/* {console.log('productsDataCopy', productsDataCopy)} */}

            <h3 className='text-center m-3 text-uppercase'> Lista de Productos </h3>
            <div className='row d-flex justify-content-between align-items-center'>
                <div className='col-lg-4'>
                    <p>Filtrar por nombre</p>
                    <input className="form-control" type="text" onChange={changeFlter} />
                </div>
                <div className='col-lg-4 d-flex justify-content-center align-items-center'>

                    <Link to={"/menu/addproduct"} className="btn-prin">
                        <i className="bi bi-plus fs-3"></i>
                        <span>Crear Producto</span>
                    </Link>
                </div>

            </div>


            <DataTable
                // title="Movie List"
                columns={columns}
                data={productsDataCopy}
                // defaultSortFieldId={1}
                // selectableRows
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
            // customStyles={customStyles}
            // theme="solarized"

            />


            {/* MODAL */}
            <div className="modal fade" id="modalProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    {/* <div className="row"></div> */}
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <section className="container d-flex justify-content-center align-item-center pb-4 mt-0">

                                

                                <form onSubmit={handleSubmit(updateProduct)} className=" d-flex flex-column justify-content-center align-item-center gap-3 p-3 w-75 border-warning border-2 border-opacity-50 shadow-lg">
                                    <h2>Actualizar Produ</h2>
                                    <div className="row">
                                        {/* <FormBurguer control={control} register={register} errors={errors} d/> */}
                                        {/* <div className="d-flex justify-content-center align-items-start flex-column m-2" onChange={(e) => { setTipoProducto(e.target.value) }}> */}
                                        <div className="d-flex justify-content-center align-items-start flex-column m-2" >
                                            <label className="form-label">Categoría</label>
                                            {/* <select className="form-select" disabled='true' defaultChecked={'burguerP'}  {...register('tipo')}> */}
                                            <select className="form-select" disabled='true'   {...register('tipo')}>
                                                <option value="">-Sleccione Categoria-</option>
                                                <option value="burguerP">Hamburguesa</option>
                                                <option value="hotdogP" >Hot dog</option>
                                                <option value="bagP">Baguette</option>
                                                <option value="sandP">Sandwiche</option>
                                                <option value="burrP">Burrito</option>
                                                <option value="bebidasF">Bebida Fria</option>
                                                <option value="bebidasC">Bebida Caliente</option>
                                                <option value="snacksP">Snacks</option>
                                            </select>
                                        </div>
                                        {
                                            renderFields()
                                        }
                                    </div>


                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                                        {/* <button type="submit" className="btn btn-primary">Guardar cambios</button> */}
                                    </div>
                                </form>



                            </section>
                        </div>

                    </div>
                </div>
            </div>




        </>
    )
}

export default TableProducts