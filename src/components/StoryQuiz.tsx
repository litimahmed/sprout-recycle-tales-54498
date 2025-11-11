import { useState } from "react";
import { HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface StoryQuizProps {
  questions: QuizQuestion[];
  storyTitle: string;
}

const StoryQuiz = ({ questions, storyTitle }: StoryQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleNextQuestion = () => {
    if (!selectedAnswer) {
      toast.error("Please select an answer");
      return;
    }

    const isCorrect = parseInt(selectedAnswer) === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
      toast.success("Correct! Great job!");
    } else {
      toast.error("Not quite, but keep trying!");
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setShowResults(true);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    return (
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12 border border-border/50">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <HelpCircle className="h-6 w-6 text-eco-green" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground font-fredoka">
                Quiz Complete!
              </h2>
            </div>
            
            <div className="mb-8">
              <p className="text-4xl md:text-6xl font-bold text-eco-green mb-4 font-fredoka">
                {score} / {questions.length}
              </p>
              <p className="text-lg text-muted-foreground">
                {score === questions.length
                  ? "Perfect score! You understood the story perfectly!"
                  : score >= questions.length / 2
                  ? "Great job! You understood most of the story!"
                  : "Good try! Maybe read the story again?"}
              </p>
            </div>

            <Button
              onClick={() => {
                setCurrentQuestion(0);
                setSelectedAnswer("");
                setScore(0);
                setShowResults(false);
              }}
              size="lg"
              className="bg-eco-green hover:bg-eco-green/90 text-white"
            >
              Try Again
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-muted/30 rounded-2xl p-8 md:p-12 border border-border/50">
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <HelpCircle className="h-6 w-6 text-eco-green" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground font-fredoka">
              The quiz: did you understand the story well?
            </h2>
          </div>

          <div className="mb-6">
            <p className="text-center text-muted-foreground mb-3">
              Question {currentQuestion + 1} out of {questions.length}
            </p>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl md:text-2xl font-bold text-foreground text-center font-fredoka">
            {questions[currentQuestion].question}
          </h3>

          <RadioGroup
            value={selectedAnswer}
            onValueChange={setSelectedAnswer}
            className="space-y-4"
          >
            {questions[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-eco-green/50 transition-colors"
              >
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label
                  htmlFor={`option-${index}`}
                  className="flex-1 text-base cursor-pointer font-fredoka"
                >
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>

          <div className="flex justify-center pt-4">
            <Button
              onClick={handleNextQuestion}
              size="lg"
              className="bg-eco-green hover:bg-eco-green/90 text-white gap-2"
            >
              {currentQuestion < questions.length - 1 ? "Next question" : "See results"}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryQuiz;
