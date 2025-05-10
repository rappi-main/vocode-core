import React from 'react';
import { motion } from 'framer-motion';

const CodeBlock = ({ code }) => {
  return (
    <motion.div 
      className="bg-gray-900 rounded-lg p-6 shadow-xl"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <pre className="text-gray-100 font-mono text-sm md:text-base overflow-x-auto">
        <code>{code}</code>
      </pre>
    </motion.div>
  );
};

export default CodeBlock;