import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, PlayCircle, Brain, Youtube, Code, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ResourceItem {
  title: string;
  url?: string;
  description?: string;
}

const ResourceCategory = () => {
  const { category } = useParams();

  const resourceData: Record<string, { title: string; icon: React.ReactNode; items: ResourceItem[] }> = {
    books: {
      title: "Books",
      icon: <BookOpen className="h-6 w-6" />,
      items: [
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
      ]
    },
    courses: {
      title: "Online Courses",
      icon: <PlayCircle className="h-6 w-6" />,
      items: [
        { title: "Texas Hold'em Poker" },
        { title: "Topics in Mathematics with Applications in Finance" },
        { title: "Financial Engineering & Risk Management (Columbia, Coursera)" },
        { title: "Mathematics for Machine Learning (Imperial College, Coursera)" },
        { title: "Machine Learning for Trading (Georgia Tech / Udacity)" },
        { title: "QuantNet Pre-MFE Resources" },
        { title: "MIT OpenCourseWare: Stochastic Processes, Probability & Random Variables" }
      ]
    },
    practice: {
      title: "Practice Questions",
      icon: <Brain className="h-6 w-6" />,
      items: [
        { title: "QuantGuide Interview Questions" },
        { title: "Trading Interview Market Making Game" },
        { title: "TraderMath (Math Practice)" },
        { title: "Brainstellar Questions" },
        { title: "Project Euler" },
        { title: "LeetCode / HackerRank" },
        { title: "Heard on The Street – Timothy Crack" },
        { title: "Green Book (Trading Interview Questions)" }
      ]
    },
    youtube: {
      title: "YouTube Channels",
      icon: <Youtube className="h-6 w-6" />,
      items: [
        { title: "'Quant'ify your career" },
        { title: "QuantPy" },
        { title: "3Blue1Brown" },
        { title: "Patrick Boyle" },
        { title: "QuantInsti" }
      ]
    },
    tools: {
      title: "Programming Tools",
      icon: <Code className="h-6 w-6" />,
      items: [
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
      ]
    },
    news: {
      title: "News & Market Resources",
      icon: <Newspaper className="h-6 w-6" />,
      items: [
        { title: "Bloomberg Market Concepts (BMC) – certification" },
        { title: "Wall Street Journal / Financial Times" },
        { title: "Risk.net" }
      ]
    }
  };

  const currentCategory = category && resourceData[category];

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Category not found</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-hero text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-block mb-4">
            <Button variant="secondary" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Resources
            </Button>
          </Link>
          <div className="flex items-center gap-4">
            {currentCategory.icon}
            <h1 className="text-4xl font-bold">{currentCategory.title}</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <Card className="shadow-card bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {currentCategory.items.map((item, index) => (
                  <div key={index} className="p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow duration-200">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                      >
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                        )}
                      </a>
                    ) : (
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        {item.description && (
                          <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ResourceCategory;