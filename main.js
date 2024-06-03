function onClick() {
    let parola="Apple";
    let input=document.getElementById("input").value;
    let myColor="blue";
    if (parola===input) {
        myColor="green";
        console.log("right", input);
    }
    else {
        myColor="red";
        console.log("wrong", input);
    }
    document.body.style.backgroundColor=myColor;
}





