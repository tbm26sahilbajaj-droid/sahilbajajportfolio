export type ProjectSegment = "All" | "Engineering" | "Product & Strategy" | "GTM & Business";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  period: string;
  metrics: string[];
  segment: ProjectSegment;
  link: string | null;
}

export const segments: ProjectSegment[] = ["All", "Engineering", "Product & Strategy", "GTM & Business"];

export const projects: Project[] = [
  {
    title: "AI Voice Agent - Nurse Sarah",
    description:
      "Built an AI voice assistant that improved healthcare information access with 85% accuracy. Designed conversational flows aligned with healthcare user journeys and integrated LLM intent detection.",
    tags: ["AI/ML", "NLP", "LLM", "Healthcare", "Voice AI"],
    period: "Apr 2023 - Sep 2024",
    metrics: ["85% accuracy", "Conversational AI", "LLM Intent Detection"],
    segment: "Engineering",
    link: null,
  },
  {
    title: "AWS WorkDocs - TeamSpaces",
    description:
      "Delivered real-time collaboration features enabling 7,000+ users. Launched REST APIs that drove 4.8% adoption increase. Improved async workflows reducing failures by 8.5%.",
    tags: ["Java", "AWS", "REST APIs", "Microservices", "Lambda"],
    period: "Jul 2022 - Sep 2024",
    metrics: ["7,000+ users", "4.8% adoption increase", "8.5% fewer failures"],
    segment: "Engineering",
    link: null,
  },
  {
    title: "Product Insights Pipeline",
    description:
      "Built AWS Glue pipelines analyzing customer usage data, delivering 12% improvement in product insights. Analyzed Redshift dashboards to recommend product experience improvements driving 5.6% engagement growth.",
    tags: ["AWS Glue", "Redshift", "Data Pipelines", "Analytics", "Product Strategy"],
    period: "Jul 2022 - Sep 2024",
    metrics: ["12% better insights", "5.6% engagement growth", "Data-driven decisions"],
    segment: "Product & Strategy",
    link: null,
  },
  {
    title: "StockTraxx",
    description:
      "ML-powered stock prediction model trained on Yahoo Finance data. Evaluated multiple models including Random Forest, Logistic Regression, and RNNs for market direction forecasting.",
    tags: ["Python", "ML", "Random Forest", "RNN", "Data Science"],
    period: "Aug 2021 - May 2022",
    metrics: ["70% prediction accuracy", "Multiple ML models", "Yahoo Finance data"],
    segment: "Engineering",
    link: null,
  },
  {
    title: "Data-Driven Decision Support Model",
    description:
      "Regression model supporting data-driven housing investment decisions. Performed feature engineering, preprocessing, and outlier detection to generate location insights for stakeholders.",
    tags: ["Python", "Regression", "Feature Engineering", "Data Analytics"],
    period: "Portfolio Project",
    metrics: ["85% prediction accuracy", "Housing market insights", "Outlier detection"],
    segment: "Product & Strategy",
    link: null,
  },
  {
    title: "Dropshipping - Nirmalaya Partnership",
    description:
      "Launched and operated an e-commerce dropshipping business selling Incense Sticks in partnership with Nirmalaya. Executed full GTM strategy from sourcing to customer acquisition, generating significant revenue in 3 months.",
    tags: ["E-commerce", "GTM Strategy", "Operations", "Customer Acquisition"],
    period: "2025",
    metrics: ["~₹5L revenue", "3 months", "End-to-end GTM"],
    segment: "GTM & Business",
    link: null,
  },
];
