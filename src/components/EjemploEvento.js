export default function EjemploEvento(){
    
    function Saludar (){
        alert ("Hola!");
    }
    
    return(
        <button onClick={Saludar}>
            Cliqueame
        </button>
    )
}