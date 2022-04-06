import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Link to="/about"> toto</Link>
            <h1>Home</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec euismod, nisl eget consectetur sagittis, nisl nunc
                aliquet nunc, eu aliquam nisl nunc euismod nunc.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
            </p>
        </div>
    );
}