import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { deleteDoc, DocumentData, getFirestore, QueryDocumentSnapshot, doc, DocumentReference, UpdateData, setDoc, getDoc } from 'firebase/firestore';
import { collection, addDoc, getDocs, updateDoc } from 'firebase/firestore';
import { currentUser } from './router';
import { CreatedExercise, Exercise, Equipment, TrainingsPlan, TrainingsPlanDataBase } from './types';
import { ref } from 'vue';

export const userRole = ref('');

export async function addAPI<T>(docName: string, data: T): Promise<DocumentReference<T>> {
  const docRef = await addDoc(collection(getFirestore(), docName), data);
  return docRef as DocumentReference<T>;
}

export async function updateAPI<T>(docName: string, id: string, data: UpdateData<T>): Promise<void> {
  await updateDoc(doc(getFirestore(), docName, id) as DocumentReference<T>, data);
}

export async function getAPI<T extends { id: string }>(docName: string): Promise<T[]> {
  const docs: QueryDocumentSnapshot<DocumentData>[] = [];
  const querySnapshot = await getDocs(collection(getFirestore(), docName));
  querySnapshot.forEach(doc => {
    docs.push(doc);
  });
  return docs.map(exercises => ({ ...exercises.data(), id: exercises.id })) as T[];
}

export async function setAPI<T>(docName: string, data: T, docId: string): Promise<void> {
  await setDoc(doc(getFirestore(), docName, docId), data);
}

export async function deleteAPI(docName: string, id: string): Promise<void> {
  await deleteDoc(doc(getFirestore(), docName, id) as DocumentReference<CreatedExercise>);
}

export async function login(email: string, password: string): Promise<void> {
  const auth = getAuth();
  await signInWithEmailAndPassword(auth, email, password);
}

export async function logout(): Promise<void> {
  const auth = getAuth();
  await signOut(auth);
  currentUser.value = null;
}

export async function register(email: string, password: string): Promise<void> {
  const auth = getAuth();
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(getFirestore(), 'users', userCredential.user.uid), {
    email: email,
    role: 'user',
  });
}
// export function verify() {
//   const auth = getAuth();
//   sendEmailVerification(auth.currentUser).then(() => {
//     // Email verification sent!
//     // ...
//   });
// }

export async function addExercise(exercise: CreatedExercise): Promise<void> {
  await addAPI<CreatedExercise>('exercises', exercise);
}

export async function getExercises(): Promise<Exercise[]> {
  return getAPI<Exercise>('exercises');
}

export async function updateExercise(exercise: CreatedExercise, id: string): Promise<void> {
  await updateAPI<CreatedExercise>('exercises', id, exercise);
}

export async function deleteExercise(id: string): Promise<void> {
  await deleteAPI('exercises', id);
}

export async function addEquipment(equipment: string): Promise<Equipment> {
  const id = (await addAPI<string>('equipment', equipment)).id;
  return { id, name: equipment, disabled: false } as Equipment;
}

export async function getEquipment(): Promise<Equipment[]> {
  return getAPI<Equipment>('equipment');
}

export async function updateEquipment(equipment: Equipment): Promise<void> {
  await updateAPI<Equipment>('equipment', equipment.id, equipment);
}

export async function deleteEquipment(id: string): Promise<void> {
  await deleteAPI('equipment', id);
}

export async function addTrainingsPlan(plan: TrainingsPlan): Promise<void> {
  const id = getAuth().currentUser?.uid;
  if (id) {
    await updateDoc(doc(getFirestore(), 'users', id), {
      trainingsPlan: plan,
    });
  }
}
export async function getTrainingPlans(): Promise<TrainingsPlanDataBase | null> {
  const id = getAuth().currentUser?.uid;
  return id ? ((await getDoc(doc(getFirestore(), 'users', id))).data() as TrainingsPlanDataBase) : null;
}
export async function getRole(): Promise<string | null> {
  const id = getAuth().currentUser?.uid;
  return id ? ((await getDoc(doc(getFirestore(), 'users', id))).get('role') as string) : null;
}
