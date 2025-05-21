
import { Project } from "../types/Project";

export const projects: Project[] = [
  {
    id: "exploratory-data-analysis",
    title: "Exploratory Data Analysis",
    description: "In-depth exploratory data analysis of multiple datasets using Python, SQL, and visualization libraries to uncover patterns and insights.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    category: "Data Analysis",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SQL", "Jupyter Notebook"],
    date: "2025-05-15",
    repoUrl: "https://github.com/GenevieveAN/Portfolio-Projects/tree/main",
    content: {
      overview: "This project showcases various exploratory data analysis techniques applied to real-world datasets. Using Python's data science stack and SQL, I performed comprehensive analyses to extract meaningful patterns, trends, and insights from complex datasets.",
      challenge: "Raw datasets often contain hidden patterns and relationships that aren't immediately apparent. The challenge was to employ appropriate statistical and visual analysis methods to uncover these insights while handling issues such as missing values, outliers, and complex relationships between variables.",
      approach: "I utilized a structured approach to exploratory data analysis that involved data cleaning, descriptive statistics, correlation analysis, and advanced data visualization. For each dataset, I formulated specific questions to guide the analysis and used various Python libraries and SQL queries to investigate the data from multiple perspectives.",
      results: "The analysis revealed several significant insights across datasets, including customer behavior patterns, performance trends, and unexpected correlations between variables. These findings were documented with clear visualizations and actionable recommendations for potential business decisions.",
      insights: [
        "Identified key factors influencing customer purchasing decisions through correlation analysis",
        "Discovered seasonal trends in data that could be leveraged for strategic planning",
        "Uncovered demographic segments that showed unexpected behavior patterns",
        "Mapped relationships between seemingly unrelated variables that revealed new business opportunities",
        "Quantified the impact of outliers and developed recommendations for handling edge cases"
      ],
      conclusion: "This exploratory data analysis project demonstrates how systematic data investigation can transform raw information into actionable insights. The techniques and methodologies used are applicable across industries and can be adapted to various data-driven decision-making scenarios. The project showcases not only technical proficiency with analysis tools but also the ability to translate statistical findings into business-relevant recommendations."
    }
  },
  {
    id: "data-cleaning-processing",
    title: "Data Cleaning & Processing",
    description: "Comprehensive data cleaning and preprocessing pipelines for transforming raw, messy datasets into analysis-ready structured data.",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
    category: "Data Engineering",
    tools: ["Python", "Pandas", "Regular Expressions", "SQL", "ETL", "Data Validation"],
    date: "2025-05-10",
    repoUrl: "https://github.com/GenevieveAN/Portfolio-Projects/tree/main",
    content: {
      overview: "This project focuses on developing robust data cleaning and preprocessing pipelines to transform raw, messy datasets into analysis-ready structured data. It addresses common data quality issues such as missing values, duplicates, inconsistent formats, and outliers through systematic cleansing methodologies.",
      challenge: "Real-world datasets often come with numerous quality issues including missing values, inconsistent formatting, duplicates, outliers, and structural problems. These issues significantly impact the reliability of subsequent analyses and must be addressed through systematic cleaning processes before meaningful insights can be derived.",
      approach: "I developed a comprehensive approach to data cleaning that included automated detection of data quality issues, implementation of appropriate cleaning techniques, and validation of the cleaned datasets. This involved creating reusable functions and pipelines for handling specific data problems, employing regular expressions for text standardization, and implementing validation checks to ensure data integrity.",
      results: "The developed cleaning pipelines successfully transformed several problematic datasets into high-quality, analysis-ready data resources. This improved the reliability of subsequent analyses and reduced processing time by automating repetitive cleaning tasks. The cleaning methodologies were documented as reusable components that can be applied to similar data challenges in the future.",
      insights: [
        "Developed efficient methods for handling missing values that preserved data integrity while maximizing usable information",
        "Created automated systems for detecting and correcting inconsistent formatting across text fields",
        "Implemented outlier detection algorithms that distinguished between genuine outliers and data errors",
        "Built validation frameworks that ensured cleaned data met predefined quality standards",
        "Designed pipelines that reduced manual cleaning time by over 70% compared to ad-hoc approaches"
      ],
      conclusion: "This project demonstrates the critical importance of thorough data cleaning and preprocessing in the data analytics workflow. The methodologies and tools developed showcase not only technical skills in data manipulation but also a systematic approach to ensuring data quality. These techniques form the foundation for reliable analytics and are essential for any organization working with real-world datasets."
    }
  },
  {
    id: "salesforce-marketing-cloud",
    title: "Salesforce Marketing Cloud Dynamic Content Personalization",
    description: "A comprehensive implementation of personalized email marketing campaigns using Salesforce Marketing Cloud's dynamic content capabilities.",
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop",
    category: "Marketing Automation",
    tools: ["Salesforce Marketing Cloud", "AMPscript", "HTML", "CSS", "JavaScript", "SQL", "Data Extensions"],
    date: "2025-05-20",
    repoUrl: "https://github.com/GenevieveAN/Salesforce-Marketing-Cloud",
    content: {
      overview: "This project demonstrates how to leverage Salesforce Marketing Cloud (SFMC) to create highly personalized email marketing campaigns using dynamic content blocks. It includes examples of AMPscript implementations, data extension structures, and email templates designed to enhance customer engagement through personalization.",
      challenge: "Marketing teams often struggle with creating personalized content that dynamically adapts to individual customer data points. Traditional email marketing approaches result in generic content that fails to resonate with specific customer segments, leading to lower engagement rates and conversion metrics.",
      approach: "I developed a comprehensive solution utilizing Salesforce Marketing Cloud's native capabilities to create truly personalized customer experiences. The approach involved implementing AMPscript for advanced personalization logic, creating optimized data extension structures, and developing reusable content blocks that dynamically adjust based on customer attributes.",
      results: "The implementation of dynamic content personalization resulted in a 40% increase in email open rates, 25% higher click-through rates, and a 15% improvement in conversion metrics. The solution provided marketers with an intuitive framework to create sophisticated personalization without requiring advanced technical skills.",
      insights: [
        "AMPscript personalization consistently outperformed standard merge fields for complex logic implementation",
        "Customer segment-specific content blocks increased engagement by 32% compared to generic email templates",
        "Real-time personalization based on customer behavior data showed the highest conversion rates among all tested approaches",
        "Modular content architecture enabled marketing teams to create personalized campaigns 50% faster than previous methods"
      ],
      conclusion: "This project demonstrates the significant impact of sophisticated personalization techniques in email marketing campaigns. By leveraging Salesforce Marketing Cloud's dynamic content capabilities, marketers can create highly relevant, individualized experiences that substantially improve engagement metrics. The repository serves as a practical resource for implementing these advanced personalization strategies in enterprise marketing environments."
    }
  },
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
