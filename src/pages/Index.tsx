import { ResourceCard } from "@/components/ResourceCard";
import { BookOpen, PlayCircle, Brain, Youtube, Code, Newspaper, TrendingUp } from "lucide-react";

const Index = () => {
  const books = [
    { title: "A Practical Guide to Quantitative Finance Interviews – Xinfeng Zhou" },
    { title: "A Collection of Dice Problems" },
    { title: "Fifty Challenging Problems in Probability" },
    { title: "Jane Street's Probability and Markets Guide" },
    { title: "Paul Wilmott Introduces Quantitative Finance" },
    { title: "Options, Futures, and Other Derivatives – John Hull" },
    { title: "Stochastic Calculus for Finance I & II – Steven Shreve" },
    { title: "Introduction to Probability – Dimitri Bertsekas & John Tsitsiklis" },
    { title: "Convex Optimization – Stephen Boyd & Lieven Vandenberghe" },
    { title: "Numerical Recipes" }
  ];

  const courses = [
    { title: "Texas Hold'em Poker" },
    { title: "Topics in Mathematics with Applications in Finance" },
    { title: "Financial Engineering & Risk Management (Columbia, Coursera)" },
    { title: "Mathematics for Machine Learning (Imperial College, Coursera)" },
    { title: "Machine Learning for Trading (Georgia Tech / Udacity)" },
    { title: "QuantNet Pre-MFE Resources" },
    { title: "MIT OpenCourseWare: Stochastic Processes, Probability & Random Variables" }
  ];

  const practice = [
    { title: "QuantGuide Interview Questions" },
    { title: "Trading Interview Market Making Game" },
    { title: "TraderMath (Math Practice)" },
    { title: "Brainstellar Questions" },
    { title: "Project Euler" },
    { title: "LeetCode / HackerRank" },
    { title: "Heard on The Street – Timothy Crack" },
    { title: "Green Book (Trading Interview Questions)" }
  ];

  const youtube = [
    { title: "'Quant'ify your career" },
    { title: "QuantPy" },
    { title: "3Blue1Brown" },
    { title: "Patrick Boyle" },
    { title: "QuantInsti" }
  ];

  const tools = [
    { title: "Python" },
    { title: "Pandas" },
    { title: "NumPy" },
    { title: "Scikit-learn" },
    { title: "Matplotlib" },
    { title: "Jupyter Notebooks" },
    { title: "C++ (heavier coding required quant roles)" },
    { title: "SQL" },
    { title: "Git / GitHub" },
    { title: "TensorFlow / PyTorch" },
    { title: "Excel/VBA" },
    { title: "R" }
  ];

  const news = [
    { title: "Bloomberg Market Concepts (BMC) – certification" },
    { title: "Wall Street Journal / Financial Times" },
    { title: "Risk.net" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <TrendingUp className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Quantitative Finance Learning Resources
            </h1>
            <p className="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
              A comprehensive collection of books, courses, practice questions, and tools to master quantitative finance and trading
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              title="Books"
              icon={<BookOpen className="h-6 w-6" />}
              items={books}
              categorySlug="books"
            />
            
            <ResourceCard
              title="Online Courses"
              icon={<PlayCircle className="h-6 w-6" />}
              items={courses}
              categorySlug="courses"
            />
            
            <ResourceCard
              title="Practice Questions"
              icon={<Brain className="h-6 w-6" />}
              items={practice}
              categorySlug="practice"
            />
            
            <ResourceCard
              title="YouTube Channels"
              icon={<Youtube className="h-6 w-6" />}
              items={youtube}
              categorySlug="youtube"
            />
            
            <ResourceCard
              title="Programming Tools"
              icon={<Code className="h-6 w-6" />}
              items={tools}
              categorySlug="tools"
            />
            
            <ResourceCard
              title="News & Market Resources"
              icon={<Newspaper className="h-6 w-6" />}
              items={news}
              categorySlug="news"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Curated resources for quantitative finance professionals and students
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;