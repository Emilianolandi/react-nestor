import "./Card.css";

export default function Card(){
    let imagen = "images/disco-luz.jpg";
    let titulo = "telefono celular";
    let precio = "23662"
    let envio_gratis = true;

    return(
        <div className="Card">
           <img className="card-img" src={imagen} alt= ""/>
           <div className="card-info">
           
            <h3 className="card-info_titulo">{titulo}</h3>
            <p className="card-info_precio">${precio}</p>
            <p className="gratis">¡Envio gratis!</p>

            </div>
            </div>

            
    )
    
    
}