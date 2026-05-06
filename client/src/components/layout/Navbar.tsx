import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import logo from "@assets/legacy-logo-long-trans_1773265665352.png";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { 
      label: "About Us", 
      isDropdown: true,
      children: [
        { href: "/about/beliefs", label: "Our Beliefs" },
        { href: "/about/leadership", label: "Our Leadership" }
      ]
    },
    { href: "/sermons", label: "Sermons" },
    { href: "/fellowships", label: "Legacy Fellowships" },
    { href: "/blog", label: "Legacy Blog" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-0">
          <img src={logo} alt="Legacy Revival Center" className="h-20 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link, i) => (
            link.isDropdown ? (
              <div key={i} className="relative group" onMouseEnter={() => setIsAboutOpen(true)} onMouseLeave={() => setIsAboutOpen(false)}>
                <button className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
                  {link.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isAboutOpen && (
                  <div className="absolute top-full left-0 w-48 pt-4">
                    <div className="bg-background border border-border shadow-xl p-2 flex flex-col gap-1">
                      {link.children?.map((child, j) => (
                        <Link key={j} href={child.href} className={cn(
                          "px-4 py-2 text-sm hover:bg-muted hover:text-primary transition-colors",
                          location === child.href && "bg-muted text-primary font-medium"
                        )}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link key={i} href={link.href!} className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left",
                location === link.href && "text-primary after:scale-x-100"
              )}>
                {link.label}
              </Link>
            )
          ))}
          <Button asChild className="rounded-none font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 text-white">
            <Link href="/give">Give</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="flex flex-col p-4 gap-4">
            {links.map((link, i) => (
              <div key={i}>
                {link.isDropdown ? (
                  <div className="flex flex-col gap-2">
                    <div className="font-medium text-sm text-muted-foreground uppercase tracking-wider">{link.label}</div>
                    <div className="flex flex-col gap-2 pl-4 border-l border-border ml-2">
                      {link.children?.map((child, j) => (
                        <Link key={j} href={child.href} 
                          className={cn("text-lg font-medium block", location === child.href && "text-primary")}
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link href={link.href!} 
                    className={cn("text-lg font-medium block", location === link.href && "text-primary")}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Button asChild className="rounded-none mt-4 font-bold uppercase bg-primary hover:bg-primary/90 text-white w-full">
              <Link href="/give" onClick={() => setIsOpen(false)}>Give</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}