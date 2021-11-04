import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { deleteDoc, DocumentData, getFirestore, QueryDocumentSnapshot, doc } from 'firebase/firestore';
import { collection, addDoc, getDocs, updateDoc } from 'firebase/firestore';
import { currentUser } from './router';
import { CreatedExercise, Exercise, Equipment, Muscle } from './types';

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
export async function register(email: string, password: string): Promise<boolean> {
  const auth = getAuth();
  await createUserWithEmailAndPassword(auth, email, password);
  return true;
}
// export function verify() {
//   const auth = getAuth();
//   sendEmailVerification(auth.currentUser).then(() => {
//     // Email verification sent!
//     // ...
//   });
// }
export async function createExercise(exercise: CreatedExercise): Promise<string> {
  const db = getFirestore();
  const docRef = await addDoc(collection(db, 'exercises'), {
    name: exercise.name,
    description: exercise.description,
    hints: exercise.hints,
    videoURL: exercise.videoURL,
    img: exercise.img,
    difficulty: exercise.difficulty,
    grossMuscles: exercise.grossMuscles,
    primaryMuscles: exercise.primaryMuscles,
    secondaryMuscles: exercise.secondaryMuscles,
    trainingDevices: exercise.trainingDevices,
  });
  return docRef.id;
}
export async function readExercises(): Promise<Exercise[]> {
  const db = getFirestore();
  const docs: QueryDocumentSnapshot<DocumentData>[] = [];
  const querySnapshot = await getDocs(collection(db, 'exercises'));
  querySnapshot.forEach(doc => {
    docs.push(doc);
  });
  return docs.map(exercises => ({ ...exercises.data(), id: exercises.id })) as Exercise[];
}
export async function deleteExercise(id: string): Promise<Exercise[]> {
  const db = getFirestore();
  await deleteDoc(doc(db, 'exercise', id));
  return readExercises();
}
export async function createEquipment(equipment: string): Promise<Equipment> {
  const db = getFirestore();
  const docRef = await addDoc(collection(db, 'equipment'), {
    name: equipment,
    disabled: false,
  });
  return { id: docRef.id, name: equipment, disabled: false } as Equipment;
}
export async function readEquipment(): Promise<Equipment[]> {
  const db = getFirestore();
  const docs: QueryDocumentSnapshot<DocumentData>[] = [];
  const querySnapshot = await getDocs(collection(db, 'equipment'));
  querySnapshot.forEach(doc => {
    docs.push(doc);
  });
  return docs.map(equipment => ({ ...equipment.data(), id: equipment.id })) as Equipment[];
}
export async function deleteEquipment(id: string): Promise<Equipment[] | null> {
  const db = getFirestore();
  await deleteDoc(doc(db, 'equipment', id));
  return readEquipment();
}
export async function updateEquipment(equipment: Equipment): Promise<Equipment[]> {
  const db = getFirestore();
  await updateDoc(doc(db, 'equipment', equipment.id), {
    disabled: equipment.disabled,
  });
  return readEquipment();
}
export async function updateExercise(exercise: CreatedExercise, id: string): Promise<boolean> {
  const db = getFirestore();
  try {
    await updateDoc(doc(db, 'exercises', id), {
      name: exercise.name,
      description: exercise.description,
      hints: exercise.hints,
      videoURL: exercise.videoURL,
      img: exercise.img,
      difficulty: exercise.difficulty,
      primaryMuscles: exercise.primaryMuscles,
      secondaryMuscles: exercise.secondaryMuscles,
      grossMuscles: exercise.grossMuscles,
      trainingDevices: exercise.trainingDevices,
    });
  } catch {
    return false;
  }
  return true;
}
