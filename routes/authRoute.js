// const express = require("express");
// const {
//   registerUser,
//   loginUser,
//   loginAdmin,
// } = require("../controllers/authController.js");
// const { authMiddleware } = require("../middlewares/authMiddleware.js");
// const router = express.Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);
// router.post("/admin/login", loginAdmin);

// // Example protected route
// router.get("/dashboard", authMiddleware, (req, res) => {
//   if (req.user.isAdmin) {
//     res.json({ message: "Welcome Admin" });
//   } else {
//     res.json({ message: "Welcome User" });
//   }
// });

// module.exports = router;

const express = require("express");
const {
  registerUser,
  loginUser,
  loginAdmin,
} = require("../controllers/authController.js");
const router = express.Router();

// User registration
router.post("/register", registerUser);

// User login
router.post("/login", loginUser);

// Admin login
router.post("/admin/login", loginAdmin);

module.exports = router;
