import React from 'react';
import { motion } from 'framer-motion';

export type  SkillCardProps = {
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  className?: string;
};

const SkillCard: React.FC<SkillCardProps> = ({ title, icon: Icon, children, className = '' }) => {
  return (
    <motion.div 
      className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center mb-4">
        {Icon && <Icon className="w-6 h-6 mr-3 text-blue-500" />}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      {children}
    </motion.div>
  );
};

export default SkillCard;