export function getLoginData(): any {
  localStorage.getItem;
  return null;
}
export function setUser(): void {
  localStorage.setItem('Username', 'User');
}
export function loginAdmin(username: string, password: string): true | false {
  const Admin = JSON.parse(localStorage.getItem('Admin') || '');
  if (Admin) {
    if (username == Admin.name && password == Admin.pw) return true;
  }
  return false;
}
