import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import giveHero from "@/assets/images/give-hero.png";

export default function Give() {
  const [amount, setAmount] = useState<number | null>(null);
  const amounts = [50, 100, 250, 500];

  return (
    <div>
      <div className="bg-secondary text-secondary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src={giveHero} alt="Generosity" className="w-full h-full object-cover mix-blend-overlay" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-6">Partner in <span className="text-primary">Revival</span></h1>
          <p className="text-xl max-w-2xl mx-auto text-muted-foreground">Your generosity fuels the local and global mission of Legacy Revival Center.</p>
        </div>
      </div>

      <div className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-md">
          <div className="bg-background border border-border p-8 shadow-2xl">
            <h2 className="text-2xl font-black uppercase mb-6 text-center border-b border-border pb-4">Secure Online Giving</h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-3">
                <Label className="uppercase font-bold text-xs tracking-wider text-muted-foreground">Select Amount</Label>
                <div className="grid grid-cols-2 gap-3">
                  {amounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setAmount(amt)}
                      className={`h-14 font-bold text-lg transition-colors border ${amount === amt ? 'bg-primary border-primary text-white' : 'bg-transparent border-border hover:border-primary text-foreground'}`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="custom" className="uppercase font-bold text-xs tracking-wider text-muted-foreground">Or Custom Amount</Label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-lg text-muted-foreground">$</span>
                  <Input 
                    id="custom" 
                    type="number" 
                    placeholder="0.00" 
                    className="rounded-none h-14 pl-8 text-lg font-bold focus-visible:ring-primary"
                    onChange={(e) => setAmount(Number(e.target.value))}
                    value={amount || ''}
                  />
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-border">
                <Label className="uppercase font-bold text-xs tracking-wider text-muted-foreground">Fund</Label>
                <select className="w-full h-14 border border-border bg-background px-4 rounded-none focus:outline-none focus:ring-2 focus:ring-primary uppercase text-sm font-bold">
                  <option>General Tithes & Offerings</option>
                  <option>Global Missions</option>
                  <option>Building Fund</option>
                </select>
              </div>

              <Button className="w-full rounded-none h-16 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-xl mt-4">
                Give Now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}