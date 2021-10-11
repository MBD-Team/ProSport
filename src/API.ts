interface Admin {
  name: string;
  pw: string;
}

export function loginAdmin(username: string, password: string): true | false {
  const Admin = JSON.parse(localStorage.getItem('Admin') || '') as Admin;
  if (Admin) {
    if (username == Admin.name && password == Admin.pw) return true;
  }
  return false;
}
