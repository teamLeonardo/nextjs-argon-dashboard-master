import "assets/css/home.css"
import AuthCustom from "layouts/AuthCustom";
function Home() {
    return <>
        <img
            alt="..."
            src={require("assets/img/icons/home/IMG1.png")} class="img1" />
        <img
            alt="..."
            src={require("assets/img/icons/home/IMG2.png")} class="img2" />
        <img
            alt="..."
            src={require("assets/img/icons/home/IMG3.png")} class="img3" />
        <img
            alt="..."
            src={require("assets/img/icons/home/IMG4.png")} class="img4" />
        <h3>CONCYTEC</h3>
        <h2>Iniciar sesión</h2></>
}
Home.layout = AuthCustom;
export default Home;