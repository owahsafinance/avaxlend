// If you change valueOfBar it will automatic show on progress bar

var valueOfBar = '0.0';
var max_bnb = '100';

document.getElementById('bar').style.width = `${value(valueOfBar)}%`
document.getElementById('bar').style.minWidth = '50px'
document.getElementById('bar_value').innerText = `${valueOfBar}`
document.getElementById('mini_bar_value').innerText = `${valueOfBar}`
valueOfBar = parseInt(valueOfBar)
max_bnb = parseInt(max_bnb)

function value(num){
  width = ( (num * 100) / max_bnb)
  return width
}

if(valueOfBar == 0){
    document.getElementById('bar').style.backgroundColor = 'gray'
}else{
    document.getElementById('bar').style.backgroundColor = 'var(--blue)';
}

var hide = document.querySelector('.hide')
var arrow = document.querySelector('.arrow')
var hidden_box = document.getElementById('hidden_box')




function hideShow(){
  if(hide.innerHTML.toLowerCase() == 'hide'){
    hide.innerHTML = 'Show'
    arrow.style.transform = 'rotateX(0deg)'
    hidden_box.style.display = 'none'
  }else{
    hide.innerHTML = 'Hide'
    arrow.style.transform = 'rotateX(180deg)'
    hidden_box.style.display = 'block'
  }
}

function copyFunc() {
  var copyText = document.getElementById("address");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  document.getElementById('success').style.display="block";

  setTimeout(() => {
    document.getElementById('success').style.display="none";
  }, 1500);

}

document.getElementById('success').style.display="none";

$(document).ready(function() {
		var $toggleNav = $('.navbar-toggler');
		$toggleNav.click(function() {
			$(this).next().slideToggle(300);
		});
	});
	
	//hamburg ani
	$(document).ready(function() {
		var $toggleButton = $('.toggle-button');
		$toggleButton.on('click', function() {
			$(this).toggleClass('button-open');
		});
});
