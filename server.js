const express = require("express");
const mongoose = require('mongoose')
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const cors = require("cors")
const portfolioRoute = require("./routes/portfolioRoute");

app.use(express.json());
app.use(cors())
app.use("/api/portfolio", portfolioRoute);
app.use(
  cors({
    origin: "https://dynamic-portfolio-application-with-mern-stack.vercel.app/",
    methods: ["LISTEN"],
    credentials: true,
  })
)
const port = process.env.PORT || 5000;
const path = require("path");
mongoose.connect('mongodb+srv://mayankkr53657:mayankkr53657@cluster0.awrksda.mongodb.net/');

// if(process.env.NODE_ENV === "production")
// {
//   app.use(express.static(path.join(__dirname, "client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
//   });
// }

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
