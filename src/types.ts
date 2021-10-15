export interface Exercise extends CreatedExercise {
  id: string;
}
export interface CreatedExercise {
  name: string;
  description: string;
  hints: string;
  videoURL: string;
  img: string;
  difficulty: string;
  primaryMuscles: string[];
  secondaryMuscles: string[];
  trainingDevices: Equipment[];
}
export interface Muscle {
  name: string;
  value: string;
}
export interface Equipment {
  id: string;
  name: string;
}
