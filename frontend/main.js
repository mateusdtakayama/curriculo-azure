window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiProd = 'https://azureresumecounterdelai.azurewebsites.net/api/GetResumeCounter?code=3y_49VEB66P6caP31CuZnq5ci0htY1ajxbyXpQbOLDYfAzFuZSeiZg=='
const functionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiProd).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count =  response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}