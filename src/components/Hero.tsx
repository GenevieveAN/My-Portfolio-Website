
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-analytics-blue to-analytics-teal text-white py-16 md:py-24">
      <div className="analytics-container">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Turning Data Into Valuable Insights
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            A portfolio of data analytics projects showcasing how raw data can be
            transformed into actionable business intelligence and strategic
            insights.
          </p>
          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-white text-analytics-blue hover:bg-white/90"
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
