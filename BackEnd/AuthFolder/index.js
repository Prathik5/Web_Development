const bcrypt = require("bcrypt");

const word = "Monkey";

const hashPassword = async (pw) => {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(pw, salt);
  console.log(salt);
  console.log(hash);
};

const login = async (pw, hashedPw) => {
  const result = await bcrypt.compare(pw, hashedPw);
  if (result) {
    console.log("Heyyy, logged in");
  } else {
    console.log("Some sort of error");
  }
};

// hashPassword(word);
login(word, "$2b$12$vGmcIIjtyuHQUtmkg8Wcp..64M3lNazVwjlHm/iSId1HyLEwaiYiK");
