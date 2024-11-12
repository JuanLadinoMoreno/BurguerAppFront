import { useForm } from "react-hook-form"
import { useAuth } from "../../../context/AuthContext";
// import { onLogin } from "../../../services/";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

import BanEventos from '../../Pages/Home/BanEventos'

import Navbar from '../../NavBar'
// const onSubmitLogin = (data) => {

//   // OPCION CON THEN
//   onLogin(data)
//     .then((resp) => {
//       if (resp === true) {
//         // console.log('resp', resp);
//         Swal.fire("Producto Usuario login!", "", "info");

//       }
//       else {
//         Swal.fire("No fue posible login", "", "danger");

//       }
//     })
//     .catch((err) => {
//       Swal.fire("Error guardar el producto", "", "danger");
//       console.log('err', err);
//     })

// }



function login() {
  const { register, formState: { errors }, handleSubmit, watch, setValue } = useForm()

  const { signIn, isAuthenticated } = useAuth()

  const navigate = useNavigate()

  const onSubmitLogin = async (data) => {
    await signIn(data);
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/menu");
    }
  }, [isAuthenticated]);




  return (
    <>

      <Navbar/>

      <section className=" sec-form d-flex justify-content-center align-items-center flex-column w-100 m-0" style={{ background: 'url(/img/headers/bg-asad.jpg)', height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', top: '0', backgroundPosition: 'center center' }}>

    <div className="container d-flex justify-content-center align-items-center">

   

        <form onSubmit={handleSubmit(onSubmitLogin)} className=" d-flex flex-column justify-content-center align-item-center gap-3 p-3">

          <h2>Login</h2>

          <div className="input-field d-flex flex-column">
            <input
              type="email"
              // autoComplete="off" 
              // placeholder="Correo Electrónico"
              {...register('email', {
                required: true
              })}
            />
            <label>Correo Electrónico</label>
            {errors.email?.type === 'required' && <p className="text-danger"> Correo electronico es obligatorio</p>}
          </div>

          <div className="input-field d-flex flex-column">
            <input
              type="password"
              // placeholder="Contraseña"
              {...register('password', {
                required: true,
                minLength: 5
              })}
            />
            <label>Contraseña</label>
            {errors.password?.type === 'required' && <p className="text-danger"> La contraseña es oblogatoria es requerido</p>}
            {errors.password?.type === 'minLength' && <p className="text-danger"> Passwordesss must have at least 8 characters</p>}
          </div>

          {/* <div class="forget">
            <label for="remember">
              <input type="checkbox" id="remember"></input>
                <p>Remember me</p>
            </label>
            <a href="#">Forgot password?</a>
          </div> */}



          <button type="submit" className="btn-prin">Entrar</button>

          <div className="register">
            <p>No tienes cuenta? <Link to="/session/register" > Registrate </Link></p>
          </div>


        </form>

        {/* <p>
          No tienes cuenta?? <Link to="/session/register"> Registrate </Link>
        </p> */}

</div>
      </section>

    </>
  )
}

export default login