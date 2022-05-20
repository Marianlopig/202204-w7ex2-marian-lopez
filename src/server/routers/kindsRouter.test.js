// const request = require("supertest");
// const { MongoMemoryServer } = require("mongodb-memory-server");
// const { mongoose } = require("mongoose");
// const app = require("../..");
// const Kind = require("../../database/models/Kind");

// describe("Given a get /kinds/list endpoint", () => {
//   describe("When it receives a request", () => {
//     test("Then is should respond with a 200 status code and a list of kinds Kitten", async () => {
//       const mongoServer = await MongoMemoryServer.create();
//       await mongoose.connectDB(mongoServer.getUri());
//       await Kind.create({
//         kind: "Eterno escondido",
//       });

//       const response = await request(app)
//         .post("/kinds/list")
//         .send({
//           kind: "Eterno escondido",
//         })
//         .expect(200);

//       expect(response.body.token).not.toBeNull();

//       await mongoose.connection.close();
//       await mongoServer.stop();
//     });
//   });
// });
