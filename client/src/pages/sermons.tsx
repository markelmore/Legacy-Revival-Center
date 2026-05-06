import { Button } from "@/components/ui/button";
import { PlayCircle, Headphones, ExternalLink, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import sermonsHero from "@/assets/images/sermons-hero.png";

export default function Sermons() {
  const [youtubeVideos, setYoutubeVideos] = useState<any[]>([]);
  const [loadingVideos, setLoadingVideos] = useState(true);
  
  const [podcasts, setPodcasts] = useState<any[]>([]);
  const [loadingPodcasts, setLoadingPodcasts] = useState(true);

  // We use RSS feeds to automatically fetch content
  const PODCAST_RSS_URL = "https://feeds.buzzsprout.com/1908759.rss"; 
  const YOUTUBE_RSS_URL = "https://www.youtube.com/feeds/videos.xml?channel_id=UCyjMkdwc5kIfxNMjYorv9cw";

  useEffect(() => {
    // Fetch Podcasts
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(PODCAST_RSS_URL)}`)
      .then(res => res.json())
      .then(data => {
        if (data.items) {
          setPodcasts(data.items.slice(0, 4));
        }
        setLoadingPodcasts(false);
      })
      .catch(err => {
        console.error("Error fetching podcast RSS:", err);
        setLoadingPodcasts(false);
      });

    // Fetch YouTube Videos
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(YOUTUBE_RSS_URL)}`)
      .then(res => res.json())
      .then(data => {
        if (data.items) {
          setYoutubeVideos(data.items.slice(0, 3));
        }
        setLoadingVideos(false);
      })
      .catch(err => {
        console.error("Error fetching YouTube RSS:", err);
        setLoadingVideos(false);
      });
  }, []);

  return (
    <div>
      <div className="bg-secondary text-secondary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={sermonsHero} alt="Bible" className="w-full h-full object-cover mix-blend-luminosity" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-6">Watch & <span className="text-primary">Listen</span></h1>
          <p className="text-xl max-w-2xl text-muted-foreground mb-8">Catch up on the latest messages from Legacy Revival Center.</p>
          <div className="flex gap-4 flex-wrap">
            <a 
              href="https://www.youtube.com/@legacyrevivalcenter3190" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold uppercase h-12 px-6 transition-colors"
            >
              <PlayCircle className="h-5 w-5" /> Visit YouTube Channel
            </a>
            <Button variant="outline" className="rounded-none border-white text-white hover:bg-white hover:text-secondary font-bold uppercase h-12 px-6 bg-transparent">
              <Headphones className="mr-2 h-5 w-5" /> Podcasts
            </Button>
          </div>
        </div>
      </div>

      {/* YouTube Playlist Embed */}
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black uppercase mb-10">Latest Sermons</h2>
            <div className="bg-background p-4 border border-border">
              <iframe 
                width="100%" 
                height="600" 
                src="https://www.youtube.com/embed/videoseries?list=PL6WeXBVh4a5Zxrw9AkMqpjtSvq1DhUaex" 
                title="Legacy Revival Center Sermons" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="w-full"
              />
            </div>
            <p className="text-muted-foreground text-sm mt-4 text-center">
              Subscribe to our YouTube channel to get notified when new messages are uploaded.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-black uppercase mb-10">Featured Messages</h2>
        
        {loadingVideos ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="ml-3 text-muted-foreground uppercase font-bold tracking-wider">Loading Videos...</span>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {youtubeVideos.map((video, i) => {
              // Extract video ID from URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID)
              const videoId = video.link.split('v=')[1]?.split('&')[0] || video.guid.split(':')[2];
              
              const pubDate = new Date(video.pubDate).toLocaleDateString('en-US', {
                month: 'short', day: 'numeric', year: 'numeric'
              });

              return (
                <div key={i} className="group flex flex-col">
                  <div className="aspect-video bg-muted mb-4 relative overflow-hidden border border-border group-hover:border-primary transition-colors">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={video.title}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                      className="absolute inset-0"
                    />
                  </div>
                  <p className="text-sm text-primary font-bold uppercase tracking-wider mb-2">{pubDate}</p>
                  <h3 className="text-2xl font-bold uppercase leading-tight group-hover:text-primary transition-colors line-clamp-2">{video.title}</h3>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Audio Podcasts Section */}
      <div className="py-20 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b-2 border-foreground pb-4">
            <div>
              <h2 className="text-3xl font-black uppercase flex items-center gap-3">
                <Headphones className="w-8 h-8 text-primary" /> Audio Podcasts
              </h2>
              <p className="text-muted-foreground mt-2">Listen to our sermons on the go.</p>
            </div>
            <div className="flex gap-4 mt-6 md:mt-0">
              <Button variant="outline" className="rounded-none border-foreground font-bold uppercase hover:bg-foreground hover:text-background">
                Apple Podcasts
              </Button>
              <Button variant="outline" className="rounded-none border-foreground font-bold uppercase hover:bg-foreground hover:text-background">
                Spotify
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {loadingPodcasts ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                <span className="ml-3 text-muted-foreground uppercase font-bold tracking-wider">Loading Episodes...</span>
              </div>
            ) : podcasts.length > 0 ? (
              podcasts.map((podcast, i) => {
                // Format date nicely
                const pubDate = new Date(podcast.pubDate).toLocaleDateString('en-US', {
                  month: 'short', day: 'numeric', year: 'numeric'
                });
                
                return (
                  <div key={i} className="bg-background border border-border p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-primary transition-all group">
                    <div className="flex items-center gap-6 flex-1">
                      <div className="w-16 h-16 bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                        <PlayCircle className="w-8 h-8 text-foreground group-hover:text-primary transition-colors cursor-pointer" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold uppercase leading-tight group-hover:text-primary transition-colors cursor-pointer line-clamp-2">{podcast.title}</h3>
                        <p className="text-sm text-muted-foreground font-medium mt-1">{pubDate}</p>
                      </div>
                    </div>
                    <div className="w-full md:w-auto shrink-0">
                      <audio controls className="w-full md:w-64 h-10 outline-none">
                        <source src={podcast.enclosure?.link} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 border border-border bg-background">
                <p className="text-muted-foreground">Unable to load podcast episodes at this time.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}