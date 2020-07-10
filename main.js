function greaterThen() {
    event.preventDefault();
    let age = document.getElementById("input").value
    if (age >= 18) {
        document.getElementById("result").innerHTML = "Ja, du darfst Shisha rauchen"
    } else {
        document.getElementById("result").innerHTML = "Nein, du darfst keine Shisha rauchen"
    }
}