interface Admin {
  name: string;
  pw: string;
  online: boolean;
}

export function loginAdmin(username: string, password: string): boolean {
  const admin = JSON.parse(localStorage.getItem('Admin') || 'null') as Admin;
  if (admin) {
    if (username == admin.name && password == admin.pw) {
      localStorage.setItem('Admin', JSON.stringify({ name: admin.name, pw: admin.pw, online: true }));
      return true;
    }
  }
  return false;
}
export function isAdmin(): boolean {
  const admin = JSON.parse(localStorage.getItem('Admin') || 'null');
  if (admin) {
    return admin.online;
  }
  return false;
}
