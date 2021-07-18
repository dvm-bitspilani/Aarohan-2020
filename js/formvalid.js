let obj = {
  email_id: "test@test.com",
  //paid: "false",
  reg_type: "test",
}



var form = document.forms.namedItem("studentreg");
function handleForm(event) {
    event.preventDefault();
    oData = new FormData(form);
    var object = {};
    oData.forEach((value, key) => {object[key] = value});
    var json = JSON.stringify(object);
    fetch("https://bits-apogee.org/2022/aarohan/studentreg/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: json,
    })
    .then((res) => {
      const promise = Promise.resolve(res.json());
      promise.then((response) => {
        if(response.message == "Student registered.")
        {
          obj.email_id = response.email_id;
          //obj.paid = response.paid;
          obj.reg_type = response.reg_type;
          obj = JSON.stringify(obj);
          console.log(obj)
          fetch("https://bits-apogee.org/2022/aarohan/payment/", {
            method: "POST",
            headers: { "content-type": "application/json"},
            body: obj,
            })
            .then((res) =>res.text())
    
            .then(text => {
              console.log(String(text));
              var opened;
    
    
              window.document.write(String(text))
    
    
    
    
    
            })
            .catch((err) => {
            console.log(err)
            })
        }
        else
          alert(response.message)
      });
    })
    .catch((err) => {
    console.log(err.message)
    })
    // alert('Registrations are closed')
}
form.addEventListener('submit', handleForm);



var form2 = document.forms.namedItem("schoolreg");
function handleForm2(event) {
    event.preventDefault();
    oData = new FormData(form2);
    var object = {};
    oData.forEach((value, key) => {object[key] = value});
    var json = JSON.stringify(object);
    //console.log(json)
    fetch("https://bits-apogee.org/2022/aarohan/schoolreg/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: json,
    })
    .then((res) => {
      const promise = Promise.resolve(res.json());
      promise.then((response) => {
        if(response.message == "School created.")
        {
          obj.email_id = response.email_id;
          //obj.paid = response.paid;
          obj.reg_type = response.reg_type;
          obj = JSON.stringify(obj);
          console.log(obj)
          fetch("https://bits-apogee.org/2022/aarohan/payment/", {
            method: "POST",
            headers: { "content-type": "application/json"},
            body: obj,
            })
            .then((res) =>res.text())
    
            .then(text => {
              console.log(String(text))
              var opened = window.open("",'_blank')
              opened.document.write(String(text))
              window.location.reload();
            })
            .catch((err) => {
            console.log(err)
            })
    
        }
        alert(response.message)
      });
    })
    .catch((err) => {
    console.log(err.message)
    })
    // alert('Registrations are closed')

}
const cancel = () => {
  location.reload(true);
  console.log('ddffjdstae')
}
form2.addEventListener('submit', handleForm2);
form2.addEventListener('cancel', cancel);
form.addEventListener('cancel', cancel);
