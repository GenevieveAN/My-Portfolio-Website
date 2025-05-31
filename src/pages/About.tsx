

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-analytics-lightGray">
      <Navbar />
      
      <div className="bg-analytics-blue text-white py-16">
        <div className="analytics-container">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl max-w-3xl">
            Marketing Analytics Lead and Technical Project Manager with expertise in transforming complex data into actionable insights that drive business growth.
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
                    src="/lovable-uploads/db187c41-785e-4420-8b73-93d1921e2374.png" 
                    alt="Profile" 
                    className="w-full h-auto" 
                  />
                </div>
                <div className="mt-4 flex flex-col space-y-2">
                  <Button variant="outline" className="flex items-center gap-2" onClick={() => window.open("https://github.com/GenevieveAN", "_blank")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    GitHub Profile
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2" onClick={() => window.open("https://www.linkedin.com/in/genevieveantwi-nuamah", "_blank")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    LinkedIn Profile
                  </Button>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">Professional Background</h2>
                <p className="mb-4 text-gray-700">
                  With a Master's in Biotechnology and Business from University College Dublin and a Diploma in Project Management from UCD Professional Academy, I bring a unique analytical foundation to marketing data analysis. My technical project management expertise, combined with my research scientist background, enables me to bridge technical teams and business stakeholders effectively.
                </p>
                <p className="mb-4 text-gray-700">
                  Currently serving as a Marketing Analytics Lead at the University of Georgia, I leverage my Certified Digital Marketing Professional credentials from the Digital Marketing Institute and American Marketing Association, along with Google Analytics 4 certification, to drive data-informed marketing strategies. My previous experience as a Talent Intelligence and Operations Analyst at Teamwork (a remote SaaS startup) and as a Research Scientist at the West African Centre for Cell Biology of Infectious Pathogens has equipped me with diverse analytical skills.
                </p>
                <p className="text-gray-700">
                  I specialize in transforming complex datasets into actionable insights that optimize marketing campaigns, enhance customer experiences, and drive measurable business growth. My interdisciplinary background in life sciences, business, and digital marketing allows me to approach data challenges with both scientific rigor and strategic marketing insight.
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
                    <Badge className="bg-analytics-blue">Looker Studio</Badge>
                    <Badge className="bg-analytics-blue">Google Analytics</Badge>
                    <Badge className="bg-analytics-blue">Excel</Badge>
                    <Badge className="bg-analytics-blue">Tableau</Badge>
                    <Badge className="bg-analytics-blue">Power BI</Badge>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Programming & Technical</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-analytics-teal">R</Badge>
                    <Badge className="bg-analytics-teal">SQL</Badge>
                    <Badge className="bg-analytics-teal">Python</Badge>
                    <Badge className="bg-analytics-teal">HTML/CSS</Badge>
                    <Badge className="bg-analytics-teal">Git</Badge>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Domains</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-analytics-blue text-analytics-blue">Marketing Analytics</Badge>
                    <Badge variant="outline" className="border-analytics-blue text-analytics-blue">Project Management</Badge>
                    <Badge variant="outline" className="border-analytics-blue text-analytics-blue">Customer Insights</Badge>
                    <Badge variant="outline" className="border-analytics-blue text-analytics-blue">Market Research</Badge>
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
                    <h3 className="font-semibold">Data-Driven Strategy</h3>
                    <p className="text-gray-600">I develop marketing strategies firmly rooted in comprehensive data analysis, ensuring decisions are evidence-based.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-analytics-blue flex items-center justify-center text-white font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Cross-Functional Collaboration</h3>
                    <p className="text-gray-600">I excel at bridging technical and business teams, facilitating clear communication and alignment on objectives.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-analytics-blue flex items-center justify-center text-white font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Actionable Insights</h3>
                    <p className="text-gray-600">I transform complex data into clear recommendations that drive measurable business outcomes and growth.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-analytics-blue flex items-center justify-center text-white font-bold">4</div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Continuous Improvement</h3>
                    <p className="text-gray-600">I implement iterative processes that leverage data feedback loops to continuously refine marketing strategies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Education & Experience</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-analytics-blue pl-4">
                <h3 className="font-semibold">Master's in Biotechnology and Business</h3>
                <p className="text-gray-600">University College Dublin</p>
              </div>
              
              <div className="border-l-4 border-analytics-blue pl-4">
                <h3 className="font-semibold">Diploma in Project Management</h3>
                <p className="text-gray-600">UCD Professional Academy</p>
              </div>
              
              <div className="border-l-4 border-analytics-blue pl-4">
                <h3 className="font-semibold">Certified Digital Marketing Professional</h3>
                <p className="text-gray-600">Digital Marketing Institute & American Marketing Association</p>
              </div>
              
              <div className="border-l-4 border-analytics-blue pl-4">
                <h3 className="font-semibold">Bachelor's in Biochemistry, Cell and Molecular Biology</h3>
                <p className="text-gray-600">University of Ghana</p>
              </div>
              
              <Separator className="my-6" />
              
              <div className="space-y-4">
                <div className="border-l-4 border-analytics-teal pl-4">
                  <h3 className="font-semibold">Marketing Analytics Lead</h3>
                  <p className="text-gray-600">University of Georgia</p>
                </div>
                
                <div className="border-l-4 border-analytics-teal pl-4">
                  <h3 className="font-semibold">Talent Intelligence and Operations Analyst</h3>
                  <p className="text-gray-600">Teamwork (Remote SaaS Startup)</p>
                </div>
                
                <div className="border-l-4 border-analytics-teal pl-4">
                  <h3 className="font-semibold">Research Scientist</h3>
                  <p className="text-gray-600">West African Centre for Cell Biology of Infectious Pathogens</p>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-analytics-lightGray rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-analytics-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>Google Analytics 4 Certified</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-analytics-lightGray rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-analytics-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>Certified Digital Marketing Professional</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-analytics-lightGray rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-analytics-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>Project Management Diploma</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-analytics-lightGray rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-analytics-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>Advanced Excel</span>
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

