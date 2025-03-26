const bcrypt = require("bcryptjs");

const checkPassword = async () => {
  const password = "12345";
  const hashedPassword = await bcrypt.hash(password, 10);
  const isMatch = await bcrypt.compare(password, hashedPassword);

  console.log("Password en texto plano:", password);
  console.log("Password hasheado:", hashedPassword);
  console.log("Coincide con bcrypt.compare?", isMatch);
};

checkPassword();
