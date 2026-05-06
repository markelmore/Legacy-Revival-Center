import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock, Timer } from "lucide-react";
import { useState, useEffect } from "react";
import heroWorship from "@assets/legacysanctuary_1775616682810.jpg";
import sermonsHero from "@/assets/images/sermons-hero.png";
import fellowshipHero from "@/assets/images/fellowship-hero.png";
import ugandaPhoto from "@assets/uganda_1773347973228.jpg";
import argentinaPhoto from "@assets/argentina_1773348088390.jpg";
import nepalPhoto from "@assets/nepal_1773348216491.jpg";

// Countdown Timer Component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date 30 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-primary text-primary-foreground py-8 border-t-4 border-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-black uppercase mb-6 flex items-center justify-center gap-3">
          <Timer className="w-8 h-8 md:w-10 md:h-10" /> 
          Moving to our New Building
        </h2>
        <div className="flex justify-center gap-4 md:gap-8 max-w-2xl mx-auto">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item, index) => (
            <div key={item.label} className="flex flex-col items-center">
              <div className="bg-background text-foreground text-3xl md:text-5xl lg:text-6xl font-black w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black">
                {String(item.value).padStart(2, '0')}
              </div>
              <span className="text-sm md:text-base font-bold uppercase tracking-widest mt-4">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroWorship} 
            alt="Worship at Legacy Revival Center" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
          <div className="absolute inset-0 bg-noise mix-blend-overlay" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center">
          <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block drop-shadow-md">
            Welcome to
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
            Legacy <br/>
            <span className="text-primary opacity-90 font-black">Revival</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 font-light">
            Leaving a Legacy
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="rounded-none bg-primary hover:bg-primary/90 text-white font-bold px-8 h-14 text-lg">
              <Link href="/about">Plan a Visit</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-none border-white text-white hover:bg-white hover:text-secondary font-bold px-8 h-14 text-lg bg-transparent">
              <Link href="/sermons">Watch Latest</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* New Building Countdown */}
      <CountdownTimer />

      {/* Service Times Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 text-foreground">
                Join Us <span className="text-primary">This Week</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We believe in the power of gathering together. Experience passionate worship, biblical teaching, and authentic community.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-muted p-4 flex items-center justify-center">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl uppercase">Sunday Service</h3>
                    <p className="text-muted-foreground">10:00 AM & 6:00 PM</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-muted p-4 flex items-center justify-center">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl uppercase">Wednesday Service</h3>
                    <p className="text-muted-foreground">7:00 PM</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-muted p-4 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl uppercase">Location</h3>
                    <p className="text-muted-foreground">1240 McDonough Lake Road, Collinsville, IL</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] bg-muted overflow-hidden">
              <div className="absolute inset-0 bg-primary/10" />
              <img src={sermonsHero} alt="Bible and Coffee" className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" />
              <div className="absolute inset-4 border-2 border-primary/20 pointer-events-none" />
              <div className="absolute bottom-8 left-8 right-8 bg-background p-6">
                <h3 className="font-bold text-2xl uppercase mb-2">Latest Message</h3>
                <p className="text-muted-foreground mb-4">Watch our latest Sunday morning sermon.</p>
                <Button variant="link" asChild className="p-0 text-primary font-bold uppercase flex items-center gap-2 hover:gap-4 transition-all">
                  <Link href="/sermons">Watch Now <ArrowRight className="w-4 h-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-6">
              Global <span className="text-primary">Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Legacy Revival Center is committed to spreading the gospel not just in Collinsville, but around the world through our global fellowships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Uganda', image: ugandaPhoto },
              { name: 'Argentina', image: argentinaPhoto },
              { name: 'Nepal', image: nepalPhoto }
            ].map((country) => (
              <div key={country.name} className="group relative h-[400px] overflow-hidden bg-background">
                <img 
                  src={country.image} 
                  alt={`Fellowship in ${country.name}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="w-12 h-1 bg-primary mb-4" />
                  <h3 className="text-3xl font-black uppercase mb-2">{country.name}</h3>
                  <p className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-4 line-clamp-2">
                  
                  </p>
                  <Button variant="link" asChild className="p-0 text-white hover:text-primary font-bold uppercase flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <a href={`/fellowships#${country.name.toLowerCase()}`}>Read More <ArrowRight className="w-4 h-4" /></a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}