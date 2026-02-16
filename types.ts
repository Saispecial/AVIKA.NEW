
export interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: number;
  videos?: VideoContent[];
}

export interface VideoContent {
  language: string;
  url: string;
  tags?: string[];
}

export interface EmotionalContext {
  category: string;
  userKeywords: string[];
  context: string;
  videos?: VideoContent[];
}

export interface MoodAnalysis {
  dominantMood: string;
  supportingMoods: string[];
  confidence: number;
}

export interface AvikaResponse {
  text: string;
  videos: VideoContent[];
  mood: MoodAnalysis;
}
