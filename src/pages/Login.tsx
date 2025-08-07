import {motion} from "motion/react"
import { ANIMATE_TRANSITION, EXIT_TRANSITION, INITIAL_TRANSITION } from "../constants/animations"

const Login = () => {
    return (
            <motion.div
                initial={INITIAL_TRANSITION}
                animate={ANIMATE_TRANSITION}
                exit={EXIT_TRANSITION}
                transition={{ duration: 0.3 }}
            >
                Login
            </motion.div>
        )
}

export default Login