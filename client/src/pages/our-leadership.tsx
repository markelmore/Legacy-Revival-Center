export default function OurLeadership() {
  const leaders = [
    { name: "Pastors Dan & Cindy Duff", role: "Lead Pastors", bio: "Pastors Dan & Cindy have pastored Legacy Revival Center since 2005. We are a church not satisfied with status quo Christianity but are pursuing and expecting a mighty outpouring of God’s Spirit upon the face of the earth. Our desire is for a revival in our world; knowing that only a revival will change the moral compass of nations. Our hearts desire is to see the Bride of Christ in all her glory! We have a mandate upon us to raise up and invest in the next generation to carry the fire of Holy Spirit to the nations. We owe the world a REVIVAL!" },
    { name: "Mike & Melissa Williams", role: "Associate Pastors", bio: "Mike & Melissa have been serving at Legacy Revival Center since 2006. They are passionate about seeing the church grow in its understanding of the Word of God and in its walk with God." },
    { name: "Nick & Hailey Kaiser", role: "Youth Pastors", bio: "Nick & Hailey are passionate about raising up the next generation of on fire, God fearing, Holy Spirit filled servants of God. They are dedicated to seeing the youth of Legacy Revival Center grow in their faith and walk with God." }
  ];

  return (
    <div className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 text-center">Our <span className="text-primary">Leadership</span></h1>
        <p className="text-center text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">Our team is dedicated to serving the congregation and facilitating an atmosphere where God can move freely.</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <div key={i} className="bg-background p-8 border border-border hover:border-primary transition-colors group">
              <div className="w-24 h-24 bg-muted rounded-full mb-6 mx-auto overflow-hidden group-hover:scale-105 transition-transform">
                {/* Placeholder for leader images */}
                <div className="w-full h-full bg-secondary" />
              </div>
              <h3 className="text-2xl font-bold uppercase text-center mb-1">{leader.name}</h3>
              <p className="text-primary font-medium text-center mb-4 text-sm uppercase tracking-wider">{leader.role}</p>
              <p className="text-muted-foreground text-center">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}