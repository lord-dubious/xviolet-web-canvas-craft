
import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  CalendarDays, 
  Users, 
  Heart, 
  Repeat, 
  MessageSquare,
  Feather,
  ChevronRight,
  List,
  Plug
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Dashboard: React.FC = () => {
  // Mock data
  const userData = {
    username: "xviolet_user",
    displayName: "XViolet Demo",
    bio: "This is a demo user profile for XViolet web GUI.",
    avatar: "/placeholder.svg",
    verified: true,
    joinDate: "May 2023",
    stats: {
      tweets: 487,
      likes: 2853,
      retweets: 152,
      dms: 36,
    },
    recentActivity: [
      {
        id: 1,
        type: "tweet",
        content: "Just exploring the new XViolet interface. It looks amazing! #XViolet #WebGUI",
        timestamp: "5m ago",
      },
      {
        id: 2,
        type: "retweet",
        content: "XViolet is the future of Twitter automation. Check it out! #AI #Automation",
        user: "tech_insider",
        timestamp: "2h ago",
      },
      {
        id: 3,
        type: "mention",
        content: "Hey @xviolet_user, what do you think about the new features?",
        user: "social_trends",
        timestamp: "5h ago",
      },
      {
        id: 4,
        type: "tweet",
        content: "Working on some new integrations for XViolet. Stay tuned for updates!",
        timestamp: "1d ago",
      },
      {
        id: 5,
        type: "like",
        content: "The new dark mode in XViolet looks stunning! Great job team!",
        user: "design_lover",
        timestamp: "2d ago",
      },
    ],
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Account Info Card */}
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-start gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={userData.avatar} alt={userData.displayName} />
              <AvatarFallback>XU</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <CardTitle>{userData.displayName}</CardTitle>
                {userData.verified && (
                  <span className="bg-blue-500 text-white text-xs p-1 rounded-full">
                    ✓
                  </span>
                )}
              </div>
              <div className="text-sm text-muted-foreground">@{userData.username}</div>
              <p className="text-sm mt-1.5">{userData.bio}</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <CalendarDays size={15} />
              <span>Joined {userData.joinDate}</span>
              <span className="mx-1">•</span>
              <Users size={15} />
              <span>482 followers</span>
              <span>• 128 following</span>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats Card */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Feather size={20} className="text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-semibold">{userData.stats.tweets}</div>
                  <div className="text-sm text-muted-foreground">Tweets</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                  <Heart size={20} className="text-red-600" />
                </div>
                <div>
                  <div className="text-2xl font-semibold">{userData.stats.likes}</div>
                  <div className="text-sm text-muted-foreground">Likes</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Repeat size={20} className="text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-semibold">{userData.stats.retweets}</div>
                  <div className="text-sm text-muted-foreground">Retweets</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <MessageSquare size={20} className="text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-semibold">{userData.stats.dms}</div>
                  <div className="text-sm text-muted-foreground">Messages</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="shadow-card md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userData.recentActivity.map((activity) => (
                <div key={activity.id} className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                    {activity.type === "tweet" && <Feather size={14} />}
                    {activity.type === "retweet" && <Repeat size={14} />}
                    {activity.type === "mention" && <MessageSquare size={14} />}
                    {activity.type === "like" && <Heart size={14} />}
                  </div>
                  <div>
                    {activity.user && (
                      <div className="font-medium text-sm">@{activity.user}</div>
                    )}
                    <p className="text-sm">{activity.content}</p>
                    <div className="text-xs text-muted-foreground mt-1">
                      {activity.timestamp}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Shortcuts */}
        <Card className="shadow-card md:col-span-2">
          <CardHeader>
            <CardTitle>Shortcuts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto py-4 justify-start gap-3">
                <Feather className="h-5 w-5" />
                <div className="flex flex-col items-start">
                  <span>New Tweet</span>
                  <span className="text-xs text-muted-foreground">
                    Create a new post
                  </span>
                </div>
                <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground" />
              </Button>

              <Button variant="outline" className="h-auto py-4 justify-start gap-3">
                <List className="h-5 w-5" />
                <div className="flex flex-col items-start">
                  <span>View Timeline</span>
                  <span className="text-xs text-muted-foreground">
                    Browse recent tweets
                  </span>
                </div>
                <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground" />
              </Button>

              <Button variant="outline" className="h-auto py-4 justify-start gap-3">
                <Plug className="h-5 w-5" />
                <div className="flex flex-col items-start">
                  <span>Extensions</span>
                  <span className="text-xs text-muted-foreground">
                    Manage plugins
                  </span>
                </div>
                <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;
