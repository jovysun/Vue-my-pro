import { check, currentAuth } from "../../src/utils/auth";

// auth测试组
describe("auth test", () => {
  it("empty auth", () => {
    // 清空currentAuth
    currentAuth.splice(0, currentAuth.length);
    expect(check(["user"])).toBeFalsy();
    expect(check(["admin"])).toBeFalsy();
  });

  it("user auth", () => {
    // 清空currentAuth
    currentAuth.splice(0, currentAuth.length);
    currentAuth.push("user");
    expect(check(["user"])).toBeTruthy();
    expect(check(["admin"])).toBeFalsy();
  });

  it("admin auth", () => {
    // 继续添加admin角色
    currentAuth.push("admin");
    expect(check(["user"])).toBeTruthy();
    expect(check(["admin"])).toBeTruthy();
    expect(check(["user", "admin"])).toBeTruthy();
  });
});
