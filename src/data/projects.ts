
import { Project } from "../types/Project";

export const projects: Project[] = [
  {
    id: "exploratory-data-analysis",
    title: "Exploratory Data Analysis",
    description: "Detailed analysis of various datasets to uncover patterns and trends, focusing on extracting meaningful insights from business data.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    category: "Data Analysis",
    tools: ["SQL", "Excel", "Data Visualization", "Statistical Analysis"],
    date: "2025-05-15",
    repoUrl: "https://github.com/GenevieveAN/Portfolio-Projects/tree/main",
    content: {
      overview: "This project demonstrates exploratory data analysis techniques applied to business datasets. Using various analytical methods, I performed comprehensive analyses to extract meaningful patterns, trends, and insights from complex datasets.",
      challenge: "Raw datasets often contain hidden patterns and relationships that aren't immediately apparent. The challenge was to employ appropriate analytical methods to uncover these insights while handling issues such as missing values, outliers, and complex relationships between variables.",
      approach: "I utilized a structured approach to exploratory data analysis that involved data cleaning, descriptive statistics, correlation analysis, and data visualization. For each dataset, I formulated specific questions to guide the analysis and used appropriate tools to investigate the data from multiple perspectives.",
      results: "The analysis revealed several significant insights, including customer behavior patterns, performance trends, and unexpected correlations between variables. These findings were documented with clear explanations and actionable recommendations for potential business decisions.",
      insights: [
        "Identified key factors influencing customer purchasing decisions through correlation analysis",
        "Discovered seasonal trends in data that could be leveraged for strategic planning",
        "Uncovered demographic segments that showed unexpected behavior patterns",
        "Mapped relationships between seemingly unrelated variables that revealed new business opportunities",
        "Quantified the impact of outliers and developed recommendations for handling edge cases"
      ],
      conclusion: "This exploratory data analysis project demonstrates how systematic data investigation can transform raw information into actionable insights. The techniques and methodologies used are applicable across industries and can be adapted to various data-driven decision-making scenarios. The project showcases not only technical proficiency with analysis tools but also the ability to translate findings into business-relevant recommendations."
    }
  },
  {
    id: "data-cleaning-processing",
    title: "Data Cleaning & Processing",
    description: "Comprehensive data cleaning and preprocessing methodologies for transforming raw, messy datasets into analysis-ready structured data.",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
    category: "Data Engineering",
    tools: ["Excel", "SQL", "Data Validation", "Business Intelligence"],
    date: "2025-05-10",
    repoUrl: "https://github.com/GenevieveAN/Portfolio-Projects/tree/main",
    content: {
      overview: "This project focuses on developing robust data cleaning and preprocessing methodologies to transform raw, messy datasets into analysis-ready structured data. It addresses common data quality issues such as missing values, inconsistent formatting, duplicates, outliers, and structural problems through systematic cleansing approaches.",
      challenge: "Real-world datasets often come with numerous quality issues including missing values, inconsistent formatting, duplicates, outliers, and structural problems. These issues significantly impact the reliability of subsequent analyses and must be addressed through systematic cleaning processes before meaningful insights can be derived.",
      approach: "I developed a comprehensive approach to data cleaning that included automated detection of data quality issues, implementation of appropriate cleaning techniques, and validation of the cleaned datasets. This involved creating reusable methods for handling specific data problems, standardizing formats, and implementing validation checks to ensure data integrity.",
      results: "The developed cleaning methodologies successfully transformed several problematic datasets into high-quality, analysis-ready data resources. This improved the reliability of subsequent analyses and reduced processing time by streamlining repetitive cleaning tasks. The cleaning approaches were documented as reusable processes that can be applied to similar data challenges in the future.",
      insights: [
        "Developed efficient methods for handling missing values that preserved data integrity while maximizing usable information",
        "Created systematic approaches for detecting and correcting inconsistent formatting across data fields",
        "Implemented outlier detection methods that distinguished between genuine outliers and data errors",
        "Built validation frameworks that ensured cleaned data met predefined quality standards",
        "Designed processes that reduced manual cleaning time compared to ad-hoc approaches"
      ],
      conclusion: "This project demonstrates the critical importance of thorough data cleaning and preprocessing in the data analytics workflow. The methodologies and approaches developed showcase not only technical skills in data handling but also a systematic approach to ensuring data quality. These techniques form the foundation for reliable analytics and are essential for any organization working with real-world datasets."
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
    id: "ecommerce-sales-dashboard",
    title: "E-commerce Sales Analysis Dashboard",
    description: "Interactive Looker Studio dashboard providing comprehensive insights into e-commerce performance metrics, customer behavior, and sales trends.",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
    category: "Business Intelligence",
    tools: ["Google Looker Studio", "SQL", "Data Modeling", "Google Analytics", "Data Visualization"],
    date: "2025-04-01",
    dashboardUrl: "https://lookerstudio.google.com/embed/reporting/004f32f0-a36b-4bb7-a287-45897b9eef04/page/esYZE",
    content: {
      overview: "This project features a comprehensive e-commerce analytics dashboard built in Google Looker Studio that provides real-time insights into sales performance, product trends, and customer behavior. The dashboard integrates multiple data sources to create a holistic view of the business's e-commerce operations, enabling data-driven decision making.",
      challenge: "The e-commerce business was struggling with fragmented data across multiple platforms, making it difficult to gain actionable insights. Management needed a unified view of performance metrics, customer segments, and sales trends to optimize inventory, marketing strategies, and identify growth opportunities across different sales channels and product categories.",
      approach: "I developed an integrated dashboard solution using Google Looker Studio that combined data from multiple sources including the e-commerce platform, marketing analytics, and inventory systems. The approach involved designing intuitive visualizations focusing on key performance indicators, implementing interactive filters for deep-dive analysis, and creating automated reports for stakeholders.",
      results: "The implemented dashboard provided immediate visibility into critical business metrics, revealing several actionable insights that directly impacted business performance. The solution enabled stakeholders to make informed decisions regarding inventory management, marketing spend allocation, and product positioning based on real-time data rather than intuition.",
      visualizations: [
        {
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
          caption: "Sales performance by product category with trend analysis"
        },
        {
          image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&auto=format&fit=crop",
          caption: "Customer segmentation dashboard showing buying patterns across demographics"
        }
      ],
      insights: [
        "Identified that mobile users account for 65% of traffic but only 42% of conversions, highlighting a significant optimization opportunity",
        "Discovered a 30% higher average order value for customers arriving through comparison shopping engines versus social media",
        "Revealed seasonal purchasing patterns that could inform inventory planning and promotional campaigns",
        "Pinpointed underperforming product categories with high return rates, enabling targeted quality improvement initiatives",
        "Mapped the customer journey across touchpoints, identifying key drop-off points in the conversion funnel"
      ],
      conclusion: "The e-commerce analytics dashboard has transformed how the business understands its online sales performance and customer behavior. While Looker Studio provides excellent visualization capabilities and Google ecosystem integration, as the business scales, it may be worth exploring enterprise-grade solutions like Tableau or Power BI that offer more advanced data modeling, better handling of large datasets, and enhanced security features. However, for current needs, Looker Studio remains a cost-effective and powerful solution that delivers significant business value through actionable insights."
    }
  }
];
