
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import ProjectFilters from "../components/ProjectFilters";
import { projects } from "../data/projects";
import { Project } from "../types/Project";

const Index = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  
  // Extract unique categories and tools for filters
  const categories = Array.from(
    new Set(projects.map((project) => project.category))
  );
  
  const allTools = projects.flatMap((project) => project.tools);
  const uniqueTools = Array.from(new Set(allTools));

  const handleFilterChange = (
    category: string | null,
    tools: string[]
  ) => {
    setSelectedCategory(category);
    setSelectedTools(tools);
  };

  useEffect(() => {
    let results = projects;
    
    if (selectedCategory) {
      results = results.filter(
        (project) => project.category === selectedCategory
      );
    }

    if (selectedTools.length > 0) {
      results = results.filter((project) =>
        selectedTools.every((tool) => project.tools.includes(tool))
      );
    }

    setFilteredProjects(results);
  }, [selectedCategory, selectedTools]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <main className="flex-grow py-12 bg-analytics-lightGray">
        <div className="analytics-container">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          
          <ProjectFilters
            categories={categories}
            tools={uniqueTools}
            onFilterChange={handleFilterChange}
          />

          {filteredProjects.length === 0 ? (
            <div className="text-center py-8">
              <h3 className="text-xl font-semibold text-analytics-gray">No projects match your filters</h3>
              <p className="mt-2 text-muted-foreground">Try adjusting your filters or clearing them to see more projects.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
