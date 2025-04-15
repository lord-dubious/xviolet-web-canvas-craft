
import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle2,
  Shield,
  Bot,
  History,
  Save,
  RotateCcw,
  MessageSquare,
  CheckCheck,
  Clock,
  CalendarClock,
  ListTodo,
  Users,
  Send,
  AlertOctagon,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

export const AgentCentral: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [currentTab, setCurrentTab] = useState("status");
  const [centralMd, setCentralMd] = useState(
    `# Agent Collaboration Central
    
## Mission
To provide seamless Twitter automation with intelligent agent coordination

## Current Focus
- Improve response time to mentions
- Develop better sentiment analysis for replies
- Coordinate content scheduling across timezones

## Agent Assignments
- @twitter_bot - Handle routine engagement
- @content_agent - Create and schedule original content
- @analytics_agent - Track performance metrics
- @security_agent - Monitor for suspicious activity

## Communication Guidelines
1. All agents must log actions in central repository
2. Use standard timestamp format: YYYY-MM-DD HH:MM:SS UTC
3. Critical alerts must be escalated to human operators
4. Maintain consistent voice across all agents`
  );
  
  const [newMessage, setNewMessage] = useState("");

  const handleSaveCentral = () => {
    // Mock saving central.md
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const mockAgentStatus = {
    status: "Active",
    lastUpdate: "2025-04-15 09:23:45 UTC",
    logs: [
      {
        time: "09:23:45",
        level: "info",
        agent: "twitter_bot",
        message: "Processed 32 mentions, responded to 18 requiring attention",
      },
      {
        time: "09:15:12",
        level: "success",
        agent: "content_agent",
        message: "Scheduled 5 tweets for optimal engagement times",
      },
      {
        time: "09:10:34",
        level: "warning",
        agent: "security_agent",
        message: "Detected unusual login attempt, blocked IP 192.168.1.123",
      },
      {
        time: "08:57:21",
        level: "info",
        agent: "analytics_agent",
        message: "Generated daily engagement report, +12% increase in follower interactions",
      },
      {
        time: "08:45:30",
        level: "error",
        agent: "twitter_bot",
        message: "API rate limit reached, waiting 15 minutes before retry",
      },
    ],
  };

  const mockTasks = [
    {
      id: 1,
      title: "Implement new hashtag analysis feature",
      assignee: "content_agent",
      deadline: "2025-04-18",
      status: "in-progress",
      progress: 65,
    },
    {
      id: 2,
      title: "Optimize response algorithms",
      assignee: "twitter_bot",
      deadline: "2025-04-17",
      status: "in-progress",
      progress: 30,
    },
    {
      id: 3,
      title: "Fix API rate limiting issue",
      assignee: "security_agent",
      deadline: "2025-04-16",
      status: "blocked",
      progress: 10,
    },
    {
      id: 4,
      title: "Generate monthly performance report",
      assignee: "analytics_agent",
      deadline: "2025-04-30",
      status: "not-started",
      progress: 0,
    },
    {
      id: 5,
      title: "Update central.md documentation",
      assignee: "human",
      deadline: "2025-04-15",
      status: "completed",
      progress: 100,
    },
  ];

  const mockMessages = [
    {
      id: 1,
      sender: "twitter_bot",
      avatar: "/placeholder.svg",
      time: "09:30:12",
      content: "I've detected a spike in mentions related to our latest product announcement. Should I increase response priority for these messages?",
    },
    {
      id: 2,
      sender: "human",
      avatar: "/placeholder.svg",
      time: "09:32:45",
      content: "Yes, please prioritize those mentions and use the product launch response template.",
    },
    {
      id: 3,
      sender: "content_agent",
      avatar: "/placeholder.svg",
      time: "09:40:18",
      content: "Based on current engagement metrics, I've drafted 3 follow-up tweets about the product launch. Would you like to review them before scheduling?",
    },
    {
      id: 4,
      sender: "analytics_agent",
      avatar: "/placeholder.svg",
      time: "09:45:33",
      content: "There's a 27% increase in profile visits following the announcement. Recommend highlighting feature X in the next content cycle based on keyword analysis.",
    },
    {
      id: 5,
      sender: "security_agent",
      avatar: "/placeholder.svg",
      time: "10:01:05",
      content: "Alert: Unusual number of login attempts detected. I've temporarily increased security measures and am monitoring the situation.",
    },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, would add message to list
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "text-green-600";
      case "Idle":
        return "text-amber-600";
      case "Error":
        return "text-red-600";
      default:
        return "text-slate-600";
    }
  };

  const getLogLevelStyle = (level: string) => {
    switch (level) {
      case "info":
        return "bg-blue-50 text-blue-800 border-blue-200";
      case "success":
        return "bg-green-50 text-green-800 border-green-200";
      case "warning":
        return "bg-amber-50 text-amber-800 border-amber-200";
      case "error":
        return "bg-red-50 text-red-800 border-red-200";
      default:
        return "bg-slate-50 text-slate-800 border-slate-200";
    }
  };

  const getTaskStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">Completed</Badge>;
      case "in-progress":
        return <Badge variant="outline" className="bg-blue-50 text-blue-800 border-blue-200">In Progress</Badge>;
      case "blocked":
        return <Badge variant="outline" className="bg-red-50 text-red-800 border-red-200">Blocked</Badge>;
      case "not-started":
        return <Badge variant="outline" className="bg-slate-100 text-slate-800">Not Started</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <Layout>
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-lg bg-xviolet-primary flex items-center justify-center">
          <Bot className="h-5 w-5 text-white" />
        </div>
        <h1 className="text-2xl font-bold">Agent Collaboration Central</h1>
      </div>

      {/* Success/Error Messages */}
      {showSuccess && (
        <Alert variant="default" className="mb-6 bg-green-50 border-green-200">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
          <AlertTitle className="text-green-800">Success</AlertTitle>
          <AlertDescription className="text-green-700">
            Central.md has been updated successfully.
          </AlertDescription>
        </Alert>
      )}

      {showError && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            There was an error saving your changes.
          </AlertDescription>
        </Alert>
      )}

      <Tabs value={currentTab} onValueChange={setCurrentTab}>
        <TabsList>
          <TabsTrigger value="status" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Status
          </TabsTrigger>
          <TabsTrigger value="central" className="flex items-center gap-2">
            <Bot className="h-4 w-4" />
            Central.md
          </TabsTrigger>
          <TabsTrigger value="tasks" className="flex items-center gap-2">
            <ListTodo className="h-4 w-4" />
            Tasks
          </TabsTrigger>
          <TabsTrigger value="messages" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Messages
          </TabsTrigger>
        </TabsList>

        {/* Status Tab */}
        <TabsContent value="status" className="space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className={`h-3 w-3 rounded-full ${mockAgentStatus.status === "Active" ? "bg-green-500" : "bg-amber-500"}`}></div>
                  <span>Agent Status: <span className={getStatusColor(mockAgentStatus.status)}>{mockAgentStatus.status}</span></span>
                </div>
                <div className="text-sm font-normal text-slate-500 flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Last Update: {mockAgentStatus.lastUpdate}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 rounded-lg p-4 max-h-[400px] overflow-y-auto font-mono text-sm">
                {mockAgentStatus.logs.map((log, index) => (
                  <div
                    key={index}
                    className={`mb-2 p-2 rounded border ${getLogLevelStyle(log.level)}`}
                  >
                    <div className="flex items-start">
                      <div className="w-20 text-xs opacity-75">{log.time}</div>
                      <div className="font-semibold mr-2">[{log.agent}]</div>
                      <div>{log.message}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Agent Health Monitor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium">Twitter Bot</div>
                    <Badge variant="outline" className="bg-green-50 text-green-800">Online</Badge>
                  </div>
                  <div className="text-xs text-slate-500 mb-2">Last action: 2 minutes ago</div>
                  <div className="space-y-2">
                    <div>
                      <div className="text-xs flex justify-between mb-1">
                        <span>CPU Usage</span>
                        <span>28%</span>
                      </div>
                      <Progress value={28} className="h-1.5" />
                    </div>
                    <div>
                      <div className="text-xs flex justify-between mb-1">
                        <span>Memory</span>
                        <span>156MB / 512MB</span>
                      </div>
                      <Progress value={30} className="h-1.5" />
                    </div>
                    <div>
                      <div className="text-xs flex justify-between mb-1">
                        <span>API Quota</span>
                        <span>347 / 500</span>
                      </div>
                      <Progress value={70} className="h-1.5" />
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium">Content Agent</div>
                    <Badge variant="outline" className="bg-green-50 text-green-800">Online</Badge>
                  </div>
                  <div className="text-xs text-slate-500 mb-2">Last action: 8 minutes ago</div>
                  <div className="space-y-2">
                    <div>
                      <div className="text-xs flex justify-between mb-1">
                        <span>CPU Usage</span>
                        <span>42%</span>
                      </div>
                      <Progress value={42} className="h-1.5" />
                    </div>
                    <div>
                      <div className="text-xs flex justify-between mb-1">
                        <span>Memory</span>
                        <span>203MB / 512MB</span>
                      </div>
                      <Progress value={40} className="h-1.5" />
                    </div>
                    <div>
                      <div className="text-xs flex justify-between mb-1">
                        <span>API Quota</span>
                        <span>128 / 500</span>
                      </div>
                      <Progress value={25} className="h-1.5" />
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium">Analytics Agent</div>
                    <Badge variant="outline" className="bg-green-50 text-green-800">Online</Badge>
                  </div>
                  <div className="text-xs text-slate-500 mb-2">Last action: 15 minutes ago</div>
                  <div className="space-y-2">
                    <div>
                      <div className="text-xs flex justify-between mb-1">
                        <span>CPU Usage</span>
                        <span>55%</span>
                      </div>
                      <Progress value={55} className="h-1.5" />
                    </div>
                    <div>
                      <div className="text-xs flex justify-between mb-1">
                        <span>Memory</span>
                        <span>321MB / 512MB</span>
                      </div>
                      <Progress value={63} className="h-1.5" />
                    </div>
                    <div>
                      <div className="text-xs flex justify-between mb-1">
                        <span>API Quota</span>
                        <span>412 / 500</span>
                      </div>
                      <Progress value={82} className="h-1.5" />
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium">Security Agent</div>
                    <Badge variant="outline" className="bg-amber-50 text-amber-800">Warning</Badge>
                  </div>
                  <div className="text-xs text-slate-500 mb-2">Last action: 5 minutes ago</div>
                  <div className="space-y-2">
                    <div>
                      <div className="text-xs flex justify-between mb-1">
                        <span>CPU Usage</span>
                        <span>78%</span>
                      </div>
                      <Progress value={78} className="h-1.5" />
                    </div>
                    <div>
                      <div className="text-xs flex justify-between mb-1">
                        <span>Memory</span>
                        <span>445MB / 512MB</span>
                      </div>
                      <Progress value={87} className="h-1.5" />
                    </div>
                    <div>
                      <div className="text-xs flex justify-between mb-1">
                        <span>API Quota</span>
                        <span>278 / 500</span>
                      </div>
                      <Progress value={56} className="h-1.5" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Central.md Tab */}
        <TabsContent value="central" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Central.md Editor</span>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Revert
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <History className="h-4 w-4" />
                    History
                  </Button>
                  <Button
                    className="flex items-center gap-1"
                    size="sm"
                    onClick={handleSaveCentral}
                  >
                    <Save className="h-4 w-4" />
                    Save
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={centralMd}
                onChange={(e) => setCentralMd(e.target.value)}
                className="font-mono min-h-[400px] text-sm"
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tasks Tab */}
        <TabsContent value="tasks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Task Assignment Board</span>
                <Button size="sm" className="flex items-center gap-1">
                  <ListTodo className="h-4 w-4" />
                  New Task
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b text-slate-500 text-sm">
                      <th className="py-2 px-4 text-left font-medium">Task</th>
                      <th className="py-2 px-4 text-left font-medium">Assignee</th>
                      <th className="py-2 px-4 text-left font-medium">Deadline</th>
                      <th className="py-2 px-4 text-left font-medium">Status</th>
                      <th className="py-2 px-4 text-left font-medium">Progress</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockTasks.map((task) => (
                      <tr key={task.id} className="border-b last:border-0 hover:bg-slate-50">
                        <td className="py-3 px-4">{task.title}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/placeholder.svg" alt={task.assignee} />
                              <AvatarFallback>
                                {task.assignee.substring(0, 2).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <span>{task.assignee}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 flex items-center gap-1">
                          <CalendarClock className="h-4 w-4 text-slate-400" />
                          {task.deadline}
                        </td>
                        <td className="py-3 px-4">
                          {getTaskStatusBadge(task.status)}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Progress value={task.progress} className="h-2 flex-1" />
                            <span className="text-sm text-slate-500 w-9">{task.progress}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Messages Tab */}
        <TabsContent value="messages" className="space-y-6">
          <Card className="flex flex-col h-[600px]">
            <CardHeader className="pb-3">
              <CardTitle>Agent Messages</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-4">
                {mockMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.sender === "human" ? "justify-end" : ""}`}
                  >
                    {message.sender !== "human" && (
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={message.avatar} alt={message.sender} />
                        <AvatarFallback>
                          {message.sender.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`rounded-lg p-3 max-w-[80%] ${
                        message.sender === "human"
                          ? "bg-xviolet-primary text-white"
                          : "bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">
                          {message.sender === "human" ? "You" : message.sender}
                        </span>
                        <span className="text-xs opacity-75">{message.time}</span>
                      </div>
                      <p>{message.content}</p>
                    </div>
                    {message.sender === "human" && (
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={message.avatar} alt="You" />
                        <AvatarFallback>YOU</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
            <div className="p-4 border-t">
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
              >
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button type="submit" disabled={!newMessage.trim()}>
                  <Send className="h-4 w-4 mr-2" /> Send
                </Button>
              </form>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default AgentCentral;
