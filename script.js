let spanOfweekday = document.getElementById("weekday");
let spanOfquote = document.getElementById("quote");

let date = new Date();
let dayNumber = date.getDay();
let theDayIs;
let quote;

switch(dayNumber){
    case 0:
        theDayIs = "Sunday";
        quote = "Time to chillax";
        break;
    case 1:
        theDayIs = "Monday";
        quote = "Monday is a day of work";
        break;
    case 2:
        theDayIs = "Tuesday";
        quote = "Tuesday is a second day of work";
        break;
    case 3:
        theDayIs = "Wednesday";
        quote = "Wednesday is a third day of work";
        break;
    case 4:
        theDayIs = "Thursday";
        quote = "Thursday is a Meeting day of work";
        break;
    case 5:
        theDayIs = "Friday";
        quote = "Weekend is almost here";
        break;
    case 6:
        theDayIs = "Saturday";
        quote = "Time to party";
        break;
}

spanOfweekday.innerHTML = `${theDayIs}`;
spanOfquote.innerHTML = `${quote}`;
