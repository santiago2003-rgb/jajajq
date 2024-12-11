import React from 'react'
import pastas from './../assets/pastas.avif'

export default function Article(props) {
    console.log(props);
    let { recipes } = props;
    return (
        <>
            <h2>{recipes.titulo}</h2>
            <h5>{recipes.subtitulo}</h5>
            <div className="fakeimg">
                <img src={ recipes.imagenes[0] } height="500px" width="100%" />
            </div>
            <p>{recipes.texto}</p>
            <button className="btn btn-primary">Leer Recetas</button>
        </>
    )
}
