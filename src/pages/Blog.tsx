
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "What Gulf PMOs Need from 2025 Platforms",
    excerpt: "As we move into 2025, Project Management Offices across the Gulf region are facing new challenges. Here's what technology solutions need to deliver to meet evolving demands.",
    author: "Sarah Al-Mahmoud",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "PMO Insights",
    image: "photo-1486312338219-ce68d2c6f44d"
  };

  const blogPosts = [
    {
      title: "BOQ Management Done Right with ZenithFlow",
      excerpt: "Learn how construction teams across the Gulf are streamlining their Bill of Quantities processes with integrated project management.",
      author: "Ahmed Al-Rashid",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Construction",
      trending: true
    },
    {
      title: "Why AI is the Future of Gulf Project Delivery",
      excerpt: "Artificial Intelligence is transforming how projects are planned and executed. Discover the key AI features that are making the biggest impact.",
      author: "Fatima Al-Zahra",
      date: "December 5, 2024",
      readTime: "7 min read",
      category: "AI & Technology",
      trending: false
    },
    {
      title: "Digital Transformation in Saudi Vision 2030 Projects",
      excerpt: "How digital project management tools are supporting the Kingdom's ambitious Vision 2030 initiatives and mega-projects.",
      author: "Omar Al-Saud",
      date: "November 28, 2024",
      readTime: "9 min read",
      category: "Government",
      trending: true
    },
    {
      title: "Managing Multi-Cultural Teams in Gulf Projects",
      excerpt: "Best practices for leading diverse, international teams on large-scale Gulf infrastructure and development projects.",
      author: "Priya Sharma",
      date: "November 20, 2024",
      readTime: "5 min read",
      category: "Team Management",
      trending: false
    },
    {
      title: "The Rise of Smart Cities in the UAE",
      excerpt: "How project management technology is enabling the development of smart city initiatives across the Emirates.",
      author: "Hassan Al-Maktoum",
      date: "November 15, 2024",
      readTime: "8 min read",
      category: "Smart Cities",
      trending: false
    },
    {
      title: "Cost Control in Qatar's World Cup Legacy Projects",
      excerpt: "Lessons learned from managing budget and resources in Qatar's post-World Cup infrastructure development projects.",
      author: "Nadia Al-Thani",
      date: "November 8, 2024",
      readTime: "6 min read",
      category: "Project Management",
      trending: false
    }
  ];

  const categories = [
    "All Posts",
    "PMO Insights", 
    "Construction",
    "AI & Technology",
    "Government",
    "Team Management",
    "Smart Cities",
    "Project Management"
  ];

  return (
    <div className="min-h-screen bg-zenith-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Insights & Updates</span> from
            <br />
            the Gulf Region
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stay up-to-date with the latest trends, best practices, and insights 
            in project management across the Middle East.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="card-hover bg-white border-zenith-card/30 shadow-lg overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <div className="aspect-video bg-gradient-to-br from-zenith-background to-white flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-16 w-16 text-zenith-accent mx-auto mb-4" />
                    <p className="text-zenith-secondary font-medium">Featured Article</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <Badge className="bg-zenith-accent text-white mr-2">Featured</Badge>
                  <Badge variant="outline" className="text-zenith-primary border-zenith-primary">
                    {featuredPost.category}
                  </Badge>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-zenith-primary">
                  {featuredPost.title}
                </h2>
                
                <p className="text-gray-600 mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                
                <Button className="button-gradient text-white font-medium">
                  Read Full Article
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "button-gradient text-white" : "text-zenith-primary border-zenith-primary hover:bg-zenith-primary hover:text-white"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="card-hover bg-zenith-background/30 border-zenith-card/30 h-full flex flex-col">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="aspect-video bg-gradient-to-br from-zenith-background to-white rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <Calendar className="h-8 w-8 text-zenith-accent mx-auto mb-2" />
                      <p className="text-sm text-zenith-secondary">Article Preview</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <Badge variant="outline" className="text-zenith-primary border-zenith-primary mr-2">
                      {post.category}
                    </Badge>
                    {post.trending && (
                      <Badge className="bg-red-500 text-white">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-zenith-primary line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zenith-accent">{post.readTime}</span>
                    <Button variant="ghost" size="sm" className="text-zenith-primary hover:text-zenith-accent">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-zenith">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Gulf Project Insights
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get the latest project management trends, best practices, and ZenithFlow updates 
            delivered to your inbox every month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50"
            />
            <Button className="bg-white text-zenith-primary hover:bg-gray-100 font-medium">
              Subscribe
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
