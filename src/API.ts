import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export interface Exercise {
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
export const MUSCLE_OPTIONS = ['Nacken', 'Schulter', 'Bizeps', 'Trizeps', 'Brust', 'Bauch', 'Po', 'Oberschenkel', 'Waden'];

export async function login(email: string, password: string): Promise<boolean> {
  //TODO: return for login
  try {
    const auth = getAuth();
    //signInWithEmailAndPassword(auth, email, password).then(() => console.log('user logged in'));
    await signInWithEmailAndPassword(auth, email, password);
    console.log('user logged in');
    return true;
  } catch (e: any) {
    const errCode = e.code;
    const errMsg = e.message;
    console.log({ errCode, errMsg });
    return false;
  }
}
export async function addExercise(exercise: Exercise): Promise<boolean> {
  const db = getFirestore();
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      name: exercise.name,
      description: exercise.description,
      hints: exercise.hints,
      videoURL: exercise.videoURL,
      img: exercise.img,
      difficulty: exercise.difficulty,
      primaryMuscles: exercise.primaryMuscles,
      secondaryMuscles: exercise.secondaryMuscles,
      trainingDevices: exercise.trainingDevices,
    });
    console.log('Document written with ID: ', docRef.id);
    console.log('Document written with Name: ', exercise.name);
    getExercises();
    return true;
  } catch (e) {
    console.error('Error adding document: ', e);
    return false;
  }
}
export async function getExercises(): Promise<any> {
  const db = getFirestore();
  const exercises = [] as any;
  const querySnapshot = await getDocs(collection(db, 'users'));
  querySnapshot.forEach(doc => {
    exercises.push(JSON.stringify(doc.data()));
  });
  console.log(JSON.parse(exercises[1]));
  return exercises;
}
