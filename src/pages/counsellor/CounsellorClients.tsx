import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Search, Calendar, TrendingUp, AlertCircle, CheckCircle, Clock } from "lucide-react";

const CounsellorClients = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const clients = [
    {
      id: 1,
      name: "Student #1247",
      department: "Computer Science",
      year: "3rd Year",
      status: "active",
      lastSession: "2024-11-03",
      nextSession: "2024-11-10",
      sessionsCompleted: 5,
      riskLevel: "low",
      concerns: ["Exam Anxiety", "Time Management"],
    },
    {
      id: 2,
      name: "Student #2156",
      department: "Engineering",
      year: "2nd Year",
      status: "active",
      lastSession: "2024-11-02",
      nextSession: "2024-11-09",
      sessionsCompleted: 3,
      riskLevel: "medium",
      concerns: ["Academic Stress", "Sleep Issues"],
    },
    {
      id: 3,
      name: "Student #1893",
      department: "Business",
      year: "4th Year",
      status: "active",
      lastSession: "2024-11-01",
      nextSession: "2024-11-08",
      sessionsCompleted: 8,
      riskLevel: "low",
      concerns: ["Career Anxiety"],
    },
    {
      id: 4,
      name: "Student #2401",
      department: "Arts & Humanities",
      year: "1st Year",
      status: "pending",
      lastSession: null,
      nextSession: "2024-11-06",
      sessionsCompleted: 0,
      riskLevel: "high",
      concerns: ["Adjustment Issues", "Homesickness", "Depression"],
    },
  ];

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRiskBadge = (level: string) => {
    const colors = {
      low: "bg-success/20 text-success border-success",
      medium: "bg-warning/20 text-warning border-warning",
      high: "bg-destructive/20 text-destructive border-destructive",
    };
    return colors[level as keyof typeof colors];
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-garden-purple to-garden-blue rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3">
          <Users className="w-10 h-10" />
          <div>
            <h1 className="text-3xl font-bold">My Clients</h1>
            <p className="text-white/90">Manage and monitor your client relationships</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-info to-info/80 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Active Clients</p>
                <p className="text-3xl font-bold">{clients.filter(c => c.status === 'active').length}</p>
              </div>
              <Users className="w-8 h-8 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-warning to-warning/80 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Pending Requests</p>
                <p className="text-3xl font-bold">{clients.filter(c => c.status === 'pending').length}</p>
              </div>
              <Clock className="w-8 h-8 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-success to-success/80 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">This Week</p>
                <p className="text-3xl font-bold">12</p>
                <p className="text-xs opacity-90">sessions</p>
              </div>
              <Calendar className="w-8 h-8 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-destructive to-destructive/80 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">High Priority</p>
                <p className="text-3xl font-bold">{clients.filter(c => c.riskLevel === 'high').length}</p>
              </div>
              <AlertCircle className="w-8 h-8 opacity-80" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <CardTitle>Client List</CardTitle>
          <CardDescription>View and manage your assigned clients</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search clients by name or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">All Clients</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="high-risk">High Priority</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6 space-y-4">
              {filteredClients.map((client) => (
                <Card key={client.id} className="hover:border-garden-purple transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold">{client.name}</h3>
                          <Badge variant="outline">{client.status}</Badge>
                          <Badge className={getRiskBadge(client.riskLevel)}>
                            {client.riskLevel} risk
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {client.department} • {client.year}
                        </p>
                      </div>
                      <Button>View Details</Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <div>
                          <p className="text-xs text-muted-foreground">Sessions Completed</p>
                          <p className="font-semibold">{client.sessionsCompleted}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-info" />
                        <div>
                          <p className="text-xs text-muted-foreground">Last Session</p>
                          <p className="font-semibold">{client.lastSession || 'N/A'}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-warning" />
                        <div>
                          <p className="text-xs text-muted-foreground">Next Session</p>
                          <p className="font-semibold">{client.nextSession}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground mb-2">Primary Concerns:</p>
                      <div className="flex flex-wrap gap-2">
                        {client.concerns.map((concern, idx) => (
                          <Badge key={idx} variant="secondary">{concern}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="active" className="mt-6 space-y-4">
              {filteredClients.filter(c => c.status === 'active').map((client) => (
                <Card key={client.id}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{client.name}</h3>
                    <p className="text-sm text-muted-foreground">{client.department}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="pending" className="mt-6 space-y-4">
              {filteredClients.filter(c => c.status === 'pending').map((client) => (
                <Card key={client.id}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{client.name}</h3>
                    <p className="text-sm text-muted-foreground">{client.department}</p>
                    <Button className="mt-4">Review Request</Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="high-risk" className="mt-6 space-y-4">
              {filteredClients.filter(c => c.riskLevel === 'high').map((client) => (
                <Card key={client.id} className="border-destructive">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-destructive mt-0.5" />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{client.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{client.department}</p>
                        <div className="flex flex-wrap gap-2">
                          {client.concerns.map((concern, idx) => (
                            <Badge key={idx} className="bg-destructive/20 text-destructive">
                              {concern}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button variant="destructive">Priority Action</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default CounsellorClients;