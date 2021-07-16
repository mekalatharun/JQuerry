// // jQuery() or
// // $(document).ready(function(){
// //   $("h1").css("color","red");
// // });when we use script tags in head.
// $("h1").css("color","red");//if u have 2 properties it means u r setting value
// console.log($("h1").css("color"));//1 property means getting the value
// console.log($("h1").css("font-size"));
// // in js we use document.querySelectorAll("button"); it will select 1st button until and unless we give index
// //but in jquery it will select all the buttons by just typing
// $("button");
// $("h1").addClass("big-title");
// $("h1").removeClass("big-title"); to removeClass
//$("h1").addClass("big-title margin-50");//selecting multiple classes
//$("h1").hasClass("big-title"); to check whether the class is present or not
// $("h1").text("Bye");// to change the text
// $("button").text("Dont click me");// to change the text its like textContent in js
// $("button").html("<em>Hey</em>");// its like inner.HTML in js
//$("img").attr();//its like attributes in js
// console.log($("img").attr("src"));// its like getAttribute in js
// $("a").attr("href","https://www.yahoo.com");// its like setAttribute in js
//in jQuery
// $("h1").click(function(){
//   $("h1").css("color","purple");
// })
//IN Js
// for(var i=0;i<5;i++){
//   document.querySelectorAll("button")[i].addEventListener("click",function(){
//     document.querySelector("h1").style.color="purple";
//   })
// }
//in jQuery
// $("button").click(function(){
//   $("h1").css("color","pink");
// })

// $("input").keydown(function(event){
//   console.log(event.key);
// })
// $(document).keydown(function(event){
//   $("h1").text(event.key);
// })
// $("h1").on("click",function(){//easy way compared to above 2 methods refer mdn for more events
//   $("h1").css("color","purple");
// })
// $("h1").before("<button>Click</button");
// $("h1").after("<button>Click</button");
// $("h1").prepend("<button>Click</button");//this adds button in h1 tag before text
// $("h1").append("<button>Click</button");//this adds button in h1 tag append text
// $("button").remove();//removes all the buttons
//Jquery animations
// $("h1").on("click",function(){
//   $("h1").hide();
// });
// to get back $("h1").show();
// $("button").on("click",function(){
//   $("h1").toggle(); console
// });
// $("button").on("click",function(){
//   $("h1").fadeOut();
// });
//to get back $("h1").fadeIn(); console
// $("button").on("click",function(){
//   $("h1").fadeToggle();
// });
//so many like slideUp(),slideDown(),slideToggle();
$("button").on("click",function(){
  $("h1").animate({opacity:0.5});// it will only take numbers(2nd value) (color:red) wont work
});
$("button").on("click",function(){
  $("h1").slideUp().slideDown().animate({opacity:0.5});// its called chaining
});
