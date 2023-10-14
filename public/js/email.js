// function sendEmail(){

//   const selectedSubject = document.getElementById("subjects").value;
//   const Name = document.getElementById("firstName").value;
//   const lastName = document.getElementById("lastName").value;
//   const age = document.getElementById("age").value;
//   const phone = document.getElementById("phone").value;

//   const messageBody = `Selected Subject: ${selectedSubject}\nName: ${firstName} ${lastName}\nAge: ${age}\nPhone: ${phone}`;
//   Email.send({
//       Host : "smtp.elasticemail.com",
//       Username : "dilshodbeksobirjonov2@gmail.com",
//       Password : "B4863895D6C5D5DBD134BC5A3B331DE6E3EB",
//       To : "a4solixa4@gmail.com",
//       From : "dilshodbeksobirjonov2@gmail.com",
//       Subject : "This is the subject",
//       Body : messageBody
// }).then(
//   message => {
//     if(message=='OK'){
//       swal("Secussful", "You clicked the button!", "success");
//     }
//     else{
//       swal("Error", "You clicked the button!", "error");
//     }
//   }
// );
// }

function sendEmail() {
  const selectedSubject = document.getElementById("subjects").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;
  const phone = document.getElementById("phone").value;

  const messageBody = `Selected Subject: ${selectedSubject}\nName: ${firstName} ${lastName}\nAge: ${age}\nPhone: ${phone}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "dilshodbeksobirjonov2@gmail.com",
    Password: "B4863895D6C5D5DBD134BC5A3B331DE6E3EB",
    To: "a4solixa4@gmail.com",
    From: "dilshodbeksobirjonov2@gmail.com",
    Subject: "This is the subject",
    Body: messageBody
  }).then(
    message => {
      if (message === 'OK') {
        alert("Письмо успешно отправлено.");
      } else {
        alert("Произошла ошибка при отправке письма.");
      }
    }
  );
}