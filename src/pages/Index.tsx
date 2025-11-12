import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InteractiveFeature from "@/components/InteractiveFeature";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import DecorativeBlobs from "@/components/DecorativeBlobs";
import { toast } from "sonner";

// Import book cover images
import bookSortingBins from "@/assets/book-sorting-bins.jpg";
import bookEarthHero from "@/assets/book-earth-hero.jpg";
import bookJungleRecycling from "@/assets/book-jungle-recycling.jpg";
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
      readingTime: "Reading 3 min.",
      category: "Recycling basics",
      description: "Join Benny the Bin and his friends as they learn about sorting waste! Discover which items go in each colorful bin and why sorting is so important for our planet.",
    },
    {
      id: 2,
      title: "Captain Earth Saves the Day",
      image: bookEarthHero,
      color: "eco-green",
      readingTime: "Reading 4 min.",
      category: "Eco heroes",
      description: "Meet Captain Earth, the superhero who protects our planet! Learn how small actions like recycling and saving water can make you an Earth hero too!",
    },
    {
      id: 3,
      title: "Moki's Jungle Recycling Adventure",
      image: bookJungleRecycling,
      color: "eco-yellow",
      readingTime: "Reading 4 min.",
      category: "Jungle adventure",
      description: "Join Moki the monkey and his jungle friends as they discover pollution problems and learn how to recycle! A fun adventure about teamwork and saving nature.",
    },
    {
      id: 4,
      title: "The Amazing Bottle Journey",
      image: bookBottleJourney,
      color: "eco-blue",
      readingTime: "Reading 5 min.",
      category: "Plastic recycling",
      description: "Follow Bella the Bottle on her incredible journey from the recycling bin to becoming something brand new! Learn about the magic of recycling plastic.",
    },
    {
      id: 5,
      title: "Compost Magic",
      image: bookCompostMagic,
      color: "eco-orange",
      readingTime: "Reading 4 min.",
      category: "Organic waste",
      description: "Discover the amazing world of composting with Coco the Carrot! Find out how food scraps transform into rich soil that helps plants grow strong and healthy.",
    },
    {
      id: 6,
      title: "Paper Friends Forever",
      image: bookPaperFriends,
      color: "eco-purple",
      readingTime: "Reading 3 min.",
      category: "Paper recycling",
      description: "Meet Paige the Paper and her friends who show how recycling paper saves trees! Learn fun facts about paper recycling and how to reuse paper in creative ways.",
    },
  ];

  const handleBookClick = (bookId: number) => {
    window.location.href = `/story/${bookId}`;
  };

  const scrollToStories = () => {
    const element = document.getElementById("stories-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header books={books} onBookClick={handleBookClick} />
      <div id="hero-section">
        <Hero />
      </div>
      
      <InteractiveFeature onDiscoverClick={scrollToStories} />
      
      <AboutUs />
      
      <section id="stories-section" className="relative py-12 px-4 overflow-hidden">
        {/* Subtle blobs for the story section */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-eco-orange/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-eco-purple/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Choose Your Story
            </h2>
            <p className="text-muted-foreground text-lg">
              Click on any book to start your recycling adventure!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {books.map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                image={book.image}
                color={book.color}
                readingTime={book.readingTime}
                category={book.category}
                description={book.description}
                onClick={() => handleBookClick(book.id)}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
