import React, { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HTMLFlipBook from "react-pageflip";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Volume2, Share2, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { toast } from "sonner";
import { storyContent } from "@/data/storyContent";

// Page component for flipbook
const StoryPage = React.forwardRef<HTMLDivElement, { page: { image?: string; text: string }; pageNumber: number }>((props, ref) => {
  return (
    <div className="w-full h-full bg-card" ref={ref}>
      <div className="w-full h-full flex">
        {/* Image on left (if available) */}
        {props.page.image ? (
          <>
            <div className="w-1/2 h-full">
              <img
                src={props.page.image}
                alt={`Page ${props.pageNumber}`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text on right */}
            <div className="w-1/2 h-full p-6 md:p-12 flex flex-col items-center justify-center bg-card">
              <p className="text-base md:text-2xl text-foreground font-fredoka leading-relaxed text-center">
                {props.page.text}
              </p>
              <p className="text-sm text-muted-foreground mt-6 font-fredoka">
                Page {props.pageNumber}
              </p>
            </div>
          </>
        ) : (
          /* Full width text when no image */
          <div className="w-full h-full p-8 md:p-16 flex flex-col items-center justify-center bg-card">
            <p className="text-lg md:text-2xl text-foreground font-fredoka leading-relaxed text-center max-w-2xl">
              {props.page.text}
            </p>
            <p className="text-sm text-muted-foreground mt-8 font-fredoka">
              Page {props.pageNumber}
            </p>
          </div>
        )}
      </div>
    </div>
  );
});

StoryPage.displayName = "StoryPage";

const StoryReader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const flipBookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isNarratorActive, setIsNarratorActive] = useState(false);
  const [isToolbarExpanded, setIsToolbarExpanded] = useState(true);

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

  return (
    <div className="h-screen w-screen flex flex-col bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      {/* Collapsible Toolbar */}
      <div 
        className={`w-full bg-background/95 backdrop-blur border-b border-border transition-all duration-300 z-10 ${
          isToolbarExpanded ? "h-auto" : "h-14"
        }`}
      >
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

            <h1 className="text-xl md:text-2xl font-bold text-foreground font-fredoka">
              {story.title}
            </h1>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsToolbarExpanded(!isToolbarExpanded)}
            >
              {isToolbarExpanded ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </Button>
          </div>

          {isToolbarExpanded && (
            <div className="flex items-center justify-center gap-3 mt-4 pb-2 flex-wrap">
              <Button
                variant={isNarratorActive ? "default" : "outline"}
                size="sm"
                onClick={handleNarrator}
                className="gap-2"
              >
                <Volume2 className="h-4 w-4" />
                Narrator
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="gap-2"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>

              <div className="flex items-center gap-2 ml-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => flipBookRef.current?.pageFlip().flipPrev()}
                  disabled={currentPage === 0}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <span className="text-sm text-muted-foreground min-w-[80px] text-center">
                  Page {currentPage + 1} / {story.pages.length}
                </span>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => flipBookRef.current?.pageFlip().flipNext()}
                  disabled={currentPage === story.pages.length - 1}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* FlipBook - Full page */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-eco-blue/5 via-background to-eco-green/5">
        <HTMLFlipBook
          width={550}
          height={750}
          size="fixed"
          minWidth={550}
          maxWidth={550}
          minHeight={750}
          maxHeight={750}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={(e) => setCurrentPage(e.data)}
          className="shadow-2xl"
          ref={flipBookRef}
          startPage={0}
          drawShadow={true}
          flippingTime={800}
          usePortrait={false}
          startZIndex={0}
          autoSize={false}
          maxShadowOpacity={0.5}
          showPageCorners={true}
          disableFlipByClick={false}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={30}
          style={{}}
        >
          {story.pages.map((page, index) => (
            <StoryPage key={index} page={page} pageNumber={index + 1} />
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default StoryReader;
