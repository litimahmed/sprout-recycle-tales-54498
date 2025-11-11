import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Volume2, Share2, Clock, Tag, Download, Edit } from "lucide-react";
import { toast } from "sonner";
import { storyContent } from "@/data/storyContent";
import StoryRating from "@/components/StoryRating";
import StoryQuiz from "@/components/StoryQuiz";

const StoryReader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isNarratorActive, setIsNarratorActive] = useState(false);

  const story = storyContent.find((s) => s.id === Number(id));

  if (!story) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Story not found</h1>
          <Button onClick={() => navigate("/")}>Go Home</Button>
        </div>
      </div>
    );
  }

  const handleNarrator = () => {
    setIsNarratorActive(!isNarratorActive);
    toast.success(
      isNarratorActive ? "Narrator turned off" : "Narrator turned on"
    );
  };

  const handleShare = async () => {
    const shareData = {
      title: story.title,
      text: `Check out this eco-friendly story: ${story.title}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        toast.success("Story shared successfully!");
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied to clipboard!");
      }
    } catch (err) {
      toast.error("Failed to share story");
    }
  };

  // Get the thumbnail image (first page with image)
  const thumbnailImage = story.pages.find(page => page.image)?.image || "";
  const estimatedReadTime = Math.ceil(story.pages.length * 1.5); // ~1.5 min per page

  const handleDownloadPDF = () => {
    toast.success("PDF download will be available soon!");
  };

  const handleCustomize = () => {
    toast.success("Story customization coming soon!");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>

            <div className="flex items-center gap-2">
              <Button
                variant={isNarratorActive ? "default" : "outline"}
                size="sm"
                onClick={handleNarrator}
                className="gap-2"
              >
                <Volume2 className="h-4 w-4" />
                <span className="hidden sm:inline">Narrator</span>
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="gap-2"
              >
                <Share2 className="h-4 w-4" />
                <span className="hidden sm:inline">Share</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner Section with Dark Background */}
      <section className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Story Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white font-story mb-6">
              {story.title}
            </h1>
            
            {/* Story Description */}
            <p className="text-lg md:text-xl text-white/90 font-story leading-relaxed mb-8 max-w-3xl mx-auto">
              {story.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
              <Button
                onClick={handleDownloadPDF}
                size="lg"
                className="gap-2 bg-eco-green hover:bg-eco-green/90 text-white"
              >
                <Download className="h-5 w-5" />
                Download story to PDF
              </Button>
              <Button
                onClick={handleCustomize}
                size="lg"
                variant="outline"
                className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <Edit className="h-5 w-5" />
                Customize your book
              </Button>
            </div>

            {/* Button descriptions */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
              <span>Ideal for reading or printing this story</span>
              <span>Base this story on your situation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Thumbnail Image Section */}
      {thumbnailImage && (
        <section className="container mx-auto px-4 -mt-12 md:-mt-16 mb-12">
          <div className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl border-8 border-white">
            <img
              src={thumbnailImage}
              alt={story.title}
              className="w-full h-auto object-cover max-h-[400px]"
            />
          </div>
        </section>
      )}

      {/* Story Content */}
      <article className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="font-story space-y-20">
          {story.pages.map((page, index) => {
            const layout = page.layout || "default";
            
            // Two-column layout with image on LEFT
            if (layout === "two-column-left" && page.image) {
              return (
                <section key={index} className="grid lg:grid-cols-[2fr,3fr] gap-12 items-center">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                    <img 
                      src={page.image} 
                      alt={page.altText || `Chapter ${index + 1}`}
                      className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 bg-eco-green/10 px-5 py-2.5 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-eco-green animate-pulse" />
                      <span className="text-eco-green font-bold text-sm uppercase tracking-wider">
                        Chapter {index + 1}
                      </span>
                    </div>
                    <p className="text-2xl md:text-3xl leading-relaxed text-foreground font-medium first-letter:text-6xl first-letter:font-bold first-letter:text-eco-green first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:mt-1">
                      {page.text}
                    </p>
                  </div>
                </section>
              );
            }
            
            // Two-column layout with image on RIGHT
            if (layout === "two-column-right" && page.image) {
              return (
                <section key={index} className="grid lg:grid-cols-[3fr,2fr] gap-12 items-center">
                  <div className="space-y-6 order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 bg-eco-blue/10 px-5 py-2.5 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-eco-blue animate-pulse" />
                      <span className="text-eco-blue font-bold text-sm uppercase tracking-wider">
                        Chapter {index + 1}
                      </span>
                    </div>
                    <p className="text-2xl md:text-3xl leading-relaxed text-foreground font-medium first-letter:text-6xl first-letter:font-bold first-letter:text-eco-blue first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:mt-1">
                      {page.text}
                    </p>
                  </div>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group order-1 lg:order-2">
                    <img 
                      src={page.image} 
                      alt={page.altText || `Chapter ${index + 1}`}
                      className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                </section>
              );
            }
            
            // Default layout - full width centered with optional image
            return (
              <section key={index} className="space-y-10 max-w-4xl mx-auto">
                {page.image && (
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                    <img 
                      src={page.image} 
                      alt={page.altText || `Chapter ${index + 1}`}
                      className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8">
                      <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl">
                        <div className="w-2 h-2 rounded-full bg-eco-purple animate-pulse" />
                        <span className="text-foreground font-bold text-sm uppercase tracking-wider">
                          Chapter {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                <p className="text-2xl md:text-3xl leading-relaxed text-foreground font-medium first-letter:text-7xl first-letter:font-bold first-letter:text-eco-purple first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:mt-2">
                  {page.text}
                </p>
              </section>
            );
          })}
        </div>

        {/* End of Story */}
        <div className="text-center py-20 mt-20">
          <div className="inline-block mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-eco-green via-eco-blue to-eco-purple blur-xl opacity-30" />
              <p className="relative text-4xl md:text-5xl font-bold bg-gradient-to-r from-eco-green via-eco-blue to-eco-purple bg-clip-text text-transparent">
                The End
              </p>
            </div>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            You've completed this amazing eco-adventure! Ready for another story?
          </p>
          <Button onClick={() => navigate("/")} size="lg" className="text-lg px-8 py-6">
            Discover More Stories
          </Button>
        </div>
      </article>

      {/* Story Rating */}
      <StoryRating storyId={story.id} storyTitle={story.title} />

      {/* Story Quiz */}
      {story.quiz && story.quiz.length > 0 && (
        <StoryQuiz questions={story.quiz} storyTitle={story.title} />
      )}
    </div>
  );
};

export default StoryReader;
