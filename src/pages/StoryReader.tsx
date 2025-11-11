import { useParams, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight, Share2, Volume2, ChevronDown, ChevronUp } from "lucide-react";
import { storyContent } from "@/data/storyContent";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "sonner";

const StoryReader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const bookRef = useRef<any>(null);
  const [isToolbarExpanded, setIsToolbarExpanded] = useState(false);
  const [isNarratorActive, setIsNarratorActive] = useState(false);

  const story = storyContent.find((s) => s.id === Number(id));

  if (!story) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Story not found</h1>
          <Button onClick={() => navigate("/")}>Go Home</Button>
        </div>
      </div>
    );
  }

  const flipNext = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const flipPrev = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: story.title,
        text: `Check out this eco-friendly story: ${story.title}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  const toggleNarrator = () => {
    setIsNarratorActive(!isNarratorActive);
    toast.info(isNarratorActive ? "Narrator turned off" : "Narrator turned on");
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-eco-blue/10 via-background to-eco-green/10 flex flex-col overflow-hidden">
      {/* Collapsible Toolbar */}
      <div className="relative z-50">
        <div className={`bg-card shadow-lg border-b border-border transition-all duration-300 ${isToolbarExpanded ? 'pb-4' : 'pb-2'}`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/")}
                className="gap-2 hover:bg-muted"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back</span>
              </Button>
              
              <h1 className="text-lg sm:text-xl font-bold text-foreground font-kids text-center flex-1 mx-4">{story.title}</h1>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsToolbarExpanded(!isToolbarExpanded)}
                className="gap-1"
              >
                {isToolbarExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>
            </div>
            
            {/* Expanded toolbar content */}
            {isToolbarExpanded && (
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2 border-t border-border mt-2 animate-in slide-in-from-top-2">
                <Button
                  variant={isNarratorActive ? "default" : "outline"}
                  size="sm"
                  onClick={toggleNarrator}
                  className="gap-2"
                >
                  <Volume2 className="w-4 h-4" />
                  Narrator
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  className="gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={flipPrev}
                    className="gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Previous</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={flipNext}
                    className="gap-1"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Book Container - Full Screen */}
      <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <HTMLFlipBook
            ref={bookRef}
            width={isMobile ? Math.min(window.innerWidth - 32, 400) : Math.min(window.innerWidth * 0.4, 600)}
            height={isMobile ? Math.min(window.innerHeight - 200, 500) : Math.min(window.innerHeight - 180, 700)}
            size="stretch"
            minWidth={300}
            maxWidth={1200}
            minHeight={400}
            maxHeight={900}
            drawShadow={true}
            flippingTime={800}
            usePortrait={isMobile}
            startPage={0}
            className="story-book"
            style={{}}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            startZIndex={0}
            autoSize={false}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
          >
            {story.pages.map((page, index) => (
              <div key={index} className="page bg-card">
                <div className="page-content h-full flex p-0 overflow-hidden">
                  {/* Left side - Image */}
                  {page.image && (
                    <div className="w-1/2 flex items-center justify-center bg-gradient-to-br from-eco-green/5 to-eco-blue/5 p-6">
                      <img
                        src={page.image}
                        alt={page.altText || `Story illustration ${index + 1}`}
                        className="max-w-full max-h-full object-contain rounded-lg shadow-md"
                      />
                    </div>
                  )}
                  
                  {/* Right side - Content */}
                  <div className={`${page.image ? 'w-1/2' : 'w-full'} flex flex-col justify-between p-6 md:p-8`}>
                    <div className="flex-1 flex items-center">
                      <p className="text-foreground text-base md:text-xl leading-relaxed font-kids font-medium">
                        {page.text}
                      </p>
                    </div>
                    <div className="text-center text-sm text-muted-foreground mt-4 font-kids">
                      Page {index + 1} of {story.pages.length}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      </div>
    </div>
  );
};

export default StoryReader;
