# EcoSort AI ♻️

An AI-powered waste segregation assistant that classifies items and suggests responsible disposal methods.

🔗 **Live demo**: https://ecosort-ai-kappa.vercel.app

## Problem
Improper waste segregation reduces recycling efficiency and increases landfill burden. Many people are unsure which bin common items belong in.

## Solution
A simple web app where users describe an item and receive:
- The correct waste category (Wet / Dry / Hazardous / E-Waste)
- A one-line reason
- A practical disposal tip

## Responsible AI Considerations
- The model is instructed to respond "Unclear" rather than guess when uncertain, avoiding confidently wrong disposal advice
- No personal or location data is collected or stored
- Category logic is transparent and shown to the user, not a black box

## Tech Stack
Next.js · TypeScript · Tailwind CSS · Groq API (Llama) · Vercel

## Running locally
```bash
npm install
npm run dev
```
Add a `.env.local` file with `GROQ_API_KEY=your-key-here`

## SDG Alignment
SDG 12: Responsible Consumption & Production