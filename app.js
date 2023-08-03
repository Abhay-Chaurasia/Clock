const body = document.querySelector("body"),
hourHand = document.querySelector(".hour"),
minuteHand = document.querySelector(".minute"),
secondHand = document.querySelector(".second"),
modeSwitch = document.querySelector(".mode-switch");

//add a click event listener to mode switch
modeSwitch.addEventListener("click", () =>{
    // toggle the dark class on the dody element
    body.classList.toggle("dark")
    //check if the dark class currently present on the body element
    const isDarkMode = body.classList.contains("dark");
    //set modeSwitch text based on dark class presence
    modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark mode";
    //set local storage mode item based on dark class presence
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode")
});

const updateTime = () => {
    //Get current time and calculate degrees for clock hands

    let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360,
    minToDeg = (date.getMinutes() / 60) * 360,
    hrToDeg = (date.getHours() / 12) * 360;
   

    //Rotate the clock hands to the appropriate degree based on the current time

    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};


setInterval(updateTime, 1000);


//call updateTime function on page load
updateTime();