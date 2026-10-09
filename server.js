import app from "./app.js";
import config from "./app/config/index.js";

const POST = config.app.port;
app.listen(POST, () => {
  console.log(`Server is running on post ${POST}.`);
})