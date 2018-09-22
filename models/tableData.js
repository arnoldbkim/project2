// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
    {
      name: "Arnold",
      email: "arnold@gmail.com",
      phoneNumber: "555-555-5555",
      attractions: "Badmaash",
      time: "12:00pm"
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = tableArray;
  