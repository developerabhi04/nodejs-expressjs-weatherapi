const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_Name = document.getElementById('city_name');

const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');



const getInfo = async(event) => {
    event.preventDefault();
    // alert("hii");
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_Name.innerText = `Plz write the name berfor search....!`;
        datahide.classList.add('data_hide')


    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=e1a8bef725b7f4b56e03b655b93423b8`;
        const response = await fetch(url);
        // console.log(response);   response 
        const data = await response.json();
        // console.log(data);   coordinates
        const arrData = [data];


        city_Name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
        temp_real_val.innerText = arrData[0].main.temp;

        // temp_status.innerText = arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main;

            // condition to check sunny , rain or cloudy
            if (tempMood == "Clear") {
                temp_status.innerHTML = " <i class='fas fa-sun'   style='color:#eccc68;'></i> ";
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML = " <i class='fas fa-cloud' style='color:#f1f2f6;'></i> ";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML = " <i class='fas fa-cloud-rain'  style='color:#a4b0be;'></i> ";
            } else if (tempMood == "Snow"){
                temp_status.innerHTML = " <i class='fas fa-snowflake' style='color:#eccc68;'></i> ";
            } else{
                temp_status.innerHTML = " <i class='fas fa-sun' style='color:#eccc68;'></i> ";
            }

            datahide.classList.remove('data_hide')



        }catch{
            city_Name.innerText = `Plz enter the city name properly...!`;
            datahide.classList.add('data_hide');
        }
        

    }
}

submitBtn.addEventListener('click', getInfo);