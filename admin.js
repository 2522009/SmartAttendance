// Load attendance records when page opens
window.onload = function () {
    loadAttendance();
};

// Function to load attendance data
function loadAttendance() {

    let attendance = JSON.parse(localStorage.getItem("attendance")) || [];

    let tableBody = document.getElementById("tableBody");

    tableBody.innerHTML = "";

    if (attendance.length === 0) {

        tableBody.innerHTML =
        `<tr>
            <td colspan="5">No Attendance Records Found</td>
        </tr>`;

        return;
    }

    attendance.forEach(function(student){

        let row = `
        <tr>
            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td>${student.date}</td>
            <td>${student.time}</td>
            <td>${student.status}</td>
        </tr>
        `;

        tableBody.innerHTML += row;

    });

}

// Function to clear attendance
function clearAttendance(){

    let confirmDelete = confirm("Are you sure you want to delete all attendance records?");

    if(confirmDelete){

        localStorage.removeItem("attendance");

        alert("Attendance records cleared successfully!");

        loadAttendance();

    }

}