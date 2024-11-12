import MainRouter from './router/MainRouter.jsx'
import { CarProvider } from './context/CarContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
// import io from 'socket.io-client'

// const socket = io('http://localhost:8080/')



export default function App() {
  return (
    <AuthProvider>
      <CarProvider>
        <MainRouter />
      </CarProvider>
    </AuthProvider>

//  <CarProvider>
//         <MainRouter />
//       </CarProvider> 


  )
}
