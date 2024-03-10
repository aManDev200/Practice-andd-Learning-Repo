const express = require('express');
const apps = express();
const adminRouter = require("./Routes/admin");
const userRouter = require("./Routes/user");

// Express automatically parses JSON and URL-encoded data
apps.use(express.json());

apps.use("/admin", adminRouter);
apps.use("/user", userRouter);

const port = 3000;

apps.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});