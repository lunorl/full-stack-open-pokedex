import express from "express";
const app = express();

// get the port from env variable
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

app.get("version", (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw("error....  ");
  res.send("1");
});
app.use(express.static("dist"));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`);
});
