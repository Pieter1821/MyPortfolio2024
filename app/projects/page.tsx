const Projects = () => {
    return (
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-4 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-bold">Project 1</h3>
              <p className="mt-2 text-gray-600">Description of project 1.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-bold">Project 2</h3>
              <p className="mt-2 text-gray-600">Description of project 2.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-bold">Project 3</h3>
              <p className="mt-2 text-gray-600">Description of project 3.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;
  