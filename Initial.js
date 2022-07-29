
window.onload = function(){  
    currentDate = moment().format("MMM Do YY");
    console.log (currentDate);

    document.getElementById("currentDate").innerHTML = currentDate;

}