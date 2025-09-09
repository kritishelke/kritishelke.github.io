import { ResourceCard } from "@/components/ResourceCard";
import { BookOpen, PlayCircle, Brain, Youtube, StickyNote, Newspaper, TrendingUp } from "lucide-react";

const Index = () => {
  const books = [
    { title: "Paul Wilmott Introduces Quantitative Finance", url: "http://ndl.ethernet.edu.et/bitstream/123456789/26868/1/114.Wilmott%2C%20Paul.pdf" },
    { title: "How I Became a Quant", url: "https://engineering.nyu.edu/sites/default/files/2021-10/How_I_Became_a_Quant%20%281%29.pdf" },
    { title: "Applied Quantitative Finance", url: "http://inis.jinr.ru/sl/M_Mathematics/MV_Probability/MVspf_Stochastics%20in%20finance/Haerdle%20et%20al.%20Applied%20Quantitative%20Finance%20(Springer)(423s).pdf" },
    { title: "A First Course in Quantitative Finance", url: "https://api.pageplace.de/preview/DT0400.9781108321365_A34413071/preview-9781108321365_A34413071.pdf" },
    { title: "Monte Carlo Methods in Financial Engineering", url: "https://www.bauer.uh.edu/spirrong/Monte_Carlo_Methods_In_Financial_Enginee.pdf" },
    { title: "Essentials of Quantitative Finance", url: "https://www.gau.edu.ge/storage/app/media/GAU%20Research%20Books%20and%20Documents/Essentials%20Of%20Quantitative%20Finance_1.pdf" }
  ];

  const courses = [
    { title: "MIT OpenCourseWare: Topics in Mathematics with Applications in Finance", url: "https://ocw.mit.edu/courses/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/" },
    { title: "QuantInsti", url: "https://quantra.quantinsti.com/" },
    { title: "QuantStart", url: "https://www.quantstart.com/" }, 
    { title: "MIT OpenCourseWare: Stochastic Processes, Probability & Random Variables", url: "https://ocw.mit.edu/courses/res-6-012-introduction-to-probability-spring-2018/resources/stochastic-processes/" }
  ];

  const practice = [
    { title: "A Practical Guide to Quantitative Finance Interviews – Xinfeng Zhou", url: "https://academyflex.com/wp-content/uploads/2024/03/a-practical-guide-to-quantitative-finance-interviews.pdf" },
    { title: "QuantGuide Interview Questions", url: "https://www.quantguide.io/" },
    { title: "Trading Interview Market Making Game", url: "https://www.tradinginterview.com/market-making-games/" },
    { title: "TraderMath (Math Practice)", url: "https://www.tradermath.org/" },
    { title: "Project Euler", url: "https://projecteuler.net/about" },
    { title: "LeetCode" url: "https://leetcode.com/" },
  ];

  const youtube = [
    { title: "'Quant'ify your career", url: "www.youtube.com/@QuantifyYourCareer"},
    { title: "QuantPy", url: "www.youtube.com/@QuantPy"},
    { title: "3Blue1Brown", url:"www.youtube.com/@3blue1brown" },
  ];

  const notes = [
    { title: "Quant Prep Drive", url: "https://drive.google.com/drive/folders/1JXrF169f5E6VPA8M4mOLRnUqTZD0lkOT?usp=sharing" },
  ];

  const news = [
    { title: "Wall Street Journal", url: "https://www.wsj.com/?gaa_at=eafs&gaa_n=ASWzDAgCHq_kyRuPVJP2dSqAPN3Z4d6jQQHuoYFKONTBg3HrQGXjn7cwu_QrvPKl0ok%3D&gaa_ts=68c06048&gaa_sig=fYzvtVxBUKVOJ_LUuiFGUi-HdFb3YeXLL0XG-Sr2UJvAwnRAL_ha8onrqYfO3pvyHy62KkIVmjjJvX91YwHwwQ%3D%3D"  },
    { title: "Financial Times", url: "https://www.ft.com/?&segmentID=2994e0f6-4f2f-7434-39eb-e1da3662b996&gclsrc=aw.ds&gad_source=1&gad_campaignid=20969889019&gbraid=0AAAAAC_ArBvE-9Of776bDGM0Cl-xzbsff&gclid=Cj0KCQjwoP_FBhDFARIsANPG24NtKh-8Lt2Afggfrg6uV9EZ1KrBRpmn8RB-wghT5JkPz3KLDY-Rp0gaAvdDEALw_wcB"}, 
    { title: "Risk.net", url: "https://www.risk.net/" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Quantitative Finance Learning Resources
            </h1>
            <p className="text-lg opacity-90 leading-relaxed max-w-2xl mx-auto">
              I'm Kriti Shelke, a third-year physics major at UVA interested in pursuing a master's in Quantitative Finance. This site brings together resources I use to strengthen my foundations in math, finance, and coding — useful for learning core concepts, understanding markets, and preparing for quant roles.
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
              title="My Notes"
              icon={<StickyNote className="h-6 w-6" />}
              items={notes}
              categorySlug="notes"
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
            Curated resources for quantitative finance students
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;