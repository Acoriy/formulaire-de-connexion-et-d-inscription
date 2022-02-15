function changeSection1(){
  document.querySelector('.login').style.display = 'none'
  document.querySelector('.signup').style.display = 'block'
  document.querySelector('.form2').style.opacity = '0'
  window.setTimeout(function() {
    document.querySelector('.signup').style.left = '50%'
    document.querySelector('.login').style.left = '50%'
    document.querySelector('.form2').style.opacity = '1'
  }, 50)
}
function changeSection2(){
  document.querySelector('.signup').style.display = 'none'
  document.querySelector('.login').style.display = 'block'
  document.querySelector('.form1').style.opacity = '0' 
  window.setTimeout(function() {
    document.querySelector('.login').style.left = '0%'
    document.querySelector('.signup').style.left = '0%'
    document.querySelector('.form1').style.opacity = '1'
  }, 50)
}