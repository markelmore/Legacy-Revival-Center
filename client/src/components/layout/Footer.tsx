import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@assets/legacy-logo-long-trans_1773265665352.png";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Contact */}
          <div className="col-span-1 md:col-span-1">
            <img src={logo} alt="Legacy Revival Center" className="h-16 w-auto object-contain mb-6" />
            <p className="text-muted-foreground text-sm mb-4">
              Leaving a Legacy.
            </p>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>1240 McDonough Lake Road</p>
              <p>Collinsville, IL 62234</p>
              <p>dan@legacyrevivalcenter.org</p>
              <p>(618) 345-5408</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-wider mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about/beliefs" className="hover:text-primary transition-colors">Our Beliefs</Link></li>
              <li><Link href="/sermons" className="hover:text-primary transition-colors">Sermons</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/give" className="hover:text-primary transition-colors">Give</Link></li>
            </ul>
          </div>

          {/* Fellowships */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-wider mb-6 text-sm">Global Fellowships</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/fellowships" className="hover:text-primary transition-colors">Uganda</Link></li>
              <li><Link href="/fellowships" className="hover:text-primary transition-colors">Argentina</Link></li>
              <li><Link href="/fellowships" className="hover:text-primary transition-colors">Nepal</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-display font-bold uppercase tracking-wider mb-6 text-sm">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Sign up for our newsletter to receive updates on events and messages.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="rounded-none bg-background/5 border-border/20 text-white placeholder:text-muted-foreground focus-visible:ring-primary"
              />
              <Button type="submit" className="rounded-none bg-primary hover:bg-primary/90 text-white font-bold uppercase w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Legacy Revival Center. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/blog/login" className="hover:text-primary">Author Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}