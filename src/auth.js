import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import axios from "axios";
import bcrypt from "bcryptjs";

// export const [token, setToken] = useState("");

export function RequireAuth(props) {
    let auth = props.token;
    let location = useLocation();

    if (!auth) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return props.children;
}
export function setToken(userToken, persistent: boolean = false) {
    const token = JSON.stringify(userToken);
    if (persistent) { // save token to local storage for persistent login
        localStorage.setItem("userToken", token);
    } else { // save token to session storage for non-persistent login
        sessionStorage.setItem("userToken", token);
    }
}
export function getToken(): ?string {
    let tokenString: string;
    tokenString = sessionStorage.getItem('userToken'); // if token is in session storage
    if (!tokenString) { // if not, try to get it from local storage
        tokenString = localStorage.getItem('userToken');
    }
    const userToken = JSON.parse(tokenString); // parse the token
    return userToken?.token; // return the token or null
}

export async function login(username, password) {
    // hash the password
    // const hash =
    // send the request
    const pwd = await bcrypt.hash(password, 10);
    // const pwd = password;
    console.log(pwd);
    let response = await axios.post('https://api.cloud.itsligo.bugbear.fr/api/v1/login', {
        username: username,
        password: pwd
    });
    // if the response is successful, set the token in local storage
    if (response.status === 200) {
        setToken(response.data, true);
        return response.data;
    }
    return null;
}
export async function logout({from = "/"}) {
    // remove the token from local storage
    localStorage.removeItem("userToken");
    sessionStorage.removeItem("userToken");
}

export async function signup(data) {
    // hash the password
    // send the request
    // let response = await axios.post('https://api.cloud.itsligo.bugbear.fr/api/v1/signup', data);
    // return response.data;
    // TODO: implement signup
}

