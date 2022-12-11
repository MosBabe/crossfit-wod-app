// run `node index.js` in the terminal


// In src/index.js
const express = require("express");
const bodyParser = require("body-parser");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

// *** ADD *** Cache brings problems with it. After develop your api ,first observe the api and check whether api needs cache
const apicache = require("apicache");


const app = express();
// *** ADD *** Cache brings problems with it. After develop your api ,first observe the api and check whether api needs cache
const cache = apicache.middleware;
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
// *** ADD *** Cache brings problems with it. After develop your api ,first observe the api and check whether api needs cache
app.use(cache("2 minutes"));
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});