$("#flipbook").turn({
    width: 1108,
    height: 552,
    autoCenter: false,
  gradients:false
  });
$(".page").not(":first").each(function(i) {
  $(this).attr("title", i+1);
})