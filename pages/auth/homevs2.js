import "assets/css/home.css"
import "boot/css/bootstrap.min.css"
import AuthCustom from "layouts/AuthCustom";
function Home() {
    return <>
        <div className="container ron">
            <div class="conteiner-title col-md-12">
                <h1>¡Bienvenid@!</h1>
            </div>
            <div className="col-xs-12">
                <p class="title-p">Al sistema Integral de Gestión de clubes de ciencia y tecnología (SIGECCYT) del CONCYTEC, que tiene como finalidad
                    pública brindar información detallada a los usuarios responsables de la implementación de los clubes a nivel nacional. </p>
            </div>
        </div>
        {/* <div class="header-home">
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
                    <h3 className="text-card">CCYT</h3>
                </div>
                <div class="img2">
                    <img
                        alt="..."
                        src={require("assets/img/icons/home/IMG2.png")} />
                    <h3 className="text-card">UGEL</h3>
                </div>
                <div class="img3">
                    <img
                        alt="..."
                        src={require("assets/img/icons/home/IMG3.png")} />
                    <h3 className="text-card">DRE/GRE</h3>
                </div>
                <div class="img4">
                    <img
                        alt="..."
                        src={require("assets/img/icons/home/IMG4.png")} />
                    <h3 className="text-card">CONCYTEC</h3>
                </div>
            </div>
        </div> */}
        <script src="boot/js/jquery.js"></script>
        <script src="boot/js/bootstrap.min.js"></script>
    </>
}
Home.layout = AuthCustom;
export default Home;