const root = document.querySelector("#root");
const rootTwo = document.querySelector("#root-two");

const showTime = () => {
    const date = new Date();
    let day = (date.getDate() < 10) ? "0" + date.getDate() : date.getDate();
    let month = (date.getMonth() < 10) ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
    let year = date.getFullYear();
    let hours = (date.getHours() < 10) ? "0" + date.getHours() : date.getHours();
    let minutes = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes();
    let seconds = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds(); 

    root.innerText = day + "/" + month + "/" + year;
    rootTwo.innerText = hours + ":" + minutes + ":" + seconds;
    
}

setInterval(showTime, 1000)