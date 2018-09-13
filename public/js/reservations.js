$(document).ready(function() {
    // Getting jQuery references to the post body, title, form, and author select
    var firstInput = $("#first");
    var lastInput = $("#last");
    var emailInput = $("#email");
    var resForm = $("#res");
    var phoneInput = $("#phone");
    var timeSelect = $("#time");
    // Adding an event listener for when the form is submitted
    $(resForm).on("submit", handleFormSubmit);
    // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
    var url = window.location.search;
    var postId;
    var resId;
    // Sets a flag for whether or not we're updating a post to be false initially
    var updating = false;
 
  
    // A function for handling what happens when the form to create a new post is submitted
    function handleFormSubmit(event) {
      event.preventDefault();
      // Wont submit the post if we are missing a body, title, or author
      if (!firstInput.val().trim() || !lastInput.val().trim() || !emailInput.val().trim() || !phoneInput.val().trim() || !timeSelect.val()) {
        return;
      }
      // Constructing a newPost object to hand to the database
      var newPost = {
        firstname: firstInput
            .val()
            .trim(),
        lastname = lastInput
            .val()
            .trim(),
        email = emailInput
            .val()
            .trim(),
        phone: phoneInput
          .val()
          .trim(),
        timeId: timeSelect.val()
      };
  
      // If we're updating a post run updatePost to update a post
      // Otherwise run submitPost to create a whole new post
      if (updating) {
        newPost.id = postId;
        updatePost(newPost);
      }
      else {
        submitPost(newPost);
      }
    }
  
    
      $.get(queryUrl, function(data) {
        if (data) {
          console.log(data.timeId || data.id);
          // If this post exists, prefill our cms forms with its data
          titleInput.val(data.title);
          bodyInput.val(data.body);
          timeId = data.timeId || data.id;
          // If we have a post with this id, set a flag for us to know to update the post
          // when we hit submit
          updating = true;
        }
      });
    }
  
    // A function to get Authors and then render our list of Authors
    function getAuthors() {
      $.get("/api/authors", renderAuthorList);
    }
    // Function to either render a list of authors, or if there are none, direct the user to the page
    // to create an author first
    function renderAuthorList(data) {
      if (!data.length) {
        window.location.href = "/authors";
      }
      $(".hidden").removeClass("hidden");
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createAuthorRow(data[i]));
      }
      authorSelect.empty();
      console.log(rowsToAdd);
      console.log(authorSelect);
      authorSelect.append(rowsToAdd);
      authorSelect.val(authorId);
    }
  
    // Creates the author options in the dropdown
    function createAuthorRow(author) {
      var listOption = $("<option>");
      listOption.attr("value", time.id);
      listOption.text(author.name);
      return listOption;
    }
  
    // Update a given post, bring user to the blog page when done
    function updatePost(post) {
      $.ajax({
        method: "PUT",
        url: "/api/posts",
        data: post
      })
        .then(function() {
          window.location.href = "/index";
        });
    }
  });
  