const app = require("../server");
const mongoose = require("mongoose");
const supertest = require("supertest");
beforeEach((done) => {
  mongoose.connect(
    "mongodb://localhost:27017/BCL",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => done()
  );
});
test("Get books api test ", () => {
  return supertest(app)
    .get("/book")
    .then((response) => {
      expect(response.statusCode).toBe(200);
    });
});
afterEach((done) => {
  mongoose.disconnect();
  return done();
});
