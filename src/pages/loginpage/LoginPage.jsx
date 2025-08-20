import { Link } from "react-router-dom";
function Home(){
    return(
        <div>
            <h1>HOME</h1>
            <Link to="/register">
            <button>IR A REGISTRO</button>
            </Link>
            <Link to="/forgot">
            <button>OLVIDE MI CONTRASEÑA</button>
            </Link>

            <Link to="/hooks">
            <button>IR A HOOKS</button>
            </Link>
        </div>
    );
}

export default Home;