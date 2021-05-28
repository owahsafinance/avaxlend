
// If you change valueOfBar it will automatic show on progress bar

var valueOfBar = '683.0';
var max_bnb = '1300';

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
