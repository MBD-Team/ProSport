interface Admin {
  name: string;
  pw: string;
  online: boolean;
}

export function loginAdmin(username: string, password: string): true | false {
  const Admin = JSON.parse(localStorage.getItem('Admin') || '') as Admin;
  if (Admin) {
    if (username == Admin.name && password == Admin.pw) {
      localStorage.setItem('Admin', JSON.stringify({ name: Admin.name, pw: Admin.pw, online: true }));
      return true;
    }
  }
  return false;
}
export function isAdmin(): true | false {
  const admin = JSON.parse(localStorage.getItem('Admin') || '');
  if (admin) {
    return admin.online;
  }
  return false;
}
