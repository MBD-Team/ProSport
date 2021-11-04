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
  grossMuscles: string[];
  primaryMuscles: string[];
  secondaryMuscles: string[];
  trainingDevices: string[];
}
export interface Muscle {
  name: string;
  value: string;
  grossMuscle: string;
}
export interface Equipment {
  id: string;
  name: string;
  disabled: boolean;
}
export interface TrainingsPlan {
  monday: Exercise[];
  tuesday: Exercise[];
  wednesday: Exercise[];
  thursday: Exercise[];
  friday: Exercise[];
  saturday: Exercise[];
  sunday: Exercise[];
}

export const MUSCLE_OPTIONS = [
  { name: 'Nacken', value: 'neck', grossMuscle: 'neck' },
  { name: 'Schulter', value: 'shoulder', grossMuscle: 'shoulder' },
  { name: 'Bizeps', value: 'biceps', grossMuscle: 'arm' },
  { name: 'Trizeps', value: 'triceps', grossMuscle: 'arm' },
  { name: 'Brust', value: 'chest', grossMuscle: 'chest' },
  { name: 'Bauch', value: 'belly', grossMuscle: 'belly' },
  { name: 'Rücken', value: 'back', grossMuscle: 'back' },
  { name: 'Po', value: 'butt', grossMuscle: 'butt' },
  { name: 'Oberschenkel', value: 'thigh', grossMuscle: 'leg' },
  { name: 'Unterschenkel', value: 'lower leg', grossMuscle: 'leg' },
] as Muscle[];
