var form = document.forms.namedItem("studentreg");
function handleForm(event) { 
    event.preventDefault();
    oData = new FormData(form);
    var object = {};
    oData.forEach((value, key) => {object[key] = value});
    var json = JSON.stringify(object);
    console.log(json)
    fetch("https://bits-apogee.org/2021/aarohan/studentreg/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: json,
    })
    .then((res) => {
      const promise = Promise.resolve(res.json());
      promise.then((response) => {
        if(response.message == "Student registered.")
        {

        }
        alert(response.message)
      });
    })
    .catch((err) => {
    console.log(err.message)
        // return alert(toString(err));
    })
}
form.addEventListener('submit', handleForm);



var form2 = document.forms.namedItem("schoolreg");
function handleForm2(event) { 
    event.preventDefault();
    oData = new FormData(form2);
    var object = {};
    oData.forEach((value, key) => {object[key] = value});
    var json = JSON.stringify(object);
    console.log(json)
    fetch("https://bits-apogee.org/2021/aarohan/schoolreg/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: json,
    })
    .then((res) => {
      const promise = Promise.resolve(res.json());
      promise.then((response) => {
        if(response.message == "Student registered.")
        {

        }
        console.log(response)
        alert(response.message)
      });
    })
    .catch((err) => {
    console.log(err.message)
        // return alert(toString(err));
    })
}
form2.addEventListener('submit', handleForm2);

// var form = document.forms.namedItem("schoolreg");
// form.addEventListener('submit', function(ev) {
//     oData = new FormData(form);
//     var oReq = new XMLHttpRequest();
//     oReq.open("POST", "", true);
//     oReq.onload = function(oEvent) {
//         if (oReq.status == 200) {
//             alert('uploaded')
//         } 
//         else {
//             alert('error')
//         }
//     };
//     oReq.send(oData);
//     ev.preventDefault();
// }, false);