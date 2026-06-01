import React from 'react';
import { motion } from 'framer-motion';

export const Reveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // حالت شروع: نامرئی و کمی پایین‌تر
      whileInView={{ opacity: 1, y: 0 }} // حالت هنگام مشاهده: مرئی و در جای اصلی
      viewport={{ once: true }} // فقط یکبار انیمیشن اجرا شود
      transition={{ duration: 0.6, ease: "easeOut" }} // سرعت و نوع حرکت
    >
      {children}
    </motion.div>
  );
};