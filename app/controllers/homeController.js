export const getHomePage = (req, res) => {
  return res.render("index.ejs", { title: "Trang chủ" });
};
