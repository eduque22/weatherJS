
var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var currTemp = document.querySelector('#currentTemp')
var maxTemp = document.querySelector('#tempMax')
var minTemp = document.querySelector('#tempMin')
var hum = document.querySelector('#humidity')
const myKey = '31552ea022bd94907ad64db8fcb6a2ca'


function convTemp(val){
    x = (val - 273.15).toFixed(2)
    y = x * 1.8
    z = y + 32
    return z
}



btn.addEventListener('click', function()
{
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+myKey)
  .then(res => res.json())


  .then(data => 
  {
    var city1 = data['name']
    var tempature = data['main']['temp']
    var mxTemp = data['main']['temp'][2]
    var mnTemp = data['main']['temp'][1]
    var hmi = data['main']['humidity']


    city.innerHTML=`Weather of <span>${city1}<span>`
    currTemp.innerHTML = `Current Temp: <span>${ convTemp(tempature)}°F</span>`
    maxTemp.innerHTML = `Today\'s High: ${mxTemp}`
    minTemp.innerHTML = `Tpday\'s Low: ${mnTemp}`
    hum.innerHTML = `Humidity: ${hmi}`
    

  })

  .catch(err => alert('City does not exist, check spelling.'))
})