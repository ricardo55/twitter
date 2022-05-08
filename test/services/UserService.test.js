const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {

    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "ricardo", "Ricardo")
        expect(user.username).toBe("ricardo")
        expect(user.name).toBe("Ricardo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "ricardo", "Ricardo");
        const userInfoInList = UserService.getInfo(user);
        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe("ricardo");
        expect(userInfoInList[2]).toBe("Ricardo");
        expect(userInfoInList[3]).toBe("Sin bio");
    });

    test("3. Update username", () => {
        const user = UserService.create(1, "ricardo", "Ricardo");
        UserService.updateUserUsername(user, "ricardo2");
        expect(user.username).toBe("ricardo2")
    });

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "ricardo1", "Ricardo");
        const user2 = UserService.create(1, "ricardo2", "Ricardo");
        const user3 = UserService.create(1, "ricardo3", "Ricardo");
      
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("ricardo1")
        expect(usernames).toContain("ricardo2")
        expect(usernames).toContain("ricardo3")
      });




});

