export default function Mascotas() {
    let mascotas ={
        nombre: "Nestor",
        edad: "1",
        tipo:"gato",
        colores: ["negro", "gris"]
    }

    return(
        <div>
            <h2>{mascotas.nombre}</h2>
            <p>
                edad:{mascotas.edad}<br/>
                tipo:{mascotas.tipo}
            </p>
        </div>
    )
}
