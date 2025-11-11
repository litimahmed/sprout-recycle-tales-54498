import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Download, Clock, Tag } from "lucide-react";
import { useState } from "react";

interface BookCardProps {
  title: string;
  image: string;
  color: string;
  readingTime: string;
  category: string;
  description: string;
  onClick: () => void;
}

const BookCard = ({ title, image, color, readingTime, category, description, onClick }: BookCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <Card className="group overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
      {/* Book Cover */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Favorite Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorited(!isFavorited);
          }}
          className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
        >
          <Heart 
            className={`w-5 h-5 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
          />
        </button>
      </div>
      
      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="font-bold text-xl text-foreground">
          {title}
        </h3>
        
        {/* Metadata */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{readingTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag className="w-4 h-4" />
            <span>{category}</span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
        
        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <Button 
            className="flex-1 bg-eco-green hover:bg-eco-green/90 text-white font-semibold"
            onClick={onClick}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Read the story
          </Button>
          <Button 
            variant="outline"
            className="px-4"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default BookCard;
