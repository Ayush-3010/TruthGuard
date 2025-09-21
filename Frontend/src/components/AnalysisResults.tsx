import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Shield, AlertTriangle, CheckCircle, XCircle, Brain, Search } from "lucide-react";
import { AnalysisResult } from "@/hooks/useAIAnalysis";

interface AnalysisResultsProps {
  results: AnalysisResult;
}

const AnalysisResults = ({ results }: AnalysisResultsProps) => {
  const getCredibilityColor = (score: number) => {
    if (score >= 0.7) return "text-green-400";
    if (score >= 0.4) return "text-yellow-400";
    return "text-red-400";
  };

  const getCredibilityIcon = (score: number) => {
    if (score >= 0.7) return <CheckCircle className="w-5 h-5 text-green-400" />;
    if (score >= 0.4) return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
    return <XCircle className="w-5 h-5 text-red-400" />;
  };

  const getCredibilityLabel = (score: number) => {
    if (score >= 0.8) return "High Credibility";
    if (score >= 0.6) return "Moderate Credibility";
    if (score >= 0.4) return "Low Credibility";
    return "Very Low Credibility";
  };

  return (
    <div className="space-y-6 mt-8">
      {/* Main Analysis Card */}
      <Card className="glass-morphism border-cyber-glow/20 shadow-card-glass">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Brain className="w-6 h-6 text-primary" />
              <span>Analysis Results</span>
            </CardTitle>
            <Badge variant="outline" className="border-primary/50 text-primary">
              {results.type.toUpperCase()} Analysis
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Credibility Score */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {getCredibilityIcon(results.credibilityScore)}
                <span className="font-semibold">Credibility Score</span>
              </div>
              <span className={`font-bold text-lg ${getCredibilityColor(results.credibilityScore)}`}>
                {Math.round(results.credibilityScore * 100)}%
              </span>
            </div>
            <Progress 
              value={results.credibilityScore * 100} 
              className="h-3"
            />
            <p className="text-sm text-muted-foreground">
              {getCredibilityLabel(results.credibilityScore)}
            </p>
          </div>

          {/* Analysis Text */}
          <div className="space-y-2">
            <h4 className="font-semibold flex items-center space-x-2">
              <Search className="w-4 h-4" />
              <span>Detailed Analysis</span>
            </h4>
            <p className="text-foreground/80 leading-relaxed bg-card/50 p-4 rounded-lg border border-border/50">
              {results.analysis}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Flags and Warnings */}
      <Card className="glass-morphism border-cyber-glow/20 shadow-card-glass">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            <span>Risk Assessment</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-card/30 border border-border/30">
              <span className="text-sm">Potential Misinformation</span>
              <Badge variant={results.flags.potentialMisinformation ? "destructive" : "outline"}>
                {results.flags.potentialMisinformation ? "Detected" : "Clear"}
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-card/30 border border-border/30">
              <span className="text-sm">Needs Fact-Checking</span>
              <Badge variant={results.flags.needsFactChecking ? "secondary" : "outline"}>
                {results.flags.needsFactChecking ? "Yes" : "No"}
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-card/30 border border-border/30">
              <span className="text-sm">Bias Detected</span>
              <Badge variant={results.flags.biasDetected ? "secondary" : "outline"}>
                {results.flags.biasDetected ? "Yes" : "No"}
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-card/30 border border-border/30">
              <span className="text-sm">Manipulated Content</span>
              <Badge variant={results.flags.manipulatedContent ? "destructive" : "outline"}>
                {results.flags.manipulatedContent ? "Suspected" : "Clear"}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sources */}
        <Card className="glass-morphism border-cyber-glow/20 shadow-card-glass">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>Verified Sources</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {results.sources.map((source, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 p-2 rounded bg-card/30 border border-border/30"
                >
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm">{source}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Analysis Details */}
        <Card className="glass-morphism border-cyber-glow/20 shadow-card-glass">
          <CardHeader>
            <CardTitle>Analysis Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {results.details.sentiment && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Sentiment</span>
                <Badge variant="outline">{results.details.sentiment}</Badge>
              </div>
            )}
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Confidence</span>
              <span className="font-semibold">{Math.round(results.details.confidence * 100)}%</span>
            </div>
            <div className="space-y-2">
              <span className="text-sm text-muted-foreground">Key Terms</span>
              <div className="flex flex-wrap gap-2">
                {results.details.keyTerms.map((term, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {term}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalysisResults;