import { AnimatePresence, motion } from "framer-motion"
import { FC, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface PageContainerProps {
  children: ReactNode
  className?: string
}

const PageContainer: FC<PageContainerProps> = ({ children, className }) => {
  return (
    <AnimatePresence>
      <motion.main
        className={twMerge("flex-1 px-5", className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}

export default PageContainer
