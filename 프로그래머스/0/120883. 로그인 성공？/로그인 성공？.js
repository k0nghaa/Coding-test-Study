function solution(id_pw, db) {
  const [id, pw] = id_pw;

  for (let user of db) {
    const [userId, userPw] = user;

    if (userId === id) {
      if (userPw === pw) return "login";
      else return "wrong pw";
    }
  }

  return "fail";
}