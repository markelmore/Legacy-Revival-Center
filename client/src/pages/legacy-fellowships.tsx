import fellowshipHero from "@/assets/images/fellowship-hero.png";
import ugandaPhoto from "@assets/ap_edward_1773344660618.jpg";
import argentinaPhoto from "@assets/jose-florencia_1773344779544.jpg";
import nepalPhoto from "@assets/salomon_1773344813719.jpg";

export default function LegacyFellowships() {
  const fellowships = [
    {
      country: "Uganda",
      title: "Legacy Revival Fellowship of Uganda",
      desc: "Lead by Apostle Edward & Jackie Legacy Revival Fellowship of Uganda seek to dig deep wells of revival, support orphanages & surrounding communities, and plant vibrant Spirit-filled churches and spread the Gospel of Jesus Christ to all of Uganda.",
      image: ugandaPhoto
    },
    {
      country: "Argentina",
      title: "Legacy Revival Fellowship of Argentina",
      desc: "Fanning the flames of the Argentine revival heritage, Pastors Jose & Florencia are feeding the poor, reaching the unreached, and planting revival churches all throughout Argentia. ",
      image: argentinaPhoto
    },
    {
      country: "Nepal",
      title: "Legacy Revival Fellowship of Nepal",
      desc: "Reaching the unreached in the Himalayas. Lead by Pastor Salomon Lama, Legacy Revival Fellowship of Nepal is planting churches and spreading the Gospel of Jesus to every remote corner of Nepal.",
      image: nepalPhoto
    }
  ];

  return (
    <div>
      <div className="bg-secondary text-secondary-foreground py-24 relative">
        <div className="absolute inset-0 opacity-30">
          <img src={fellowshipHero} alt="Global Fellowship" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-6">Global <span className="text-primary">Fellowships</span></h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">The Great Commission isn't a suggestion. We are actively planting and partnering with revival hubs across the globe.</p>
        </div>
      </div>

      <div className="py-24 container mx-auto px-4 max-w-5xl">
        <div className="space-y-24">
          {fellowships.map((f, i) => (
            <div key={i} id={f.country.toLowerCase()} className="flex flex-col md:flex-row gap-12 items-center">
              <div className={`flex-1 ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                <div className="text-primary font-black text-6xl opacity-20 mb-[-2rem]">{f.country}</div>
                <h2 className="text-4xl font-black uppercase mb-6 relative z-10">{f.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
              <div className={`flex-1 ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                <div className="aspect-[4/3] bg-muted relative overflow-hidden group">
                  {f.image ? (
                    <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-primary/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"/>
                      {/* Fallback image area */}
                      <div className="w-full h-full bg-secondary flex items-center justify-center text-secondary-foreground/20 font-bold uppercase tracking-widest text-2xl">
                        {f.country}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}