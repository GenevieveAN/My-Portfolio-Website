
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectFiltersProps {
  categories: string[];
  tools: string[];
  onFilterChange: (category: string | null, selectedTools: string[]) => void;
}

const ProjectFilters = ({
  categories,
  tools,
  onFilterChange,
}: ProjectFiltersProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);

  const toggleTool = (tool: string) => {
    if (selectedTools.includes(tool)) {
      setSelectedTools(selectedTools.filter((t) => t !== tool));
    } else {
      setSelectedTools([...selectedTools, tool]);
    }
  };

  const handleCategoryClick = (category: string) => {
    const newCategory = selectedCategory === category ? null : category;
    setSelectedCategory(newCategory);
    onFilterChange(newCategory, selectedTools);
  };

  const handleToolsChange = (updatedTools: string[]) => {
    setSelectedTools(updatedTools);
    onFilterChange(selectedCategory, updatedTools);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedTools([]);
    onFilterChange(null, []);
  };

  return (
    <div className="mb-8 p-4 bg-white rounded-lg shadow">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-analytics-darkGray mb-2">
          Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              className={`cursor-pointer hover:bg-analytics-teal ${
                selectedCategory === category
                  ? "bg-analytics-teal"
                  : "bg-analytics-lightGray text-analytics-darkGray hover:text-white"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-semibold text-analytics-darkGray mb-2">
          Tools & Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <Badge
              key={tool}
              className={`cursor-pointer hover:bg-analytics-blue ${
                selectedTools.includes(tool)
                  ? "bg-analytics-blue"
                  : "bg-analytics-lightGray text-analytics-darkGray hover:text-white"
              }`}
              onClick={() => toggleTool(tool)}
            >
              {tool}
            </Badge>
          ))}
        </div>
      </div>

      {(selectedCategory || selectedTools.length > 0) && (
        <div className="flex justify-end">
          <Button
            variant="outline"
            size="sm"
            className="text-analytics-gray"
            onClick={clearFilters}
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProjectFilters;
