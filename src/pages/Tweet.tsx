
import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Image as ImageIcon,
  FileVideo,
  Sparkles,
  Calendar,
  Globe,
  MapPin,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  CheckCircle2,
  Clock,
  Users,
  Lock,
  X,
  Plus,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface TweetPart {
  id: number;
  text: string;
  charCount: number;
}

export const Tweet: React.FC = () => {
  const [tweetText, setTweetText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [threadParts, setThreadParts] = useState<TweetPart[]>([]);
  const [nextThreadId, setNextThreadId] = useState(1);
  const [mediaFiles, setMediaFiles] = useState<{ name: string; type: string }[]>([]);
  const [replyToId, setReplyToId] = useState("");
  const [schedule, setSchedule] = useState<Date | null>(null);
  const [visibility, setVisibility] = useState("public");
  const [location, setLocation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const count = text.length;
    
    if (count <= 280) {
      setTweetText(text);
      setCharCount(count);
    }
  };

  const handleAddMedia = (type: string) => {
    // Mock adding media
    const fileName = type === "image" ? "image.jpg" : "video.mp4";
    if (mediaFiles.length < 4) {
      setMediaFiles([...mediaFiles, { name: fileName, type }]);
    } else {
      setErrorMessage("You can only add up to 4 media files");
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const handleRemoveMedia = (index: number) => {
    setMediaFiles(mediaFiles.filter((_, i) => i !== index));
  };

  const handleAddToThread = () => {
    if (tweetText.trim()) {
      setThreadParts([...threadParts, { id: nextThreadId, text: tweetText, charCount }]);
      setNextThreadId(nextThreadId + 1);
      setTweetText("");
      setCharCount(0);
    }
  };

  const handleRemoveThreadPart = (id: number) => {
    setThreadParts(threadParts.filter(part => part.id !== id));
  };

  const handleSubmit = () => {
    // Mock tweet submission
    if (tweetText.trim() === "" && threadParts.length === 0) {
      setErrorMessage("Please enter tweet text");
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    // Success case
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setTweetText("");
      setCharCount(0);
      setThreadParts([]);
      setMediaFiles([]);
      setReplyToId("");
      setSchedule(null);
      setVisibility("public");
      setLocation(false);
    }, 3000);
  };

  const handleClear = () => {
    setTweetText("");
    setCharCount(0);
    setThreadParts([]);
    setMediaFiles([]);
    setReplyToId("");
    setSchedule(null);
    setVisibility("public");
    setLocation(false);
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Compose Tweet</h1>

        {showSuccess && (
          <Alert variant="default" className="mb-6 bg-green-50 border-green-200">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <AlertTitle className="text-green-800">Success</AlertTitle>
            <AlertDescription className="text-green-700">
              Your tweet has been posted successfully!
              <Button variant="link" className="text-green-700 p-0 ml-2">
                View Tweet
              </Button>
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

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>What's happening?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Tweet Composer */}
              <div>
                <div className="flex items-start gap-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg" alt="@user" />
                    <AvatarFallback>XU</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Textarea
                      placeholder="What's on your mind?"
                      className="resize-none min-h-[120px]"
                      value={tweetText}
                      onChange={handleTextChange}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <div className="flex space-x-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => handleAddMedia("image")}
                    >
                      <ImageIcon className="h-5 w-5 text-blue-500" />
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => handleAddMedia("video")}
                    >
                      <FileVideo className="h-5 w-5 text-blue-500" />
                    </Button>
                    <Button type="button" variant="outline" size="icon">
                      <Sparkles className="h-5 w-5 text-blue-500" />
                    </Button>
                  </div>
                  <div className={`text-sm font-medium ${charCount > 260 ? "text-amber-500" : ""} ${charCount > 270 ? "text-red-500" : ""}`}>
                    {charCount}/280
                  </div>
                </div>

                {/* Media Preview */}
                {mediaFiles.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {mediaFiles.map((file, index) => (
                      <div
                        key={index}
                        className="relative bg-slate-100 rounded-lg p-4 flex items-center justify-center h-20"
                      >
                        {file.type === "image" ? (
                          <ImageIcon className="h-6 w-6 text-slate-400" />
                        ) : (
                          <FileVideo className="h-6 w-6 text-slate-400" />
                        )}
                        <span className="text-sm text-slate-600 ml-2">
                          {file.name}
                        </span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute top-1 right-1 h-5 w-5"
                          onClick={() => handleRemoveMedia(index)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Thread Builder */}
              {threadParts.length > 0 && (
                <div className="space-y-3 border-t pt-3">
                  <h3 className="text-sm font-medium">Thread</h3>
                  {threadParts.map((part) => (
                    <div key={part.id} className="flex items-start gap-2">
                      <div className="w-10 flex justify-center">
                        <div className="w-0.5 h-full bg-slate-200"></div>
                      </div>
                      <div className="flex-1 bg-slate-50 p-3 rounded-lg">
                        <div className="flex justify-between">
                          <div className="text-sm font-medium">Part {part.id}</div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => handleRemoveThreadPart(part.id)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                        <p className="text-sm mt-1">{part.text}</p>
                        <div className="text-xs text-slate-500 mt-1">
                          {part.charCount}/280 characters
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={handleAddToThread}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add to thread
              </Button>

              {/* Reply To (Optional) */}
              <div>
                <Label htmlFor="reply-to" className="text-sm font-medium">
                  Reply to (optional)
                </Label>
                <Input
                  id="reply-to"
                  placeholder="Tweet ID or URL"
                  className="mt-1"
                  value={replyToId}
                  onChange={(e) => setReplyToId(e.target.value)}
                />
              </div>

              {/* Advanced Options Accordion */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="advanced-options">
                  <AccordionTrigger className="text-sm font-medium">
                    Advanced Options
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      {/* Schedule Time */}
                      <div>
                        <Label className="text-sm font-medium">Schedule Time</Label>
                        <div className="flex items-center mt-1.5 gap-2">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={`justify-start text-left font-normal ${!schedule ? "text-slate-500" : ""}`}
                              >
                                <Calendar className="h-4 w-4 mr-2" />
                                {schedule ? schedule.toLocaleDateString() : "Select date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              {/* Calendar would go here */}
                              <div className="p-4">Calendar placeholder</div>
                            </PopoverContent>
                          </Popover>
                          <Select>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Morning</SelectLabel>
                                <SelectItem value="9:00">9:00 AM</SelectItem>
                                <SelectItem value="10:00">10:00 AM</SelectItem>
                                <SelectItem value="11:00">11:00 AM</SelectItem>
                              </SelectGroup>
                              <SelectGroup>
                                <SelectLabel>Afternoon</SelectLabel>
                                <SelectItem value="12:00">12:00 PM</SelectItem>
                                <SelectItem value="13:00">1:00 PM</SelectItem>
                                <SelectItem value="14:00">2:00 PM</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Visibility */}
                      <div>
                        <Label className="text-sm font-medium">Visibility</Label>
                        <div className="space-y-2 mt-1.5">
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="public"
                              name="visibility"
                              value="public"
                              checked={visibility === "public"}
                              onChange={() => setVisibility("public")}
                              className="form-radio h-4 w-4 text-blue-600"
                            />
                            <Label htmlFor="public" className="flex items-center cursor-pointer">
                              <Globe className="h-4 w-4 mr-2" />
                              <span>Public</span>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="followers"
                              name="visibility"
                              value="followers"
                              checked={visibility === "followers"}
                              onChange={() => setVisibility("followers")}
                              className="form-radio h-4 w-4 text-blue-600"
                            />
                            <Label htmlFor="followers" className="flex items-center cursor-pointer">
                              <Users className="h-4 w-4 mr-2" />
                              <span>Followers only</span>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="private"
                              name="visibility"
                              value="private"
                              checked={visibility === "private"}
                              onChange={() => setVisibility("private")}
                              className="form-radio h-4 w-4 text-blue-600"
                            />
                            <Label htmlFor="private" className="flex items-center cursor-pointer">
                              <Lock className="h-4 w-4 mr-2" />
                              <span>Private</span>
                            </Label>
                          </div>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm font-medium">Add Location</span>
                        </div>
                        <Switch
                          checked={location}
                          onCheckedChange={setLocation}
                        />
                      </div>
                      
                      {location && (
                        <div className="ml-6">
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a location" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="sf">San Francisco, CA</SelectItem>
                              <SelectItem value="nyc">New York, NY</SelectItem>
                              <SelectItem value="austin">Austin, TX</SelectItem>
                              <SelectItem value="custom">Add custom location...</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="flex justify-end space-x-3">
                <Button variant="outline" onClick={handleClear}>
                  Clear
                </Button>
                <Button className="xv-btn-primary" onClick={handleSubmit}>
                  Tweet
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Tweet;
