// Get logged-in student
const student = JSON.parse(localStorage.getItem("loggedInStudent"));

// If no student is logged in
if (!student) {
    alert("Please login first.");
    window.location.href = "login.html";
}

// Display student details
document.getElementById("studentName").textContent = student.name;
document.getElementById("studentRoll").textContent = student.roll;

// Current date and time
const now = new Date();

const date = now.toLocaleDateString();
const time = now.toLocaleTimeString();

document.getElementById("currentDate").textContent = date;
document.getElementById("currentTime").textContent = time;

// Mark attendance
document.getElementById("attendanceBtn").addEventListener("click", function () {

    let attendance = JSON.parse(localStorage.getItem("attendance")) || [];

    attendance.push({
        name: student.name,
        roll: student.roll,
        date: date,
        time: time,
        status: "Present"
    });

    localStorage.setItem("attendance", JSON.stringify(attendance));

    document.getElementById("message").innerHTML =
        "<span class='success'>Attendance Marked Successfully!</span>";

});