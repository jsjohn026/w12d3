const FollowToggle = require ('./follow_toggle'); //

// $(function(){
//   $('button.follow-toggle').each((index, el) => {
//     debugger
//     new FollowToggle(el);
//   })
// })
$(function() {
  $('.follow-toggle').each((i, button) => {
    new FollowToggle(button);
  })
  //calls the element type(button tag) and class(follow-toggle) which returns a ?nodelist?
})
// will run as soon as doc finishes loading(ready)