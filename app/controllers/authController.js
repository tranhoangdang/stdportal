export const getLoginPage = (req, res) => {
  return res.render("auth/login.ejs", {
    title: "Đăng nhập",
    layout: false,
  });
};
