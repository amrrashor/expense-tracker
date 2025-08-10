import {motion} from "motion/react"
import { ANIMATE_TRANSITION, EXIT_TRANSITION, INITIAL_TRANSITION } from "../constants/animations"
import LoginForm from "../components/Login/LoginForm"
import Divider from "../components/common/ui/Divider"
import LoginOptions from "../components/Login/LoginOptions"
import { toast } from "sonner"

const Login = () => {
    const handleFormSubmit = (data: { email: string, password: string }) => {
        localStorage.setItem("userInfo", JSON.stringify(data));
        toast.success('Logged Succefully');
        setTimeout(() => {
            window.location.reload();
        }, 1000)
    };

    return (
            <motion.div
                initial={INITIAL_TRANSITION}
                animate={ANIMATE_TRANSITION}
                exit={EXIT_TRANSITION}
                transition={{ duration: 0.3 }}
                className="p-9"
            >
                <div className="my-10">
                    <h1 className="text-4xl text-primary-blue font-bold text-center">Expenset.</h1>
                </div>
                <h1 className="text-primary-black text-2xl text-center mb-7 font-bold">Login</h1>
                <LoginForm onSubmit={handleFormSubmit} />
                <Divider />
                <LoginOptions />
            </motion.div>
        )
}

export default Login