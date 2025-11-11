import { useState } from "react";
import { Search, BookOpen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Book {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

interface SearchDialogProps {
  books: Book[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBookSelect: (bookId: number) => void;
}

const SearchDialog = ({ books, open, onOpenChange, onBookSelect }: SearchDialogProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBookClick = (bookId: number) => {
    onBookSelect(bookId);
    onOpenChange(false);
    setSearchQuery("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Search Stories
          </DialogTitle>
        </DialogHeader>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search by title, category, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
            autoFocus
          />
        </div>

        <div className="mt-4 max-h-[400px] overflow-y-auto space-y-3">
          {filteredBooks.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No stories found matching "{searchQuery}"</p>
            </div>
          ) : (
            filteredBooks.map((book) => (
              <button
                key={book.id}
                onClick={() => handleBookClick(book.id)}
                className="w-full flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-20 h-14 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{book.title}</h3>
                  <p className="text-sm text-muted-foreground">{book.category}</p>
                </div>
              </button>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
