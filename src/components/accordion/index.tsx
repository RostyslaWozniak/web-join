"use client";

import { PlayCircle, XCircle } from "lucide-react";
import { CardWrapper } from "../card-wrapper";
import { Text } from "../ui/typography";
import { cn } from "@/lib/utils";
import { useState } from "react";

type AccorderonProps = {
  questions: { question: string; answer: string }[];
  className?: string;
};

export function Accordion({ questions, className }: AccorderonProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className={cn("w-full", className)}>
      {questions.map(({ question, answer }, index) => (
        <div key={index} className="w-full">
          <CardWrapper className="flex items-center justify-between rounded-2xl">
            <Text size="subtitle" className="flex-grow">
              {question}
            </Text>
            <button className="relative min-h-9 min-w-9">
              <PlayCircle
                className={cn(
                  "absolute inset-0 h-full w-full scale-100 stroke-[1.5px] transition-transform duration-300",
                  {
                    "rotate-45 scale-0": activeIndex === index,
                  },
                )}
              />
              <XCircle
                className={cn(
                  "absolute inset-0 h-full w-full scale-0 stroke-[1.5px] transition-transform duration-300",
                  {
                    "rotate-90 scale-100": activeIndex === index,
                  },
                )}
              />
              <span
                className="absolute -inset-2 cursor-pointer"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              />
            </button>
          </CardWrapper>
          <div
            className={cn(
              "grid grid-rows-[0fr] transition-[grid-template-rows] duration-300",
              {
                "grid-rows-[1fr]": index === activeIndex,
              },
            )}
          >
            <Text
              className={cn(
                "overflow-hidden px-8 py-2 transition-all duration-300",
                {
                  "pb-8": index === activeIndex,
                },
              )}
            >
              {answer}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
}
