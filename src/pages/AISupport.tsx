import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User, Sparkles, Heart, Brain, Smile } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AISupport = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI mental health companion. I'm here to listen and support you. How are you feeling today?",
      sender: 'ai',
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickResponses = [
    { text: "I'm feeling stressed", icon: "😰" },
    { text: "I need someone to talk to", icon: "💬" },
    { text: "I'm anxious about exams", icon: "📚" },
    { text: "I'm feeling lonely", icon: "😔" },
  ];

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('stress') || lowerMessage.includes('stressed')) {
      return "I understand that stress can be overwhelming. Let's work through this together. What's been causing you the most stress lately? Remember, it's okay to take things one step at a time.";
    } else if (lowerMessage.includes('anxious') || lowerMessage.includes('anxiety') || lowerMessage.includes('exam')) {
      return "Exam anxiety is very common, and you're not alone in feeling this way. Have you tried the 4-7-8 breathing technique? It can help calm your nervous system. Would you like me to guide you through it?";
    } else if (lowerMessage.includes('lonely') || lowerMessage.includes('alone')) {
      return "Feeling lonely is difficult, but reaching out like this is a brave step. Have you considered joining our Study Buddy feature or connecting with peer support groups? Sometimes talking to others who understand can really help.";
    } else if (lowerMessage.includes('sad') || lowerMessage.includes('depressed') || lowerMessage.includes('down')) {
      return "I'm sorry you're feeling this way. Your feelings are valid. If these feelings persist, I'd recommend speaking with one of our professional counselors. Would you like me to help you book a session?";
    } else if (lowerMessage.includes('sleep') || lowerMessage.includes('insomnia')) {
      return "Sleep problems can really affect your wellbeing. Have you tried our evening wind-down activities in the Mood Garden? I can also suggest some sleep hygiene tips. What's been affecting your sleep?";
    } else if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're very welcome! Remember, I'm always here whenever you need support. Taking care of your mental health is important, and I'm proud of you for reaching out. 💚";
    } else if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
      return "I'm here to help! You can talk to me about anything that's on your mind. I can also help you book a counseling session, suggest wellness activities, or just be here to listen. What would be most helpful for you right now?";
    } else {
      return "Thank you for sharing that with me. I'm here to listen. Can you tell me more about how you're feeling? Remember, there's no judgment here - this is a safe space for you.";
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: getAIResponse(inputMessage),
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickResponse = (text: string) => {
    setInputMessage(text);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-garden-purple to-garden-blue rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3">
          <Bot className="w-10 h-10" />
          <div>
            <h1 className="text-3xl font-bold">AI Mental Health Support</h1>
            <p className="text-white/90">Your 24/7 companion for emotional support and guidance</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-garden-purple/20 to-garden-purple/10 border-garden-purple/30">
          <CardContent className="p-4 text-center">
            <Heart className="w-8 h-8 mx-auto mb-2 text-garden-purple" />
            <p className="text-sm font-medium">Empathetic</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-garden-blue/20 to-garden-blue/10 border-garden-blue/30">
          <CardContent className="p-4 text-center">
            <Brain className="w-8 h-8 mx-auto mb-2 text-garden-blue" />
            <p className="text-sm font-medium">Intelligent</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-success/20 to-success/10 border-success/30">
          <CardContent className="p-4 text-center">
            <Sparkles className="w-8 h-8 mx-auto mb-2 text-success" />
            <p className="text-sm font-medium">Available 24/7</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-garden-pink/20 to-garden-pink/10 border-garden-pink/30">
          <CardContent className="p-4 text-center">
            <Smile className="w-8 h-8 mx-auto mb-2 text-garden-pink" />
            <p className="text-sm font-medium">Non-judgmental</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-lg">
        <CardHeader className="border-b">
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-garden-blue" />
              Chat with AI Companion
            </span>
            <Badge variant="secondary" className="bg-success/20 text-success">
              Online
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {/* Chat Messages */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-garden-blue flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[70%] rounded-2xl p-4 ${
                    message.sender === 'user'
                      ? 'bg-garden-blue text-white'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-2 ${
                    message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                {message.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-garden-purple flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-garden-blue flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-muted rounded-2xl p-4">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Responses */}
          <div className="border-t p-4 bg-muted/30">
            <p className="text-sm text-muted-foreground mb-3">Quick responses:</p>
            <div className="flex flex-wrap gap-2">
              {quickResponses.map((response, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickResponse(response.text)}
                  className="text-xs"
                >
                  <span className="mr-1">{response.icon}</span>
                  {response.text}
                </Button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message here..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} className="bg-garden-blue hover:bg-garden-blue/90">
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              💡 This AI provides support but is not a replacement for professional help. For urgent matters, please contact a counselor.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Need More Support?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button className="w-full justify-start" variant="outline">
            📅 Book a Professional Counseling Session
          </Button>
          <Button className="w-full justify-start" variant="outline">
            👥 Join Peer Support Groups
          </Button>
          <Button className="w-full justify-start" variant="outline">
            🌸 Explore Mood Garden Activities
          </Button>
          <Button className="w-full justify-start" variant="outline">
            📚 Access Mental Health Resources
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AISupport;
