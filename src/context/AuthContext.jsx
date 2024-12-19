import { createContext, useContext, useEffect, useState } from "react"
import { onRegister, onLogin, onVerifyToken } from "../services";
import Cookies from 'js-cookie'
import Swal from "sweetalert2";

const AuthContext = createContext();

//hook para importar el uso del contexto (tre los datos de value={{}} del context)
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within a AuthProvider");
    return context;
};

export const AuthProvider = ({ children }) => {


    const [user, setUser] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {

        async function checkLogin() {
            const cookies = Cookies.get();
            
            if (cookies.token) {
                try {
                    const res = await onVerifyToken(cookies.token)
                    if (!res.data.payload) setIsAuthenticated(false)
                    setIsAuthenticated(true)

                    // esto se movio por priblemas al cargar los carritos ya que se tenia que recargar la pagina
                    // setUser(res.data)
                    setUser(res.data.payload)
                } catch (error) {
                    setIsAuthenticated(false)
                    setUser(null)
                }
            }
        }

        checkLogin();

    }, [])

    // useEffect(() => {
    //     const checkLogin = async () => {
    //         const cookies = Cookies.get();
    //         if (!cookies.token) {
    //             setIsAuthenticated(false);
    //             // setLoading(false);
    //             setUser(null)
    //             return;
    //         }

    //         try {
    //             const res = await verifyTokenRequest(cookies.token);
    //             console.log(res);
    //             if (!res.data) return setIsAuthenticated(false);
    //             setIsAuthenticated(true);
    //             setUser(res.data);
    //             // setLoading(false);
    //         } catch (error) {
    //             setIsAuthenticated(false);
    //             // setLoading(false);
    //         }
    //     };
    //     checkLogin();
    // }, []);

    const signUp = async (userP) => {
        console.log('signUp');

        try {
            // console.log('userP', userP);
            const resp = await onRegister(userP)
            // console.log('resp.data', resp.data);

            setUser(resp.data.payload)
            // setIsAuthenticated(true)
        } catch (error) {
            console.log(error);
        }



        // // OPCION CON THEN
        // onRegister(userP)
        //     .then((resp) => {
        //         console.log('resp.data', resp);
        //         // if (resp === true) {
        //         //     // console.log('resp', resp);
        //         //     Swal.fire("Usuario Creado!", "", "info");

        //         // }
        //         // else {
        //         //     Swal.fire("No fue posibles crear usuario", "", "danger");

        //         // }
        //     })
        //     .catch((err) => {
        //         Swal.fire("Error guardar el producto", "", "danger");
        //         console.log('err', err);
        //     })
    }

    const signIn = async (userP) => {

        try {
            const resp = await onLogin(userP)
            if(resp){
                setUser(resp.data.payload)
                setIsAuthenticated(true)
            }
        } catch (error) {
            if (error.response) {
                Swal.fire(error.response.data.error, "Permiso denegado", "warning");
                // if (err.response.status === 403) {
                //     const errorMessage = err.response.data.message[0];
                //     Swal.fire("Permiso denegado", errorMessage, "warning");
                // } else {
                //     Swal.fire("Error al eliminar el producto", err.response.data.message || "Error desconocido", "danger");
                // }
              } else {
                Swal.fire("Error al entrar al sistema", "Error desconocido", "danger");
              }
        }

    }



    return (
        <AuthContext.Provider
            value={
                {
                    signUp,
                    signIn,
                    user,
                    setUser,
                    isAuthenticated,
                }
            }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;