export const getNotiPage = (req, res) => {
  return res.render("notification/index.ejs", { title: "Thông báo" });
};

export const getDetailNoti = (req, res) => {
  return res.render("notification/detail.ejs", {
    title: "Chi tiết thông báo",
  });
};
