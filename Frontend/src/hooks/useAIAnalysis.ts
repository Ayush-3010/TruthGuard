import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

interface AnalysisResult {
    type: string;
    credibilityScore: number;
    analysis: string;
    flags: {
        potentialMisinformation: boolean;
        needsFactChecking: boolean;
        biasDetected: boolean;
        manipulatedContent: boolean;
    };
    sources: string[];
    details: {
        sentiment: string;
        confidence: number;
        keyTerms: string[];
    };
}

export const useAIAnalysis = () => {
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [results, setResults] = useState<AnalysisResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    const resetResults = () => {
        setResults(null);
        setError(null);
    };

    const analyzeText = async (text: string) => {
        setIsAnalyzing(true);
        resetResults();
        try {
            const response = await fetch(`${API_URL}/analyze/text`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || "Text analysis failed.");
            }
            const data = await response.json();
            setResults(data.result);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsAnalyzing(false);
        }
    };

    const analyzeURL = async (url: string) => {
        setIsAnalyzing(true);
        resetResults();
        try {
            const response = await fetch(`${API_URL}/analyze/url`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || "URL analysis failed.");
            }
            const data = await response.json();
            setResults(data.result);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsAnalyzing(false);
        }
    };

    const analyzeImage = async (file: File) => {
        setIsAnalyzing(true);
        resetResults();
        try {
            const formData = new FormData();
            formData.append("file", file);
            
            const response = await fetch(`${API_URL}/analyze/image`, {
                method: "POST",
                body: formData,
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || "Image analysis failed.");
            }
            const data = await response.json();
            setResults(data.result);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsAnalyzing(false);
        }
    };

    const analyzeVideo = async (file: File) => {
        setIsAnalyzing(true);
        resetResults();
        setError("Video analysis is not yet implemented.");
        setIsAnalyzing(false);
    };

    return {
        isAnalyzing,
        results,
        error,
        analyzeText,
        analyzeURL,
        analyzeImage,
        analyzeVideo,
        resetResults,
    };
};