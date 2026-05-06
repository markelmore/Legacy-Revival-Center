import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function LegacyBlog() {
  const posts = [
    { title: "The Fire Must Not Go Out", author: "Pastor John Doe", date: "Oct 12, 2024", excerpt: "Maintaining personal revival in a distracted world..." },
    { title: "What is True Worship?", author: "Jane Smith", date: "Sep 28, 2024", excerpt: "Moving beyond songs to a lifestyle of surrender..." },
    { title: "Missions Report: Uganda", author: "Missions Team", date: "Sep 15, 2024", excerpt: "An update on our recent trip to Kampala..." }
  ];

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-foreground pb-6">
          <div>
            <h1 className="text-5xl md:text-7xl font-black uppercase">Legacy <span className="text-primary">Blog</span></h1>
            <p className="text-xl text-muted-foreground mt-2">Articles, devotionals, and updates from our team.</p>
          </div>
          <Button variant="outline" asChild className="rounded-none mt-4 md:mt-0 font-bold uppercase tracking-wider">
            <Link href="/blog/login">Author Login</Link>
          </Button>
        </div>

        <div className="space-y-12">
          {posts.map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <p className="text-primary font-bold uppercase tracking-wider text-sm mb-2">{post.date} &bull; {post.author}</p>
              <h2 className="text-3xl font-bold uppercase mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-lg text-muted-foreground mb-4">{post.excerpt}</p>
              <span className="text-sm font-bold uppercase tracking-widest border-b-2 border-primary pb-1 inline-block">Read More</span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}