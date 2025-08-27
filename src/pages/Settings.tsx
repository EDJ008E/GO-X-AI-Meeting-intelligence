import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Settings as SettingsIcon,
  Bell,
  Shield,
  Zap,
  BarChart3,
  Users,
  Heart,
  Mic,
  Video,
  Globe,
  Save,
  RefreshCw
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Settings() {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    // Analytics Settings
    sentimentAnalysis: true,
    stressMonitoring: true,
    heartRateTracking: true,
    engagementScoring: true,
    voiceBiometrics: true,
    facialAnalysis: true,
    
    // Notification Settings
    realTimeAlerts: true,
    meetingInsights: true,
    weeklyReports: false,
    stressAlerts: true,
    
    // Privacy Settings
    dataRetention: 30,
    shareAnalytics: false,
    anonymizeData: true,
    
    // Integration Settings
    googleMeet: true,
    microsoftTeams: false,
    zoom: true,
    
    // Display Settings
    overlayPosition: "top-right",
    overlayOpacity: 80,
    theme: "dark"
  });

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  const handleReset = () => {
    toast({
      title: "Settings reset",
      description: "All settings have been restored to default values.",
    });
  };

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Customize Your <span className="gradient-text">AI Assistant</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Configure GO-X to match your preferences and workflow
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Settings Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Analytics Settings */}
            <Card className="glass-effect border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BarChart3 className="h-6 w-6 text-brand-pink" />
                  Analytics Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="sentiment">Sentiment Analysis</Label>
                      <p className="text-sm text-muted-foreground">
                        Analyze emotional tone and mood during meetings
                      </p>
                    </div>
                    <Switch
                      id="sentiment"
                      checked={settings.sentimentAnalysis}
                      onCheckedChange={(checked) => updateSetting('sentimentAnalysis', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="stress">Stress Level Monitoring</Label>
                      <p className="text-sm text-muted-foreground">
                        Track stress indicators and fatigue levels
                      </p>
                    </div>
                    <Switch
                      id="stress"
                      checked={settings.stressMonitoring}
                      onCheckedChange={(checked) => updateSetting('stressMonitoring', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="heartrate">Heart Rate Tracking</Label>
                      <p className="text-sm text-muted-foreground">
                        Monitor physiological engagement through heart rate
                      </p>
                    </div>
                    <Switch
                      id="heartrate"
                      checked={settings.heartRateTracking}
                      onCheckedChange={(checked) => updateSetting('heartRateTracking', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="engagement">Engagement Scoring</Label>
                      <p className="text-sm text-muted-foreground">
                        Real-time engagement and attention metrics
                      </p>
                    </div>
                    <Switch
                      id="engagement"
                      checked={settings.engagementScoring}
                      onCheckedChange={(checked) => updateSetting('engagementScoring', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="voice">Voice Biometrics</Label>
                      <p className="text-sm text-muted-foreground">
                        Analyze voice patterns for authenticity
                      </p>
                    </div>
                    <Switch
                      id="voice"
                      checked={settings.voiceBiometrics}
                      onCheckedChange={(checked) => updateSetting('voiceBiometrics', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="facial">Facial Analysis</Label>
                      <p className="text-sm text-muted-foreground">
                        Detect micro-expressions and emotional states
                      </p>
                    </div>
                    <Switch
                      id="facial"
                      checked={settings.facialAnalysis}
                      onCheckedChange={(checked) => updateSetting('facialAnalysis', checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card className="glass-effect border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Bell className="h-6 w-6 text-brand-blue" />
                  Notification Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="realtime">Real-time Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Get instant notifications during meetings
                      </p>
                    </div>
                    <Switch
                      id="realtime"
                      checked={settings.realTimeAlerts}
                      onCheckedChange={(checked) => updateSetting('realTimeAlerts', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="insights">Meeting Insights</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive post-meeting summary notifications
                      </p>
                    </div>
                    <Switch
                      id="insights"
                      checked={settings.meetingInsights}
                      onCheckedChange={(checked) => updateSetting('meetingInsights', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="weekly">Weekly Reports</Label>
                      <p className="text-sm text-muted-foreground">
                        Get weekly analytics and improvement suggestions
                      </p>
                    </div>
                    <Switch
                      id="weekly"
                      checked={settings.weeklyReports}
                      onCheckedChange={(checked) => updateSetting('weeklyReports', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="stressalerts">High Stress Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Notify when stress levels are elevated
                      </p>
                    </div>
                    <Switch
                      id="stressalerts"
                      checked={settings.stressAlerts}
                      onCheckedChange={(checked) => updateSetting('stressAlerts', checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Display Settings */}
            <Card className="glass-effect border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <SettingsIcon className="h-6 w-6 text-brand-pink" />
                  Display Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="position">Overlay Position</Label>
                    <Select 
                      value={settings.overlayPosition} 
                      onValueChange={(value) => updateSetting('overlayPosition', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="top-left">Top Left</SelectItem>
                        <SelectItem value="top-right">Top Right</SelectItem>
                        <SelectItem value="bottom-left">Bottom Left</SelectItem>
                        <SelectItem value="bottom-right">Bottom Right</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="opacity">Overlay Opacity</Label>
                    <div className="px-2">
                      <Slider
                        id="opacity"
                        min={20}
                        max={100}
                        step={10}
                        value={[settings.overlayOpacity]}
                        onValueChange={(value) => updateSetting('overlayOpacity', value[0])}
                        className="w-full"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Current: {settings.overlayOpacity}%
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="theme">Theme</Label>
                    <Select 
                      value={settings.theme} 
                      onValueChange={(value) => updateSetting('theme', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="auto">Auto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Integration Management */}
            <Card className="glass-effect border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-brand-blue" />
                  Integrations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-500" />
                    <span className="text-sm">Google Meet</span>
                  </div>
                  <Switch
                    checked={settings.googleMeet}
                    onCheckedChange={(checked) => updateSetting('googleMeet', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Video className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">Microsoft Teams</span>
                  </div>
                  <Switch
                    checked={settings.microsoftTeams}
                    onCheckedChange={(checked) => updateSetting('microsoftTeams', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-blue-700" />
                    <span className="text-sm">Zoom</span>
                  </div>
                  <Switch
                    checked={settings.zoom}
                    onCheckedChange={(checked) => updateSetting('zoom', checked)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Privacy Settings */}
            <Card className="glass-effect border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-brand-pink" />
                  Privacy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="retention">Data Retention (days)</Label>
                  <Input
                    id="retention"
                    type="number"
                    value={settings.dataRetention}
                    onChange={(e) => updateSetting('dataRetention', parseInt(e.target.value))}
                    className="bg-background/50"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="share">Share Analytics</Label>
                    <p className="text-xs text-muted-foreground">
                      Allow sharing anonymized data for research
                    </p>
                  </div>
                  <Switch
                    id="share"
                    checked={settings.shareAnalytics}
                    onCheckedChange={(checked) => updateSetting('shareAnalytics', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="anonymize">Anonymize Data</Label>
                    <p className="text-xs text-muted-foreground">
                      Remove personal identifiers from stored data
                    </p>
                  </div>
                  <Switch
                    id="anonymize"
                    checked={settings.anonymizeData}
                    onCheckedChange={(checked) => updateSetting('anonymizeData', checked)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                variant="gradient" 
                className="w-full" 
                onClick={handleSave}
              >
                <Save className="h-4 w-4 mr-2" />
                Save Settings
              </Button>
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={handleReset}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Reset to Default
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}