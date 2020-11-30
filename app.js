var arr = [
  "Alborz",
  "Ardabil",
  "Bushehr",
  "Chaharmahal and Bakhtiari",
  "East Azerbaijan",
  "Isfahan",
  "Fars",
  "Gilan",
  "Golestan",
  "Hamadan",
  "Hormozgan",
  "Ilam",
  "Kerman",
  "Kermanshah",
  "Khuzestan",
  "Kohgiluyeh and Boyer-Ahmad",
  "Kurdistan",
  "Lorestan",
  "Markazi",
  "Mazandaran",
  "North Khorasan",
  "Qazvin",
  "Qom",
  "Razavi Khorasan",
  "Semnan",
  "Sistan and Baluchestan",
  "South Khorasan",
  "Tehran",
  "West Azerbaijan",
  "Yazd",
  "Zanjan"
];
// ...

let className = 'autocomplete-items';
let input = document.getElementById('myInput');
input.addEventListener('input', function(event){
  /* render a different content each time an input is provided by clearing inside parent */
  let parentDiv = document.getElementsByClassName('autocomplete')[0];
  clearChildDivs(parentDiv);

  let value = event.target.value;
  value = value.toLowerCase();

  if (value != ''){
    let flag = false;
    var element;
    let query = arr.filter((city) => city.toLowerCase().startsWith(value) == true);
    // console.log(query);
    if(query.length == 0 && !checkRepeat('Not Found!', 'not-found')){
      clearChildDivs(parentDiv);

      element = element = document.createElement('div');
      element.className = 'not-found';
      element.innerHTML = 'Not Found!'
      document.getElementsByClassName('autocomplete')[0].appendChild(element);
    }
    else{
      for (var city of query) {
        if (!checkRepeat(city, className)) {
          element = document.createElement('div');
          element.className = className;
          element.innerHTML = city;
          parentDiv.appendChild(element);
        }
      }
    }
  } /* if input is empty clear all child divs */
  else{
    clearChildDivs(parentDiv);
  }



});

input.addEventListener('focusout', function(){
  changeInputVal();
  /* apply delay in clearing elements */
  setTimeout(() =>{
    document.getElementsByClassName('autocomplete')[0].innerHTML = '';
  });
});

function checkRepeat(content, className){
  let items = document.getElementsByClassName(className);
  // console.log(items);
  for (var item of items) {
    if (item.innerHTML == content) {
      return true;
    }
  }
  return false;
}

function clearChildDivs(element){
  element.innerHTML = '';
}

function changeInputVal(){
  let items = document.getElementsByClassName(className);
  console.log(items);
  for (let item of items) {
    console.log(item);
    item.addEventListener('click', function(event){
      console.log('clicked');
      input.value = item.innerHTML;
    });

  }
}

// let items = document.getElementsByClassName(className);
// console.log(items);
// for (let item of items) {
//   console.log(item);
//   item.addEventListener('click', function(event){
//     console.log('clicked');
//     input.value = item.innerHTML;
//   });
//   // item.onclick = function(event){
//   //   console.log('clicked');
//   //   input.value = item.innerHTML;
//   // };
// }

// document.getEl
