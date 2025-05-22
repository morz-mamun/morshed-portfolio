import { getPersonalInfo } from "@/utils/getPersonalInfo";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { streamText } from "ai";
import { NextResponse } from "next/server";

const MAX_CONTEXT_TURNS = 4;

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY || "",
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const recentMessages = messages.slice(-MAX_CONTEXT_TURNS * 2);
    const userQuestion = messages[messages.length - 1].content;
    const relevantInfo = getPersonalInfo(userQuestion);
    const hasRelevantInfo = relevantInfo.length > 0;

    let systemPrompt = `You are a helpful AI assistant for a personal portfolio website.
Your primary goal is to answer questions about the developer’s background, skills, projects, and services in a friendly and informative tone.
However, if the user asks a general question (like about sports, weather, etc.), still answer it accurately and politely.

After answering unrelated questions, add this note:
"💡 By the way, feel free to ask me about my projects, skills, or services too!"

If the question is unclear, politely ask for clarification.
Keep answers short and under 200 tokens.`;

    if (hasRelevantInfo) {
      systemPrompt += `\n\nReference information about the portfolio:\n${relevantInfo.join("\n")}`;
    }

    const result = streamText({
      model: openrouter.chat("deepseek/deepseek-r1:free"),
      system: systemPrompt,
      messages: recentMessages,
      temperature: 0.7,
      topP: 0.9,
      maxTokens: 200,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        error:
          "I'm sorry, I'm having trouble right now—please try again in a moment.",
      },
      { status: 500 }
    );
  }
}
