
exports.userLogin = (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.send(500).json({
        message: "please required all fields",
        status: true,
      });
    }
  } catch (error) {
    console.log(error);
    res.send(500).json({
      message: "internal server error",
      status: false,
    });
  }
};
exports.userRegister = () => {};
