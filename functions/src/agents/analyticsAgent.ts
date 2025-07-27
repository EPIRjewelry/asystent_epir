// functions/src/agents/analyticsAgent.ts
// Analytics Agent for EPIR Jewelry E-commerce Platform
// This agent provides AI-powered analytics insights specifically tailored for
// jewelry e-commerce operations, including sales trends, customer preferences,
// inventory optimization, and market analysis for jewelry products.

import {genkit, z} from "genkit";
import {vertexAI, gemini15Flash} from "@genkit-ai/vertexai";

// Create Genkit instance with Vertex AI plugin for jewelry analytics processing
const ai = genkit({
  plugins: [
    vertexAI({location: "us-central1"}),
  ],
});

// Define analytics flow for jewelry e-commerce insights
// This flow processes queries related to jewelry sales analytics, customer
// behavior, product performance, and market trends specific to EPIR's business
export const analyticsAgentFlow = ai.defineFlow(
  {
    name: "analyticsAgentFlow",
    inputSchema: z.string().describe(
      "Query about jewelry e-commerce analytics, sales trends, customer " +
      "preferences, inventory management, or market insights for EPIR jewelry"
    ),
    outputSchema: z.string(),
  },
  async (input: string) => {
    // Process analytics query for jewelry business intelligence
    // The agent specializes in jewelry-specific metrics like:
    // - Precious metal price trends and their impact on sales
    // - Seasonal jewelry demand patterns (wedding seasons, holidays)
    // - Customer segmentation based on jewelry preferences
    // - Inventory turnover for different jewelry categories
    const response = await ai.generate({
      model: gemini15Flash,
      prompt: "You are an expert e-commerce analytics specialist for EPIR " +
        "jewelry business. You understand jewelry market dynamics, customer " +
        "buying patterns for precious metals and gemstones, seasonal trends " +
        "in jewelry sales, and inventory management for luxury items. " +
        `Provide actionable analytics insights for: ${input}`,
    });

    return response.text;
  }
);
