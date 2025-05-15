
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-analytics-lightGray">
      <Navbar />
      
      <div className="bg-analytics-blue text-white py-16">
        <div className="analytics-container">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl max-w-3xl">
            Data analyst and visualization specialist with a passion for turning complex datasets into actionable insights.
          </p>
        </div>
      </div>
      
      <main className="flex-grow py-12">
        <div className="analytics-container">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop" 
                    alt="Profile" 
                    className="w-full h-auto" 
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">Professional Background</h2>
                <p className="mb-4 text-gray-700">
                  With over 8 years of experience in data analytics and business intelligence, I've helped organizations
                  across various industries leverage their data to make better decisions and drive measurable results.
                  My expertise spans from data collection and cleaning to advanced analytics and compelling visualizations
                  that tell the story behind the numbers.
                </p>
                <p className="text-gray-700">
                  I hold a Master's degree in Data Science and certifications in several leading analytics platforms.
                  My approach combines technical expertise with business acumen to ensure that analytics projects
                  deliver tangible value and address real business challenges.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Analytics Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-analytics-blue">Tableau</Badge>
                    <Badge className="bg-analytics-blue">Power BI</Badge>
                    <Badge className="bg-analytics-blue">Google Analytics</Badge>
                    <Badge className="bg-analytics-blue">Looker</Badge>
                    <Badge className="bg-analytics-blue">Excel</Badge>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Programming</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-analytics-teal">Python</Badge>
                    <Badge className="bg-analytics-teal">R</Badge>
                    <Badge className="bg-analytics-teal">SQL</Badge>
                    <Badge className="bg-analytics-teal">JavaScript</Badge>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Domains</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-analytics-blue text-analytics-blue">Marketing Analytics</Badge>
                    <Badge variant="outline" className="border-analytics-blue text-analytics-blue">Financial Analysis</Badge>
                    <Badge variant="outline" className="border-analytics-blue text-analytics-blue">Healthcare Analytics</Badge>
                    <Badge variant="outline" className="border-analytics-blue text-analytics-blue">Supply Chain Optimization</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">My Approach</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-analytics-blue flex items-center justify-center text-white font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Understanding the Problem</h3>
                    <p className="text-gray-600">I start by deeply understanding the business context and defining clear objectives for any analytics project.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-analytics-blue flex items-center justify-center text-white font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Data Discovery & Preparation</h3>
                    <p className="text-gray-600">Thoroughly exploring available data, cleaning it, and preparing it for analysis is crucial for reliable results.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-analytics-blue flex items-center justify-center text-white font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Analysis & Visualization</h3>
                    <p className="text-gray-600">I employ advanced analytical techniques and create clear visualizations that reveal patterns and insights.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-analytics-blue flex items-center justify-center text-white font-bold">4</div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Actionable Recommendations</h3>
                    <p className="text-gray-600">Every analysis concludes with clear, actionable recommendations tied to business outcomes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Education & Certifications</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-analytics-blue pl-4">
                <h3 className="font-semibold">Master of Science in Data Science</h3>
                <p className="text-gray-600">Stanford University, 2018</p>
              </div>
              
              <div className="border-l-4 border-analytics-blue pl-4">
                <h3 className="font-semibold">Bachelor of Science in Statistics</h3>
                <p className="text-gray-600">University of California, Berkeley, 2016</p>
              </div>
              
              <Separator className="my-6" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-analytics-lightGray rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-analytics-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>Tableau Desktop Certified Professional</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-analytics-lightGray rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-analytics-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>Microsoft Certified: Data Analyst Associate</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-analytics-lightGray rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-analytics-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>Google Analytics Individual Qualification</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-analytics-lightGray rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-analytics-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>AWS Certified Data Analytics - Specialty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
