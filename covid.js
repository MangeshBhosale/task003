var req = new XMLHttpRequest();
req.open('GET',"https://api.covid19api.com/summary",true);
req.send();
req.onload=function(){
    var data = JSON.parse(this.response);
    var size=data.Countries.length;
//console.log(data.Countries.length); 
//console.log(data.Countries)
//console.log(data.Countries[3].CountryCode[0][1])
//CountryCode
//TotalConfirmed: 1288
// TotalDeaths: 43
// TotalRecovered
        for(var i=0; i<size; i++){
           console.log("Date : "+ data.Countries[i].Date+"--"+data.Countries[i].Country+" Country Code is : "+data.Countries[i].CountryCode+" -- Slug Name is : "+data.Countries[i].Slug+" -- New Confirmmed Patient Count is  -- "+data.Countries[i].NewConfirmed+"-- Total Confirmed Patients are : "+data.Countries[i].TotalConfirmed+"--Total Deaths count is : "+data.Countries[i].TotalDeaths +"--Total Patients Recoverd are : "+data.Countries[i].TotalRecovered);
    }


}

