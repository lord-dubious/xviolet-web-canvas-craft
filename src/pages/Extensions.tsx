
import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  Code,
  Play,
  Save,
  CheckCircle2,
  AlertCircle,
  Download,
  RefreshCw,
  UserPlus,
  BarChart3,
  ShieldCheck,
  Fingerprint,
  BadgeCheck,
  Clock,
  Terminal,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Mock extensions
const extensions = [
  {
    id: "username-changer",
    name: "Username Changer",
    icon: <UserPlus className="h-5 w-5" />,
    version: "1.2.3",
    author: "XViolet Team",
    description: "Easily change your Twitter username while maintaining your verification status and followers.",
    fields: [
      { id: "new-username", label: "New Username", type: "text", placeholder: "Enter new username" },
      { id: "verify-password", label: "Verify Password", type: "password", placeholder: "Enter your password" },
    ],
    actions: [{ label: "Change Username", primary: true }],
    logs: "Last changed: Never",
  },
  {
    id: "2fa-manager",
    name: "2FA Manager",
    icon: <ShieldCheck className="h-5 w-5" />,
    version: "0.9.1",
    author: "Security Team",
    description: "Enable or disable two-factor authentication for your Twitter account.",
    fields: [
      { 
        id: "2fa-option", 
        label: "Authentication Method", 
        type: "select", 
        options: [
          { value: "app", label: "Authenticator App" },
          { value: "sms", label: "SMS" },
          { value: "security-key", label: "Security Key" },
        ] 
      },
    ],
    actions: [
      { label: "Enable 2FA", primary: true },
      { label: "Disable 2FA", destructive: true }
    ],
    logs: "2FA Status: Disabled",
  },
  {
    id: "analytics-dashboard",
    name: "Analytics Dashboard",
    icon: <BarChart3 className="h-5 w-5" />,
    version: "2.1.0",
    author: "Data Team",
    description: "View detailed analytics about your Twitter engagement, followers, and content performance.",
    fields: [
      { 
        id: "time-range", 
        label: "Time Range", 
        type: "select", 
        options: [
          { value: "7d", label: "Last 7 Days" },
          { value: "30d", label: "Last 30 Days" },
          { value: "90d", label: "Last 90 Days" },
        ] 
      },
    ],
    actions: [{ label: "Generate Report", primary: true }],
    logs: "Last report: Never",
  },
  {
    id: "identity-verification",
    name: "Identity Verification",
    icon: <BadgeCheck className="h-5 w-5" />,
    version: "1.0.2",
    author: "Verification Team",
    description: "Verify your identity to unlock additional features and get your account verified.",
    fields: [
      { id: "full-name", label: "Full Name", type: "text", placeholder: "Enter your full name" },
      { id: "organization", label: "Organization", type: "text", placeholder: "Enter your organization" },
      { id: "category", 
        label: "Category", 
        type: "select", 
        options: [
          { value: "journalist", label: "Journalist" },
          { value: "government", label: "Government" },
          { value: "business", label: "Business Leader" },
          { value: "creator", label: "Content Creator" },
        ] 
      },
      { id: "id-verification", label: "Upload ID", type: "file" },
    ],
    actions: [{ label: "Submit Verification", primary: true }],
    logs: "Verification Status: Not Submitted",
  },
  {
    id: "scheduler",
    name: "Tweet Scheduler",
    icon: <Clock className="h-5 w-5" />,
    version: "3.0.1",
    author: "Productivity Team",
    description: "Schedule tweets to be sent at optimal times for maximum engagement.",
    fields: [
      { id: "tweet-content", label: "Tweet Content", type: "textarea", placeholder: "Enter your tweet text" },
      { id: "schedule-date", label: "Date", type: "date" },
      { id: "schedule-time", label: "Time", type: "time" },
      { id: "repeat", 
        label: "Repeat", 
        type: "select", 
        options: [
          { value: "none", label: "None" },
          { value: "daily", label: "Daily" },
          { value: "weekly", label: "Weekly" },
          { value: "monthly", label: "Monthly" },
        ] 
      },
    ],
    actions: [{ label: "Schedule Tweet", primary: true }],
    logs: "Scheduled tweets: 0",
  },
  {
    id: "developer-console",
    name: "Developer Console",
    icon: <Terminal className="h-5 w-5" />,
    version: "0.5.0 (Beta)",
    author: "Developer Team",
    description: "Access advanced developer tools and API endpoints for custom integrations.",
    fields: [
      { id: "api-endpoint", label: "API Endpoint", type: "select", 
        options: [
          { value: "users", label: "/users" },
          { value: "tweets", label: "/tweets" },
          { value: "followers", label: "/followers" },
        ] 
      },
      { id: "method", 
        label: "Method", 
        type: "select", 
        options: [
          { value: "get", label: "GET" },
          { value: "post", label: "POST" },
          { value: "put", label: "PUT" },
          { value: "delete", label: "DELETE" },
        ] 
      },
      { id: "parameters", label: "Parameters", type: "textarea", placeholder: "Enter JSON parameters" },
    ],
    actions: [
      { label: "Execute", primary: true },
      { label: "Save", secondary: true },
    ],
    logs: "Ready",
  },
];

export const Extensions: React.FC = () => {
  const [activeTab, setActiveTab] = useState(extensions[0].id);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLogExpanded, setIsLogExpanded] = useState(false);

  const handleAction = () => {
    // For demo purposes, just toggle success/error messages
    const success = Math.random() > 0.3; // 70% chance of success
    if (success) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const getActiveExtension = () => {
    return extensions.find(ext => ext.id === activeTab);
  };

  const activeExtension = getActiveExtension();

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Extensions</h1>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <div className="border-b mb-6">
          <TabsList className="flex overflow-x-auto pb-2">
            {extensions.map((extension) => (
              <TabsTrigger
                key={extension.id}
                value={extension.id}
                className="flex items-center gap-2"
              >
                {extension.icon}
                <span>{extension.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {extensions.map((extension) => (
          <TabsContent key={extension.id} value={extension.id}>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      {extension.icon}
                      <CardTitle>{extension.name}</CardTitle>
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                      <span>v{extension.version}</span>
                      <span>•</span>
                      <span>By {extension.author}</span>
                    </div>
                  </div>
                  <Badge variant="outline">{extension.id}</Badge>
                </div>
                <CardDescription className="mt-2">{extension.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  {extension.fields?.map((field) => (
                    <div key={field.id} className="space-y-2">
                      <Label htmlFor={field.id}>{field.label}</Label>
                      
                      {field.type === 'text' && (
                        <Input id={field.id} placeholder={field.placeholder} />
                      )}
                      
                      {field.type === 'password' && (
                        <Input id={field.id} type="password" placeholder={field.placeholder} />
                      )}
                      
                      {field.type === 'select' && (
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            {field.options?.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                      
                      {field.type === 'textarea' && (
                        <Textarea id={field.id} placeholder={field.placeholder} rows={5} />
                      )}
                      
                      {field.type === 'file' && (
                        <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                          <Input id={field.id} type="file" className="hidden" />
                          <label htmlFor={field.id} className="cursor-pointer flex flex-col items-center gap-2">
                            <Download className="h-6 w-6 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">Upload document</span>
                          </label>
                        </div>
                      )}
                      
                      {field.type === 'date' && (
                        <Input id={field.id} type="date" />
                      )}
                      
                      {field.type === 'time' && (
                        <Input id={field.id} type="time" />
                      )}
                    </div>
                  ))}
                  
                  {showSuccess && (
                    <Alert className="bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                      <CheckCircle2 className="h-4 w-4" />
                      <AlertTitle>Success</AlertTitle>
                      <AlertDescription>Operation completed successfully.</AlertDescription>
                    </Alert>
                  )}
                  
                  {showError && (
                    <Alert className="bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>An error occurred. Please try again.</AlertDescription>
                    </Alert>
                  )}
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {extension.actions?.map((action, index) => (
                      <Button 
                        key={index} 
                        onClick={handleAction}
                        variant={action.destructive ? "destructive" : action.primary ? "default" : "outline"}
                      >
                        {action.label}
                      </Button>
                    ))}
                  </div>
                  
                  <Collapsible className="w-full" open={isLogExpanded} onOpenChange={setIsLogExpanded}>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <Terminal className="h-4 w-4" />
                          <span>Logs</span>
                        </div>
                        <ChevronDown className={`h-4 w-4 transition-transform ${isLogExpanded ? "transform rotate-180" : ""}`} />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="bg-muted p-3 rounded-md mt-2 font-mono text-sm whitespace-pre overflow-x-auto">
                        {extension.logs}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </Layout>
  );
};

export default Extensions;
