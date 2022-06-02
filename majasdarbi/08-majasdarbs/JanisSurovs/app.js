function showPassFunction() {
    let pw = document.getElementById("pwInput");
    if(pw.type === "password") {
        pw.type = "text";
    } else {
        pw.type = "password";
    }
}