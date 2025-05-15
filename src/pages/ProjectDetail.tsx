
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
            <p className="mb-6 text-muted-foreground">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/">
              <Button>Return to Projects</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-analytics-lightGray">
      <Navbar />

      {/* Hero Banner */}
      <div
        className="bg-analytics-blue text-white pt-16 pb-20 md:pt-20 md:pb-24"
      >
        <div className="analytics-container">
          <Link
            to="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to projects
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-white/90 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge className="bg-white/20 hover:bg-white/30">
                {project.category}
              </Badge>
              {project.tools.map((tool, index) => (
                <Badge
                  key={index}
                  className="bg-white/10 hover:bg-white/20"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="flex-grow py-12">
        <div className="analytics-container">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-gray-700 mb-6">{project.content.overview}</p>

            {/* Challenge Section */}
            <h3 className="text-xl font-semibold mb-3">The Challenge</h3>
            <p className="text-gray-700 mb-6">{project.content.challenge}</p>

            {/* Approach Section */}
            <h3 className="text-xl font-semibold mb-3">My Approach</h3>
            <p className="text-gray-700 mb-6">{project.content.approach}</p>

            {/* Results Section */}
            <h3 className="text-xl font-semibold mb-3">Results</h3>
            <p className="text-gray-700 mb-6">{project.content.results}</p>
          </div>

          {/* Visualizations */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-6">Data Visualizations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.content.visualizations.map((viz, index) => (
                <div key={index} className="overflow-hidden rounded-lg border">
                  <img
                    src={viz.image}
                    alt={`Visualization ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 bg-analytics-lightGray">
                    <p className="text-sm text-gray-600">{viz.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-6">Key Insights</h2>
            <ul className="space-y-4">
              {project.content.insights.map((insight, index) => (
                <li key={index} className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-analytics-blue text-white">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-gray-700 pt-1">{insight}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Conclusion */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <p className="text-gray-700">{project.content.conclusion}</p>
          </div>

          <div className="mt-8 text-center">
            <Link to="/">
              <Button className="bg-analytics-blue hover:bg-analytics-blue/90">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to all projects
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
