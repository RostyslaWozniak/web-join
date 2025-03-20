"use client";

import { PlayCircle, XCircle } from "lucide-react";
import { CardWrapper } from "../card-wrapper";
import { Text } from "../ui/typography";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { MotionWrapper } from "../motion-wrapper";
import Markdown from "react-markdown";

type AccorderonProps = {
  questions: { question: string; answer: string }[];
  className?: string;
};

export function Accordion({ questions, className }: AccorderonProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className={cn("w-full", className)}>
      {questions.map(({ question, answer }, index) => (
        <MotionWrapper
          key={index}
          transition={{ duration: 0.5, delay: 0.2 * index }}
        >
          <CardWrapper className="relative flex items-center justify-between rounded-2xl">
            <Text size="subtitle" className="flex-grow">
              {question}
            </Text>
            <button
              aria-label="toggle question"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <div className="relative min-h-10 min-w-10">
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
              </div>
              <span className="absolute inset-0 cursor-pointer" />
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
            <div
              className={cn(
                "overflow-hidden py-2 opacity-0 transition-all duration-300 md:px-8",
                {
                  "opacity-1 pb-8": index === activeIndex,
                },
              )}
            >
              <Markdown
                components={{
                  li: ({ children }) => (
                    <li className="ml-6 list-disc md:text-lg">{children}</li>
                  ),
                  p: ({ children }) => (
                    <p className="pt-2 md:text-xl">{children}</p>
                  ),
                }}
              >
                {answer}
              </Markdown>
            </div>
          </div>
        </MotionWrapper>
      ))}
    </div>
  );
}
