
import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertCircle,
  CheckCircle2,
  Camera,
  Upload,
  Edit,
  Laptop,
  Moon,
  Sun,
  Shield,
  Smartphone,
  KeySquare,
  UserRound,
  Languages,
  Bell,
  MonitorSmartphone,
  QrCode,
  Copy,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Settings: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("xviolet_user");
  const [bio, setBio] = useState(
    "This is a demo user profile for XViolet web GUI."
  );
  const [location, setLocation] = useState("San Francisco, CA");
  const [theme, setTheme] = useState("system");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [language, setLanguage] = useState("en");

  const handleSave = () => {
    // Simulate success
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleError = (message: string) => {
    setErrorMessage(message);
    setShowError(true);
    setTimeout(() => setShowError(false), 3000);
  };

  const handleChangePassword = () => {
    // For demo purposes
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const mockSessions = [
    {
      id: "current",
      device: "Chrome on Windows",
      location: "San Francisco, CA",
      time: "Current session",
      isCurrent: true,
    },
    {
      id: "s1",
      device: "Safari on iPhone",
      location: "San Francisco, CA",
      time: "1 hour ago",
      isCurrent: false,
    },
    {
      id: "s2",
      device: "Firefox on MacBook",
      location: "New York, NY",
      time: "Yesterday",
      isCurrent: false,
    },
  ];

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* Success/Error Messages */}
      {showSuccess && (
        <Alert variant="default" className="mb-6 bg-green-50 border-green-200">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
          <AlertTitle className="text-green-800">Success</AlertTitle>
          <AlertDescription className="text-green-700">
            Your settings have been successfully saved.
          </AlertDescription>
        </Alert>
      )}

      {showError && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <UserRound className="h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="preferences" className="flex items-center gap-2">
            <Laptop className="h-4 w-4" />
            Preferences
          </TabsTrigger>
        </TabsList>

        {/* Profile Management */}
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserRound className="h-5 w-5" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col lg:flex-row items-start gap-6">
                {/* Avatar Upload */}
                <div className="flex flex-col items-center gap-3 w-full lg:w-auto">
                  <Avatar className="h-32 w-32 relative group">
                    <AvatarImage src="/placeholder.svg" alt="User avatar" />
                    <AvatarFallback>XU</AvatarFallback>
                    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 rounded-full flex items-center justify-center transition-opacity cursor-pointer">
                      <Camera className="h-6 w-6 text-white" />
                    </div>
                  </Avatar>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Upload className="h-3 w-3 mr-1" /> Change Avatar
                  </Button>
                </div>

                {/* Profile Fields */}
                <div className="flex-1 space-y-4 w-full">
                  <div>
                    <Label htmlFor="username" className="mb-1.5 block">
                      Username
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="flex-1"
                      />
                      <Button onClick={() => handleSave()}>Change</Button>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="bio" className="mb-1.5 block">
                      Bio
                    </Label>
                    <Textarea
                      id="bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="location" className="mb-1.5 block">
                      Location
                    </Label>
                    <Select
                      value={location}
                      onValueChange={setLocation}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="San Francisco, CA">San Francisco, CA</SelectItem>
                        <SelectItem value="New York, NY">New York, NY</SelectItem>
                        <SelectItem value="London, UK">London, UK</SelectItem>
                        <SelectItem value="Tokyo, Japan">Tokyo, Japan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Banner Upload */}
              <div>
                <Label className="mb-1.5 block">Profile Banner</Label>
                <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 flex flex-col items-center justify-center text-slate-500 hover:border-slate-300 hover:bg-slate-50 cursor-pointer transition-colors">
                  <Upload className="h-6 w-6 mb-2" />
                  <p>Drag and drop an image or click to select</p>
                  <p className="text-xs mt-1">Recommended: 1500 x 500px</p>
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={() => handleSave()}>Save Profile</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <KeySquare className="h-5 w-5" />
                Password
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Change Password</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Change Password</DialogTitle>
                    <DialogDescription>
                      Enter your current password and then create a new one.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div>
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input
                        id="current-password"
                        type="password"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="new-password">New Password</Label>
                      <Input
                        id="new-password"
                        type="password"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="button" onClick={() => handleChangePassword()}>
                      Change Password
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Two-Factor Authentication
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Enable Two-Factor Authentication</p>
                  <p className="text-sm text-slate-500">
                    Secure your account with TOTP two-factor authentication.
                  </p>
                </div>
                <Switch
                  checked={twoFactorEnabled}
                  onCheckedChange={(checked) => {
                    setTwoFactorEnabled(checked);
                    setShowQRCode(checked);
                  }}
                />
              </div>

              {showQRCode && (
                <div className="border-t pt-4 mt-4">
                  <p className="font-medium mb-4">Scan QR Code</p>
                  <div className="flex flex-col lg:flex-row items-start gap-6">
                    <div className="bg-white p-4 rounded-lg border">
                      <QrCode className="h-40 w-40 text-black" />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-sm">Backup Codes</p>
                        <p className="text-xs text-slate-500 mb-2">
                          Save these codes in a safe place to use when you don't have access
                          to your authenticator app.
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {Array.from({ length: 8 }).map((_, i) => (
                            <div
                              key={i}
                              className="flex justify-between items-center bg-slate-50 p-2 rounded text-sm font-mono"
                            >
                              12345{i + 1}
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-5 w-5"
                                title="Copy code"
                              >
                                <Copy className="h-3 w-3" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="flex items-center"
                        onClick={() => handleSave()}
                      >
                        Download Backup Codes
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MonitorSmartphone className="h-5 w-5" />
                Active Sessions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockSessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between border-b last:border-b-0 pb-4 last:pb-0"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-slate-100 p-2">
                        {session.device.includes("iPhone") ? (
                          <Smartphone className="h-4 w-4" />
                        ) : (
                          <Laptop className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium flex items-center">
                          {session.device}
                          {session.isCurrent && (
                            <Badge variant="outline" className="ml-2">
                              Current
                            </Badge>
                          )}
                        </div>
                        <div className="text-xs text-slate-500">
                          {session.location} • {session.time}
                        </div>
                      </div>
                    </div>
                    {!session.isCurrent && (
                      <Button variant="outline" size="sm">
                        Logout
                      </Button>
                    )}
                  </div>
                ))}
                <div className="flex justify-end">
                  <Button variant="destructive">Logout All Devices</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Preferences */}
        <TabsContent value="preferences" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Laptop className="h-5 w-5" />
                Theme & Display
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="mb-1.5 block">Theme</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    variant={theme === "light" ? "default" : "outline"}
                    className="flex items-center justify-center gap-2"
                    onClick={() => setTheme("light")}
                  >
                    <Sun className="h-4 w-4" />
                    Light
                  </Button>
                  <Button
                    variant={theme === "dark" ? "default" : "outline"}
                    className="flex items-center justify-center gap-2"
                    onClick={() => setTheme("dark")}
                  >
                    <Moon className="h-4 w-4" />
                    Dark
                  </Button>
                  <Button
                    variant={theme === "system" ? "default" : "outline"}
                    className="flex items-center justify-center gap-2"
                    onClick={() => setTheme("system")}
                  >
                    <Laptop className="h-4 w-4" />
                    System
                  </Button>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <Label className="mb-1.5 block">Language</Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                    <SelectItem value="ja">日本語</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-slate-500">
                      Receive email notifications about activity
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Browser Notifications</p>
                    <p className="text-sm text-slate-500">
                      Allow desktop notifications when browser is open
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">SMS Notifications</p>
                    <p className="text-sm text-slate-500">
                      Receive text messages for important alerts
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Settings;
