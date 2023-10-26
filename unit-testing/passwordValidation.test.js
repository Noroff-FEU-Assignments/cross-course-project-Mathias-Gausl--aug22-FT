function passwordmatch(pass, repass) {
  if (repass != pass) {
    return false;
  } else {
    return true;
  }
}
describe("passwor must be  equal", function () {
  test("password is equal", () => {
    const pass = 1234;
    const repass = 1234;
    expect(passwordmatch(pass, repass)).toEqual(true);
  });
  test("password is NOT equal", () => {
    const pass = 123334;
    const repass = 123344334334;
    expect(passwordmatch(pass, repass)).toEqual(false);
  });
});
