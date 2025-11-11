import { useParams, useNavigate } from "react-router-dom";
import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { storyContent } from "@/data/storyContent";
import { useIsMobile } from "@/hooks/use-mobile";

const StoryReader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const bookRef = useRef<any>(null);

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Stories
          </Button>
          <h1 className="text-2xl font-bold text-foreground">{story.title}</h1>
          <div className="w-32" />
        </div>

        {/* Book Container */}
        <div className="flex flex-col items-center gap-6">
          <div className="relative shadow-2xl">
            <HTMLFlipBook
              ref={bookRef}
              width={isMobile ? 300 : 500}
              height={isMobile ? 400 : 600}
              size="stretch"
              minWidth={300}
              maxWidth={1000}
              minHeight={400}
              maxHeight={1000}
              drawShadow={true}
              flippingTime={1000}
              usePortrait={isMobile}
              startPage={0}
              className="story-book"
              style={{}}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              startZIndex={0}
              autoSize={true}
              clickEventForward={true}
              useMouseEvents={true}
              swipeDistance={30}
              showPageCorners={true}
              disableFlipByClick={false}
            >
              {story.pages.map((page, index) => (
                <div key={index} className="page bg-card">
                  <div className="page-content h-full flex flex-col p-6 md:p-8">
                    {page.image && (
                      <div className="flex-1 flex items-center justify-center mb-4">
                        <img
                          src={page.image}
                          alt={page.altText || `Story illustration ${index + 1}`}
                          className="max-w-full max-h-[60%] object-contain rounded-lg"
                        />
                      </div>
                    )}
                    <div className="flex-1 flex items-center">
                      <p className="text-foreground text-base md:text-lg leading-relaxed">
                        {page.text}
                      </p>
                    </div>
                    <div className="text-center text-sm text-muted-foreground mt-4">
                      Page {index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </HTMLFlipBook>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={flipPrev}
              className="gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={flipNext}
              className="gap-2"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryReader;
