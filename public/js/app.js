const d = new Date();
const h = d.getHours();
const greet = document.querySelector("h1.desc");

if ( h >= 3 && h <= 11 ) {
    greet.innerHTML = "Good Morning";
}

else if ( h >= 12 && h <= 18 ) {
    greet.innerHTML = "Good Afternoon";
}

else if ( h >= 19 && h <= 21  ) {
    greet.innerHTML = "Good Evening";
}

else {
    greet.innerHTML = "Good Night";
}