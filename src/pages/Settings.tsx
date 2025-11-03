import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Bell, 
  Shield, 
  Globe, 
  Moon, 
  Sun, 
  Volume2, 
  Mail, 
  Smartphone,
  Lock,
  Eye,
  EyeOff,
  Trash2,
  Download
} from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    dailyReminder: true,
    weeklyReport: true,
    sessionReminders: true,
    achievementAlerts: true,
    moodCheckIns: true,
  });

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    activityVisible: false,
    shareData: false,
    anonymousMode: true,
  });

  const [preferences, setPreferences] = useState({
    darkMode: false,
    language: 'en',
    soundEffects: true,
    autoSave: true,
  });

  const handleSaveSettings = () => {
    toast.success('Settings saved successfully!');
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="notifications" className="w-full">
        <TabsList className="w-full grid grid-cols-4">
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Choose how you want to be notified</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Communication Channels
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <Label htmlFor="email" className="font-medium">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive updates via email</p>
                    </div>
                    <Switch
                      id="email"
                      checked={notifications.email}
                      onCheckedChange={(checked) => 
                        setNotifications({ ...notifications, email: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <Label htmlFor="push" className="font-medium">Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">Get instant app notifications</p>
                    </div>
                    <Switch
                      id="push"
                      checked={notifications.push}
                      onCheckedChange={(checked) => 
                        setNotifications({ ...notifications, push: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <Label htmlFor="sms" className="font-medium">SMS Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive text messages</p>
                      <Badge variant="outline" className="mt-1">Premium</Badge>
                    </div>
                    <Switch
                      id="sms"
                      checked={notifications.sms}
                      onCheckedChange={(checked) => 
                        setNotifications({ ...notifications, sms: checked })
                      }
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-4">Notification Types</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <Label htmlFor="dailyReminder" className="font-medium">Daily Wellness Reminders</Label>
                      <p className="text-sm text-muted-foreground">Remind me to check in daily</p>
                    </div>
                    <Switch
                      id="dailyReminder"
                      checked={notifications.dailyReminder}
                      onCheckedChange={(checked) => 
                        setNotifications({ ...notifications, dailyReminder: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <Label htmlFor="weeklyReport" className="font-medium">Weekly Progress Reports</Label>
                      <p className="text-sm text-muted-foreground">Get your wellness summary</p>
                    </div>
                    <Switch
                      id="weeklyReport"
                      checked={notifications.weeklyReport}
                      onCheckedChange={(checked) => 
                        setNotifications({ ...notifications, weeklyReport: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <Label htmlFor="sessionReminders" className="font-medium">Session Reminders</Label>
                      <p className="text-sm text-muted-foreground">Remind me before counseling sessions</p>
                    </div>
                    <Switch
                      id="sessionReminders"
                      checked={notifications.sessionReminders}
                      onCheckedChange={(checked) => 
                        setNotifications({ ...notifications, sessionReminders: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <Label htmlFor="achievementAlerts" className="font-medium">Achievement Alerts</Label>
                      <p className="text-sm text-muted-foreground">Notify me of new achievements</p>
                    </div>
                    <Switch
                      id="achievementAlerts"
                      checked={notifications.achievementAlerts}
                      onCheckedChange={(checked) => 
                        setNotifications({ ...notifications, achievementAlerts: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <Label htmlFor="moodCheckIns" className="font-medium">Mood Check-in Prompts</Label>
                      <p className="text-sm text-muted-foreground">Remind me to log my mood</p>
                    </div>
                    <Switch
                      id="moodCheckIns"
                      checked={notifications.moodCheckIns}
                      onCheckedChange={(checked) => 
                        setNotifications({ ...notifications, moodCheckIns: checked })
                      }
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Privacy Tab */}
        <TabsContent value="privacy" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Privacy Settings
              </CardTitle>
              <CardDescription>Control your privacy and data sharing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div>
                  <Label htmlFor="profileVisible" className="font-medium">Profile Visibility</Label>
                  <p className="text-sm text-muted-foreground">Make your profile visible to others</p>
                </div>
                <Switch
                  id="profileVisible"
                  checked={privacy.profileVisible}
                  onCheckedChange={(checked) => 
                    setPrivacy({ ...privacy, profileVisible: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div>
                  <Label htmlFor="activityVisible" className="font-medium">Activity Visibility</Label>
                  <p className="text-sm text-muted-foreground">Show your activities to connections</p>
                </div>
                <Switch
                  id="activityVisible"
                  checked={privacy.activityVisible}
                  onCheckedChange={(checked) => 
                    setPrivacy({ ...privacy, activityVisible: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div>
                  <Label htmlFor="anonymousMode" className="font-medium">Anonymous Mode</Label>
                  <p className="text-sm text-muted-foreground">Use platform anonymously</p>
                  <Badge variant="secondary" className="mt-1">Recommended</Badge>
                </div>
                <Switch
                  id="anonymousMode"
                  checked={privacy.anonymousMode}
                  onCheckedChange={(checked) => 
                    setPrivacy({ ...privacy, anonymousMode: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div>
                  <Label htmlFor="shareData" className="font-medium">Share Analytics Data</Label>
                  <p className="text-sm text-muted-foreground">Help improve the platform (anonymously)</p>
                </div>
                <Switch
                  id="shareData"
                  checked={privacy.shareData}
                  onCheckedChange={(checked) => 
                    setPrivacy({ ...privacy, shareData: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Download className="w-4 h-4 mr-2" />
                Download My Data
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Eye className="w-4 h-4 mr-2" />
                View Data Usage
              </Button>
              <Button variant="destructive" className="w-full justify-start">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete My Account
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Preferences Tab */}
        <TabsContent value="preferences" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                App Preferences
              </CardTitle>
              <CardDescription>Customize your experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div>
                  <Label htmlFor="darkMode" className="font-medium">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Use dark theme</p>
                </div>
                <div className="flex items-center gap-3">
                  <Sun className="w-4 h-4 text-muted-foreground" />
                  <Switch
                    id="darkMode"
                    checked={preferences.darkMode}
                    onCheckedChange={(checked) => 
                      setPreferences({ ...preferences, darkMode: checked })
                    }
                  />
                  <Moon className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-2 p-4 rounded-lg border">
                <Label htmlFor="language" className="font-medium">Language</Label>
                <select
                  id="language"
                  value={preferences.language}
                  onChange={(e) => setPreferences({ ...preferences, language: e.target.value })}
                  className="w-full px-3 py-2 rounded-md bg-background border border-input text-foreground h-10"
                >
                  <option value="en">English</option>
                  <option value="hi">हिंदी (Hindi)</option>
                  <option value="bn">বাংলা (Bengali)</option>
                  <option value="te">తెలుగు (Telugu)</option>
                  <option value="mr">मराठी (Marathi)</option>
                  <option value="ta">தமிழ் (Tamil)</option>
                </select>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div>
                  <Label htmlFor="soundEffects" className="font-medium">Sound Effects</Label>
                  <p className="text-sm text-muted-foreground">Play sounds for actions</p>
                </div>
                <div className="flex items-center gap-3">
                  <Volume2 className="w-4 h-4 text-muted-foreground" />
                  <Switch
                    id="soundEffects"
                    checked={preferences.soundEffects}
                    onCheckedChange={(checked) => 
                      setPreferences({ ...preferences, soundEffects: checked })
                    }
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div>
                  <Label htmlFor="autoSave" className="font-medium">Auto-save</Label>
                  <p className="text-sm text-muted-foreground">Automatically save your progress</p>
                </div>
                <Switch
                  id="autoSave"
                  checked={preferences.autoSave}
                  onCheckedChange={(checked) => 
                    setPreferences({ ...preferences, autoSave: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Security Settings
              </CardTitle>
              <CardDescription>Protect your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg border">
                <h3 className="font-medium mb-2">Change Password</h3>
                <p className="text-sm text-muted-foreground mb-4">Update your account password</p>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <div className="relative">
                      <input
                        type="password"
                        id="currentPassword"
                        className="w-full px-3 py-2 rounded-md bg-background border border-input text-foreground h-10"
                      />
                      <EyeOff className="absolute right-3 top-2.5 w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <input
                      type="password"
                      id="newPassword"
                      className="w-full px-3 py-2 rounded-md bg-background border border-input text-foreground h-10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="w-full px-3 py-2 rounded-md bg-background border border-input text-foreground h-10"
                    />
                  </div>
                  <Button className="w-full">Update Password</Button>
                </div>
              </div>

              <div className="p-4 rounded-lg border">
                <h3 className="font-medium mb-2">Two-Factor Authentication</h3>
                <p className="text-sm text-muted-foreground mb-4">Add an extra layer of security</p>
                <Button variant="outline" className="w-full">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Enable 2FA
                </Button>
              </div>

              <div className="p-4 rounded-lg border">
                <h3 className="font-medium mb-2">Active Sessions</h3>
                <p className="text-sm text-muted-foreground mb-4">Manage your active login sessions</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Current Device</p>
                      <p className="text-xs text-muted-foreground">Chrome on Windows • Delhi, India</p>
                    </div>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-3">
        <Button variant="outline">Cancel</Button>
        <Button onClick={handleSaveSettings}>Save All Changes</Button>
      </div>
    </div>
  );
};

export default Settings;
