
import { Project } from "../types/Project";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Sales Analysis Dashboard",
    description: "An interactive dashboard that analyzes customer behavior and sales patterns for an e-commerce company.",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
    category: "Business Intelligence",
    tools: ["Tableau", "SQL", "Python", "Excel"],
    date: "2023-10-15",
    content: {
      overview: "Created a comprehensive sales dashboard for an e-commerce platform that processes over 10,000 transactions daily. The dashboard provided real-time insights into sales performance, customer behavior, and inventory management.",
      challenge: "The client was struggling with interpreting their growing sales data across multiple platforms and needed a unified view to make data-driven decisions regarding inventory management and marketing strategies.",
      approach: "I leveraged SQL for data extraction and cleaning, Python for advanced analytics, and Tableau for creating interactive visualizations. The process involved identifying key performance indicators, designing intuitive dashboards, and implementing drill-down capabilities for detailed analysis.",
      results: "The dashboard resulted in a 15% increase in sales efficiency, 23% reduction in overstocked inventory, and helped identify top-performing products that were subsequently featured in targeted marketing campaigns.",
      visualizations: [
        {
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
          caption: "Sales trends dashboard showing monthly performance compared to previous year"
        },
        {
          image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&auto=format&fit=crop",
          caption: "Customer segmentation analysis by purchase behavior"
        }
      ],
      insights: [
        "Identified a 27% increase in mobile purchases year-over-year",
        "Discovered peak purchasing hours between 8-10 PM on weekdays",
        "Recognized cross-selling opportunities that increased average order value by 12%"
      ],
      conclusion: "This project demonstrated how proper data visualization can transform raw sales data into actionable insights, directly impacting business outcomes and strategic planning."
    }
  },
  {
    id: "2",
    title: "Healthcare Patient Flow Optimization",
    description: "Statistical analysis and predictive modeling to optimize patient scheduling and reduce wait times.",
    thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop",
    category: "Healthcare Analytics",
    tools: ["R", "Power BI", "Statistical Modeling", "Process Mining"],
    date: "2023-07-22",
    content: {
      overview: "Developed a data-driven solution for a regional hospital to optimize patient scheduling and resource allocation, ultimately reducing wait times and improving patient satisfaction.",
      challenge: "The hospital was experiencing significant bottlenecks in patient flow, with average wait times exceeding 45 minutes and inefficient allocation of medical staff across departments.",
      approach: "I analyzed historical patient data, appointment patterns, and staff availability using R for statistical modeling. Process mining techniques were employed to identify bottlenecks, and I created predictive models to forecast patient volumes across different time periods.",
      results: "Implementation of the new scheduling system resulted in a 35% reduction in patient wait times, 20% improvement in resource utilization, and increased patient satisfaction scores from 7.2 to 8.9 (out of 10).",
      visualizations: [
        {
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop",
          caption: "Patient flow analysis showing bottlenecks in the admission process"
        },
        {
          image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&auto=format&fit=crop",
          caption: "Predictive model for weekly patient volume by department"
        }
      ],
      insights: [
        "Morning appointments were consistently overbooked while afternoon slots remained underutilized",
        "Specialized services could be consolidated on specific days to improve staff efficiency",
        "Pre-registration process improvements could save an average of 12 minutes per patient"
      ],
      conclusion: "By applying data analytics to healthcare operations, we were able to create a more efficient system that benefited both patients and medical staff, demonstrating the value of analytics in non-traditional business settings."
    }
  },
  {
    id: "3",
    title: "Financial Market Sentiment Analysis",
    description: "Natural language processing to analyze market sentiment from news articles and social media.",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop",
    category: "Financial Analytics",
    tools: ["Python", "NLP", "Machine Learning", "Matplotlib"],
    date: "2023-04-10",
    content: {
      overview: "Built a sentiment analysis tool that processes financial news and social media content to gauge market sentiment for specific stocks and sectors, providing traders with additional signals for their investment decisions.",
      challenge: "Financial traders were struggling to systematically incorporate qualitative information from news and social media into their trading strategies, often missing important sentiment shifts that impacted market movements.",
      approach: "I implemented natural language processing techniques using Python to analyze text data from multiple sources. The solution included data collection through APIs, text preprocessing, sentiment classification using machine learning models, and visualization of sentiment trends.",
      results: "The sentiment analysis tool achieved 78% accuracy in predicting short-term price movements based on sentiment signals alone. When combined with technical analysis, trading strategies incorporating sentiment data showed a 12% improvement in returns.",
      visualizations: [
        {
          image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&auto=format&fit=crop",
          caption: "Sentiment trends correlated with stock price movements"
        },
        {
          image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&auto=format&fit=crop",
          caption: "Topic modeling results showing prevalent themes in financial news"
        }
      ],
      insights: [
        "Social media sentiment often preceded news article sentiment by 3-5 hours",
        "Negative sentiment had a stronger and more immediate impact on stock prices than positive sentiment",
        "Sentiment analysis was particularly effective for consumer-facing companies where public opinion directly impacts sales"
      ],
      conclusion: "This project demonstrated the value of incorporating alternative data sources into financial analysis, creating a more holistic approach to market intelligence that captures both quantitative and qualitative factors."
    }
  },
  {
    id: "4",
    title: "Supply Chain Network Optimization",
    description: "Using network analysis and optimization algorithms to redesign global supply chain operations.",
    thumbnail: "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=800&auto=format&fit=crop",
    category: "Supply Chain Analytics",
    tools: ["Python", "CPLEX", "GIS Mapping", "Scenario Analysis"],
    date: "2022-11-30",
    content: {
      overview: "Redesigned the global supply chain network for a manufacturing company to optimize distribution routes, warehouse locations, and inventory levels across three continents.",
      challenge: "The company was experiencing increasing logistics costs and delivery delays due to suboptimal warehouse locations and distribution routes established before their recent expansion into new markets.",
      approach: "I developed a mathematical optimization model using Python and CPLEX to determine optimal facility locations, incorporated transportation constraints and costs, and evaluated different scenarios to account for demand fluctuations and supply risks.",
      results: "The optimized network design reduced transportation costs by 18%, decreased average delivery time by 2.3 days, and improved inventory turnover by 22%, while maintaining service level agreements with customers.",
      visualizations: [
        {
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop",
          caption: "Global supply chain network with optimized routes"
        },
        {
          image: "https://images.unsplash.com/photo-1565891741441-64926e441838?w=800&auto=format&fit=crop",
          caption: "Cost-sensitivity analysis for different warehouse configurations"
        }
      ],
      insights: [
        "Consolidating European distribution centers from 5 to 3 strategically located facilities optimized coverage while reducing costs",
        "Air freight utilization could be reduced by 35% through better demand forecasting and inventory management",
        "Adding a cross-docking facility in Singapore significantly improved distribution efficiency in Southeast Asia"
      ],
      conclusion: "This project showcased how advanced analytics and optimization techniques can transform supply chain operations, leading to significant cost savings and improved customer satisfaction through faster and more reliable deliveries."
    }
  }
];
