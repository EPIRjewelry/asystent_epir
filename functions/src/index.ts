// functions/src/index.ts
// EPIR Jewelry Assistant - Main Firebase Functions Entry Point
// This file configures and exports Firebase Cloud Functions for the EPIR
// jewelry
// e-commerce platform, including AI-powered analytics and customer assistance.

import {setGlobalOptions} from "firebase-functions";

// Importuj onCallGenkit oraz inne potrzebne rzeczy z Genkit
// Import Genkit components for AI-powered jewelry business functions
import {onCallGenkit} from "firebase-functions/v2/https";
import {genkit} from "genkit";

// Importuj plugin Vertex AI
// Import Vertex AI plugin for advanced AI capabilities
import {vertexAI} from "@genkit-ai/vertexai";

// Importuj swój flow agenta analitycznego
// Import jewelry-specific analytics agent for e-commerce insights
import {analyticsAgentFlow} from "./agents/analyticsAgent";

// Ustawienia globalne dla funkcji Firebase
// Global settings for Firebase Functions - optimized for jewelry
// e-commerce load
setGlobalOptions({maxInstances: 10});

// --- Konfiguracja Genkit (MUSISZ DODAĆ TO DO index.ts) ---
// Configure Genkit for EPIR jewelry AI assistant capabilities
genkit({
  plugins: [
    // Upewnij się, że używasz odpowiedniego plugina dla swojego modelu.
    // Jeśli używasz @genkit-ai/vertexai (jak w analyticsAgent.ts), to:
    vertexAI(),
    // Jeśli używasz @genkit-ai/googleai, to:
    // googleAI(),
  ],
  // Możesz określić domyślny model, jeśli chcesz
  // model: gemini15Flash, // Przykład
});
// --------------------------------------------------------

// Teraz eksportujemy Twój flow Genkit jako funkcję Cloud Function
// Export the jewelry analytics agent as a callable Cloud Function
// This function provides AI-powered analytics insights for jewelry e-commerce
export const callAnalyticsAgent = onCallGenkit(
  // Możesz dodać opcje dla funkcji, np. secrets, jeśli potrzebujesz API key'a
  // secrets: [apiKey], // Jeśli używasz np. GoogleAI i API klucza
  {}, // Brak specjalnych opcji w tym przypadku, ale klamry są wymagane
  analyticsAgentFlow // Przekazujemy zdefiniowany flow
);

// Poniższa funkcja jest nadal zakomentowana, więc się nie wdroży.
// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

