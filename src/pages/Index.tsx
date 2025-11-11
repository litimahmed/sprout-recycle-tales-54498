import { useState } from "react";
import Hero from "@/components/Hero";
import BookCard from "@/components/BookCard";
import { toast } from "sonner";

// Import book cover images
import bookSortingBins from "@/assets/book-sorting-bins.jpg";
import bookEarthHero from "@/assets/book-earth-hero.jpg";
import bookKidsRecycling from "@/assets/book-kids-recycling.jpg";
import bookBottleJourney from "@/assets/book-bottle-journey.jpg";
import bookCompostMagic from "@/assets/book-compost-magic.jpg";
import bookPaperFriends from "@/assets/book-paper-friends.jpg";

const Index = () => {
  const books = [
    {
      id: 1,
      title: "The Sorting Bins Adventure",
      image: bookSortingBins,
      color: "eco-blue",
    },
    {
      id: 2,
      title: "Captain Earth Saves the Day",
      image: bookEarthHero,
      color: "eco-green",
    },
    {
      id: 3,
      title: "Kids Who Care",
      image: bookKidsRecycling,
      color: "eco-yellow",
    },
    {
      id: 4,
      title: "The Amazing Bottle Journey",
      image: bookBottleJourney,
      color: "eco-blue",
    },
    {
      id: 5,
      title: "Compost Magic",
      image: bookCompostMagic,
      color: "eco-orange",
    },
    {
      id: 6,
      title: "Paper Friends Forever",
      image: bookPaperFriends,
      color: "eco-purple",
    },
  ];

  const handleBookClick = (bookTitle: string) => {
    toast.success(`Opening "${bookTitle}"`, {
      description: "Story coming soon! 📚",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Choose Your Story
            </h2>
            <p className="text-muted-foreground text-lg">
              Click on any book to start your recycling adventure!
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
            {books.map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                image={book.image}
                color={book.color}
                onClick={() => handleBookClick(book.title)}
              />
            ))}
          </div>
        </div>
      </section>
      
      <footer className="py-8 px-4 text-center border-t border-border mt-12">
        <p className="text-muted-foreground text-sm">
          🌟 Made with love for our little Eco Heroes 🌟
        </p>
      </footer>
    </div>
  );
};

export default Index;
