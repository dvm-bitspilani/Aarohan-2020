let form = document.forms.namedItem("result");
function handleForm(event) {
    event.preventDefault();
    oData = new FormData(form);
    document.querySelector('table').style.display = 'none'
    document.querySelector('.loader').style.display = 'block'

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

                try {
                    let result = response.data[0]
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
            alert(err.message)
            document.querySelector('.loader').style.display = 'none'
            document.querySelector('table').style.display = 'none'
        })
}
form.addEventListener('submit', handleForm);
