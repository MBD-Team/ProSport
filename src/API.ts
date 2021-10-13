import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

interface Admin {
  name: string;
  pw: string;
  online: boolean;
}

const DEFAULT_ADMIN: Admin = {
  name: 'Admin',
  pw: 'admin',
  online: false,
};

if (!localStorage.getItem('Admin')) localStorage.setItem('Admin', JSON.stringify(DEFAULT_ADMIN));

export async function loginAdmin(username: string, password: string): Promise<boolean> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const admin = JSON.parse(localStorage.getItem('Admin') || 'null') as Admin;
  if (admin) {
    if (username == admin.name && password == admin.pw) {
      localStorage.setItem('Admin', JSON.stringify({ name: admin.name, pw: admin.pw, online: true }));
      return true;
    }
  }
  return false;
}
export async function isAdmin(): Promise<boolean> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const admin = JSON.parse(localStorage.getItem('Admin') || 'null') as Admin;
  if (admin) {
    return admin.online;
  }
  return false;
}

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
