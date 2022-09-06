import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";


function App() {
  // alt + shift + f
  // const sumar = () => {
  //   const a = 5;  
  //   if (a > 4) {
  //     console.log('a es mayor');
  //   } else {
  //     console.log('a no es mayor');
  //   }
  // }
  //sumar();

  return (
    <>
      <div className="container mx-auto mt-20">
        {/* <h1>hola mundo  </h1>
        <img src="alguna imgen" alt="" />
        <input type="number" /> */}
        <Header />
        <div className="mt-12 md:flex">
          <Formulario />
          <ListadoPacientes />
        </div>
      </div>
      {/* <div>
        <h2>div 2</h2>
      </div> */}
    </>
  )
}
export default App
