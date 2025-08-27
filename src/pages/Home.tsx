import { NeuralNetwork } from "@/components/three/NeuralNetwork";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Lightbulb, 
  BarChart3, 
  Link, 
  ArrowRight,
  Zap,
  Shield,
  Brain,
  Users,
  TrendingUp,
  Target
} from "lucide-react";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
          <NeuralNetwork />
        </Suspense>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Unlock the Magic of <span className="gradient-text">Meetings with AI-Powered</span> Insights with <span className="gradient-text">GO-X</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            GO-X uses advanced AI to provide real-time physiological and biometric insights, 
            transforming your virtual meetings on Google Meet, Zoom, and Teams.
          </p>
          <Button variant="hero" size="xl" className="animate-fade-in">
            Get a Demo
            <ArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gradient-brand rounded-full mt-2 animate-neural-pulse"></div>
          </div>
        </div>
      </section>

      {/* About GO-X Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What is <span className="gradient-text">GO-X?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              GO-X is an AI platform that decodes non-verbal cues, analyzes conversation dynamics, 
              and tracks physiological data like heart rate and stress levels to provide deep, actionable insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-effect border-border hover:border-brand-pink/30 transition-all duration-300">
              <CardContent className="p-8">
                <Brain className="h-12 w-12 text-brand-pink mb-4" />
                <h3 className="text-xl font-semibold mb-3">AI-Powered Analysis</h3>
                <p className="text-muted-foreground">
                  Advanced machine learning algorithms analyze verbal and non-verbal communication patterns in real-time.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border hover:border-brand-blue/30 transition-all duration-300">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-brand-blue mb-4" />
                <h3 className="text-xl font-semibold mb-3">Biometric Authentication</h3>
                <p className="text-muted-foreground">
                  Voice and facial biometrics ensure participant authenticity and detect truthfulness indicators.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border hover:border-brand-pink/30 transition-all duration-300">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-brand-pink mb-4" />
                <h3 className="text-xl font-semibold mb-3">Physiological Insights</h3>
                <p className="text-muted-foreground">
                  Track heart rate, stress levels, and engagement metrics to understand participant states.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Use GO-X Section */}
      <section className="py-24 px-6 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Get Started in <span className="gradient-text">3 Simple Steps</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transform your meetings in minutes, not months. Our intuitive platform 
              gets you up and running with advanced AI insights instantly.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">01</span>
                </div>
                <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center">
                  <Link className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Integrate</h3>
              <p className="text-muted-foreground mb-4">
                Seamlessly connect GO-X with your favorite meeting platforms
              </p>
              <p className="text-sm text-muted-foreground">
                Works with Zoom, Teams, Google Meet, and more. Quick 5-minute setup 
                with zero configuration needed.
              </p>
              <Button variant="minimal" className="mt-4">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">02</span>
                </div>
                <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Analyze</h3>
              <p className="text-muted-foreground mb-4">
                Our AI delivers live analytics on engagement, sentiment, and biometric authenticity
              </p>
              <p className="text-sm text-muted-foreground">
                Real-time dashboard shows participant engagement, emotional states, 
                stress levels, and conversation dynamics.
              </p>
              <Button variant="minimal" className="mt-4">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">03</span>
                </div>
                <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Optimize</h3>
              <p className="text-muted-foreground mb-4">
                Leverage data-driven insights to enhance collaboration, boost sales, and make smarter decisions
              </p>
              <p className="text-sm text-muted-foreground">
                Get actionable recommendations, meeting summaries, and performance 
                insights to improve outcomes.
              </p>
              <Button variant="minimal" className="mt-4">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Meetings?
            </h2>
            <p className="text-lg text-muted-foreground">
              Get in touch with our team to see GO-X in action
            </p>
          </div>

          <Card className="glass-effect border-border">
            <CardContent className="p-8">
              <form className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Enter your name" 
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="bg-background/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your needs..." 
                    rows={5}
                    className="bg-background/50"
                  />
                </div>
                <Button variant="gradient" size="lg" className="w-full md:w-auto">
                  Send Message
                  <ArrowRight className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
} 