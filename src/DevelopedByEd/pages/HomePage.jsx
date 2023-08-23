import Buttons from "../components/Buttons";
import Failed from "../components/Failed";
import Loading from "../components/Loading";

import { currentStatus } from "../features/MovieSlice";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import Movies from "../components/Movies";
import { useState } from "react";


const HomePage = () => {

  const status = useSelector(currentStatus);

  let content;

  if (status === "pending") {
    content = <Loading />;
  }

  if (status === "failed") {
    content = <Failed />;
  }

  if (status === "success") {
    content = <Movies />;
  }

  return (
      <div className=" w-10/12 m-auto my-5 flex flex-col items-center justify-center">

        <Buttons/>

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
