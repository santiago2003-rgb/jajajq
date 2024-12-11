import Article from './article'
import datos from "./../../public/datos.json"

export default function Content() {
    let recetas = "Pancakes"
    let { Pastas, Postres, Sopas, Ensaladas, Arroces } = datos;
    return (
        <div className="col-sm-8">
            {
                Sopas.map((receta, i) => (
                    <Article key = {i} recipes = {receta} />
                ))
            }
        </div>
    )
}