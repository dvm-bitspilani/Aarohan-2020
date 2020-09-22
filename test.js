const fetch = require("node-fetch");

let obj = {
  full_name: "test",
  fathers_name: "test",
  school_name: "test",
  city: "test",
  state: "test",
  studying_in_class: "2",
  contact_no: "8080808080",
  email_id: "test@test.com",
};

obj = JSON.stringify(obj);

// console.log(obj);

fetch("https://bits-apogee.org/2021/aarohan/studentreg/", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: obj,
})
  .then((res) => {
    const promise = Promise.resolve(res.json());
    promise.then((response) => {
      console.log(response);
    });
  })
  .catch((err) => console.log("ERR:---", err));
