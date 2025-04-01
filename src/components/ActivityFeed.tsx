import React, { useState, useEffect, useRef } from "react";
import {
  Activity,
  Bell,
  Award,
  BookOpen,
  FileText,
  Users,
  MessageCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ActivityItem {
  id: number;
  type: "publication" | "patent" | "award" | "reference" | "milestone";
  title: string;
  date: string;
  description?: string;
  icon: React.ReactNode;
}

const ActivityFeed: React.FC = () => {
  const [activities, setActivities] = useState<ActivityItem[]>([
    {
      id: 1,
      type: "patent",
      title: "New Patent Filed",
      date: "2 months ago",
      description: 'Filed a new patent on "Sulfur-containing lipids"',
      icon: <FileText className="h-4 w-4" />,
    },
    {
      id: 2,
      type: "publication",
      title: "New Publication",
      date: "4 months ago",
      description: "Published in Journal of Biological Chemistry",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      id: 3,
      type: "award",
      title: "Received Grant",
      date: "6 months ago",
      description: "Received Stronger BC future skills grant",
      icon: <Award className="h-4 w-4" />,
    },
    {
      id: 4,
      type: "milestone",
      title: "Career Milestone",
      date: "8 months ago",
      description: "Completed 3 years at NanoVation Therapeutics",
      icon: <Bell className="h-4 w-4" />,
    },
    {
      id: 5,
      type: "reference",
      title: "New Testimonial",
      date: "9 months ago",
      description: "Received a testimonial from Prof. William D. Lubell",
      icon: <Users className="h-4 w-4" />,
    },
  ]);

  const [references, setReferences] = useState([
    {
      id: 1,
      name: "Prof. William D. Lubell",
      role: "Department of Chemistry, Université de Montréal",
      contact: "william.lubell@umontreal.ca",
      phone: "(514) 343-6111 ext. 7339",
      testimonial:
        "Dr. Atmuri is an exceptional medicinal chemist with remarkable skills in designing and synthesizing complex molecules. His work on peptidomimetics has been groundbreaking.",
    },
    {
      id: 2,
      name: "Prof. Stephen Hanessian",
      role: "Department of Chemistry, Université de Montréal",
      contact: "stephen.hanessian@umontreal.ca",
      phone: "(514) 343-6738",
    },
  ]);

  const [conferences, setConferences] = useState([
    {
      id: 1,
      title: "International Conference on Medicinal Chemistry",
      location: "Boston, USA",
      date: "May 2023",
      presentation:
        "Oral Presentation: 'Novel Lipid Designs for Drug Delivery'",
    },
    {
      id: 2,
      title: "European Symposium on Organic Chemistry",
      location: "Vienna, Austria",
      date: "September 2022",
      presentation:
        "Poster Presentation: 'Synthesis of Sulfur-containing Lipids'",
    },
    {
      id: 3,
      title: "American Chemical Society National Meeting",
      location: "San Francisco, USA",
      date: "March 2022",
      presentation:
        "Oral Presentation: 'Advances in Lipid-based Drug Delivery Systems'",
    },
  ]);

  const [activeTab, setActiveTab] = useState("activity");
  const [isAnimating, setIsAnimating] = useState(false);
  const activityListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeTab === "activity") {
        rotateActivities();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activities, activeTab]);

  const rotateActivities = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (activityListRef.current) {
      activityListRef.current.style.opacity = "0";
      activityListRef.current.style.transform = "translateY(10px)";
    }

    setTimeout(() => {
      setActivities((prev) => {
        const newActivities = [...prev];
        const first = newActivities.shift();
        if (first) newActivities.push(first);
        return newActivities;
      });

      if (activityListRef.current) {
        activityListRef.current.style.opacity = "1";
        activityListRef.current.style.transform = "translateY(0)";
      }

      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 300);
  };

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case "publication":
        return "bg-blue-500";
      case "patent":
        return "bg-purple-500";
      case "award":
        return "bg-amber-500";
      case "reference":
        return "bg-green-500";
      case "milestone":
        return "bg-accent";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="section-reveal py-8">
      <Tabs
        defaultValue="activity"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-3  mb-6">
          <TabsTrigger
            value="activity"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
          >
            <Activity className="mr-2 h-4 w-4" /> Activity Feed
          </TabsTrigger>
          <TabsTrigger
            value="conferences"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
          >
            <MessageCircle className="mr-2 h-4 w-4" /> Conferences
          </TabsTrigger>
          <TabsTrigger
            value="references"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
          >
            <Users className="mr-2 h-4 w-4" /> References
          </TabsTrigger>
        </TabsList>

        <TabsContent value="activity">
          <div className="space-y-4">
            <Card className=" overflow-hidden">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Stay updated with Dr. Atmuri's latest professional activities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pb-4">
                <div
                  className="relative overflow-hidden"
                  style={{ height: "250px" }}
                >
                  <div
                    ref={activityListRef}
                    className="space-y-4 transition-all duration-300 ease-in-out"
                  >
                    {activities.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-start space-x-4"
                      >
                        <div
                          className={`flex-shrink-0 h-10 w-10 rounded-full ${getBackgroundColor(
                            activity.type
                          )} flex items-center justify-center text-white`}
                        >
                          {activity.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium">
                            {activity.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {activity.description}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {activity.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="">
              <CardHeader className="pb-2">
                <CardTitle>Milestones & Achievements</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Badge className=" text-foreground hover:bg-white/10 px-3 py-2 h-auto">
                  <Award className="mr-2 h-4 w-4 text-amber-400" />
                  <div className="flex flex-col items-start">
                    <span className="font-semibold">3 Patents Filed</span>
                    <span className="text-xs text-muted-foreground">
                      Within last 3 years
                    </span>
                  </div>
                </Badge>

                <Badge className=" text-foreground hover:bg-white/10 px-3 py-2 h-auto">
                  <BookOpen className="mr-2 h-4 w-4 text-blue-400" />
                  <div className="flex flex-col items-start">
                    <span className="font-semibold">8+ Publications</span>
                    <span className="text-xs text-muted-foreground">
                      In peer-reviewed journals
                    </span>
                  </div>
                </Badge>

                <Badge className=" text-foreground hover:bg-white/10 px-3 py-2 h-auto">
                  <MessageCircle className="mr-2 h-4 w-4 text-green-400" />
                  <div className="flex flex-col items-start">
                    <span className="font-semibold">
                      3 Conference Presentations
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Including oral presentations
                    </span>
                  </div>
                </Badge>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="conferences">
          <div className="space-y-4">
            {conferences.map((conference) => (
              <Card
                key={conference.id}
                className=" border-purple-200/30 dark:border-purple-800/30 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-purple-600/10 to-blue-500/5 py-3 px-4 border-b border-purple-200/30 dark:border-purple-800/30">
                  <h3 className="text-lg font-medium">{conference.title}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      {conference.location}
                    </p>
                    <Badge className="bg-purple-600 text-white border-none">
                      {conference.date}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start">
                    <MessageCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                    <p className="text-sm">{conference.presentation}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="references">
          <div className="space-y-4">
            {references.map((reference) => (
              <Card key={reference.id} className="">
                <CardHeader className="pb-2">
                  <div className="flex items-start">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarFallback className="bg-purple-600 text-white">
                        {reference.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">
                        {reference.name}
                      </CardTitle>
                      <CardDescription>{reference.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div className="text-sm">
                        <span className="font-medium">Email: </span>
                        <a
                          href={`mailto:${reference.contact}`}
                          className="text-purple-600 hover:underline"
                        >
                          {reference.contact}
                        </a>
                      </div>
                      {reference.phone && (
                        <div className="text-sm">
                          <span className="font-medium">Phone: </span>
                          <span>{reference.phone}</span>
                        </div>
                      )}
                    </div>

                    {reference.testimonial && (
                      <div className="mt-3 pt-3 border-t">
                        <p className="text-sm italic">
                          "{reference.testimonial}"
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex justify-center mt-4">
              <Card className=" w-full max-w-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-center text-lg">
                    Looking for more testimonials?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Contact Dr. Atmuri directly to request additional references
                    or testimonials from past collaborators.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ActivityFeed;
