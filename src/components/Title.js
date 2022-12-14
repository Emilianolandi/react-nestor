import "./Title.css";

export default function Title({titulo, subtitulo}) {
    return(
        <div>
        <h1 className="Title">
           {titulo}
            </h1>
            {subtitulo &&
            <p>{subtitulo}</p>
        }
        <p>{subtitulo ? subtitulo:"predeterminado"}</p>
            </div>
        )
}
