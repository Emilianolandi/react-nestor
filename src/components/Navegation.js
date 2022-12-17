import {Link} from 'react-router-dom' ;

export default function Navegation(){
    return (
       <ul>
           <li>
               <Link to="/">Home</Link>
           </li>
           <li>
               <Link to="/Nosotros">Nosotros</Link>
           </li>
       </ul>
    )
}