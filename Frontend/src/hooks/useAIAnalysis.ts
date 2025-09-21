import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "https://truthguard-backend-production.up.railway.app";

export interface AnalysisResult {
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
            console.log('Making request to:', `${API_URL}/analyze/text`);
            const response = await fetch(`${API_URL}/analyze/text`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text }),
            });
            
            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);
            
            const text_response = await response.text();
            console.log('Response text:', text_response);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${text_response || 'Unknown error'}`);
            }
            
            if (!text_response.trim()) {
                throw new Error('Empty response from server');
            }
            
            const data = JSON.parse(text_response);
            setResults(data.result);
        } catch (err: any) {
            console.error('Analysis error:', err);
            if (err.message.includes('JSON')) {
                setError('Server returned invalid response. Please try again.');
            } else {
                setError(err.message || 'Analysis failed');
            }
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
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const text_response = await response.text();
            if (!text_response) {
                throw new Error('Empty response from server');
            }
            
            const data = JSON.parse(text_response);
            setResults(data.result);
        } catch (err: any) {
            console.error('Analysis error:', err);
            setError(err.message || 'Analysis failed');
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
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const text_response = await response.text();
            if (!text_response) {
                throw new Error('Empty response from server');
            }
            
            const data = JSON.parse(text_response);
            setResults(data.result);
        } catch (err: any) {
            console.error('Analysis error:', err);
            setError(err.message || 'Analysis failed');
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
