export default function ({ app, redirect }) {
  // Nếu người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập
  if (!app.$auth.loggedIn) {
  alert('You must be logged in');
    return redirect('/login');
  }
  else {
    return redirect('/');
  }
}