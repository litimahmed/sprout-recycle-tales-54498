import bookSortingBins from "@/assets/book-sorting-bins.jpg";
import bookEarthHero from "@/assets/book-earth-hero.jpg";
import bookKidsRecycling from "@/assets/book-kids-recycling.jpg";
import bookBottleJourney from "@/assets/book-bottle-journey.jpg";
import bookCompostMagic from "@/assets/book-compost-magic.jpg";
import bookPaperFriends from "@/assets/book-paper-friends.jpg";

export interface StoryPage {
  text: string;
  image?: string;
  altText?: string;
  layout?: "default" | "two-column-left" | "two-column-right";
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Story {
  id: number;
  title: string;
  description: string;
  pages: StoryPage[];
  quiz?: QuizQuestion[];
}

export const storyContent: Story[] = [
  {
    id: 1,
    title: "The Sorting Bins Adventure",
    description: "In a vibrant community, three colorful bins share the importance of sorting, helping others, and the magic of turning waste into treasure. Together, they create a Treasure Map of Help that reveals the true value of teamwork and caring for our planet.",
    quiz: [
      {
        question: "What are the names of the three bins?",
        options: ["Benny, Gary, and Olivia", "Billy, George, and Oscar", "Bobby, Greg, and Ollie", "Ben, Gerry, and Owen"],
        correctAnswer: 0
      },
      {
        question: "What color is the bin for paper?",
        options: ["Green", "Orange", "Blue", "Yellow"],
        correctAnswer: 2
      },
      {
        question: "What does Gary the Green Bin collect?",
        options: ["Plastic bottles", "Food scraps and yard waste", "Paper", "Metal cans"],
        correctAnswer: 1
      },
      {
        question: "What did the bins do to teach the children?",
        options: ["Made a video", "Wrote a book", "Sang a song", "Drew pictures"],
        correctAnswer: 2
      },
      {
        question: "What happened by the end of the story?",
        options: ["The park closed", "Children became recycling champions", "The bins moved away", "Nothing changed"],
        correctAnswer: 1
      }
    ],
    pages: [
      {
        image: bookSortingBins,
        text: "Meet Benny the Blue Bin, Gary the Green Bin, and Olivia the Orange Bin. They live in a friendly neighborhood park and help keep it clean!",
        altText: "Three colorful recycling bins with friendly faces"
      },
      {
        text: "One sunny morning, Benny noticed children playing near the park. Some threw paper on the ground instead of in bins. 'Oh no!' said Benny. 'We need to teach them about sorting!'",
      },
      {
        text: "Gary jumped up excitedly. 'I can help! I love food scraps and yard waste. They turn into rich soil that helps flowers grow!' His green body shimmered in the sunlight.",
        image: bookSortingBins,
        altText: "Gary the Green Bin in the park",
        layout: "two-column-right"
      },
      {
        image: bookSortingBins,
        text: "Olivia the Orange Bin chimed in, 'And I collect all the other recyclables! Plastic bottles, metal cans, and glass jars belong with me. Together, we can save them from the landfill!'",
        altText: "Orange recycling bin sorting plastic and metal items"
      },
      {
        text: "The three friends decided to put on a show for the children. They sang a catchy song: 'Blue for paper, Green for food, Orange for plastic - we're doing good!'",
        image: bookSortingBins,
        altText: "Three bins singing together",
        layout: "two-column-left"
      },
      {
        text: "The children loved learning about recycling! They started sorting their waste properly. Each piece of trash found its perfect home in the right bin.",
      },
      {
        text: "By the end of the day, the park was cleaner than ever. Benny, Gary, and Olivia smiled proudly. 'When we all work together and sort our waste, we help keep our planet beautiful!'",
      },
      {
        text: "From that day on, the children always remembered to recycle. They became the park's recycling champions, teaching other kids how to sort waste properly too!",
      }
    ]
  },
  {
    id: 2,
    title: "Captain Earth Saves the Day",
    description: "When pollution threatens the planet, one young hero discovers amazing recycling powers! Join Captain Earth as he transforms trash into treasure and inspires children everywhere to become environmental superheroes.",
    pages: [
      {
        image: bookEarthHero,
        text: "In a world where trash was taking over, one hero stood up to protect the planet. His name was Captain Earth, and he had the power to turn pollution into clean energy!",
        altText: "Superhero Captain Earth with a green cape flying over the city"
      },
      {
        text: "Captain Earth's secret identity was Eddie, a regular kid who loved nature. One day, he discovered special recycling powers when he properly sorted his family's waste.",
      },
      {
        text: "With his blue cape flowing, Captain Earth flew over the city. He saw plastic bottles in the ocean, paper in the streets, and cans in the parks. 'It's time to recycle!' he declared.",
      },
      {
        image: bookEarthHero,
        text: "His first mission: rescue marine animals trapped in plastic. With his recycling ray, he transformed the plastic into useful items like park benches and playground equipment.",
        altText: "Captain Earth using powers to clean up ocean plastic"
      },
      {
        text: "Next, he visited schools to teach children his secret powers. 'Everyone can be a hero!' he said. 'Just remember to reduce, reuse, and recycle!'",
      },
      {
        text: "The children learned to bring reusable water bottles, pack lunches in containers instead of bags, and always recycle their paper and cardboard.",
      },
      {
        text: "Captain Earth showed them how saving water by turning off taps and taking shorter showers was another superpower. 'Every drop counts!' he reminded them.",
      },
      {
        text: "Soon, children everywhere became Junior Earth Heroes. They wore invisible capes made of responsibility and care for the planet. Together, they made the world cleaner and greener every day!",
      }
    ]
  },
  {
    id: 3,
    title: "Kids Who Care",
    description: "Four best friends discover their beloved park covered in litter and decide to take action! Watch as Maya, Josh, Aisha, and Leo organize a community cleanup that transforms their neighborhood and inspires everyone around them.",
    pages: [
      {
        image: bookKidsRecycling,
        text: "In Sunnyville, four best friends - Maya, Josh, Aisha, and Leo - loved playing in Greenleaf Park. But one day, they found trash everywhere!",
        altText: "Four diverse children looking concerned at litter in the park"
      },
      {
        text: "'This is terrible!' said Maya, picking up a plastic bottle. 'Our beautiful park is covered in litter. We have to do something!'",
      },
      {
        text: "Josh had an idea. 'Let's organize a cleanup day! We can invite other kids from school and teach them about recycling while we clean.'",
      },
      {
        image: bookKidsRecycling,
        text: "The friends made colorful posters and hung them all around school. 'Join the Greenleaf Park Cleanup! Saturday at 9 AM. Bring gloves and your caring heart!'",
        altText: "Children making bright posters for park cleanup event"
      },
      {
        text: "Saturday arrived, and over 50 kids showed up! They brought bags, gloves, and big smiles. Aisha organized everyone into teams with different colored bags for different materials.",
      },
      {
        text: "Leo's team collected paper and cardboard. Maya's team gathered plastic bottles and containers. Josh's team picked up metal cans. Aisha's team found glass bottles.",
      },
      {
        text: "After two hours of hard work, the park looked beautiful again! They had collected 20 bags of recyclables. 'Look at what we accomplished together!' Maya cheered.",
      },
      {
        text: "The mayor heard about their efforts and gave them the 'Young Environmental Heroes' award. But the best reward was seeing their clean, happy park where birds sang and butterflies danced again.",
      },
      {
        text: "The four friends started the 'Kids Who Care Club.' Every month, they organized cleanup events and taught other children about protecting the environment. Their small action inspired an entire community!",
      }
    ]
  },
  {
    id: 4,
    title: "The Amazing Bottle Journey",
    description: "Follow Bella the plastic bottle on an incredible adventure through the recycling process! From the recycling bin to becoming a cozy fleece jacket, discover how everyday items can be transformed into something wonderful.",
    pages: [
      {
        image: bookBottleJourney,
        text: "This is Bella, a plastic water bottle. Today is special - Bella is starting an amazing journey! After being recycled, she will become something completely new.",
        altText: "A friendly cartoon plastic bottle with a smile"
      },
      {
        text: "Bella's adventure began when young Emma finished drinking and placed her in the blue recycling bin. 'Goodbye!' said Emma. 'I hope you become something wonderful!'",
      },
      {
        text: "At the recycling center, Bella met thousands of other bottles. They rode on conveyor belts, excited about their transformation. 'Where will we go?' they wondered together.",
      },
      {
        image: bookBottleJourney,
        text: "First stop: the sorting machine! Bella and her friends were separated by type and color. Clear bottles went one way, colored bottles another. It was like a plastic party!",
        altText: "Recycling facility with sorting machines and conveyor belts"
      },
      {
        text: "Next, all the bottles took a refreshing bath to get clean. They were washed thoroughly to remove labels and any leftover liquid. 'This feels nice!' giggled Bella.",
      },
      {
        text: "Then came the shredder - don't worry, it didn't hurt! Bella and her friends were cut into tiny pieces called flakes. These colorful flakes looked like confetti.",
      },
      {
        text: "The flakes were melted down and transformed into long strands, then cut into tiny pellets. These pellets are the building blocks for new products!",
      },
      {
        image: bookBottleJourney,
        text: "Bella's pellets were sent to a factory. There, they were heated and shaped into... a brand new fleece jacket! How amazing - from bottle to clothes!",
        altText: "Colorful fleece jacket made from recycled plastic bottles"
      },
      {
        text: "Emma couldn't believe it when she learned that her new jacket was made from 25 recycled bottles - maybe even Bella! 'Thank you, recycling!' she said happily.",
      },
      {
        text: "Bella was proud of her new life as a jacket, keeping Emma warm. She had learned that plastic bottles can be recycled many times, becoming new bottles, clothes, toys, and more!",
      }
    ]
  },
  {
    id: 5,
    title: "Compost Magic",
    description: "Join Coco the Carrot and the Decomposer Squad as they discover the magical transformation that happens in a compost bin! Learn how food scraps become nutrient-rich soil that helps new plants grow in this delightful tale of nature's recycling.",
    pages: [
      {
        image: bookCompostMagic,
        text: "Meet Coco the Carrot! She ended up in a compost bin along with banana peels, apple cores, and vegetable scraps. At first, she was sad. But something magical was about to happen!",
        altText: "Friendly cartoon carrot in a compost bin with other food scraps"
      },
      {
        text: "'Why are we here?' asked Coco. An old banana peel replied, 'We're going to help create new life! This is where the magic of composting happens.'",
      },
      {
        text: "In the compost bin, Coco met the Decomposer Squad - tiny microorganisms, worms, and bugs who worked together to break down food scraps into rich soil.",
      },
      {
        image: bookCompostMagic,
        text: "Wiggly the Worm explained, 'We eat the food scraps and turn them into castings - that's worm poop! But it's actually super nutritious soil that plants love.'",
        altText: "Happy earthworms in dark, rich compost soil"
      },
      {
        text: "As weeks passed, Coco and her friends slowly transformed. They became darker, crumbly, and smelled like fresh forest floor. The transformation was complete!",
      },
      {
        text: "The compost was ready! A gardener scooped up the rich, dark soil and spread it around tomato plants, flower beds, and vegetable gardens.",
      },
      {
        text: "Coco watched in amazement as her nutrients helped new carrots grow! 'I'm helping feed new vegetables!' she realized. 'This really is magic!'",
      },
      {
        image: bookCompostMagic,
        text: "The garden flourished with bright red tomatoes, colorful flowers, and fresh vegetables. All thanks to the magic of composting!",
        altText: "Beautiful thriving garden with vegetables and flowers"
      },
      {
        text: "Coco learned that food scraps don't belong in the trash. In a compost bin, they transform into something valuable. It's nature's way of recycling!",
      },
      {
        text: "Now you know the secret! Instead of throwing away fruit and vegetable scraps, they can become compost. It's like giving back to the earth and completing the circle of life!",
      }
    ]
  },
  {
    id: 6,
    title: "Paper Friends Forever",
    description: "Meet Paige the Paper and her recycling friends on an amazing journey from used notebook to brand new paper! Discover how recycling paper saves trees and gives every sheet a chance to tell new stories.",
    pages: [
      {
        image: bookPaperFriends,
        text: "Hi! I'm Paige the Paper. I used to be part of a big, beautiful tree in the forest. Today, I want to tell you about my incredible journey and my paper friends!",
        altText: "Friendly cartoon paper sheet with a smile and a tree in background"
      },
      {
        text: "I started as a notebook where a student named Sam wrote stories. After the notebook was full, Sam didn't throw me away - she put me in the paper recycling bin!",
      },
      {
        text: "At the recycling center, I met newspaper Ned, cardboard box Carl, and magazine Mia. We were all excited to become new paper products and save trees!",
      },
      {
        image: bookPaperFriends,
        text: "'Did you know,' said newspaper Ned, 'that recycling one ton of paper saves 17 trees?' We all cheered - we were helping save our tree friends in the forest!",
        altText: "Various paper products happily gathered together"
      },
      {
        text: "First, we were mixed with water in a huge mixer called a pulper. We swirled around and around, becoming a mushy mixture called pulp. It tickled!",
      },
      {
        text: "The pulp was cleaned and any staples or plastic were removed. Then it was pressed and rolled flat on giant rollers. We were becoming new paper!",
      },
      {
        text: "I transformed into fresh printer paper! Now I live in a classroom where children draw pictures and write stories. My journey continues!",
      },
      {
        image: bookPaperFriends,
        text: "Ned became a new newspaper, Carl turned into a pizza box, and Mia became a beautiful greeting card. We all found new purposes!",
        altText: "New paper products made from recycled materials"
      },
      {
        text: "The best part? Paper can be recycled 5-7 times! Each time we're recycled, we save trees, water, and energy. We're paper friends forever, helping the planet!",
      },
      {
        text: "Remember: every piece of paper you recycle makes a difference. You're not just throwing away paper - you're giving it a chance to become something wonderful again!",
      }
    ]
  }
];
