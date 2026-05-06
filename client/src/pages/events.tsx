import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, MapPin, Clock } from "lucide-react";

export default function Events() {
  const events = [
    { title: "Night of Worship", date: "Oct 15, 2024", time: "7:00 PM", location: "Main Sanctuary", desc: "An extended evening of unhindered worship and ministry." },
    { title: "Men's Breakfast", date: "Oct 22, 2024", time: "8:00 AM", location: "Fellowship Hall", desc: "Food, fellowship, and a challenging word for the men of Legacy." },
    { title: "Youth Revival Camp", date: "Nov 5-7, 2024", time: "All Day", location: "Camp Hope", desc: "A 3-day encounter for middle and high school students." }
  ];

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-4">Upcoming <span className="text-primary">Events</span></h1>
          <p className="text-xl text-muted-foreground">Gather with us as we pursue God together.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
          <Button variant="outline" className="rounded-none border-foreground h-12 px-6 font-bold uppercase flex items-center gap-2">
            <CalendarIcon className="w-4 h-4" /> Subscribe via Apple Calendar
          </Button>
          <Button variant="outline" className="rounded-none border-foreground h-12 px-6 font-bold uppercase flex items-center gap-2">
            <CalendarIcon className="w-4 h-4" /> Subscribe via Google Calendar
          </Button>
        </div>

        <div className="grid gap-6">
          {events.map((event, i) => (
            <div key={i} className="flex flex-col md:flex-row bg-muted/50 border border-border hover:border-primary transition-colors">
              <div className="bg-foreground text-background p-6 md:w-48 flex flex-col justify-center items-center text-center">
                <span className="text-sm font-bold uppercase tracking-widest text-primary mb-1">Date</span>
                <span className="font-black text-2xl leading-none">{event.date.split(',')[0]}</span>
              </div>
              <div className="p-8 flex-1">
                <h3 className="text-2xl font-bold uppercase mb-4">{event.title}</h3>
                <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm text-muted-foreground font-medium">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-primary"/> {event.time}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-primary"/> {event.location}</span>
                </div>
                <p className="text-foreground/80">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}