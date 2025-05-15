
export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  tools: string[];
  date: string;
  content: {
    overview: string;
    challenge: string;
    approach: string;
    results: string;
    visualizations: {
      image: string;
      caption: string;
    }[];
    insights: string[];
    conclusion: string;
  };
}
