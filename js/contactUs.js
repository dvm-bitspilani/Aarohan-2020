var queryForm = document.forms.namedItem("query");

function handleForm(event) {
  event.preventDefault();
  oData = new FormData(queryForm);
  var object = {};
  oData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  fetch("https://bits-apogee.org/2022/aarohan/ask_query/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: json,
  })
    .then((res) => {
      const promise = Promise.resolve(res.json());
      promise.then((response) => {
        alert(response.message);
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
}

queryForm.addEventListener("submit", handleForm);
