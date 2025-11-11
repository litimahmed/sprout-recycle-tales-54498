import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BookCardProps {
  title: string;
  image: string;
  color?: string;
  onClick?: () => void;
}

const BookCard = ({ title, image, color = "eco-green", onClick }: BookCardProps) => {
  return (
    <Card
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-300",
        "hover:scale-105 hover:-translate-y-2",
        "shadow-[0_4px_20px_-2px_hsl(var(--eco-green)/0.15)]",
        "hover:shadow-[0_8px_30px_-4px_hsl(var(--eco-green)/0.25)]",
        "bg-gradient-to-b from-white to-muted/30",
        "border-2 border-transparent hover:border-primary/20"
      )}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/95 to-transparent p-4 pt-8">
        <h3 className="text-foreground font-bold text-center text-sm leading-tight line-clamp-2">
          {title}
        </h3>
      </div>
    </Card>
  );
};

export default BookCard;
