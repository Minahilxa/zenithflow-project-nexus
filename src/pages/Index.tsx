
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, BarChart3, Bot, Globe, Star, ArrowRight, Zap, Target, Clock, Brain } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Target,
      title: "Project Blueprint Designer",
      description: "Drag & drop Gantt charts, reusable workflows, and custom project templates"
    },
    {
      icon: Clock,
      title: "Smart Time & Budget Tracking",
      description: "Auto-track effort and cost with BOQ integration and forecast overruns before they happen"
    },
    {
      icon: Users,
      title: "Collaboration Tools",
      description: "Shared docs, visual whiteboards, inline comments, and real-time updates"
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Auto-prioritize tasks, detect blockers, and send smart nudges for deadlines"
    }
  ];

  const testimonials = [
    {
      quote: "ZenithFlow gave us complete visibility on our public sector infrastructure projects.",
      author: "Director, Qatar Urban Development Council",
      rating: 5
    },
    {
      quote: "From Gantt charts to AI insights, ZenithFlow replaced 4 tools for us.",
      author: "COO, TechBridge MENA",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-zenith-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-zenith-accent/10 rounded-full mb-8">
              <Zap className="h-4 w-4 text-zenith-accent mr-2" />
              <span className="text-sm font-medium text-zenith-primary">
                Project Clarity from Ground to Sky
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              <span className="gradient-text">Clarity. Control.</span>
              <br />
              <span className="text-zenith-primary">Completion.</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
              Build, manage, and deliver projects at scale with Gulf-ready workflows, 
              stunning visuals, and AI-assisted insights — all in one platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
              <Button size="lg" className="button-gradient text-white font-medium px-8 py-3">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-zenith-primary text-zenith-primary hover:bg-zenith-primary hover:text-white">
                See Zenith in Action
              </Button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative max-w-5xl mx-auto animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-zenith-card/50">
              <div className="aspect-video bg-gradient-to-br from-zenith-background to-white rounded-lg border border-zenith-card/30 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-zenith-accent mx-auto mb-4 animate-float" />
                  <p className="text-zenith-secondary font-medium">Interactive Dashboard Preview</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-zenith-accent rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-zenith-primary rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Powerful Features</span> for Modern Teams
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage projects efficiently in the Gulf region
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover bg-white border-zenith-card/30 shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-gradient-zenith p-3 rounded-lg w-fit mb-6">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-zenith-primary">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="gradient-text">Gulf Leaders</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-zenith-background/50 border-zenith-card/30">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-zenith-primary font-medium">
                    — {testimonial.author}
                  </cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-zenith">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Project Management?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of Gulf organizations already using ZenithFlow to deliver projects on time and within budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-zenith-primary hover:bg-gray-100 font-medium px-8 py-3">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zenith-primary">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
