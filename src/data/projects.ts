
export interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  tags: string[];
  details: string;
}

export const projects: Project[] = [
  {
    id: "Spam-Detection",
    title: "AI-Powered Spam Detection System",
    description: "Advanced machine learning model for email and SMS spam detection with 95% accuracy using NLP techniques.",
    icon: "MailCheck",
    image: "https://www.creativefabrica.com/wp-content/uploads/2021/06/08/Spam-Email-mail-crime-icon-Graphics-13103673-2-580x376.jpg",
    tags: ["Machine Learning", "NLP", "Python", "Scikit-learn"],
    details: "Built a sophisticated text classification system leveraging Natural Language Processing (NLP) for detecting spam in emails and SMS messages. The model incorporates advanced text preprocessing and TF-IDF feature extraction techniques, achieving 95% accuracy using the Naive Bayes algorithm. Comprehensive evaluation metrics including Precision, Recall, and F1-score validate the model's robustness. Tech stack includes Python, Scikit-learn, NLTK, and Pandas.",
  },
  {
    id: "Wine-Quality",
    title: "Wine Quality Predictor",
    description: "Machine learning model predicting wine quality based on physicochemical properties with 88% accuracy.",
    icon: "BarChart",
    image: "https://png.pngtree.com/png-clipart/20191123/original/pngtree-wine-bottle-icon-for-your-design-websites-and-projects-png-image_5199778.jpg",
    tags: ["Random Forest", "Data Analysis", "Python", "Visualization"],
    details: "Developed an intelligent wine quality prediction system using machine learning algorithms. The model analyzes physicochemical properties through comprehensive feature engineering and preprocessing. Achieved 88% accuracy using Random Forest classifier, identifying key factors like alcohol content and acidity levels. Implementation utilized Python ecosystem including Scikit-learn, Pandas, and Seaborn for model development and visualization.",
  },
  {
    id: "cosmetic-recommendation",
    title: "Smart Cosmetics Recommendation Engine",
    description: "Web-based personalized recommendation system using Django and machine learning algorithms.",
    icon: "Database",
    image: "https://img.freepik.com/premium-vector/makeup-icon_933463-143759.jpg",
    tags: ["Django", "Machine Learning", "MariaDB", "Web Development"],
    details: "Engineered a sophisticated web-based Cosmetic Recommendation Engine integrating machine learning with Django framework. The system provides personalized product recommendations through an intuitive interface. Backend architecture leverages MariaDB for efficient data management, ensuring seamless integration between ML models and user interface. Implemented robust SQL databases for managing user preferences and product information.",
  },
  {
    id: "road-accident-analysis",
    title: "Road Safety Analytics Dashboard",
    description: "comprehensive analysis of road accident data with interactive Excel dashboard visualization.",
    icon: "LineChart",
    image: "https://c8.alamy.com/comp/2YX3XWR/pedestrian-crossing-sign-on-a-blank-background-ideal-for-traffic-urban-planning-or-road-safety-projects-2YX3XWR.jpg",
    tags: ["Data Analysis", "Excel", "Visualization", "Dashboard"],
    details: "Created an interactive Excel dashboard analyzing the 'Reported Road Casualties Great Britain' dataset from Kaggle. Implemented comprehensive data cleaning and processing workflows using pivot tables. Generated detailed visualization reports highlighting critical safety insights and trends. Features include hyperlinked references to original Wikipedia data sources for enhanced user exploration.",
  },
  {
    id: "pizza-sales",
    title: "Pizza Sales Analytics Platform",
    description: "Excel-based sales analytics dashboard with MySQL connectivity for a local café.",
    icon: "PieChart",
    image: "https://cbx-prod.b-cdn.net/COLOURBOX17037205.jpg?width=800&height=800&quality=70",
    tags: ["SQL", "Excel", "Data Visualization", "Business Intelligence"],
    details: "Developed a comprehensive Excel dashboard for pizza sales analysis with direct MySQL server connectivity. The system features robust data cleaning and processing capabilities utilizing pivot tables for in-depth analysis. Created visually compelling data visualization reports conveying key insights and trends, enabling data-driven decision-making for optimizing sales strategies and enhancing customer satisfaction levels.",
  },
  {
    id: "hr-data-analysis",
    title: "HR Analytics Dashboard",
    description: "Power BI dashboard providing insights into human resources data and workforce trends.",
    icon: "Users",
    image: "https://img.freepik.com/premium-vector/analytics-career-growth-icon-blue-color-design_996135-39243.jpg",
    tags: ["Power BI", "HR Analytics", "Data Visualization", "Business Intelligence"],
    details: "Created a comprehensive Power BI dashboard for Aldenaire & Partners, focusing on HR data analysis. Managed and coordinated executive schedules, meetings, and travel arrangements while conducting industry research and preparing operational reports. Provided extensive administrative support and developed data-driven insights to optimize workforce management and operational efficiency.",
  },
  {
    id: "mobile-price-classification",
    title: "Mobile Price Classifier",
    description: "Machine learning model for mobile price range prediction using Logistic Regression.",
    icon: "Smartphone",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFmJ0JPyXCs8l_G4OXZnoLelo4KFpDixIyYH9eGzvozwBWivZtTxPqAkwTHLo8dOnnKI&usqp=CAU",
    tags: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn"],
    details: "Implemented a machine learning model using Logistic Regression to classify mobile phone price ranges. Conducted thorough exploratory data analysis (EDA) using pandas, numpy, and seaborn. The project showcases expertise in Python programming, supervised learning techniques, and data visualization. Tech stack includes Python, scikit-learn, pandas, seaborn, and matplotlib for comprehensive analysis and visualization.",
  }
];
