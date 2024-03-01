const express = require("express");
const bodyParser = require("body-parser");
<<<<<<< HEAD
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const port = 3000;

const logger = require("./middleware/service/redisLogger.js");
=======
const app = express();
const port = 3000;
const { PrismaClient } = require("@prisma/client");

const logger = require("./middleware/service/redisLogger.js");
const prisma = new PrismaClient();
>>>>>>> 32c421696ef396f125a906c42046d77cbcddcc7e
const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");

const bookRoutes = require("./routers/booksRouter.js");
const genresRoutes = require("./routers/genresRoutes.js");
const authorsRoutes = require("./routers/authorRouter.js");
const logsRoutes = require("./routers/logsRouter.js");
<<<<<<< HEAD
const usersRoutes = require("./routers/usersRouter.js");

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
=======

app.use(bodyParser.json());
>>>>>>> 32c421696ef396f125a906c42046d77cbcddcc7e

app.use("/books", bookRoutes);
app.use("/genres", genresRoutes);
app.use("/authors", authorsRoutes);
app.use("/logs", logsRoutes);
<<<<<<< HEAD
app.use("/auth", usersRoutes);
=======
>>>>>>> 32c421696ef396f125a906c42046d77cbcddcc7e

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, async () => {
  console.log(`Example app listening on port   ${port}`);
  await logger.connect();
});
