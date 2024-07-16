"use client"
import { FaCode, FaServer, FaTools, FaUserFriends } from 'react-icons/fa';
import SkillCard from '@/components/ui/skill-card';
import {SkillList} from '@/components/ui/skill-list';   

const Skills = () => {
  const skillCategories = [
    { title: 'Frontend', icon: FaCode, skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'] },
    { title: 'Backend', icon: FaServer, skills: ['Node.js'] },
    { title: 'Frameworks', icon: FaTools, skills: ['Next.js', 'TypeScript'] },
    { title: 'Additional Tools', icon: FaTools, skills: ['Git & Github', 'Jest'] },
    { title: 'Soft Skills', icon: FaUserFriends, skills: ['Problem-Solving', 'Teamwork', 'Communication', 'Adaptability', 'Time Management'] },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Code Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} title={category.title} icon={category.icon}>
              <SkillList skills={category.skills} />
            </SkillCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;