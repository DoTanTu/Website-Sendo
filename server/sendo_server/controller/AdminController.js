const adminModel = require("../model/AdminModel");
class AdminController {
  static login(req, res) {
    const { username, password } = req.body;
    adminModel.loginAdmin(username, password, (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Internal server error" });
      }
      if (result.length > 0) {
        const storedPassword = result[0].password;

        if (password === storedPassword) {
          // Passwords match, user is authenticated
          return res
            .status(200)
            .json({ message: "Login successful", username });
        } else {
          // Passwords do not match
          return res
            .status(401)
            .json({ error: "Username or Password not correct" });
        }
      } else {
        // User not found
        return res
          .status(404)
          .json({ error: "Username or Password not correct" });
      }
    });
  }
}
module.exports = AdminController;
