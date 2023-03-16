export const getDepartmentPage = (req, res) => {
  return res.render("department/index.ejs", { title: "Phòng ban" });
};
