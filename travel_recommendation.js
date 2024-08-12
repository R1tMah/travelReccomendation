const btnSearch = document.getElementById('btnSearch');
console.log("Hi")
function searchCondition(){
    const input = document.getElementById('conditionInput').value.toLowerCase();
    console.log(input);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            const country = data.countries.find(item => item.name.toLowerCase() === input.toLowerCase());
            if (country) {
                country.cities.forEach(city => {
                    const cityDiv = document.createElement('div');
                    cityDiv.classList.add('city');

                    const cityName = document.createElement('h3');
                    cityName.textContent = city.name;
                    
                    const cityImage = document.createElement('img');
                    cityImage.src = city.imageUrl;
                    cityImage.alt = city.name;

                    const cityDescription = document.createElement('p');
                    cityDescription.textContent = city.description;

                    cityDiv.appendChild(cityName);
                    cityDiv.appendChild(cityImage);
                    cityDiv.appendChild(cityDescription);

                    resultDiv.appendChild(cityDiv);
                });
            } else if(input === "beaches" || input === "beach"){
                beaches.forEach(beach => {
                    const cityDiv = document.createElement('div');
                    cityDiv.classList.add('beach');

                    const beachName = document.createElement('h3');
                    beachName.textContent = beach.name;
                    
                    const cityImage = document.createElement('img');
                    cityImage.src = beach.imageUrl;
                    cityImage.alt = beach.name;

                    const cityDescription = document.createElement('p');
                    cityDescription.textContent = beach.description;

                    cityDiv.appendChild(beachName);
                    cityDiv.appendChild(cityImage);
                    cityDiv.appendChild(cityDescription);

                    resultDiv.appendChild(cityDiv);
                });
            }else if(input === "temple" || input === "temples"){

            }else {
                resultDiv.innerHTML = '<p>No recommendation found for the given input.</p>';
            }
            console.log(country);
        })
        .catch(error => {
            console.error('Error fetching the data:', error);
            resultDiv.innerHTML = 'An error occurred while fetching the data.';
        });
}

btnSearch.addEventListener('click', searchCondition);