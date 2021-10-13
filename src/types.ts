export type CreatedExercise = Omit<Exercise, 'id'>;

export interface Exercise {
  id: string;
  name: string;
  description: string;
  hints: string;
  videoURL: string;
  img: string;
  difficulty: string;
  primaryMuscles: string[];
  secondaryMuscles: string[];
  trainingDevices: string[];
}
