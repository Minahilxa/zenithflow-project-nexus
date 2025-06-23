
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  Users, 
  Bot, 
  Globe, 
  FileText, 
  BarChart3, 
  Zap,
  ArrowRight,
  CheckCircle,
  Play
} from "lucide-react";

const Features = () => {
  const featureCategories = [
    {
      title: "Project Blueprint Designer",
      icon: Calendar,
      description: "Design and manage projects with visual clarity",
      features: [
        "Drag & drop Gantt charts",
        "Reusable workflow templates",
        "Custom project templates",
        "Milestone tracking",
        "Dependency management"
      ],
      image: "photo-1461749280684-dccba630e2f6",
      previewTitle: "Interactive Gantt Chart Builder",
      previewDescription: "Visualize project timelines with drag-and-drop functionality"
    },
    {
      title: "Smart Time & Budget Tracking",
      icon: Clock,
      description: "Stay on top of costs and deadlines",
      features: [
        "Auto-track effort and cost",
        "BOQ integration for construction teams",
        "Forecast overruns before they happen",
        "Real-time budget monitoring",
        "Expense categorization"
      ],
      image: "photo-1488590528505-98d2b5aba04b",
      previewTitle: "Real-time Budget Dashboard",
      previewDescription: "Monitor project costs and forecast potential overruns"
    },
    {
      title: "Collaboration Tools",
      icon: Users,
      description: "Keep your team aligned and productive",
      features: [
        "Shared docs & visual whiteboards",
        "Inline comments & real-time updates",
        "Slack/MS Teams integration",
        "Video conferencing",
        "File sharing and version control"
      ],
      image: "photo-1486312338219-ce68d2c6f44d",
      previewTitle: "Team Collaboration Hub",
      previewDescription: "Centralized workspace for seamless team communication"
    },
    {
      title: "AI-Powered Insights",
      icon: Bot,
      description: "Let AI optimize your project workflows",
      features: [
        "Auto-prioritize tasks",
        "Detect blockers and risks",
        "Send smart nudges for deadlines",
        "Predictive analytics",
        "Performance recommendations"
      ],
      image: "photo-1518770660439-4636190af475",
      previewTitle: "AI-Driven Project Analytics",
      previewDescription: "Smart insights and automated task prioritization"
    }
  ];

  const additionalFeatures = [
    {
      icon: Globe,
      title: "Dual-Language UX",
      description: "English & Arabic interface toggle with RTL layout for native fluency"
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Centralized document storage with version control and collaboration"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and dashboard analytics for data-driven decisions"
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Automate repetitive tasks and workflows to boost productivity"
    }
  ];

  return (
    <div className="min-h-screen bg-zenith-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span> for
            <br />
            Modern Project Management
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Everything you need to plan, execute, and deliver successful projects
            with Gulf-ready workflows and AI-powered insights.
          </p>
          <Button size="lg" className="button-gradient text-white font-medium">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {featureCategories.map((category, index) => (
            <div key={index} className={`mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex lg:items-center lg:gap-12`}>
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="bg-gradient-zenith p-3 rounded-lg w-fit mb-6">
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-zenith-primary">
                  {category.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {category.description}
                </p>
                <ul className="space-y-3">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-zenith-accent mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2">
                <Card className="card-hover bg-white border-zenith-card/30 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={`https://images.unsplash.com/${category.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                        alt={category.previewTitle}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold">{category.previewTitle}</h3>
                          <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                            <Play className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                        </div>
                        <p className="text-sm text-white/90">{category.previewDescription}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              And Much <span className="gradient-text">More</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Additional features designed to streamline your workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="card-hover bg-zenith-background/30 border-zenith-card/30">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-zenith p-3 rounded-lg w-fit mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-zenith-primary">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
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
            Experience the Power of ZenithFlow
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your free trial today and see how our features can transform your project management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-zenith-primary hover:bg-gray-100 font-medium">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zenith-primary">
              Request Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
