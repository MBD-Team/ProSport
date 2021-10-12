export interface Exercise {
  id: string;
  name: string;
  description: string;
  hints: string;
  videoURL: string;
  img: string;
  difficulty: 'easy' | 'medium' | 'hard';
  muscles: string[];
  trainingDevices: string[];
}
