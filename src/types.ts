export interface Exercise extends CreatedExercise {
  id: string;
}
export interface CreatedExercise {
  name: string;
  description: string;
  hints: string;
  videoURL: string;
  img: string;
  difficulty: 'easy' | 'medium' | 'hard';
  primaryMuscles: string[];
  secondaryMuscles: string[];
  trainingDevices: string[];
}
export interface Muscle {
  name: string;
  value: string;
}
export interface Equipment {
  id: string;
  name: string;
  disabled: boolean;
}
export const MUSCLE_OPTIONS = [
  { name: 'Nacken', value: 'neck' },
  { name: 'Schulter', value: 'shoulder' },
  { name: 'Arme', value: 'arm' },
  { name: 'Brust', value: 'chest' },
  { name: 'Bauch', value: 'belly' },
  { name: 'Rücken', value: 'back' },
  { name: 'Po', value: 'butt' },
  { name: 'Beine', value: 'leg' },
] as Muscle[];
