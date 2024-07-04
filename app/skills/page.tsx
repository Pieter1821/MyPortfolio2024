const Skills = () => {
    return (
      <section id="skills" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold">JavaScript</h3>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold">TypeScript</h3>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold">React</h3>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold">Next.js</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;
  