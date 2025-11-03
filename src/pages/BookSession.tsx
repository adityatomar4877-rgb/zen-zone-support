import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Languages } from "lucide-react";

const counsellors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialization: "Anxiety & Depression",
    qualifications: "M.D. Psychiatry, AIIMS",
    location: "Delhi",
    languages: ["English", "Hindi"],
    rating: 4.8,
  },
  {
    id: 2,
    name: "Dr. Raj Patel",
    specialization: "Stress Management",
    qualifications: "Ph.D. Psychology",
    location: "Mumbai",
    languages: ["English", "Hindi", "Gujarati"],
    rating: 4.9,
  },
  {
    id: 3,
    name: "Dr. Anjali Desai",
    specialization: "Academic Stress & Burnout",
    qualifications: "M.Phil Clinical Psychology",
    location: "Bangalore",
    languages: ["English", "Hindi", "Kannada"],
    rating: 4.7,
  },
  {
    id: 4,
    name: "Dr. Vikram Singh",
    specialization: "Relationship & Social Anxiety",
    qualifications: "Ph.D. Counselling Psychology",
    location: "Pune",
    languages: ["English", "Hindi", "Marathi"],
    rating: 4.8,
  },
];

const BookSession = () => {
  const [selectedCounsellor, setSelectedCounsellor] = useState<typeof counsellors[0] | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Book a Session</h1>
        <p className="text-muted-foreground">Book a session with our qualified mental health professionals.</p>
      </div>

      <Tabs defaultValue="book" className="w-full">
        <TabsList>
          <TabsTrigger value="book">+ Book Session</TabsTrigger>
          <TabsTrigger value="my-sessions">My Sessions</TabsTrigger>
        </TabsList>

        <TabsContent value="book" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {counsellors.map((counsellor) => (
                <Card
                  key={counsellor.id}
                  className={`cursor-pointer transition-colors ${
                    selectedCounsellor?.id === counsellor.id ? "border-garden-blue" : ""
                  }`}
                  onClick={() => setSelectedCounsellor(counsellor)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{counsellor.name}</CardTitle>
                        <CardDescription className="text-base mt-1">
                          {counsellor.specialization}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-1 bg-warning/20 px-2 py-1 rounded-md">
                        <Star className="w-4 h-4 fill-warning text-warning" />
                        <span className="text-sm font-medium text-warning">{counsellor.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">{counsellor.qualifications}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{counsellor.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Languages className="w-4 h-4" />
                        <span>{counsellor.languages.join(", ")}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Book Your Session</CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedCounsellor ? (
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Selected Counsellor</p>
                        <p className="text-lg font-semibold text-foreground">{selectedCounsellor.name}</p>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Session Type</label>
                        <select className="w-full px-3 py-2 rounded-md bg-background border border-border text-foreground">
                          <option>Online Session</option>
                          <option>In-Person Session</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Preferred Date</label>
                        <input type="date" className="w-full px-3 py-2 rounded-md bg-background border border-border text-foreground" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Preferred Time</label>
                        <select className="w-full px-3 py-2 rounded-md bg-background border border-border text-foreground">
                          <option>10:00 AM</option>
                          <option>11:00 AM</option>
                          <option>2:00 PM</option>
                          <option>3:00 PM</option>
                          <option>4:00 PM</option>
                        </select>
                      </div>
                      <Button className="w-full">Confirm Booking</Button>
                    </div>
                  ) : (
                    <p className="text-center text-muted-foreground py-8">
                      Select a counsellor to book your session.
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="my-sessions" className="mt-6">
          <Card>
            <CardContent className="py-12">
              <p className="text-center text-muted-foreground">No sessions booked yet.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BookSession;
