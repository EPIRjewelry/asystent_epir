// functions/src/agents/analyticsAgent.ts
// EPIR Jewelry Analytics Agent
// This agent specializes in e-commerce analytics for the jewelry industry,
// providing insights on sales trends, customer behavior, and inventory
// management
// specific to EPIR's jewelry business needs.

import {genkit, z} from "genkit";
import {vertexAI, gemini15Flash} from "@genkit-ai/vertexai";

// Tworzymy instancję Genkit z pluginami
// Configure Genkit instance with Vertex AI for jewelry analytics
const ai = genkit({
  plugins: [
    vertexAI({location: "us-central1"}),
  ],
});

// Definiujemy nasz flow (przepływ) dla agenta analitycznego
// Define analytics flow specifically designed for jewelry e-commerce
// This agent can help with:
// - Sales trend analysis for different jewelry categories
// - Customer purchase behavior patterns
// - Inventory optimization for precious metals and stones
// - Seasonal demand forecasting for jewelry items
// - Price analysis for jewelry market positioning
export const analyticsAgentFlow = ai.defineFlow(
  {
    name: "analyticsAgentFlow",
    inputSchema: z.string().describe(
      "Pytanie lub zapytanie dotyczące analityki e-commerce"
    ),
    outputSchema: z.string(),
  },
  async (input: string) => {
    // Jewelry-specific analytics logic
    // The agent is designed to understand jewelry industry terminology,
    // market trends, and customer behavior patterns specific to fine jewelry
    const response = await ai.generate({
      model: gemini15Flash,
      prompt: "Jesteś ekspertem od analizy e-commerce dla EPIR biżuterii. " +
        "Specjalizujesz się w analizie sprzedaży biżuterii, trendów " +
        "rynkowych, " +
        "zachowań klientów kupujących biżuterię, oraz optymalizacji zapasów " +
        "metali szlachetnych i kamieni. " +
        `Odpowiedz profesjonalnie i szczegółowo: ${input}`,
    });

    return response.text;
  }
);
