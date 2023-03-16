import express from "express";
import { getLoginPage } from "../app/controllers/authController.js";
import { getDepartmentPage } from "../app/controllers/departmentController.js";
import { getHomePage } from "../app/controllers/homeController.js";
import {
  getDetailNoti,
  getNotiPage,
} from "../app/controllers/notificationController.js";
import { getTopicPage } from "../app/controllers/topicController.js";

const router = express.Router();

router.get("/dang-nhap", getLoginPage);

router.get("/", getHomePage);

router.get("/thong-bao", getNotiPage);
router.get("/chi-tiet", getDetailNoti);

router.get("/don-vi", getDepartmentPage);

router.get("/chu-de", getTopicPage);

export default router;
