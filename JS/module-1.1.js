// Write the code which verify user rights.
// Step 1. Check login
// 	Ask user for a login // use prompt()
// 	If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
// 	If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”.
// 	If it’s another string – then show “I don’t know you”.
// 	If the visitor enters "User" or "Admin", then prompt for a password.
// Step 2. Check password:
// 	For an empty string or cancelled input, show “Canceled.”
// 	For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”.
// In other case, show “Wrong password”.
// Step 3. Greets the user appropriately:
// 	If the current time in hours is more then 5.00 and less then 20: // current hours – new Date().getHours()
// 	For “User” show “Good day, dear User!”
// 	For “Admin” show “Good day, dear Admin!”
// 	In other way:
// 	For “User” show “Good evening, dear User!”
// 	For “Admin” show “Good evening, dear Admin!

const login = prompt("Please enter login");
const time = new Date().getHours();
console.log(time);
if (login === "" || login === null) {
    alert("Canceled");
}
else if (login.length < 4) {
    alert("I don't know any users having name length less than 4 symbols");
}
else if (login !== "User" && login !== "Admin") {
    alert("I don’t know you");
}
else {
    const password = prompt("Please enter login");
    if (password === "") {
        alert("Canceled");
    }
    else if (login === "User" && password === "UserPass") {
        if (time > 4 && time <21) {
            alert("Good day, dear User!");
        }
        else {
            alert("Good evening, dear User!");
        }
    }
    else if (login === "Admin" && password === "RootPass") {
        if (time > 4 && time < 21) {
            alert("Good day, dear Admin!");
        }
        else {
            alert("Good evening, dear Admin!");
        }
    }

    // console.log("dfdjghjkdg");
}


