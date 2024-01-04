import Buttons from "../components/Buttons";
import { currentStatus } from "../states/features/MovieSlice";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { checkStatus } from "../functions/checkStatus";

const HomePage = () => {
  const status = useSelector(currentStatus);

  // check status and return component
  let content = checkStatus(status);

  return (
    <div className=" w-10/12 m-auto my-5 flex flex-col items-center justify-center">
      <Buttons />

      <motion.div
        layout
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1.8 } }}
        exit={{ opacity: 0 }}
        viewport={{ once: true }}
      >
        <AnimatePresence>{content}</AnimatePresence>
      </motion.div>
    </div>
  );
};

export default HomePage;
