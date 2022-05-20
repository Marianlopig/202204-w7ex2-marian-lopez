const { getKinds } = require("./kindsControllers");

jest.mock("../../../database/models/Kind", () => ({
  find: jest.fn(),
}));

describe("Given a getKinds function", () => {
  describe("When it is invocked", () => {
    test("Then it should return a response with 200 and a json with the list of kinds", async () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const expectedStatus = 200;

      await getKinds(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });
  });
});
