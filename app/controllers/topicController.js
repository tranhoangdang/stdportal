export const getTopicPage = (req, res) => {
  return res.render("topic/index.ejs", { title: "Chủ đề" });
};
