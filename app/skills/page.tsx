              "use client"
              import { WobbleCard } from '@/components/ui/wobble-card';

              const Skills = () => {
                const technicalSkills = ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'React', 'TypeScript', 'Next.js', 'Git'];
                const softSkills = ['Problem-Solving', 'Teamwork', 'Communication', 'Adaptability', 'Time Management'];

                return (
                  <section id="skills" className="py-16">
                    <div className="container mx-auto w-60">
                      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Skills</h2>
                      <div className="flex flex-row md:flex-col gap-8">
                        <div className="skill-category flex-1">
                          <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
                          <ul className="list-none pl-0 flex flex-wrap gap-4">
                            {technicalSkills.map((skill, index) => (
                              <WobbleCard key={index} className="flex-grow">
                                {skill}
                              </WobbleCard>
                            ))}
                          </ul>
                        </div>
                        <div className="skill-category flex-1">
                          <h3 className="text-2xl font-bold mb-4">Soft Skills</h3>
                          <ul className="list-none pl-0 flex flex-wrap gap-4">
                            {softSkills.map((skill, index) => (
                              <WobbleCard key={index} className="flex-grow">
                                {skill}
                              </WobbleCard>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                );
              }

              export default Skills;
