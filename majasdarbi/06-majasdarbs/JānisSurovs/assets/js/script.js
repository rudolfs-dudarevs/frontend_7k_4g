function getValue() {
    let characters = ['a','b','c','d','e','f','g','h','i','j','k,','l','m','n','o','p','q','r','s','t','u','v','w','x,','y','z'];
    let arrayId = prompt("Type a number from 0 to 25");
    let output = document.getElementById('promptAnswer');
    output.innerHTML = characters[arrayId];

    if( arrayId > 25 || arrayId < 0 || arrayId === null || arrayId === '' || arrayId === isNaN()) {
        Swal.fire({
            title: 'Error!',
            text: 'Something wrong. Please enter the value from 0 to 25',
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Try again'
          }).then((result) => {
            if (result.isConfirmed) {
                getValue();
              } else {
                if (result.isDismissed) {
                    swal.fire(
                        'Cancelled',
                        document.getElementById('promptAnswer').innerHTML = "Try again!"
                    )
                }
              }
          }) 
    } else {
        Swal.fire({
            title: 'Success!',
            text: `You have entered a value ${arrayId}`,
            icon: 'success',
            confirmButtonText: 'OK'
          })
    };

    document.addEventListener("keypress", (eventObject) => {
        if (eventObject.key === characters[arrayId]) {
            alert("Correct");
        } else {
            alert("Check value");
        }
    })
}