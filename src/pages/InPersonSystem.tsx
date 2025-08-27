import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Brain, 
  Users, 
  Activity,
  Shield,
  Zap,
  BarChart3,
  Eye,
  Mic,
  Video,
  ArrowRight,
  Play,
  Pause
} from "lucide-react";

export default function InPersonSystem() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Real-Time Meeting <span className="gradient-text">Intelligence</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the power of live AI analytics during your video calls. 
            Get instant insights into participant engagement, emotions, and authenticity.
          </p>
        </div>

        {/* Live Demo Section */}
        <div className="mb-16">
          <Card className="glass-effect border-border overflow-hidden">
            <CardHeader className="bg-gradient-brand text-white">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Live Meeting Interface</CardTitle>
                <Badge className="bg-red-500 text-white animate-neural-pulse">
                  ● LIVE
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-video bg-card/50 flex items-center justify-center relative">
                <div className="text-center">
                  <Video className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Meeting Interface Preview</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Real-time overlay with live analytics
                  </p>
                </div>
                
                {/* Overlay Elements */}
                <div className="absolute top-4 right-4 space-y-2">
                  <div className="bg-black/80 rounded-lg p-2 text-xs text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <Heart className="h-3 w-3 text-red-400" />
                      <span>72 BPM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity className="h-3 w-3 text-green-400" />
                      <span>85% Engaged</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4">
                  <div className="bg-black/80 rounded-lg p-2 text-xs text-white">
                    <div className="flex items-center gap-2">
                      <Brain className="h-3 w-3 text-blue-400" />
                      <span>Sentiment: Positive (82%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feature Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Real-time Physiological Analytics */}
          <Card className="glass-effect border-border hover:border-brand-pink/30 transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">
                Real-time Physiological Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Track heart rate, HRV, and stress levels live during calls to gauge participant state and engagement.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-card/30 rounded-lg">
                  <span className="text-sm">Heart Rate Monitoring</span>
                  <Badge variant="outline" className="text-xs">Real-time</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-card/30 rounded-lg">
                  <span className="text-sm">Stress Level Detection</span>
                  <Badge variant="outline" className="text-xs">AI-Powered</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-card/30 rounded-lg">
                  <span className="text-sm">Engagement Tracking</span>
                  <Badge variant="outline" className="text-xs">Live</Badge>
                </div>
              </div>

              <Button variant="minimal" className="w-full">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Real-time Biometric Authenticity */}
          <Card className="glass-effect border-border hover:border-brand-blue/30 transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">
                Real-time Biometric Authenticity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Use voice and facial biometrics to ensure participant authenticity and detect truthfulness indicators.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-card/30 rounded-lg">
                  <span className="text-sm">Voice Authentication</span>
                  <Badge variant="outline" className="text-xs">Biometric</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-card/30 rounded-lg">
                  <span className="text-sm">Facial Recognition</span>
                  <Badge variant="outline" className="text-xs">AI-Vision</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-card/30 rounded-lg">
                  <span className="text-sm">Truthfulness Detection</span>
                  <Badge variant="outline" className="text-xs">Advanced</Badge>
                </div>
              </div>

              <Button variant="minimal" className="w-full">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Live Meeting Intelligence */}
          <Card className="glass-effect border-border hover:border-brand-pink/30 transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">
                Live Meeting Intelligence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Generate instant summaries, track engagement, and analyze sentiment as the conversation happens.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-card/30 rounded-lg">
                  <span className="text-sm">Instant Summaries</span>
                  <Badge variant="outline" className="text-xs">Auto-gen</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-card/30 rounded-lg">
                  <span className="text-sm">Sentiment Analysis</span>
                  <Badge variant="outline" className="text-xs">Real-time</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-card/30 rounded-lg">
                  <span className="text-sm">Conversation Dynamics</span>
                  <Badge variant="outline" className="text-xs">Live</Badge>
                </div>
              </div>

              <Button variant="minimal" className="w-full">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Key Metrics Dashboard */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Live Analytics <span className="gradient-text">Dashboard</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="glass-effect border-border">
              <CardContent className="p-6 text-center">
                <Eye className="h-12 w-12 text-brand-pink mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Engagement Score</h3>
                <div className="text-3xl font-bold gradient-text mb-2">85%</div>
                <p className="text-sm text-muted-foreground">Current meeting average</p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border">
              <CardContent className="p-6 text-center">
                <Mic className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Voice Sentiment</h3>
                <div className="text-3xl font-bold gradient-text mb-2">+78%</div>
                <p className="text-sm text-muted-foreground">Positive tone detected</p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border">
              <CardContent className="p-6 text-center">
                <Activity className="h-12 w-12 text-brand-pink mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Stress Levels</h3>
                <div className="text-3xl font-bold gradient-text mb-2">Low</div>
                <p className="text-sm text-muted-foreground">Participants relaxed</p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Active Speakers</h3>
                <div className="text-3xl font-bold gradient-text mb-2">4/6</div>
                <p className="text-sm text-muted-foreground">Participants engaged</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="glass-effect border-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Experience Real-Time Intelligence
              </h3>
              <p className="text-muted-foreground mb-6">
                See how GO-X transforms your meetings with live AI insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" size="lg">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Demo
                </Button>
                <Button variant="glass" size="lg">
                  Start Free Trial
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}