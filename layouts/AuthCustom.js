// import fondoHome from "assets/img/icons/home/diseño.png"
import "assets/css/home.css"

function AuthCustom(props) {
    return <div className="conteiner-home">
        {/* <img src={fondoHome} /> */}
        <img className="portada"
            alt="..."
            src={require("assets/img/icons/home/diseño.png")}
        />
        {props.children}
    </div>;
}
export default AuthCustom;