"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReactMarkdown from "react-markdown";
import { useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { chatHistory } from "@/app/atoms/atom";
import { Message } from "ai";

export default function Chat() {
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [storedMessages, setStoredMessages] = useAtom(chatHistory);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit: originalHandleSubmit,
  } = useChat({
    initialMessages: storedMessages,
    onFinish: (message) => {
      // Update stored messages when a conversation is finished
      setStoredMessages([...messages, message]);
    },
  });

  // Auto-scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Custom submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentMessages = [...messages];
    await originalHandleSubmit(e);
    // Store messages after user input
    setStoredMessages([
      ...currentMessages,
      { id: Date.now().toString(), content: input, role: "user" },
    ]);
  };

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      {/* Chat Messages Area with Scrollable View */}
      <ScrollArea className="flex-1 px-4 py-8 mx-auto w-full max-w-2xl">
        <div className="space-y-4 pb-28">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 my-2 ${
                  m.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                <div className="text-xs text-muted-foreground mb-1">
                  {m.role === "user" ? "You" : "Llama 3.3 70B powered by Groq"}
                </div>
                <ReactMarkdown>{m.content}</ReactMarkdown>
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
      </ScrollArea>

      {/* Fixed Chat Input */}
      <div className="fixed bottom-0 left-0 w-full bg-background border-t border-border">
        <form
          onSubmit={handleSubmit}
          className="flex gap-4 max-w-2xl mx-auto p-4"
        >
          <Input
            className="h-16 flex-1"
            value={input}
            onChange={handleInputChange}
            type="text"
            placeholder="Ask your Question..."
          />
          <Button className="h-16 w-20" type="submit">
            <PaperPlaneIcon className="size-6/12" />
          </Button>
        </form>
      </div>
    </div>
  );
}
