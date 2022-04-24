import fondoHome from "assets/img/icons/home/diseño.png"
import "assets/css/home.css"

function AuthCustom(props){
    return <div className="conteiner-home">
        <img src={fondoHome}/>
        <label>Hola mundo AuthCustom</label>
        {props.children}
    </div>;
}
export default AuthCustom;