
import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search,
  CalendarRange,
  Hash,
  AtSign,
  Heart,
  Repeat,
  MessageSquare,
  MoreHorizontal,
  Image as ImageIcon,
  Film,
  Play,
  Filter,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Mock data
const tweets = [
  {
    id: 1,
    user: {
      name: "Sarah Johnson",
      username: "sarahjohnson",
      avatar: "/placeholder.svg",
      verified: true,
    },
    content:
      "Just finished setting up my XViolet automation workflow and it's incredible! The UI is so intuitive. #XViolet #Automation",
    timestamp: "5m ago",
    stats: {
      likes: 24,
      retweets: 5,
      replies: 3,
    },
    media: [
      {
        type: "image",
        url: "/placeholder.svg",
      },
    ],
  },
  {
    id: 2,
    user: {
      name: "Tech Insider",
      username: "techinsider",
      avatar: "/placeholder.svg",
      verified: true,
    },
    content:
      "Breaking: New AI features coming to XViolet next month! Sources confirm advanced language understanding and better context awareness. 🤖 #XViolet #AI",
    timestamp: "2h ago",
    stats: {
      likes: 352,
      retweets: 128,
      replies: 46,
    },
  },
  {
    id: 3,
    user: {
      name: "Alex Wei",
      username: "alexcodecrafting",
      avatar: "/placeholder.svg",
      verified: false,
    },
    content:
      "Working with XViolet's API has been a game changer for our team. We've automated so many repetitive tasks! Here's a quick demo of our custom integration:",
    timestamp: "5h ago",
    stats: {
      likes: 87,
      retweets: 14,
      replies: 9,
    },
    media: [
      {
        type: "video",
        url: "/placeholder.svg",
        thumbnail: "/placeholder.svg",
      },
    ],
  },
  {
    id: 4,
    user: {
      name: "Social Media Today",
      username: "socialmediatoday",
      avatar: "/placeholder.svg",
      verified: true,
    },
    content:
      "NEW REPORT: XViolet users are seeing an average 40% increase in engagement compared to manual posting. The data shows consistent results across various industries. #SocialMediaStrategy",
    timestamp: "1d ago",
    stats: {
      likes: 421,
      retweets: 203,
      replies: 57,
    },
  },
  {
    id: 5,
    user: {
      name: "Maya Peterson",
      username: "maya_codes",
      avatar: "/placeholder.svg",
      verified: false,
    },
    content:
      "@alexcodecrafting Have you tried the new extensions feature in XViolet? I've been experimenting with it and found some really cool use cases for our marketing team!",
    timestamp: "1d ago",
    stats: {
      likes: 15,
      retweets: 2,
      replies: 4,
    },
  },
];

// Trending topics mock data
const trendingTopics = [
  { tag: "XViolet", count: "14.5K" },
  { tag: "WebGUI", count: "5.2K" },
  { tag: "AIAutomation", count: "12.8K" },
  { tag: "TwitterAPI", count: "4.7K" },
  { tag: "SocialMedia", count: "25.1K" },
];

// Who to follow mock data
const whoToFollow = [
  {
    name: "XViolet Official",
    username: "xviolet",
    avatar: "/placeholder.svg",
    verified: true,
  },
  {
    name: "Dev Community",
    username: "devcommunity",
    avatar: "/placeholder.svg",
    verified: false,
  },
  {
    name: "Social Trends",
    username: "socialtrends",
    avatar: "/placeholder.svg",
    verified: true,
  },
];

export const Timeline: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("home");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search functionality
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-6">Timeline</h1>

          <Tabs defaultValue="home" className="mb-6">
            <TabsList className="grid grid-cols-4">
              <TabsTrigger value="home" onClick={() => setActiveTab("home")}>
                Home
              </TabsTrigger>
              <TabsTrigger value="user" onClick={() => setActiveTab("user")}>
                User
              </TabsTrigger>
              <TabsTrigger value="mentions" onClick={() => setActiveTab("mentions")}>
                Mentions
              </TabsTrigger>
              <TabsTrigger value="search" onClick={() => setActiveTab("search")}>
                Search
              </TabsTrigger>
            </TabsList>

            {/* Search Bar */}
            <div className="mt-4">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search Twitter..."
                  className="pl-9 pr-24"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute right-2 top-2 flex space-x-1">
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="h-6 w-6 text-slate-400"
                    title="Date range"
                  >
                    <CalendarRange className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="h-6 w-6 text-slate-400"
                    title="User filter"
                  >
                    <AtSign className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="h-6 w-6 text-slate-400"
                    title="Hashtag filter"
                  >
                    <Hash className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="h-6 w-6 text-slate-400"
                    title="Additional filters"
                  >
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>

            <TabsContent value="home" className="mt-6 space-y-4">
              {tweets.map((tweet) => (
                <TweetCard key={tweet.id} tweet={tweet} />
              ))}
              <div className="flex justify-center py-4">
                <Button variant="outline">Load more</Button>
              </div>
            </TabsContent>

            <TabsContent value="user" className="mt-6 space-y-4">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-slate-100 p-3">
                  <User className="h-6 w-6 text-slate-400" />
                </div>
                <h3 className="mt-4 text-lg font-medium">User Timeline</h3>
                <p className="mt-2 text-sm text-slate-500">
                  View tweets from a specific user
                </p>
                <Button className="mt-4">Enter username</Button>
              </div>
            </TabsContent>

            <TabsContent value="mentions" className="mt-6 space-y-4">
              {tweets
                .filter((tweet) => tweet.content.includes("@"))
                .map((tweet) => (
                  <TweetCard key={tweet.id} tweet={tweet} />
                ))}
            </TabsContent>

            <TabsContent value="search" className="mt-6 space-y-4">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-slate-100 p-3">
                  <Search className="h-6 w-6 text-slate-400" />
                </div>
                <h3 className="mt-4 text-lg font-medium">Search Tweets</h3>
                <p className="mt-2 text-sm text-slate-500">
                  Enter a search query above to find tweets
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar widgets (desktop only) */}
        <div className="w-full md:w-80 space-y-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">Trending</h3>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Hash className="h-4 w-4 text-slate-400 mr-2" />
                      <span>{topic.tag}</span>
                    </div>
                    <Badge variant="secondary">{topic.count}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">Who to follow</h3>
              <div className="space-y-4">
                {whoToFollow.map((user, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-medium">{user.name}</span>
                          {user.verified && (
                            <span className="text-blue-500 text-xs">✓</span>
                          )}
                        </div>
                        <div className="text-xs text-slate-500">@{user.username}</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Follow
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">Recent Messages</h3>
              <div className="text-sm text-slate-500 text-center py-4">
                No recent direct messages
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

// Tweet Card Component
interface TweetProps {
  tweet: typeof tweets[0];
}

const User: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className || "h-6 w-6"}
    {...props}
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const TweetCard: React.FC<TweetProps> = ({ tweet }) => {
  const [isReplying, setIsReplying] = useState(false);

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={tweet.user.avatar} alt={tweet.user.name} />
            <AvatarFallback>
              {tweet.user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-1">
                <span className="font-medium truncate">{tweet.user.name}</span>
                {tweet.user.verified && (
                  <span className="text-blue-500 text-xs">✓</span>
                )}
                <span className="text-slate-500 text-sm truncate">
                  @{tweet.user.username}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-slate-500 text-sm">{tweet.timestamp}</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-slate-500"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View thread</DropdownMenuItem>
                    <DropdownMenuItem>Copy link</DropdownMenuItem>
                    <DropdownMenuItem>Report</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <p className="my-2 text-sm">{tweet.content}</p>

            {tweet.media && tweet.media.length > 0 && (
              <div className="mt-3 rounded-lg overflow-hidden relative">
                <img
                  src={tweet.media[0].url}
                  alt="Tweet media"
                  className="w-full h-auto rounded-lg"
                />
                {tweet.media[0].type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-black bg-opacity-50 flex items-center justify-center">
                      <Play className="h-5 w-5 text-white" />
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="flex justify-between mt-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-500 hover:text-blue-500"
                onClick={() => setIsReplying(!isReplying)}
              >
                <MessageSquare className="h-4 w-4 mr-1" />
                <span>{tweet.stats.replies}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-500 hover:text-green-500"
              >
                <Repeat className="h-4 w-4 mr-1" />
                <span>{tweet.stats.retweets}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-500 hover:text-red-500"
              >
                <Heart className="h-4 w-4 mr-1" />
                <span>{tweet.stats.likes}</span>
              </Button>
            </div>

            {isReplying && (
              <div className="mt-3 pt-3 border-t">
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Input
                      placeholder="Tweet your reply"
                      className="mb-2"
                    />
                    <div className="flex justify-between">
                      <div className="flex">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-slate-500"
                        >
                          <ImageIcon className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-slate-500"
                        >
                          <Film className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button size="sm">Reply</Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Timeline;
