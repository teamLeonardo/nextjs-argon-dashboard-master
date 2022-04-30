import "assets/css/home.css"
import AuthCustom from "layouts/AuthCustom";
function Home() {
    return <>
        <div class="header-home">
            <img
                alt="..."
                src={require("assets/img/icons/common/SIGECCYT.png")} class="logo" />
            <img
                alt="..."
                src={require("assets/img/icons/common/club.png")} class="club" />
            <img
                alt="..."
                src={require("assets/img/icons/common/concytec.png")} class="concytec" />
        </div>
        <div className="conteiner-page-home">
            <div class="conteiner-title">
                <h1>¡Bienvenid@!</h1>
                <p class="title-p">Al sistema Integral de Gestión de clubes de ciencia y tecnología (SIGECCYT) del CONCYTEC, que tiene como finalidad pública brindar información detallada a los usuarios responsables de la implementación de los clubes a nivel nacional. </p>
            </div>
            <div className="groud-card-img">
                <div class="img1">
                    <img
                        alt="..."
                        src={require("assets/img/icons/home/IMG1.png")} />
                    <h3>CCYT</h3>
                </div>
                <div class="img2">
                    <img
                        alt="..."
                        src={require("assets/img/icons/home/IMG2.png")} />
                    <h3>UGEL</h3>
                </div>
                <div class="img3">
                    <img
                        alt="..."
                        src={require("assets/img/icons/home/IMG3.png")} />
                    <h3>DRE/GRE</h3>
                </div>
                <div class="img4">
                    <img
                        alt="..."
                        src={require("assets/img/icons/home/IMG4.png")} />
                    <h3>CONCYTEC</h3>
                </div>
            </div>
        </div>

    </>
}
Home.layout = AuthCustom;
export default Home;