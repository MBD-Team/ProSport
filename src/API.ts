import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { deleteDoc, DocumentData, getFirestore, QueryDocumentSnapshot, doc } from 'firebase/firestore';
import { collection, addDoc, getDocs, updateDoc } from 'firebase/firestore';
import { currentUser } from './router';
import { CreatedExercise, Exercise, Equipment, Muscle } from './types';

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

export async function login(email: string, password: string): Promise<boolean> {
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
export async function logout(): Promise<void> {
  const auth = getAuth();
  await signOut(auth);
  currentUser.value = null;
}
export async function addExercise(exercise: CreatedExercise): Promise<string> {
  const db = getFirestore();
  const docRef = await addDoc(collection(db, 'exercises'), {
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
  const querySnapshot = await getDocs(collection(db, 'exercises'));
  querySnapshot.forEach(doc => {
    docs.push(doc);
  });
  return docs.map(exercises => ({ ...exercises.data(), id: exercises.id })) as Exercise[];
}
export async function addEquipment(equipment: string): Promise<Equipment> {
  const db = getFirestore();
  const docRef = await addDoc(collection(db, 'equipment'), {
    name: equipment,
  });
  return { id: docRef.id, name: equipment } as Equipment;
}
export async function getEquipment(): Promise<Equipment[]> {
  const db = getFirestore();
  const docs: QueryDocumentSnapshot<DocumentData>[] = [];
  const querySnapshot = await getDocs(collection(db, 'equipment'));
  querySnapshot.forEach(doc => {
    docs.push(doc);
  });
  return docs.map(equipment => ({ ...equipment.data(), id: equipment.id })) as Equipment[];
}
export async function delEquipment(id: string): Promise<Equipment[] | null> {
  const db = getFirestore();
  const docs: QueryDocumentSnapshot<DocumentData>[] = [];
  await deleteDoc(doc(db, 'equipment', id));
  return getEquipment();
}
export async function updateExercise(exercise: CreatedExercise, id: string): Promise<boolean> {
  const db = getFirestore();
  const exerciseRef = doc(db, 'exercises', id);
  try {
    await updateDoc(exerciseRef, {
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
  } catch {
    return false;
  }
  return true;
}
