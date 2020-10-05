/**
 * TODO: Update the text in the "Formatted Text" section as a user types in the textarea
 * TODO TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */

var textinput=document.getElementById('text-input');
var btnbold=document.getElementById('bold')
var btnitalic=document.getElementById('italic')
var btnunderline=document.getElementById('underline')
var btnleftalign=document.getElementById('left-align')
var btncenteralign=document.getElementById('center-align')
var btnrightalign=document.getElementById('right-align')

btnbold.addEventListener('click',makeBold)
btnitalic.addEventListener('click',makeItalic)
btnunderline.addEventListener('click',makeUnderline)
btncenteralign.addEventListener('click',function(e){
  alignText(e,'center');
})
btnleftalign.addEventListener('click',function(e){
  alignText(e,'left');
})
btnrightalign.addEventListener('click',function(e){
  alignText(e,'right');
})
textinput.addEventListener('keydown',updateText);
/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
function updateText(){
  // CODE GOES HERE

  let text=textinput.value;
  let formatedtext=document.getElementById('text-output');
  formatedtext.innerText=text;

}

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
function makeBold(elem){
  //CODE GOES HERE
  console.log(elem.target)
  let btn=elem.target
  btn.classList.toggle('active');
  let formatedtext=document.getElementById('text-output');
  formatedtext.classList.toggle('bold');

}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem){
  let btn=elem.target
  btn.classList.toggle('active');
  let formatedtext=document.getElementById('text-output');
  formatedtext.classList.toggle('italic');
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline(elem){
    //CODE GOES HERE
  let btn=elem.target
  btn.classList.toggle('active');
  let formatedtext=document.getElementById('text-output');
  if(formatedtext.classList.contains('underline')){
   formatedtext.classList.remove('underline');
  } else{
    formatedtext.classList.add('underline');
  }

}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
function alignText(elem, alignType){
  // CODE GOES HERE
 let item=elem.target.parentElement;
 document.getElementById('text-output').style.textAlign=alignType;
  let btnlist=document.getElementsByClassName('align');
    for(let i=0; i<btnlist.length; i++){
      btnlist[i].classList.remove('active');
    }
  item.classList.add('active');
}