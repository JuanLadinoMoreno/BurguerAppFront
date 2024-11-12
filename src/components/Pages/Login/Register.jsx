import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
// import { onRegister } from "../../../services/";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Navbar from '../../NavBar'




 function Register() {

  const { register, formState: { errors }, handleSubmit } = useForm()
  const { signUp, user, isAuthenticated } = useAuth()

  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticated) navigate('/menu')
  
    
  }, [isAuthenticated])
  

// console.log('user user user', user);

  const onSubmitRegister = async (data) => {
    await signUp(data);

  }


  return (
    <>
      <Navbar/>

      <section className="sec-form d-flex justify-content-center align-items-center flex-column w-100 m-0" style={{ background: 'url(/img/headers/bg-asad.jpg)', height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', top: '0', backgroundPosition: 'center center' }} >

      <div className="container d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit(onSubmitRegister)} className=" d-flex flex-column justify-content-center align-item-center gap-3 p-3 ">

          <h2>Register</h2>

          <div className="input-field d-flex flex-column">
            <input
              type="text"
              // nombre del campo para el form
              {...register('firstName', {
                required: true
              })}
            />
            <label> Nombre(s)</label>
            {errors.firstName?.type === 'required' && <p className="text-danger"> El campo nombre es requerido</p>}
          </div>

          <div className="input-field d-flex flex-column">
            <input
              type="text"
              {...register('lastName', {
                required: true
              })}
            />
            <label>Apellidos</label>
            {errors.lastName?.type === 'required' && <p className="text-danger"> El campo apellido es requerido</p>}
          </div>

          <div className="input-field d-flex flex-column">
            <input
              type="number"
              {...register('age', {
                required: true
              })}

            />
            <label>Edad</label>
            {errors.age?.type === 'required' && <p className="text-danger"> El campo edad es requerido</p>}
          </div>

          <div className="input-field d-flex flex-column">
            <input
              type="email"
              {...register('email', {
                required: true
              })}

            />
            <label>Correo electrónico</label>
            {errors.email?.type === 'required' && <p className="text-danger"> Correo electronico es obligatorio</p>}
          </div>

          <div className="input-field d-flex flex-column">
            <input
              type="password"
              {...register('password', {
                required: true,
                minLength: 6
              })}

            />
            <label>Contraseña</label>
            {errors.password?.type === 'required' && <p className="text-danger"> La contraseña es oblogatoria es requerido</p>}
            {errors.password?.type === 'minLength' && <p className="text-danger"> Passwordesss must have at least 6 characters</p>}
          </div>



          <button className="btn-prin w-50" type="submit">Registrar</button>

          <div className="register">
            <p>Ya tienes cuenta? <Link to="/session/login" > Inicia sesión </Link></p>
          </div>


        </form>
      </div>

      </section>

    </>
  )
}
export default Register