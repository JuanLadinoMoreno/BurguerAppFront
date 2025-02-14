import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDeleteCustomer, useUpdateCustomer } from '../../../Hooks/useCustomers';




function TableCustomers({ usersData, setUsersData, isLoading }) {

  const { register, formState: { errors }, handleSubmit, setValue } = useForm()
  const [usersDataCopy, setUsersDataCopy] = useState([])
  const [rowSelected, setRowSelected] = useState({})

  // crea una copia para poder filtrarlos
  useEffect(() => {
    if (usersData) {
      setUsersDataCopy(usersData);
    }
  }, [usersData]);

  const changeFlter = (e) => {
    console.log('e.target.value.', e.target.value);

    const searchText = e.target.value.toLowerCase()

    if (searchText === "")
      setUsersDataCopy(usersData)

    const dataFilter = usersData.filter(record => {
      return record.firstName.toLowerCase().includes(searchText)
    })
    setUsersDataCopy(dataFilter)
    console.log('productsData', usersData);


  }

  useEffect(() => {
    if (rowSelected) {
      setValue('firstName', rowSelected.firstName);
      setValue('lastName', rowSelected.lastName);
      setValue('email', rowSelected.email);
      setValue('phone', rowSelected.phone);

    }

  }, [rowSelected, setValue])

  const openModal = (row) => {
    setRowSelected(row)
    console.log('row', row);

  }

  const updateCustomer = async (customer) => {
    try {
      const result = await Swal.fire({
        title: "Quiere actualizar el cliente?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`
      });

      if (result.isConfirmed) {
        try {


          const resp = await useUpdateCustomer(rowSelected._id, customer);

          if (resp) {
            console.log(resp);

            const clonProds = structuredClone(usersData);
            console.log('clonProds', clonProds);

            const index = clonProds.findIndex(prod => prod._id === rowSelected._id);
            console.log('index', index);

            if (index !== -1) {
              clonProds[index] = {
                ...clonProds[index],
                ...resp.data.payload
              }
            }
            setUsersData(clonProds);

            Swal.fire(`Cliente actualizado `, '', "info");

            const modalElement = document.getElementById('modalCustomer');
            const modalInstance = bootstrap.Modal.getInstance(modalElement); // Obtener la instancia del modal
            modalInstance.hide();
            // Swal.fire(`Producto actualizado `, `ID:`, "info");
            // window.location.href = '/menu/products'
          } else {
            Swal.fire("No fue posible actualizar el cliente", "", "danger");
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
            Swal.fire("Error al actualizar el cliente", "Error desconocido", "danger");
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

  const deleteCustomer = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Desea eliminar al cliente?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`
      });

      if (result.isConfirmed) {
        try {
          const resp = await useDeleteCustomer(id);

          if (resp) {
            const clonProds = structuredClone(usersData);
            const index = clonProds.findIndex(prod => prod.id === id);
            clonProds.splice(index, 1);
            setUsersData(clonProds);

            Swal.fire("Usuario eliminado!", "", "info");
          } else {
            Swal.fire("No fue posible eliminar el usuario", "", "danger");
          }
        } catch (err) {
          // Asegúrate de que el error capturado provenga de la API y tenga el formato esperado
          if (err.response) {
            Swal.fire("Permiso denegado", 'err.response.data.message[0]', "warning");
            // if (err.response.status === 403) {
            //     const errorMessage = err.response.data.message[0];
            //     Swal.fire("Permiso denegado", errorMessage, "warning");
            // } else {
            //     Swal.fire("Error al eliminar el producto", err.response.data.message || "Error desconocido", "danger");
            // }
          } else {
            Swal.fire("Error al eliminar el usuario", "Error desconocido", "danger");
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

  const columns = [
    {
      name: 'Nombre',
      selector: row => row.firstName,
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
      name: 'Apellido',
      selector: row => row.lastName,
      sortable: true,
    },
    {
      name: 'Correo',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Telefono',
      selector: row => row.phone,
      sortable: true,
    },
    {
      name: 'Acciones',
      selector: row => (
        <div className='d-flex jusify-content-center align-items-center'>
          <div className='d-flex jusify-content-center align-items-center p-2'>


            {/* <button className='btn btn-warning text-white m-1' data-bs-toggle="modal" data-bs-target="#modalProduct" onClick={() => openModal(row)}> <i className="bi bi-pencil"></i></button> */}
            {/* <button className='btn btn-danger m-1' > <i className="bi bi-trash"></i></button> */}

            <button className='btn btn-danger m-1' onClick={() => {deleteCustomer(row._id)}}> <i className="bi bi-trash"></i></button>
            <button className='btn btn-warning text-white m-1' data-bs-toggle="modal" data-bs-target="#modalCustomer" onClick={() => openModal(row)}> <i className="bi bi-pencil"></i></button>
            <Link className='btn btn-primary text-white m-1' to={`/dash/customer/${row._id}`} > <i className="fa-solid fa-list-ol"></i></Link>
            {/* to={`/menu/item/${products._id}`} */}
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

  return (
    <>
      <h3 className='text-center m-3 text-uppercase'> Lista de clientes </h3>
      <div className='row d-flex justify-content-between align-items-center'>
        <div className='col-lg-4'>
          <p>Filtrar por nombre</p>
          <input className="form-control" type="text" onChange={changeFlter} />
        </div>
        <div className='col-lg-4 d-flex justify-content-center align-items-center'>

          <Link to={"/dash/addcustomer"} className="btn-prin">
            <i className="bi bi-plus fs-3"></i>
            <span>Crear cliente</span>
          </Link>
        </div>

      </div>
      <DataTable
        // title="Movie List"
        columns={columns}
        data={usersDataCopy}
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
      // customStyles={customStyles}
      // theme="solarized"
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



                <form onSubmit={handleSubmit(updateCustomer)} className=" d-flex flex-column justify-content-center align-item-center gap-3 p-3 w-50 border-warning border-2 border-opacity-50 shadow-lg">

                  <h2>Actualizar cliente</h2>
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
                    <div className="col-lg-12 d-flex justify-content-center align-items-start flex-column mb-3">
                      <label className="form-label">Telefono</label>
                      <input
                        className="form-control"
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        maxlength="12" 
                        placeholder="000-000-0000"
                        // placeholder="nombre producto"
                        // nombre del campo para el form
                        {...register('phone', {
                          required: true
                        })}
                      />
                      {errors.phone?.type === 'required' && <p className="text-danger"> El campo telefono es requerido</p>}
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

export default TableCustomers