// const Api_key = "8b718b4d2935b7625fe3a17cf8ced283";
const Api_key = "bfc949a46516e5182e1aa8dd6fae20ba";
 function getWeather(){
    const city =document.getElementById("city").value;
    const weaterDetails= document.getElementById("weatherDetails");
    if(city==''){
        weaterDetails.innerHTML="Please Enter City !..";
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_key}`;


    fetch(url)
    .then(response=>response.json())
            .then(data=>{
                if(data.cod=='404'){
                    weaterDetails.innerHTML='<p>city not found. Please Try Again!..</p>';
                }
                else{
                    weaterDetails.innerHTML=`<h2>${data.name},${data.sys.contry}</h2><p>Temparature:${data.main.temp}</p>`;
                }
            })
            .catch(error=>{
                weaterDetails.innerHTML='<p>error feteching data</p>'
            })
 }