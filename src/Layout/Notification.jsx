import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import store from "../Context/context";

const variants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
    },
  },
};

const NotificationWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const ctx = useContext(store);
  // console.log(ctx, "notifincation ctx");

  useEffect(() => {
    if (ctx.notification.isNotification) {
      setIsVisible(true);
    }
  }, [ctx.notification.isNotification]);

  useEffect(() => {
    if (isVisible || ctx.notification.isNotification)
      setTimeout(() => {
        setIsVisible(false);
        ctx.notificationChangeHandler(false, "", null);
      }, 3000);
  }, [isVisible, ctx.notification.isNotification]);

  const handleClose = () => setIsVisible(false);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`fixed top-0 right-0 p-4 m-4 w-64 rounded-lg shadow-md ${
            isVisible ? "block" : "hidden"
          } ${
            ctx.notification.type === "success"
              ? "bg-green-500 text-white"
              : ctx.notification.type === "error"
              ? "bg-red-500 text-white"
              : "bg-yellow-500 text-black"
          }`}
        >
          <button
            className="float-right text-2xl font-bold"
            onClick={handleClose}
          >
            &times;
          </button>
          <p className="text-sm">{ctx.notification.message}</p>
        </motion.div>
      )}
      {children}
    </AnimatePresence>
  );
};

export default NotificationWrapper;
