const report = document.getElementById("report");
const btnSearch = document.getElementById('btnSearch');

function searchCondition(){
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            const recommendation = data.countries.find(item => item.name.toLowerCase() === input);

            console.log(recommendation)
        }
        
        )
}