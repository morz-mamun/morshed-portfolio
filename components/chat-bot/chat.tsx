"use client"

import { useChat } from "@ai-sdk/react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { ChatMessage } from "./chat-message"
import { VoiceRecorder } from "./voice-recorder"

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome-message",
        role: "assistant",
        content:
          "Hi! Ask me anything about me, my projects, or my services!. You can also use voice input—just select your language and tap the mic!",
      },
    ],
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Handle errors
  useEffect(() => {
    if (error) {
      setErrorMessage("I'm sorry, I'm having trouble right now—please try again in a moment.")
      setTimeout(() => setErrorMessage(null), 5000)
    }
  }, [error])

  const handleVoiceTranscript = ( finalTranscript: string) => {
    if (finalTranscript && finalTranscript.trim() && inputRef.current) {
      handleInputChange({ target: { value: finalTranscript } } as React.ChangeEvent<HTMLInputElement>)

      // Trigger the change event to update the useChat state
      const event = new Event("input", { bubbles: true })
      inputRef.current.dispatchEvent(event)

      // Auto-submit after a short delay
      setTimeout(() => {
        if (inputRef.current && inputRef.current.value.trim()) {
          const form = inputRef.current.closest("form")
          if (form) {
            const submitEvent = new Event("submit", { bubbles: true, cancelable: true })
            form.dispatchEvent(submitEvent)
          }
        }
      }, 1000)
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto pr-1">
        {messages?.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {errorMessage && <div className="p-3 my-2 bg-destructive/10 text-destructive rounded-lg">{errorMessage}</div>}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t p-4 space-y-3">
        {/* Voice Input Section */}
        <div className="flex justify-between">
          <span className="text-xs text-muted-foreground">Voice Input:</span>
          <VoiceRecorder onTranscript={handleVoiceTranscript} isDisabled={isLoading} />
        </div>

        {/* Text Input Form */}
        <form onSubmit={handleSubmit} className={cn("", isLoading && "opacity-50 pointer-events-none")}>
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message or use voice input..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button type="submit" size="icon" disabled={isLoading}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
          {isLoading && <p className="text-xs text-muted-foreground mt-2">Thinking...</p>}
        </form>
      </div>
    </div>
  )
}
