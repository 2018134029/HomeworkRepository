const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 8000;

app.listen(PORT, function(){
  console.log("서버가 실행되었습니다");
  console.log(`서버주소: http://localhost:${PORT}`);
});
