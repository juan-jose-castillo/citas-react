import { useState, useEffect } from "react"
// rafce  + enter
//192.168.1.3
const Formulario = () => {
    // md pantalla mediana
    // lg pantalla grande
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintoma, setSintoma] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); //PREVIENE ACCION DE ENVIO
        // validamos el formulario 
        if ([nombre, propietario, email, fecha, sintoma].includes('')) {
            console.warn('Hay un campo vacio');
            setError(true);
            return;
        }
        // error es la validacion 
        setError(false); 

    }
    return (
        <div className=" md:w-1/2 lg:w-2/5 mx-5" >
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
            <form onSubmit={handleSubmit} className=" mx-5 bg-white shadow-md rounded-lg py-10 px-5" action="">
                <div className="mb-5">
                    {/* && si error es true entonces imprime los sgte */}
                    {error && (
                        <div className="bg-red-600 text-white text-center p-4 mb-3 uppercase font-bold rounded-md">
                            <p>Todos los campos son obligatorios</p>
                        </div>)}
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota
                    </label>
                    <input id="mascota" type="text" placeholder="Nombre de la mascota.."
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={nombre}
                        onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario
                    </label>
                    <input id="propietario" type="text" placeholder="Nombre del propietario" value={propietario} onChange={(e) => setPropietario(e.target.value)}
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email"> Email
                    </label>
                    <input id="email" type="text" placeholder="Email contacto propietario" value={email} onChange={(e) => setEmail(e.target.value)}
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="alta"> Alta
                    </label>
                    <input id="alta" type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas"> Sintomas
                    </label>
                    <textarea id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los sintomas" value={sintoma} onChange={(e) => setSintoma(e.target.value)} />
                </div>
                <input type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                />

            </form>
        </div>


    )
}
export default Formulario