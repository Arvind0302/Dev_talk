const students = [
    {name: "Arvind", Rollno: "20135022"},
    {name: "Abhinav", Rollno: "20135006"}
]


function enrollStudent(student, callback)
{
    setTimeout(function() {
        students.push(student);
        console.log("New student has been enrolled");
        callback();
    }, 5000);
}

function getStudents()
{
    setTimeout(function() {
        console.log(students);
    }, 2000);
}

let newStudent = {name:"Rohan", Rollno:"20135084"}
// enrollStudent(newStudent);
// getStudents();
enrollStudent(newStudent, getStudents);



// callback hell

let production = () =>{
    setTimeout(()=>{
      console.log("Task 1 completed")
      setTimeout(()=>{
        console.log("Task 2 completed")
        setTimeout(()=>{
          console.log("Task 3 completed")
          setTimeout(()=>{
            console.log("Task 4 completed")
            setTimeout(()=>{
              console.log("Task 5 completed")
              setTimeout(()=>{
                console.log("Task 6 completed")
                setTimeout(()=>{
                  console.log("Task 7 completed")
                },2000)
              },3000)
            },2000)
          },1000)
        },1000)
      },2000)
    },0000)
  };

production();