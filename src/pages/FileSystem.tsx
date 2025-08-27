import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar, 
  Clock, 
  Users, 
  BarChart3,
  TrendingUp,
  TrendingDown,
  Heart,
  Brain,
  Volume2,
  Video,
  ChevronDown,
  ChevronUp,
  Play
} from "lucide-react";
import { cn } from "@/lib/utils";

const meetingsData = [
  {
    id: 1,
    title: "Q4 Strategy Review",
    date: "2024-01-15",
    duration: "45 min",
    participants: 8,
    overallScore: 85,
    status: "completed",
    metrics: {
      engagement: 78,
      sentiment: 82,
      stress: 35,
      truthfulness: 92,
      heartRate: { avg: 72, max: 89 },
      speakerDistribution: [
        { name: "John Smith", percentage: 35, sentiment: 85 },
        { name: "Sarah Chen", percentage: 28, sentiment: 90 },
        { name: "Mike Johnson", percentage: 20, sentiment: 75 },
        { name: "Others", percentage: 17, sentiment: 80 }
      ]
    }
  },
  {
    id: 2,
    title: "Product Demo Call",
    date: "2024-01-14", 
    duration: "30 min",
    participants: 4,
    overallScore: 92,
    status: "completed",
    metrics: {
      engagement: 95,
      sentiment: 88,
      stress: 25,
      truthfulness: 96,
      heartRate: { avg: 68, max: 81 },
      speakerDistribution: [
        { name: "Alex Rivera", percentage: 45, sentiment: 92 },
        { name: "Lisa Wang", percentage: 30, sentiment: 85 },
        { name: "Tom Wilson", percentage: 25, sentiment: 88 }
      ]
    }
  },
  {
    id: 3,
    title: "Team Standup",
    date: "2024-01-13",
    duration: "15 min", 
    participants: 6,
    overallScore: 70,
    status: "completed",
    metrics: {
      engagement: 65,
      sentiment: 75,
      stress: 45,
      truthfulness: 88,
      heartRate: { avg: 75, max: 94 },
      speakerDistribution: [
        { name: "David Kim", percentage: 40, sentiment: 70 },
        { name: "Emma Brown", percentage: 25, sentiment: 80 },
        { name: "Others", percentage: 35, sentiment: 75 }
      ]
    }
  }
];

export default function FileSystem() {
  const [expandedMeeting, setExpandedMeeting] = useState<number | null>(null);

  const toggleMeeting = (id: number) => {
    setExpandedMeeting(expandedMeeting === id ? null : id);
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-green-400";
    if (score >= 70) return "text-yellow-400";
    return "text-red-400";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 85) return "bg-green-500/20 text-green-400 border-green-500/30";
    if (score >= 70) return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    return "bg-red-500/20 text-red-400 border-red-500/30";
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Meeting History & <span className="gradient-text">Analysis</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Review your past meetings and dive deep into AI-powered insights
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-effect border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">24</p>
                  <p className="text-sm text-muted-foreground">Total Meetings</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">18.5h</p>
                  <p className="text-sm text-muted-foreground">Total Time</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">82%</p>
                  <p className="text-sm text-muted-foreground">Avg Score</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">156</p>
                  <p className="text-sm text-muted-foreground">Participants</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Meetings List */}
        <div className="space-y-4">
          {meetingsData.map((meeting) => (
            <Card 
              key={meeting.id} 
              className="glass-effect border-border hover:border-brand-pink/30 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleMeeting(meeting.id)}
                      className="hover:bg-white/10"
                    >
                      {expandedMeeting === meeting.id ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </Button>
                    <div>
                      <CardTitle className="text-xl">{meeting.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {meeting.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {meeting.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {meeting.participants} participants
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={cn("font-semibold", getScoreBadge(meeting.overallScore))}>
                      {meeting.overallScore}% Overall
                    </Badge>
                    <Button variant="gradient" size="sm">
                      <Play className="h-4 w-4 mr-2" />
                      View Replay
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {expandedMeeting === meeting.id && (
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Analytics Metrics */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-brand-pink" />
                        Analytics Overview
                      </h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">Engagement</span>
                            <span className="text-sm font-medium">{meeting.metrics.engagement}%</span>
                          </div>
                          <Progress value={meeting.metrics.engagement} className="h-2" />
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">Sentiment</span>
                            <span className="text-sm font-medium">{meeting.metrics.sentiment}%</span>
                          </div>
                          <Progress value={meeting.metrics.sentiment} className="h-2" />
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">Stress Level</span>
                            <span className="text-sm font-medium">{meeting.metrics.stress}%</span>
                          </div>
                          <Progress value={meeting.metrics.stress} className="h-2" />
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">Truthfulness</span>
                            <span className="text-sm font-medium">{meeting.metrics.truthfulness}%</span>
                          </div>
                          <Progress value={meeting.metrics.truthfulness} className="h-2" />
                        </div>
                      </div>

                      {/* Health Metrics */}
                      <div>
                        <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                          <Heart className="h-4 w-4 text-red-400" />
                          Health Metrics
                        </h4>
                        <div className="bg-card/30 rounded-lg p-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Avg Heart Rate</span>
                              <p className="font-medium">{meeting.metrics.heartRate.avg} BPM</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Max Heart Rate</span>
                              <p className="font-medium">{meeting.metrics.heartRate.max} BPM</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Speaker Distribution */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Volume2 className="h-5 w-5 text-brand-blue" />
                        Speaker Diarization
                      </h3>
                      
                      <div className="space-y-4">
                        {meeting.metrics.speakerDistribution.map((speaker, index) => (
                          <div key={index} className="bg-card/30 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium">{speaker.name}</span>
                              <Badge variant="outline" className="text-xs">
                                {speaker.sentiment}% sentiment
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-muted-foreground">Speaking Time</span>
                              <span className="text-sm font-medium">{speaker.percentage}%</span>
                            </div>
                            <Progress value={speaker.percentage} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}