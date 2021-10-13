import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { DocumentData, getFirestore, QueryDocumentSnapshot } from 'firebase/firestore';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { CreatedExercise, Exercise } from './types';

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
export async function addExercise(exercise: CreatedExercise): Promise<string> {
  const db = getFirestore();
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
  console.log('Exercise ID: ', docRef.id);
  console.log('Exercise created with Name: ', exercise.name);
  return docRef.id;
}
export async function getExercises(): Promise<Exercise[]> {
  const db = getFirestore();
  const docs: QueryDocumentSnapshot<DocumentData>[] = [];
  const querySnapshot = await getDocs(collection(db, 'users'));
  querySnapshot.forEach(doc => {
    docs.push(doc);
  });
  return docs.map(exercises => ({ ...exercises.data(), id: exercises.id })) as Exercise[];
}
