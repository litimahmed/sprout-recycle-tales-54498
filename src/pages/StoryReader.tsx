import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Volume2, Share2, Clock, Tag } from "lucide-react";
import { toast } from "sonner";
import { storyContent } from "@/data/storyContent";

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

      {/* Hero Banner Section */}
      <section className="relative w-full bg-gradient-to-br from-eco-blue/10 via-background to-eco-green/10">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            {/* Story Title & Meta */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-5xl font-bold text-foreground font-fredoka mb-4">
                {story.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{estimatedReadTime} min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="h-4 w-4" />
                  <span>Age 4-8</span>
                </div>
              </div>
            </div>

            {/* Thumbnail Image */}
            {thumbnailImage && (
              <div className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={thumbnailImage}
                  alt={story.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Story Content */}
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="prose prose-lg max-w-none">
          {story.pages.map((page, index) => (
            <div key={index} className="mb-12">
              {/* Chapter heading for pages with images */}
              {page.image && index > 0 && (
                <h2 className="text-2xl md:text-3xl font-bold text-foreground font-fredoka mb-6">
                  Chapter {index}
                </h2>
              )}

              {/* Page Image */}
              {page.image && index > 0 && (
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img
                    src={page.image}
                    alt={page.altText || `Chapter ${index}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              {/* Page Text */}
              <p className="text-lg md:text-xl text-foreground/90 font-fredoka leading-relaxed mb-6">
                {page.text}
              </p>
            </div>
          ))}
        </div>

        {/* End of Story */}
        <div className="text-center py-12 border-t mt-12">
          <p className="text-xl font-fredoka text-muted-foreground mb-6">
            The End
          </p>
          <Button onClick={() => navigate("/")} size="lg">
            Read More Stories
          </Button>
        </div>
      </article>
    </div>
  );
};

export default StoryReader;
