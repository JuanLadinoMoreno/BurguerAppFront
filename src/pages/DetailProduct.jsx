import { useEffect } from 'react'
import ItemDetailContainer from '../components/Pages/Menu/ItemDetailContainer'
import NavDash from '../components/Dash/components/NavDash';


export default function DetailProduct() {
  useEffect(() => {
    // Añadir la clase no-scroll a html y body al cargar la página
    document.documentElement.classList.add('no-scroll');
    document.body.classList.add('no-scroll');

    // Limpiar al desmontar el componente
    return () => {
      document.documentElement.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll');
    };
  }, []);


  return (
    <>

      <div className="wrapper">

        <NavDash />
      <div className="main">

      <ItemDetailContainer />
      </div>

        {/* <header className="headerPagM">
          <div className="header-content">
            <h1></h1>
          </div>
        </header> */}

      </div>
    </>
  )
}
