function displayresult(){
    var city = document.getElementById("city").value;
    var apikey='8bf75e4cad67575beecfea87e86c6fed';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='
    + city + '&appid='+apikey+'&units=metric')
    .then(response=>response.json())
    .then (data=> {
        var t= data['main']['temp']
        document.getElementById("output").innerHTML = t;
    })
}