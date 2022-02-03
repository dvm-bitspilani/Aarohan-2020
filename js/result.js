let form = document.forms.namedItem("result");
function handleForm(event) {
  console.log("Event here");
  event.preventDefault();

  document.querySelector("table").style.display = "none";
  document.querySelector(".loader").style.display = "block";

  console.log(document.querySelector("#mobile").value);

  const formData = new FormData();
  formData.append("email", document.querySelector("#email").value);
  formData.append("contact_no", document.querySelector("#mobile").value);

  const object = {
    email: document.querySelector("#email").value,
    contact_no: document.querySelector("#mobile").value
  };
  const data = JSON.stringify(object);
  console.log(data);

  fetch("https://bits-apogee.org/aarohan/result/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: data,
  })
    .then((res) => {
      const promise = Promise.resolve(res.json());
      console.log(promise);
      // console.log(res);
      promise.then((result) => {

          try {
              document.getElementById('resultName').innerHTML = result.name;
              document.getElementById('resultRank').innerHTML = result.all_india_rank;
              document.querySelector('.loader').style.display = 'none'
              document.querySelector('table').style.display = 'table'
          }
          catch (e){
              window.alert(response.message)
              document.querySelector('.loader').style.display = 'none'
              document.querySelector('table').style.display = 'none'
          }
      });
    })
    .catch((err) => {
      alert(err.message);
      console.log("CATCH");
      document.querySelector(".loader").style.display = "none";
      document.querySelector("table").style.display = "none";
    });
}
form.addEventListener("submit", handleForm);
