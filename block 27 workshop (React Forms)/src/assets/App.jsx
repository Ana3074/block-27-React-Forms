import Authenticate from "./authenticate";
import SignUpForm from "./signupform";
export default function App() {

    // Authenticate Component Prompt 2
    // create token & setToken variables with useState.
    // set its initial value to null.

    // const [token, setToken] = useState(null);
    return (
        <>
            <Authenticate />
            <SignUpForm />
        </>
    );
}