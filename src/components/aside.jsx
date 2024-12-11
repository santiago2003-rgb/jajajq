import React from 'react'
import chef from "./../assets/chefS.jpg"

export default function Aside() {
    return (
        <div className="col-sm-4">
            <h2>About Me</h2>
            <h5>Photo of me:</h5>
            <div className="fakeimg">
                <img src={chef} width="100%" />
            </div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            <h3 className="mt-4">Some Links</h3>
            <p>Soy chef graduado de la escula de cocina de tangamandapio,
                con 10 años de experiencia, en alta cocina y reposteria
            </p>
            <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                    <a className="nav-link active" href="#">SOPAS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">POSTRES</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">PASTAS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">ARROCES</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">ENSALADAS</a>
                </li>
            </ul>
            <hr className="d-sm-none" />
        </div>
    )
}
