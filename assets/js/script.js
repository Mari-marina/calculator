function test(a, b) {
    return a + b
}

// console.log(test(5, 2));
// console.log(test(2, 4));
// console.log(test(9, 1));

// const selectSingle = document.querySelector('.__select');
// const selectSingle_title = selectSingle.querySelector('.__select__title');
// const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// // Toggle menu
// selectSingle_title.addEventListener('click', () => {
//   if ('active' === selectSingle.getAttribute('data-state')) {
//     selectSingle.setAttribute('data-state', '');
//   } else {
//     selectSingle.setAttribute('data-state', 'active');
//   }
// });

// // Close when click to option
// for (let i = 0; i < selectSingle_labels.length; i++) {
//   selectSingle_labels[i].addEventListener('click', (evt) => {
//     selectSingle_title.textContent = evt.target.textContent;
//     selectSingle.setAttribute('data-state', '');
//   });
// }







// const buttonMain = document.querySelector('.calculator_select-button-main')
// const arrayButtons = document.querySelectorAll('.calculator_select-button')
// const selectList = document.querySelector('.calculator_select-list')
// selectList.style.display = 'none'
// buttonMain.addEventListener('click', () => {
//   if(  selectList.style.display === 'block') {
//     selectList.style.display = 'none'
//   } else {
//     selectList.style.display = 'block'
//   }
// })

// arrayButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const [buttonMainImage, buttonMainText] = [buttonMain.children[0].innerHTML, buttonMain.children[1].innerHTML]
//     const [buttonCommonImage, buttonCommonText] = [button.children[0].innerHTML, button.children[1].innerHTML]

//     buttonMain.innerHTML = `
//       <div>${buttonCommonImage}</div>
      
//       <div>${buttonCommonText}</div>
//     `

//     button.innerHTML = `
//     <div>${buttonMainImage}</div>
    
//     <div>${buttonMainText}</div>

//     <div>ссылка</div>
//   `

   
//   })
// })


(function(){
  'use strict'

  // Funções de suporte
  function hasClass(el, className){
      if(el){
          if (el.classList)
              return el.classList.contains(className);
          return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
      }
      return null
  }
  function addClass(el, className){
      if(el){
          if (el.classList)
              el.classList.add(className)
          else if (!hasClass(el, className))
              el.className += " " + className;
      }
  }
  function removeClass(el, className){
      if(el){
          if (el.classList)
              el.classList.remove(className)
          else if (hasClass(el, className))
          {
              let reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
              el.className = el.className.replace(reg, ' ');
          }
      }
  }


  // Manipula todos os Select Images
  let selects = document.getElementsByClassName("select-image");        
  Array.prototype.forEach.call(selects, function (select) {

      // Abre a lista ao clicar
      select.addEventListener('click', function(){
          let list = this.querySelector(".select-image-list")
          addClass(list, "show");
      });

      // Fecha a lsita quando o mouse sair
      select.addEventListener("mouseleave", function() {
          let list = this.querySelector(".select-image-list")
          removeClass(list, "show");
      });

      // Manipula is Select Image Option
      let options = select.getElementsByClassName("select-image-option");
      Array.prototype.forEach.call(options, function (option) {
          
          // Seleciona ao clicar
          option.addEventListener('click', function(){

              // Captura os dados do option selecionado;
              let value = this.getAttribute("data-value");
              let image = this.getAttribute("data-image");
              let name  = this.getAttribute("data-name");

              // Altera as informações do display
              let display = select.getElementsByClassName("select-image-input")[0];
              display.innerHTML = `<img src="`+image+`"/> `+name;

              // Altera o valor do input
              let input = select.querySelector("input");
              input.value = value;

              // Fecha a lista de opções;
              let list = select.querySelector(".select-image-list")
              setTimeout(function(){
                  removeClass(list, "show");
              }, 50)
          });
      });
  });
})();


function show(value) {
    document.querySelector(".text-box").value = value;
  }
  
  let dropdown = document.querySelector(".dropdown")
  dropdown.onclick = function() {
      dropdown.classList.toggle("active")
  }
  

  let openModalBtn = document.getElementById("modalOpen");
  let openModalBtn1 = document.getElementById("modalOpen1");
let modal = document.querySelector(".modal");
let closeModalBtn = document.querySelector(".close-btn");

openModalBtn.addEventListener("click", function () {
    modal.style.display = "flex";
  });
  openModalBtn1.addEventListener("click", function () {
    modal.style.display = "flex";
  });

  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });


  var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
//# sourceMappingURL=script.js.map
