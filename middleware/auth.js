export default function ({app,redirect }) {
  // Nếu người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập
  if (app.$auth.$state.loggedIn==false) {
    return redirect('/login');
  }
  else{
    return redirect('/');

  }
}