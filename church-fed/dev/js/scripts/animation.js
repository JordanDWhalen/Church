var shapeHex = $('.shape-hex'),
    shapePenta = $('.shape-penta'),
    shapeSquare = $('.shape-square'),
    shapeTri = $('.shape-tri');

function shapeAnimation(shapeType){
  shapeType.each(function(){
    $(this)[0].beginElement();
  });
}

// setInterval(function(){
//
//   setTimeout(function(){
//     shapeAnimation(shapePenta);
//   }, 1000);
//
//   setTimeout(function(){
//     shapeAnimation(shapeSquare);
//   }, 2500);
//
//
//   setTimeout(function(){
//     shapeAnimation(shapeTri);
//   }, 4000);
//
//   setTimeout(function(){
//     shapeAnimation(shapeHex);
//   }, 5500);
//
//
// }, 6000);

var count = 0;
$('body').click(function(){
  count++;
  var slideAmount = count * 20;

  console.log(count);

  switch (count) {
    case 0:
        $('.presentation_container').velocity({ translateX: ('-' + slideAmount + '%')}, { duration: '1000', easing: 'ease-out-quart' });
        shapeAnimation(shapeHex);
      break;
    case 1:
        $('.presentation_container').velocity({ translateX: ('-' + slideAmount + '%')}, { duration: '1000', easing: 'ease-out-quart' });
        shapeAnimation(shapePenta);
      break;
    case 2:
      $('.presentation_container').velocity({ translateX: ('-' + slideAmount + '%')}, { duration: '1000', easing: 'ease-out-quart' });
      shapeAnimation(shapeSquare);
      break;
    case 3:
      shapeAnimation(shapeTri);
      $('.presentation_container').velocity({ translateX: ('-' + slideAmount + '%')}, { duration: '1000', easing: 'ease-out-quart' });
      break;
    case 4:
    $('.presentation_container').velocity({ translateX: ('-' + slideAmount + '%')}, { duration: '1000', easing: 'ease-out-quart' });
      setTimeout(function(){
        $('.presentation_container').velocity({ translateX: ('0%')}, { duration: '0', easing: 'ease-out-quart' });
      }, 1000 );
      shapeAnimation(shapeHex);
      count = 0;
      break;
  }
});
