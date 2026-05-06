import { Link } from "wouter";

export default function AboutUs() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-black uppercase mb-8">About <span className="text-primary">Us</span></h1>
        <p className="text-xl text-muted-foreground mb-12">
          Legacy Revival Center is a non-denominational, pentecostal church located in Collinsville, IL. We are passionate about experiencing the presence of God, equipping believers for ministry, and impacting our world with the gospel of Jesus Christ.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 text-left mt-16">
          <div className="bg-muted p-10 border-t-4 border-primary">
            <h2 className="text-3xl font-bold uppercase mb-4">Our Beliefs</h2>
            <p className="mb-6 text-muted-foreground">Discover what we believe about God, salvation, the Holy Spirit, and the church.</p>
            <Link href="/about/beliefs" className="text-primary font-bold uppercase hover:underline">
              Read our Statement of Faith &rarr;
            </Link>
          </div>
          
          <div className="bg-muted p-10 border-t-4 border-secondary">
            <h2 className="text-3xl font-bold uppercase mb-4">Our Leadership</h2>
            <p className="mb-6 text-muted-foreground">Meet the pastors and leaders who serve and guide the vision of Legacy Revival Center.</p>
            <Link href="/about/leadership" className="text-primary font-bold uppercase hover:underline">
              Meet our Team &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}