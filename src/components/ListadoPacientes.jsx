import Paciente from "./Paciente"
// cmd + shift  + 7  ===  comentario
const ListadoPacientes = () => {
  return (
    <div  className="mx-5 md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center ">Listado Pacientess...</h2>
      <p className="text-xl mb-10 mt-5 text-center">
        Administra tus {''}
        <span className="text-indigo-600 font-bold">
          Pacientes y Citas
        </span>
      </p>
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
    </div>
  )
}
export default ListadoPacientes