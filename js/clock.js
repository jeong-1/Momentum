const clock = document.querySelector("h2#clock");

/*
function sayHello(){
    console.log("hello");
}
*/
function getClock(){
    const date = new Date();
    let day = "AM";
    let hours = date.getHours();
    if(hours > 12){
        hours = hours - 12;
        day = "PM";
    }
    hours = String(hours).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    

    clock.innerText = `${hours}:${minutes}:${seconds} ${day}`;
}

// setInterval(sayHello, 5000);  // 5초마다 반복
// setTimeout(sayHello, 5000);  // 5초가 지난 후 실행
getClock();  // 처음부터 시간을 바로 보여주기 위해 작성
setInterval(getClock, 1000);