import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { deleteDoc, DocumentData, getFirestore, QueryDocumentSnapshot, doc, DocumentReference } from 'firebase/firestore';
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

export async function addAPI<T>(docName: string, data: T): Promise<DocumentReference<T>> {
  const db = getFirestore();
  const docRef = await addDoc(collection(db, docName), data);
  return docRef as DocumentReference<T>;
}

export async function updateAPI<T>(docName: string, id: string, data: T): Promise<boolean> {
  const db = getFirestore();
  try {
    await updateDoc(doc(db, docName, id) as DocumentReference<CreatedExercise>, data);
  } catch {
    return false;
  }
  return true;
}

export async function getAPI<T extends { id: string; [k: string]: any }>(docName: string): Promise<T[]> {
  const db = getFirestore();
  const docs: QueryDocumentSnapshot<DocumentData>[] = [];
  const querySnapshot = await getDocs(collection(db, docName));
  querySnapshot.forEach(doc => {
    docs.push(doc);
  });
  return docs.map(exercises => ({ ...exercises.data(), id: exercises.id })) as T[];
}

export async function deleteAPI(docName: string, id: string): Promise<boolean> {
  const db = getFirestore();
  try {
    await deleteDoc(doc(db, docName, id) as DocumentReference<CreatedExercise>);
  } catch {
    return false;
  }
  return true;
}

export async function login(email: string, password: string): Promise<boolean> {
  try {
    const auth = getAuth();
    //signInWithEmailAndPassword(auth, email, password).then(() => console.log('user logged in'));
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (e: any) {
    console.log("couldn't login", e);
    return false;
  }
}

export async function logout(): Promise<void> {
  const auth = getAuth();
  await signOut(auth);
  currentUser.value = null;
}

export async function addExercise(exercise: CreatedExercise): Promise<string> {
  return (await addAPI<CreatedExercise>('exercises', exercise)).id;
}

export async function getExercises(): Promise<Exercise[]> {
  return getAPI<Exercise>('excercise');
}

export async function updateExercise(exercise: CreatedExercise, id: string): Promise<boolean> {
  return await updateAPI<CreatedExercise>('exercises', id, exercise);
}

export async function deleteExercise(id: string): Promise<Exercise[]> {
  await deleteAPI('exercise', id);
  return getExercises();
}

export async function addEquipment(equipment: string): Promise<Equipment> {
  const id = (await addAPI<string>('equipment', equipment)).id;
  return { id, name: equipment, disabled: false } as Equipment;
}

export async function getEquipment(): Promise<Equipment[]> {
  return getAPI<Equipment>('equipment');
}

export async function updateEquipment(equipment: Equipment): Promise<Equipment[]> {
  await updateAPI<Equipment>('equipment', equipment.id, equipment);
  return getEquipment();
}

export async function deleteEquipment(id: string): Promise<Equipment[] | null> {
  await deleteAPI('equipment', id);
  return getEquipment();
}
