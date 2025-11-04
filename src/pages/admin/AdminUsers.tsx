import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Search, Shield, User, Briefcase, UserCheck, UserX, Mail, Calendar } from "lucide-react";

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    {
      id: 1,
      name: "Sarah Chen",
      email: "sarah.chen@university.edu",
      role: "student",
      department: "Computer Science",
      year: "3rd Year",
      status: "active",
      joinedDate: "2023-09-01",
      lastActive: "2024-11-04",
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      email: "priya.sharma@university.edu",
      role: "counsellor",
      specialization: "Anxiety & Depression",
      license: "PSY-12345",
      status: "active",
      joinedDate: "2023-01-15",
      lastActive: "2024-11-04",
    },
    {
      id: 3,
      name: "Alex Kumar",
      email: "alex.kumar@university.edu",
      role: "student",
      department: "Engineering",
      year: "2nd Year",
      status: "active",
      joinedDate: "2023-09-01",
      lastActive: "2024-11-03",
    },
    {
      id: 4,
      name: "Dr. Raj Patel",
      email: "raj.patel@university.edu",
      role: "counsellor",
      specialization: "Stress Management",
      license: "PSY-67890",
      status: "active",
      joinedDate: "2023-02-20",
      lastActive: "2024-11-04",
    },
    {
      id: 5,
      name: "Admin User",
      email: "admin@university.edu",
      role: "administrator",
      status: "active",
      joinedDate: "2022-12-01",
      lastActive: "2024-11-04",
    },
  ];

  const stats = {
    totalUsers: 1262,
    students: 1247,
    counsellors: 15,
    administrators: 2,
    activeToday: 456,
    newThisWeek: 12,
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRoleIcon = (role: string) => {
    switch(role) {
      case 'student': return <User className="w-4 h-4" />;
      case 'counsellor': return <Briefcase className="w-4 h-4" />;
      case 'administrator': return <Shield className="w-4 h-4" />;
      default: return <User className="w-4 h-4" />;
    }
  };

  const getRoleBadge = (role: string) => {
    const colors = {
      student: 'bg-garden-blue/20 text-garden-blue border-garden-blue',
      counsellor: 'bg-garden-purple/20 text-garden-purple border-garden-purple',
      administrator: 'bg-garden-green/20 text-garden-green border-garden-green',
    };
    return colors[role as keyof typeof colors];
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-garden-green to-garden-blue rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3">
          <Users className="w-10 h-10" />
          <div>
            <h1 className="text-3xl font-bold">User Management</h1>
            <p className="text-white/90">Monitor and manage all platform users</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card className="bg-gradient-to-br from-info to-info/80 text-white border-0">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm opacity-90">Total Users</p>
              <p className="text-3xl font-bold">{stats.totalUsers}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-garden-blue to-garden-blue/80 text-white border-0">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm opacity-90">Students</p>
              <p className="text-3xl font-bold">{stats.students}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-garden-purple to-garden-purple/80 text-white border-0">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm opacity-90">Counsellors</p>
              <p className="text-3xl font-bold">{stats.counsellors}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-garden-green to-garden-green/80 text-white border-0">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm opacity-90">Admins</p>
              <p className="text-3xl font-bold">{stats.administrators}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-success to-success/80 text-white border-0">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm opacity-90">Active Today</p>
              <p className="text-3xl font-bold">{stats.activeToday}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-warning to-warning/80 text-white border-0">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm opacity-90">New (7d)</p>
              <p className="text-3xl font-bold">{stats.newThisWeek}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>User Directory</CardTitle>
              <CardDescription>View and manage all platform users</CardDescription>
            </div>
            <Button>
              <UserCheck className="w-4 h-4 mr-2" />
              Add New User
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, or role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">All Users</TabsTrigger>
              <TabsTrigger value="students">Students</TabsTrigger>
              <TabsTrigger value="counsellors">Counsellors</TabsTrigger>
              <TabsTrigger value="administrators">Administrators</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6 space-y-4">
              {filteredUsers.map((user) => (
                <Card key={user.id} className="hover:border-garden-blue transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-garden-blue to-garden-purple flex items-center justify-center text-white text-lg font-bold">
                          {user.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold">{user.name}</h3>
                            <Badge className={getRoleBadge(user.role)}>
                              {getRoleIcon(user.role)}
                              <span className="ml-1 capitalize">{user.role}</span>
                            </Badge>
                            <Badge variant="outline" className="capitalize">
                              {user.status}
                            </Badge>
                          </div>

                          <div className="space-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Mail className="w-3 h-3" />
                              <span>{user.email}</span>
                            </div>
                            {user.role === 'student' && (
                              <div className="flex items-center gap-2">
                                <User className="w-3 h-3" />
                                <span>{user.department} • {user.year}</span>
                              </div>
                            )}
                            {user.role === 'counsellor' && (
                              <div className="flex items-center gap-2">
                                <Briefcase className="w-3 h-3" />
                                <span>{user.specialization} • License: {user.license}</span>
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <Calendar className="w-3 h-3" />
                              <span>Joined: {user.joinedDate} • Last active: {user.lastActive}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                          <UserX className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="students" className="mt-6 space-y-4">
              {filteredUsers.filter(u => u.role === 'student').map((user) => (
                <Card key={user.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                        <p className="text-sm text-muted-foreground">{user.department} • {user.year}</p>
                      </div>
                      <Button variant="outline" size="sm">View Profile</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="counsellors" className="mt-6 space-y-4">
              {filteredUsers.filter(u => u.role === 'counsellor').map((user) => (
                <Card key={user.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                        <p className="text-sm text-muted-foreground">{user.specialization}</p>
                      </div>
                      <Button variant="outline" size="sm">View Profile</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="administrators" className="mt-6 space-y-4">
              {filteredUsers.filter(u => u.role === 'administrator').map((user) => (
                <Card key={user.id} className="border-garden-green">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold mb-1 flex items-center gap-2">
                          <Shield className="w-4 h-4 text-garden-green" />
                          {user.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                      <Button variant="outline" size="sm">View Profile</Button>
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

export default AdminUsers;