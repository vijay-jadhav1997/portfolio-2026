import { motion } from "framer-motion";
import { RiArrowLeftLine, RiCheckboxCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const EmailSuccess = () => {
  return (
    <div className="inset-0 w-full fixed min-h-screen max-w-[1324px] mx-auto flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-y-auto">
      <motion.div
        className="max-w-xl w-[85%] px-4 sm:px-8 py-10 border hover:border-gray-300/50 border-blue-700/50 flex justify-center items-center flex-col rounded-xl bg-gradient-to-br from-gray-300/20 via-blue-700/20 to-blue-600/20 backdrop-blur-2xl"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 0.5 , ease: 'easeOut'}}
      >

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
          className="mb-8"
        >
          <RiCheckboxCircleLine className="text-green-400 w-20 h-20 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
        >
          Your Message Has Been Sent Successfully!
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-200 text-lg mb-8 leading-relaxed"
        >
          Thank you for reaching out! I truly appreciate your interest and will respond at the earliest. 
          Meanwhile, feel free to explore more of my work or connect with me through my social profiles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link
            to="/"
            className="relative group cursor-pointer mt-3 flex justify-center items-center border border-gray-300/80 hover:border-blue-600/90 rounded-tr-4xl rounded-bl-4xl gap-3 py-3 px-4 w-40 font-medium text-white transition-transform duration-300 hover:-translate-y-[1px]"
          >
            {/* <span className="relative z-10 bg-gradient-to-r from-blue-500 to-green-400 rounded-lg px-8 py-3"> */}
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg blur-xl opacity-70 hover:opacity-90 transition-all"></span>
                <RiArrowLeftLine className="text-xl font-bold opacity-100 group-hover:opacity-0 translate-x-2 group-hover:-translate-x-10 transition-all duration-500 ease-in-out" />
                <span className=" font-semibold translate-x-2 group-hover:-translate-x-2 transition-transform duration-500 ease-in-out">Back</span>
                <RiArrowLeftLine className="text-xl font-bold opacity-0 group-hover:opacity-100 translate-x-10 group-hover:-translate-x-2 transition-all duration-500 ease-in-out" />

             
            {/* </span> */}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{
            delay: 0.10,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/40 rounded-full blur-[120px]"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default EmailSuccess;
