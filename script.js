document.querySelector('button[name="login"]').addEventListener("click", function () {
    let val20 = document.getElementById("val1").value;

    // Remove double quotes from the input
    let json_result = val20.replace(/"/g, '');

    // Show the result in the "json" div
    // document.getElementById("json").innerText = json_result;

    // Check if result is a string (it always will be from input, but okay for demo)
    if (typeof json_result === "string" && json_result.includes("@")) {
        document.getElementById("error").innerText = "Correct email";
        document.getElementById("error").style.color = "green";
    } else {
        document.getElementById("error1").innerText = "Invalid email";
        document.getElementById("error1").style.color = "red";
    }
});
