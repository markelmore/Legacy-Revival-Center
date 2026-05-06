import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl md:text-7xl font-black uppercase mb-16 text-center">Contact <span className="text-primary">Us</span></h1>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold uppercase mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-10">Have a question, need prayer, or want to learn more about Legacy Revival Center? Send us a message.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="uppercase font-bold text-xs">First Name</Label>
                  <Input id="firstName" className="rounded-none h-12 focus-visible:ring-primary bg-muted/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="uppercase font-bold text-xs">Last Name</Label>
                  <Input id="lastName" className="rounded-none h-12 focus-visible:ring-primary bg-muted/50" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="uppercase font-bold text-xs">Email Address</Label>
                <Input id="email" type="email" className="rounded-none h-12 focus-visible:ring-primary bg-muted/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="uppercase font-bold text-xs">Message</Label>
                <Textarea id="message" className="rounded-none min-h-[150px] focus-visible:ring-primary bg-muted/50" />
              </div>
              <Button asChild className="rounded-none h-14 px-8 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider text-lg w-full">
                <a href="mailto:dan@legacyrevival.org">Send Message</a>
              </Button>
            </form>
          </div>

          <div className="bg-secondary text-secondary-foreground p-10 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
            <h2 className="text-3xl font-black uppercase mb-10 relative z-10">Visit Us</h2>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-bold uppercase mb-1">Address</h3>
                  <p className="text-muted-foreground">1240 McDonough Lake Road<br/>Collinsville, IL 62234</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-bold uppercase mb-1">Phone</h3>
                  <p className="text-muted-foreground">(618) 345-5408</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-bold uppercase mb-1">Email</h3>
                  <p className="text-muted-foreground">dan@legacyrevival.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}