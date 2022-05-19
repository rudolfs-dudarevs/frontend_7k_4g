<script>
    Swith day
switch (new Day().getDay()) {
    case 0:
    day = "Pirmdiena";
    console.log("1");
        break;
    case 1:
    day = "Otrdiena";
    console.log("2");
        break;
    case 2:
     day = "Trešdiena";
     console.log("3");
        break;
    case 3:
    day = "Ceturtdiena";
    console.log("4");
        break;
    case 4:
    day = "Piektdiena";
    console.log("5");
        break;
  case 5:
    day = "Sestdiena";
    console.log("6");
        break;
  case 6:
    day = "Svētdiena";
    console.log("7")
}
</script>

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