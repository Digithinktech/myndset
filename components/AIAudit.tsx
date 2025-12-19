import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Loader2, Pin, ArrowRight, RefreshCw } from 'lucide-react';
import Button from './ui/Button';

const AIAudit: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ strategy: string; imageUrl: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateStrategy = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const textResponse = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Act as a senior Pinterest strategist for "The Myndset" agency. 
        Analyze this brand: "${prompt}". 
        Provide a concise 3-step growth plan including: 
        1. Target Aesthetic (2-3 words) 
        2. Content Hook (1 sentence) 
        3. Key Keyword Strategy (list 3). 
        Keep it professional, high-end, and punchy.`,
      });

      const imageResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: `A high-end Pinterest moodboard for a brand described as: ${prompt}. Professional photography, clean aesthetic, aesthetic colors, minimalistic and trendy.` }],
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1"
          }
        }
      });

      let base64Image = '';
      for (const part of imageResponse.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          base64Image = `data:image/png;base64,${part.inlineData.data}`;
          break;
        }
      }

      setResult({
        strategy: textResponse.text || "Strategy generated successfully.",
        imageUrl: base64Image
      });
    } catch (err) {
      console.error(err);
      setError("The AI strategist is currently over-booked. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lab" className="py-24 bg-pop-purple relative overflow-hidden">
      {/* Decorative AI Sparkles Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pop-pink/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pop-blue/10 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-pop-yellow font-sans text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} className="animate-pulse" /> The Intelligence Lab
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-tight mb-6">
            Get Your <span className="text-pop-pink">AI-Powered</span> <br />
            Visual Vibe Check
          </h2>
          <p className="text-gray-300 font-sans text-lg md:text-xl max-w-2xl mx-auto">
            Describe your brand in one sentence. Our custom Gemini model will generate a high-intent Pinterest strategy and moodboard concept instantly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl p-6 md:p-10 rounded-[3rem] border border-white/10 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. A sustainable ceramic studio focused on Japandi aesthetics..."
                className="flex-1 bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 text-white font-sans text-lg focus:outline-none focus:border-pop-yellow transition-colors placeholder:text-white/50"
                onKeyDown={(e) => e.key === 'Enter' && generateStrategy()}
              />
              <Button 
                variant="secondary" 
                onClick={generateStrategy} 
                disabled={loading || !prompt.trim()}
                className="whitespace-nowrap h-full py-4 px-10 min-w-[200px]"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
                {loading ? 'Analyzing...' : 'Generate Lab Report'}
              </Button>
            </div>

            {error && (
              <p className="text-pop-pink font-sans text-sm mt-4 text-center">{error}</p>
            )}

            {result && (
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {/* Visual Output */}
                <div className="relative group">
                  <div className="aspect-square rounded-[2rem] overflow-hidden border-4 border-pop-yellow/30 bg-pop-purple shadow-2xl">
                    {result.imageUrl ? (
                      <img src={result.imageUrl} alt="AI Generated Moodboard" className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-1000" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-white/5">
                        <Pin className="text-white/20 w-12 h-12" />
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-pop-pink text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                      Visual Concept
                    </div>
                  </div>
                </div>

                {/* Text Output */}
                <div className="flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-pop-yellow font-display font-black text-2xl uppercase mb-4 flex items-center gap-2">
                        Strategic Roadmap <ArrowRight size={20} />
                      </h4>
                      <div className="font-sans text-gray-300 leading-relaxed text-lg whitespace-pre-line border-l-2 border-pop-pink pl-6 py-2">
                        {result.strategy}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 pt-4">
                      <button 
                        onClick={() => setResult(null)}
                        className="text-white/60 hover:text-white flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors"
                      >
                        <RefreshCw size={16} /> New Analysis
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <p className="text-center text-gray-500 text-[10px] uppercase font-bold tracking-[0.2em] mt-8">
            Powered by Gemini 3 Intelligence Lab &bull; Experimental Feature
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIAudit;