import Dropdown from "../components/dropDown";
import logo from "../Img/logo.png";


export default function start() {

    return (
        <main className="start">
            <img src={logo} alt="" />
            <h1 className="title">Catalog</h1>
            <Dropdown/>
        </main>
    );
}