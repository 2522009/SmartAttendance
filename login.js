const students = [
    {
        id:"101",
        password:"1234",
        name:"Panot Soham",
        roll:"IT001"
    },
    {
        id:"102",
        password:"1234",
        name:"Parmar Het",
        roll:"IT002"
    },
    {
        id:"103",
        password:"1234",
        name:"Soneji Vyom",
        roll:"IT003"
    }
];

//Login Form
document.getElementById("loginForm").addEventListener("submit",function(event)
{
    event.preventDefault();

    const studentId=document.getElementById("studentId").value.trim();

    const password=document.getElementById("password").value.trim();

    //Find Student
    const student= students.find(function(s){
        return s.id === studentId&& s.password=== password;
    });

    if (student) {

    localStorage.setItem("loggedInStudent", JSON.stringify(student));

    alert("Login Successful!");

    window.location.href = "attendance.html";

} else {

    alert("Invalid Student ID or Password");

}

});
