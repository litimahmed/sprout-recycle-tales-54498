import bookSortingBins from "@/assets/book-sorting-bins.jpg";
import bookEarthHero from "@/assets/book-earth-hero.jpg";
import bookJungleRecycling from "@/assets/book-jungle-recycling.jpg";
import bookBottleJourney from "@/assets/book-bottle-journey.jpg";
import bookCompostMagic from "@/assets/book-compost-magic.jpg";
import bookPaperFriends from "@/assets/book-paper-friends.jpg";
import storySortingBinsCover from "@/assets/story-sorting-bins-cover.jpg";
import storySortingBinsCh1 from "@/assets/story-sorting-bins-ch1.jpg";
import storySortingBinsCh2 from "@/assets/story-sorting-bins-ch2.jpg";
import storySortingBinsCh3 from "@/assets/story-sorting-bins-ch3.jpg";
import storySortingBinsCh4 from "@/assets/story-sorting-bins-ch4.jpg";
import storySortingBinsCh5 from "@/assets/story-sorting-bins-ch5.jpg";
import storyEarthHeroCover from "@/assets/story-earth-hero-cover.jpg";
import storyEarthHeroCh1 from "@/assets/story-earth-hero-ch1.jpg";
import storyEarthHeroCh2 from "@/assets/story-earth-hero-ch2.jpg";
import storyEarthHeroCh3 from "@/assets/story-earth-hero-ch3.jpg";
import storyEarthHeroCh4 from "@/assets/story-earth-hero-ch4.jpg";
import storyJungleCover from "@/assets/story-jungle-cover.jpg";
import storyJungleCh1 from "@/assets/story-jungle-ch1.jpg";
import storyJungleCh2 from "@/assets/story-jungle-ch2.jpg";
import storyJungleCh3 from "@/assets/story-jungle-ch3.jpg";
import storyJungleCh4 from "@/assets/story-jungle-ch4.jpg";
import storyJungleCh5 from "@/assets/story-jungle-ch5.jpg";

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
    description: "Join Lily on a magical journey as three friendly recycling bins come to life and teach her the secrets of sorting waste! A heartwarming tale about teamwork, responsibility, and keeping our planet clean through the power of recycling.",
    quiz: [
      {
        question: "What is the main character's name?",
        options: ["Lily", "Emma", "Maya", "Sarah"],
        correctAnswer: 0
      },
      {
        question: "What color is the bin for paper?",
        options: ["Green", "Yellow", "Blue", "Red"],
        correctAnswer: 2
      },
      {
        question: "What does the green bin collect?",
        options: ["Plastic bottles", "Organic waste like food scraps", "Paper and cardboard", "Metal cans"],
        correctAnswer: 1
      },
      {
        question: "How many recycling bins came to life?",
        options: ["Two", "Three", "Four", "Five"],
        correctAnswer: 1
      },
      {
        question: "What happened at the end of the story?",
        options: ["The playground closed", "All the children learned to recycle", "The bins disappeared", "It started raining"],
        correctAnswer: 1
      }
    ],
    pages: [
      {
        image: storySortingBinsCover,
        text: "In a sunny playground filled with laughter and joy, three special friends lived together. They weren't ordinary playground equipment – they were magical recycling bins! Meet Benny the Blue Bin, who loved paper, Greta the Green Bin, who adored organic waste, and Yara the Yellow Bin, who collected plastic treasures.",
        altText: "Three friendly colorful recycling bins with smiling faces in a sunny playground"
      },
      {
        text: "One bright morning, a young girl named Lily walked into the playground after her snack time. She looked at the pile of trash in her hands – a juice box, a banana peel, and a crumpled paper napkin – and froze. 'I have no idea where these go,' she whispered, looking confused at the three colorful bins standing in a row.",
        image: storySortingBinsCh1,
        altText: "Young girl Lily standing confused with mixed trash in her hands",
        layout: "two-column-left"
      },
      {
        text: "Suddenly, something magical happened! The three bins began to glow and shimmer. One by one, they came to life! Benny the Blue Bin was the first to speak. 'Hello, Lily!' he said with a cheerful voice. 'Don't worry! We're here to help you learn the wonderful world of sorting waste. Each of us has a special job!'",
        image: storySortingBinsCh2,
        altText: "Three magical animated recycling bins with friendly faces introducing themselves",
        layout: "two-column-right"
      },
      {
        text: "Greta the Green Bin wiggled excitedly. 'I collect all the yummy organic waste – banana peels, apple cores, vegetable scraps, and grass clippings! We turn them into nutritious compost that helps plants grow big and strong.' Yara the Yellow Bin chimed in, 'And I take care of plastic bottles, containers, and packaging! We can recycle them into new products.' Benny added proudly, 'Paper, cardboard, and newspapers belong with me! Together, we keep waste out of landfills and help save our beautiful planet.'",
      },
      {
        text: "Lily's eyes sparkled with understanding. 'Oh, I get it now!' she exclaimed. She carefully placed the paper napkin in Benny's blue opening, the banana peel in Greta's green mouth, and the juice box's plastic wrapping in Yara's yellow slot. The bins cheered with joy! 'You did it perfectly, Lily! You're a natural recycling champion!'",
        image: storySortingBinsCh3,
        altText: "Lily happily sorting different items into the correct recycling bins",
        layout: "two-column-left"
      },
      {
        text: "Word spread quickly around the playground about the magical talking bins! Soon, children from all over came running to meet Benny, Greta, and Yara. The bins patiently taught each child which items belonged where. They made up fun rhymes: 'Paper in blue, organics in green, plastic in yellow – keep the planet clean!' The playground buzzed with excitement as everyone practiced sorting.",
        image: storySortingBinsCh4,
        altText: "Group of diverse children learning to use recycling bins correctly",
        layout: "two-column-right"
      },
      {
        text: "From that magical day forward, the playground became the cleanest, happiest place in town. Children always remembered to sort their waste correctly, and they even taught their families at home. The three bins stood proudly, knowing they had made a real difference. And sometimes, when no adults were watching, you could still hear them whispering words of encouragement to the children: 'Great job! You're helping save the Earth!'",
        image: storySortingBinsCh5,
        altText: "Beautiful clean playground with happy children and Earth smiling in the sky",
      }
    ]
  },
  {
    id: 2,
    title: "Captain Earth Saves the Day",
    description: "When pollution threatens the planet, one young hero discovers amazing recycling powers! Join Captain Earth as he transforms trash into treasure and inspires children everywhere to become environmental superheroes.",
    quiz: [
      {
        question: "What is Captain Earth's real name?",
        options: ["Eddie", "Tommy", "Alex", "Sam"],
        correctAnswer: 0
      },
      {
        question: "What color is Captain Earth's cape?",
        options: ["Red", "Blue", "Green", "Yellow"],
        correctAnswer: 2
      },
      {
        question: "What did Captain Earth teach children to remember?",
        options: ["Stop, drop, and roll", "Reduce, reuse, and recycle", "Read, write, and count", "Jump, run, and play"],
        correctAnswer: 1
      },
      {
        question: "What animals did Captain Earth help in the ocean?",
        options: ["Birds", "Dogs", "Marine animals", "Farm animals"],
        correctAnswer: 2
      },
      {
        question: "What did the children become at the end?",
        options: ["Teachers", "Junior Earth Heroes", "Scientists", "Astronauts"],
        correctAnswer: 1
      }
    ],
    pages: [
      {
        image: storyEarthHeroCover,
        text: "High above the bustling city, where buildings touched the clouds and cars zipped through streets, lived a very special boy. His name was Eddie, and he had a secret that would change the world forever. By day, he was just an ordinary kid who loved playing outside. But when the planet needed help, he transformed into the mighty Captain Earth!",
        altText: "Captain Earth superhero with green cape and Earth emblem flying over colorful city"
      },
      {
        text: "Eddie's extraordinary journey began on an ordinary Tuesday afternoon. He was cleaning up after lunch at home when something magical happened. As he carefully sorted the plastic bottles, paper napkins, and aluminum cans into the right recycling bins, a warm golden glow surrounded his hands. Suddenly, sparkles of green and blue light danced around the recyclables!",
        image: storyEarthHeroCh1,
        altText: "Young Eddie discovering magical glowing recycling powers in his bedroom",
        layout: "two-column-left"
      },
      {
        text: "'What's happening?' Eddie gasped, watching in amazement as the glow grew brighter. A gentle voice seemed to whisper from the Earth itself: 'You have been chosen, Eddie. You have shown you care about our planet. Now you have the power to protect it!' In that moment, Eddie understood his calling. He would become Captain Earth, defender of the environment!",
      },
      {
        text: "With his flowing green cape (made from recycled materials, of course!) and the proud Earth emblem shining on his chest, Captain Earth soared through the sky. His mission was clear: to clean up pollution and teach everyone about the superpowers of recycling. His first stop? The beautiful blue ocean that was crying for help.",
        image: storyEarthHeroCh2,
        altText: "Captain Earth using recycling powers to clean ocean with happy marine animals",
        layout: "two-column-right"
      },
      {
        text: "At the beach, Captain Earth discovered plastic bottles, bags, and wrappers floating in the waves. Sea turtles, dolphins, and fish were struggling, trapped by the trash. 'Don't worry, friends!' Captain Earth called out. 'I'm here to help!' He raised his hands, and his amazing recycling ray shot beams of shimmering green light. Like magic, the plastic garbage began transforming!",
      },
      {
        text: "The plastic bottles became sturdy park benches. The bags turned into colorful playground equipment. The wrappers transformed into beautiful planters for flowers. The ocean sparkled clean and clear again! The sea turtles did happy flips, and the dolphins jumped for joy. 'Thank you, Captain Earth!' they seemed to say with their cheerful sounds.",
      },
      {
        text: "But Captain Earth knew that cleaning up wasn't enough – he needed to teach others how to be heroes too! The next morning, he flew to Sunnydale Elementary School (changing back to regular Eddie first, of course). During recess, he transformed into Captain Earth and landed in the playground. Children gathered around, their eyes wide with wonder and excitement!",
        image: storyEarthHeroCh3,
        altText: "Captain Earth teaching diverse excited children in bright classroom",
        layout: "two-column-left"
      },
      {
        text: "'Hello, Earth Heroes in training!' Captain Earth announced with a big smile. 'I have amazing news – every single one of you has superpowers too! You can help save our planet!' He taught them the three magic words: Reduce, Reuse, and Recycle. 'When you use less, reuse what you have, and recycle what you're done with, you're using your environmental superpowers!'",
      },
      {
        text: "The children learned to bring reusable water bottles instead of disposable ones. They discovered how to pack lunches in containers instead of plastic bags. Captain Earth showed them which items go in which recycling bins – blue for paper, yellow for plastic, and green for compost. 'Remember,' he said, 'every can you recycle, every bottle you reuse, makes you a superhero for Earth!'",
      },
      {
        text: "As the weeks went by, something wonderful happened. Children all around the world began using their environmental superpowers! They wore invisible capes made of responsibility, kindness, and care. They picked up litter in parks. They reminded their parents to recycle. They turned off lights to save energy. They became Junior Earth Heroes!",
        image: storyEarthHeroCh4,
        altText: "Diverse children as Junior Earth Heroes in beautiful clean park with nature",
        layout: "two-column-right"
      },
      {
        text: "Captain Earth watched from the sky as neighborhoods got cleaner, oceans got clearer, and more animals could live safely. He smiled, knowing that the real superpower wasn't his recycling ray – it was the power of many children working together to care for the planet. And whenever someone properly recycled something, somewhere in the world, Captain Earth's emblem glowed a little brighter, knowing another Earth Hero was making a difference!",
      }
    ]
  },
  {
    id: 3,
    title: "Moki's Jungle Recycling Adventure",
    description: "Deep in the Greenleaf Jungle, Moki the monkey discovers his forest friends are in trouble. Join him and his friends Lila, Tami, and Rex on an exciting journey to restore their home and learn how to recycle right!",
    quiz: [
      {
        question: "Who is the main character of the story?",
        options: ["Lila", "Moki", "Rex", "Tami"],
        correctAnswer: 1
      },
      {
        question: "What did Moki find in the river?",
        options: ["Fish", "Plastic bottles", "Flowers", "Rocks"],
        correctAnswer: 1
      },
      {
        question: "Which friend is a parrot?",
        options: ["Tami", "Rex", "Lila", "Moki"],
        correctAnswer: 2
      },
      {
        question: "What type of animal is Rex?",
        options: ["Monkey", "Turtle", "Elephant", "Parrot"],
        correctAnswer: 2
      },
      {
        question: "What did the friends learn to do?",
        options: ["Swim", "Fly", "Recycle properly", "Climb trees"],
        correctAnswer: 2
      }
    ],
    pages: [
      {
        image: storyJungleCover,
        text: "Deep in the Greenleaf Jungle, where tall trees touched the sky and colorful birds sang beautiful songs, lived Moki the monkey. Moki loved swinging through the trees and playing with his friends - Lila the parrot, Tami the turtle, and Rex the elephant. Their jungle home was the most beautiful place in the world!",
        altText: "Moki the monkey and his jungle friends in beautiful Greenleaf Jungle with river"
      },
      {
        text: "One sunny morning, Moki was swinging to his favorite spot by the river when he noticed something strange. 'What's that floating in the water?' he wondered. As he got closer, his heart sank. Plastic bottles were bobbing in the river! The water that was once crystal clear now had trash floating everywhere.",
        image: storyJungleCh1,
        altText: "Moki discovering plastic bottles in the jungle river looking concerned",
        layout: "two-column-left"
      },
      {
        text: "'Oh no!' Moki cried out. 'This is terrible! The fish can't swim properly, and the water doesn't look clean anymore.' He quickly called for his friend Lila the parrot. 'Lila! Lila! Come quick! We have a big problem!' Lila flew down from the treetops, her colorful feathers shimmering in the sunlight.",
      },
      {
        text: "'What's wrong, Moki?' asked Lila. Moki pointed to the river. Lila gasped, 'That's not all! Look over there!' She flew Moki to another part of the jungle. Paper waste was scattered everywhere around the trees! Old newspapers, cardboard boxes, and torn paper were covering the beautiful jungle floor.",
        image: storyJungleCh2,
        altText: "Lila the colorful parrot and Moki looking at paper waste in jungle",
        layout: "two-column-right"
      },
      {
        text: "'This is getting worse!' said Moki. Just then, Tami the turtle slowly walked up to them. 'Friends, I need to show you something too,' she said worriedly. Tami led them to her favorite resting spot, where there was leftover food everywhere! Banana peels, fruit scraps, and food waste were attracting swarms of buzzing flies and crawling bugs.",
        image: storyJungleCh3,
        altText: "Tami the turtle with Moki near leftover food attracting insects",
        layout: "two-column-left"
      },
      {
        text: "'Our beautiful jungle is in trouble!' exclaimed Moki. 'We need help!' Just then, they heard a loud trumpet sound. It was Rex the elephant! 'I heard you calling,' said Rex with his deep, kind voice. 'Don't worry, friends. I know exactly what we need to do. We need to learn about recycling!'",
      },
      {
        text: "Rex explained to his friends about the three special bins - blue for paper, yellow for plastic, and green for food waste. 'When we sort our waste properly, we can help the Earth!' Rex said proudly. 'Paper can be recycled into new paper, plastic bottles can become new things, and food waste can turn into compost to help plants grow!'",
        image: storyJungleCh4,
        altText: "Rex the elephant and jungle friends with colorful recycling bins working together",
        layout: "two-column-right"
      },
      {
        text: "The four friends worked together as a team! Moki swung through the trees collecting plastic bottles from the river. Lila flew around gathering all the paper waste. Tami carefully collected the food scraps. Rex used his strong trunk to place everything into the correct recycling bins - blue, yellow, and green!",
      },
      {
        text: "After hours of hard work, the Greenleaf Jungle sparkled again! The river was crystal clear, the trees stood tall and clean, and there wasn't a single piece of trash in sight. Fish jumped happily in the water, birds sang cheerful songs, and butterflies danced around the flowers.",
        image: storyJungleCh5,
        altText: "Beautiful clean Greenleaf Jungle with happy celebrating animal friends",
      },
      {
        text: "From that day on, Moki, Lila, Tami, and Rex became the Jungle Recycling Heroes! They taught all the other animals about sorting waste correctly. Every animal in the jungle learned which bin to use for different items. The Greenleaf Jungle became the cleanest, happiest forest in the whole world, and it all happened because four friends cared enough to make a difference!",
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
