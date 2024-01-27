 const increaseCounter = () => {
    let currentCount = parseInt(document.getElementById("counter").innerText);
    
    let count = 30
    
    count++

    document.getElementById("counter").innerText = count;
}
window.addEventListener('DOMContentLoaded', (event) => {
    increaseCounter();
});