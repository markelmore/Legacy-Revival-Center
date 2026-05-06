export default function OurBeliefs() {
  const beliefs = [
    {
      title: "The Scriptures",
      description: "The Scriptures are Inspired by God and reveal who God is and how we should conduct our lives."
    },
    {
      title: "The Trinity",
      description: "There is only One True God – creator of heaven and earth, and Redeemer of mankind. He is revealed in three persons … Father, Son, and Holy Spirit (commonly known as the Trinity)."
    },
    {
      title: "Jesus Christ",
      description: "Jesus Christ is the eternal Son of God. We believe in His virgin birth, His sinless life, His miracle, His substitutionary work on the cross, His bodily resurrection from the dead, and His exaltation to the right hand of God."
    },
    {
      title: "The Fall of Man",
      description: "Though originally good, man willingly fell to sin – ushering evil and death, both physical and spiritual, into the world."
    },
    {
      title: "Redemption Through Christ",
      description: "Man's only hope of redemption is through the shed blood of Jesus Christ the Son of God, and that salvation is received through repentance toward God and faith toward the Lord Jesus Christ."
    },
    {
      title: "Baptism & Communion",
      description: "We believe and practice the ordinances of Baptism by immersion in water and Communion, also called the Lord's Supper."
    },
    {
      title: "Baptism in the Holy Spirit",
      description: "The baptism in the Holy Spirit is the initial physical evidence of speaking in tongues, as experienced on the Day of Pentecost and referenced throughout the New Testament."
    },
    {
      title: "Speaking in Tongues",
      description: "The initial physical evidence of the baptism in the Holy Spirit is speaking in tongues, as experienced on the Day of Pentecost and referenced throughout the New Testament."
    },
    {
      title: "Sanctification",
      description: "Sanctification is the act of separation from evil and dedication to God."
    },
    {
      title: "The Church",
      description: "The Church is the body of Christ and the habitation of God through the Spirit, and every Spirit-born believer is a member of it."
    },
    {
      title: "The Ministry",
      description: "A divinely called and scripturally ordained ministry has been provided by our Lord for leading the Church in its mission to evangelize the world, worship God, build itself up in love, and demonstrate God's love and compassion throughout all the world."
    },
    {
      title: "Divine Healing",
      description: "Divine healing is an integral part of the Gospel. Deliverance from sickness is provided for in the atonement, and is the privilege of all believers."
    },
    {
      title: "Resurrection & Translation",
      description: "We believe in the resurrection of those who have fallen asleep in Christ, and their translation together with those who are alive and remain until the coming of the Lord. This is the imminent and blessed hope of the Church."
    },
    {
      title: "The Second Coming of Christ",
      description: "The second coming of Christ includes the rapture of all Spirit-born believers, followed by the visible return of Christ with His saints to reign on the earth for 1000 years."
    },
    {
      title: "Final Judgment",
      description: "There will be a final judgment."
    },
    {
      title: "Eternity with God",
      description: "We look forward to new heavens and a new earth, where righteousness dwells. 'And so shall we forever be with the Lord!'"
    }
  ];

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-black uppercase mb-12 text-center">Our <span className="text-primary">Beliefs</span></h1>
        
        <div className="space-y-12">
          {beliefs.map((belief, i) => (
            <section key={i}>
              <h2 className="text-3xl font-bold uppercase mb-4 border-b-2 border-primary inline-block pb-2">{belief.title}</h2>
              <p className="text-lg text-muted-foreground">{belief.description}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}