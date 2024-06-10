"use client"
import { motion } from "framer-motion"

type Props = {}
const Template = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: .2 }}
        >
            {children}
        </motion.div>
    )
}
export default Template