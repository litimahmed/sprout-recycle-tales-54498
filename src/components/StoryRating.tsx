import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface StoryRatingProps {
  storyId: number;
  storyTitle: string;
}

const StoryRating = ({ storyId, storyTitle }: StoryRatingProps) => {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);

  const handleSubmitRating = () => {
    if (rating === 0) {
      toast.error("Please select a rating before submitting");
      return;
    }
    toast.success(`Thank you for rating "${storyTitle}" with ${rating} stars!`);
  };

  return (
    <section className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-muted/30 rounded-2xl p-8 md:p-12 border border-border/50">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-6 w-6 fill-eco-green text-eco-green" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground font-fredoka">
              What did you think of this story?
            </h2>
          </div>

          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Give your opinion by assigning a rating to this story based on what you and/or your child thought. Thank you in advance!
          </p>

          {/* Star Rating */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-eco-green focus:ring-offset-2 rounded"
                aria-label={`Rate ${star} stars`}
              >
                <Star
                  className={`h-12 w-12 md:h-14 md:w-14 transition-colors ${
                    star <= (hoveredRating || rating)
                      ? "fill-muted-foreground/40 text-muted-foreground/40"
                      : "fill-none text-muted-foreground/20"
                  }`}
                />
              </button>
            ))}
          </div>

          <Button
            onClick={handleSubmitRating}
            size="lg"
            className="bg-eco-green hover:bg-eco-green/90 text-white px-8"
          >
            Send my review
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoryRating;
