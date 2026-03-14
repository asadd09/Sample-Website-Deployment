
import { GoogleGenAI } from "@google/genai";

/**
 * Fetches industrial label recommendations from Gemini.
 * Uses gemini-3-flash-preview for high performance and accurate professional advice.
 */
export const getLabelConsultation = async (industry: string, requirements: string) => {
  // Always initialize GoogleGenAI with a named parameter
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an expert industrial label manufacturing consultant for AR International. 
      A potential B2B client from the ${industry} industry is asking for advice.
      Their specific requirements or context: ${requirements}
      
      Provide a concise, professional recommendation focusing on:
      1. Best label material for their environment (e.g., thermal, polypropylene, moisture resistant).
      2. Suggested adhesive type.
      3. Ribbon type (Wax, Resin, Wax-Resin) if applicable.
      4. A brief value proposition of AR International's custom manufacturing.
      
      Format as a helpful professional response.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });

    // Access the .text property directly as per modern SDK standards
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, but I'm currently unable to generate a recommendation. Please contact our human specialists for a detailed consultation.";
  }
};
