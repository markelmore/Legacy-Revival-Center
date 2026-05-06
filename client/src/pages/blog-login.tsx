import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BlogLogin() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-muted/30 py-20">
      <div className="bg-background p-10 border-t-4 border-primary w-full max-w-md shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black uppercase tracking-tighter">Author <span className="text-primary">Login</span></h1>
          <p className="text-muted-foreground text-sm mt-2">Sign in to manage Legacy Blog posts.</p>
        </div>
        
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="email" className="uppercase font-bold text-xs tracking-wider">Email Address</Label>
            <Input id="email" type="email" placeholder="author@legacyrevival.org" className="rounded-none h-12 focus-visible:ring-primary" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="uppercase font-bold text-xs tracking-wider">Password</Label>
            <Input id="password" type="password" className="rounded-none h-12 focus-visible:ring-primary" />
          </div>

          <Button className="w-full rounded-none h-12 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider text-lg">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}