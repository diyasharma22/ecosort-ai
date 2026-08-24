import { NextRequest, NextResponse } from "next/server";
import { groq } from "@/lib/openai";

const SYSTEM_PROMPT = `You are EcoSort AI, a waste segregation assistant.
Given the name or description of an item, classify it into exactly one category:
- Wet Waste (biodegradable/organic)
- Dry Waste (recyclable: paper, plastic, metal, glass)
- Hazardous Waste (batteries, chemicals, medical waste)
- E-Waste (electronics, cables, devices)

Respond ONLY in this JSON format, no extra text:
{
  "category": "...",
  "reason": "short one-sentence explanation",
  "disposalTip": "short practical tip for disposing this item responsibly"
}

If the item is unclear or you're not confident, set "category" to "Unclear"
and explain what additional info you'd need. Never guess with false confidence.`;

export async function POST(req: NextRequest) {
  try {
    const { item } = await req.json();

    if (!item || typeof item !== "string") {
      return NextResponse.json({ error: "Item is required" }, { status: 400 });
    }

            const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: item },
      ],
      response_format: { type: "json_object" },
    });

    const result = JSON.parse(completion.choices[0].message.content || "{}");
    return NextResponse.json(result);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Classification failed. Please try again." },
      { status: 500 }
    );
  }
}