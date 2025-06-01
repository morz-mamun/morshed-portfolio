"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { BotMessageSquare, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Chat } from "./chat";

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-4 right-4 rounded-full shadow-xl shadow-primary/70 dark:shadow-brand/70 z-50 p-3 border-2 dark:border-brand/20 dark:border-brand/50 dark:bg-brand/10 backdrop-blur-md cursor-pointer",
          "flex items-center justify-center",
          "transition-all duration-300 hover:scale-105",
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
      >
        <BotMessageSquare size={28} className="dark:text-brand" />
      </button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="px-3 pt-4 sm:max-w-[400px] w-full h-[calc(100vh-7rem)] border border-brand/20 rounded-lg top-24 bg-background/90 backdrop-blur-md shadow-md shadow-primary/70 dark:shadow-brand/70">
          <SheetTitle>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">AI Assistance</h3>
            </div>
          </SheetTitle>
          <div className="flex flex-col h-full overflow-hidden">
            <div className="flex-1 overflow-hidden">
              <Chat />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
