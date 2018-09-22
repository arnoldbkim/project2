// $(".submit").on("click", function(event) {
//   event.preventDefault();

//   var newPost = {
//     name: $("#reserve-name").val().trim(),
//     phoneNumber: $("#reserve-phone").val().trim(),
//     email: $("#reserve-email").val().trim(),
//     destinations: $("#destinations").val(),
//     attractions: $("#attractions").val()
//   };

//   $.post("/api/confirm", newPost,
//         function(data) {

//           // If a table is available... tell user they are booked.
//           if (data) {
//             alert("Yay! You are officially booked!");
//           }

//           // If a table is available... tell user they on the waiting list.
//           else {
//             alert("Sorry you are on the wait list");
//           }

          
//         });


//   });