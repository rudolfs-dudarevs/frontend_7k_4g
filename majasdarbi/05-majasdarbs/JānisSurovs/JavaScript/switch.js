if (darbaDiena === 'Pirmdiena') {
    console.log('1');
} else if (darbaDiena === 'Otrdiena') {
    console.log('2');
} else if (darbaDiena === 'Trešdiena') {
    console.log('3');
} else if (darbaDiena === 'Ceturtdiena') {
    console.log('4');
} else if (darbaDiena === 'Piektdiena') {
    console.log('5');
} else if (darbaDiena === 'Sestdiena') {
    console.log('6');
} else if (darbaDiena === 'Svētdiena') {
    console.log('7');
} else {
    console.log('Error');
}

switch (new Date().getDay()) {
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
    case 7:
        day = "Sunday";
        break;
  }