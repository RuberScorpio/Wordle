let myColor = "red";
function onClick(){
    if (myColor === "red") {
        myColor = "green";
        document.body.style.backgroundColor = myColor;
    } 
    else if (myColor === "green") {
        myColor = "red";
        document.body.style.backgroundColor = myColor;
    }
};