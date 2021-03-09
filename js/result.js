let form = document.forms.namedItem("result");
function handleForm(event) {
    event.preventDefault();
    oData = new FormData(form);
    var object = {};
    oData.forEach((value, key) => {object[key] = value});
    var json = JSON.stringify(object);
    fetch("https://bits-apogee.org/2021/aarohan/result/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: json,
    })
        .then((res) => {
            const promise = Promise.resolve(res.json());
            promise.then((response) => {
                console.log(response.data[0])
                let result = response.data[0]
                if (result){
                    document.querySelector('table').style.display = 'table'
                    document.getElementById('resultName').innerHTML = result.name;
                    document.getElementById('resultRank').innerHTML = result.all_india_rank;
                }
            });
        })
        .catch((err) => {
            console.log(err.message)
        })
}
form.addEventListener('submit', handleForm);
