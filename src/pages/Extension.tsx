import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Chrome, 
  Download, 
  Zap, 
  Shield,
  BarChart3,
  Users,
  Eye,
  Mic,
  CheckCircle,
  ArrowRight,
  Monitor,
  Smartphone
} from "lucide-react";

export default function Extension() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            The GO-X <span className="gradient-text">Chrome Extension</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Bring the full power of GO-X directly into your video calls. 
            Seamless integration without leaving your meeting window.
          </p>
        </div>

        {/* Extension Preview */}
        <div className="mb-16">
          <Card className="glass-effect border-border overflow-hidden">
            <CardHeader className="bg-gradient-brand text-white">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl flex items-center gap-3">
                  <Chrome className="h-6 w-6" />
                  GO-X Extension in Action
                </CardTitle>
                <Badge className="bg-green-500 text-white">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Active
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-video bg-card/50 flex items-center justify-center relative">
                {/* Mock Google Meet Interface */}
                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Monitor className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg">Google Meet Interface</p>
                      <p className="text-sm opacity-70">with GO-X overlay</p>
                    </div>
                  </div>
                  
                  {/* GO-X Overlay Panel */}
                  <div className="absolute top-4 right-4 w-72 bg-black/90 backdrop-blur-sm rounded-lg border border-white/20 p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs">G</span>
                      </div>
                      <span className="text-white font-semibold">GO-X Analytics</span>
                    </div>
                    
                    <div className="space-y-3 text-xs">
                      <div className="flex items-center justify-between text-white">
                        <span>Engagement Score</span>
                        <span className="text-green-400 font-semibold">92%</span>
                      </div>
                      <div className="flex items-center justify-between text-white">
                        <span>Meeting Sentiment</span>
                        <span className="text-blue-400 font-semibold">Positive</span>
                      </div>
                      <div className="flex items-center justify-between text-white">
                        <span>Stress Level</span>
                        <span className="text-yellow-400 font-semibold">Low</span>
                      </div>
                      <div className="flex items-center justify-between text-white">
                        <span>Heart Rate (Avg)</span>
                        <span className="text-red-400 font-semibold">72 BPM</span>
                      </div>
                    </div>
                  </div>

                  {/* Meeting Controls with GO-X Integration */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-black/80 rounded-full px-6 py-3 flex items-center gap-4">
                      <button className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                        <Mic className="h-5 w-5 text-white" />
                      </button>
                      <button className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                        <Eye className="h-5 w-5 text-white" />
                      </button>
                      <div className="w-10 h-10 bg-gradient-brand rounded-full flex items-center justify-center">
                        <BarChart3 className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Extension <span className="gradient-text">Features</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="glass-effect border-border hover:border-brand-pink/30 transition-all duration-300">
              <CardContent className="p-8">
                <Zap className="h-12 w-12 text-brand-pink mb-4" />
                <h3 className="text-xl font-semibold mb-3">Real-Time Overlay</h3>
                <p className="text-muted-foreground mb-4">
                  Non-intrusive overlay that displays live engagement metrics, sentiment analysis, 
                  and physiological data directly over your video call.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Live engagement scoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Sentiment visualization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Heart rate monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border hover:border-brand-blue/30 transition-all duration-300">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-brand-blue mb-4" />
                <h3 className="text-xl font-semibold mb-3">Seamless Integration</h3>
                <p className="text-muted-foreground mb-4">
                  Works perfectly with Google Meet, Zoom, and Teams. 
                  No need to switch between applications or disrupt your workflow.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>One-click activation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Platform agnostic</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Zero configuration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border hover:border-brand-pink/30 transition-all duration-300">
              <CardContent className="p-8">
                <BarChart3 className="h-12 w-12 text-brand-pink mb-4" />
                <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  Get instant access to detailed analytics including voice biometrics, 
                  facial expression analysis, and conversation dynamics.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Voice stress analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Facial emotion detection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Speaking time distribution</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Installation Steps */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Installation <span className="gradient-text">Guide</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Download Extension</h3>
                <p className="text-muted-foreground text-sm">
                  Click the download button to get the GO-X Chrome extension from the Chrome Web Store.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Add to Chrome</h3>
                <p className="text-muted-foreground text-sm">
                  Follow the Chrome installation prompts and grant necessary permissions for camera and microphone access.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Start Using</h3>
                <p className="text-muted-foreground text-sm">
                  Join any video call and the GO-X extension will automatically activate and provide real-time insights.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Compatibility */}
        <div className="mb-16">
          <Card className="glass-effect border-border">
            <CardHeader>
              <CardTitle className="text-center">
                Platform <span className="gradient-text">Compatibility</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold">Google Meet</h3>
                  <p className="text-sm text-muted-foreground">
                    Full integration with all Google Meet features
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                    <Monitor className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold">Microsoft Teams</h3>
                  <p className="text-sm text-muted-foreground">
                    Seamless integration with Teams meetings
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-16 h-16 bg-blue-700 rounded-2xl flex items-center justify-center mx-auto">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold">Zoom</h3>
                  <p className="text-sm text-muted-foreground">
                    Compatible with Zoom web client
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="glass-effect border-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Chrome className="h-16 w-16 text-brand-pink mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">
                Ready to Enhance Your Meetings?
              </h3>
              <p className="text-muted-foreground mb-6">
                Download the GO-X Chrome extension and transform your video calls with AI-powered insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" size="lg">
                  <Download className="h-5 w-5 mr-2" />
                  Add to Chrome
                </Button>
                <Button variant="glass" size="lg">
                  View Documentation
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}