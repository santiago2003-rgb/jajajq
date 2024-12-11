import logo from "../assets/logo2.png"

export default function Header() {
    return (
        <div className="p-5 bg-primary text-white text-center">
            <h1> <img src={logo} width="100px"/>Recetas Don Santiago</h1>
            <p>Cocinamos con amor para llenar a tu corazon 🧑‍🍳!</p>
        </div>
    )
}
