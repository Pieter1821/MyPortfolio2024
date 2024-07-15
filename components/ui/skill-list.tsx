import { motion } from "framer-motion";


export  const SkillList: React.FC<{ skills: string[] }> = ({ skills }) => (
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <motion.li 
          key={index}
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
          {skill}
        </motion.li>
      ))}
    </ul>
  );