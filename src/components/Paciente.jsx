
const Paciente = () => {
  return (
    <div className="mx-3 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
        <span className="font-normal normal-case"> Moscu </span></p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
        <span className="font-normal normal-case"> Juan Jose </span></p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
        <span className="font-normal normal-case"> correoj@gmail.com </span></p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
        <span className="font-normal normal-case"> 10 Diciembre de 2022 </span></p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
        <span className="font-normal normal-case"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum mollitia impedit ad, numquam iure ipsam corporis eos odio iste sed sit expedita, eligendi illum esse totam corrupti similique id laudantium! </span></p>
    </div>
  )
}

export default Paciente