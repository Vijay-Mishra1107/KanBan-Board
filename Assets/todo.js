// console.log("Welcome to notes app. This is app.js");
showNotes();

// $(window).on('load', function () {
//   $('.loader').fadeOut(1000);
//   $('.coten').fadeIn(1000);
// });

///////////////////////////////***Show kaban-card input form***///////////////////////////////////////////////////////

function showOn() {
  let add = document.getElementById("Add+");
  add.classList = 'd-none';
  let show = document.getElementById("show");
  show.removeAttribute('class');
}

///////////////////////////////***Hide kaban-card input form***///////////////////////////////////////////////////////

function hide() {
  let show = document.getElementById("show");
  show.classList = 'd-none';
  let add = document.getElementById("Add+");
  add.classList = 'd-show btn btn-info';
}

///////////////***If user adds a kaban-card, add it to the localStorage***////////////////////////////////////////////////

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  // console.log(e);
  let addt = document.getElementById("addTitle").value;
  let add = document.getElementById("addTxt").value;
  let font_color = document.getElementById("font_color").value;
  let bg_color = document.getElementById("bg_color").value;

  if (addt == '') {
    let adt = document.getElementById("alert");
    adt.innerHTML = `
                     <div class="alert alert-danger" role="alert">
                        Please fill the note title?
                     </div>
    `;
    let t_err = document.getElementById("t_err");
    t_err.innerHTML = `*Please fill the note title?`;
  }
  else {
    if (add == '') {
      let adt = document.getElementById("t_err");
      adt.classList = 'd-none';
      let ad = document.getElementById("alert");
      ad.innerHTML = `
                     <div class="alert alert-danger" role="alert">
                        Please fill the note?
                     </div>
    `;
      let n_err = document.getElementById("n_err");
      n_err.innerHTML = `*Please fill the note?`;
    }
    else {
      let n_err = document.getElementById("n_err");
      n_err.classList = 'd-none';
      let ada = document.getElementById("alert");
      ada.classList = 'd-none';
      let a = document.getElementById("alert-success");
      a.innerHTML = `
    <div class="alert alert-success" role="alert">
   Your note success full add.
  </div>
    `;
      if (font_color == '') {
        let t_err = document.getElementById("t_err");
        t_err.classList = 'd-none';
        let ad = document.getElementById("alert");
        ad.innerHTML = `
                     <div class="alert alert-danger" role="alert">
                        Please fill the note?
                     </div>
    `;
        let fc_err = document.getElementById("fc_err");
        fc_err.innerHTML = `*Please fill the note?`;
      }
      else {
        let adt = document.getElementById("fc_err");
        adt.classList = 'd-none';
        let ada = document.getElementById("alert");
        ada.classList = 'd-none';
        let a = document.getElementById("alert-success");
        a.innerHTML = `
    <div class="alert alert-success" role="alert">
   Your note success full add.
  </div>
    `;
        if (bg_color == '') {
          let fc_err = document.getElementById("fc_err");
          fc_err.classList = 'd-none';
          let ad = document.getElementById("alert");
          ad.innerHTML = `
                     <div class="alert alert-danger" role="alert">
                        Please fill the note?
                     </div>
    `;
          let bg_err = document.getElementById("bg_err");
          bg_err.innerHTML = `*Please fill the note?`;
        }
        else {
          let bg_err = document.getElementById("bg_err");
          bg_err.classList = 'd-none';
          let ada = document.getElementById("alert");
          ada.classList = 'd-none';
          let a = document.getElementById("alert-success");
          a.innerHTML = `
    <div class="alert alert-success" role="alert">
   Your note success full add.
  </div>
    `;

          let addTxt = document.getElementById("addTxt");
          let addTitle = document.getElementById("addTitle");
          let font_color = document.getElementById("font_color");
          let bg_color = document.getElementById("bg_color");
          let notes = localStorage.getItem("notes");
          if (notes == null) {
            notesObj = [];
          } else {
            notesObj = JSON.parse(notes);
          }
          let myObj = {
            title: addTitle.value,
            text: addTxt.value,
            font: font_color.value,
            bg: bg_color.value
          }
          notesObj.push(myObj);
          localStorage.setItem("notes", JSON.stringify(notesObj));
          addTxt.value = "";
          addTitle.value = "";
          font_color.value = "";
          bg_color.value = "";
          showNotes();
        }
      }
    }
  }
});

function pnewt(int){
  
  let notes = localStorage.getItem("newc");
  if (notes == null) {
    noteObj = [];
  }
  else {
    noteObj = JSON.parse(notes);
  }
  let newc = localStorage.getItem("notes");
  if (newc == null) {
    newArray = [];
  }
  else {
    newArray = JSON.parse(newc);
  }
  let cdata = noteObj[int];
  let text = cdata.text;
  let title = cdata.title;
  let bg = cdata.bg;
  let font = cdata.font;

  let neObj = {
    title: title,
    text: text,
    font: font,
    bg: bg
  }
  newArray.push(neObj);
  localStorage.setItem("notes", JSON.stringify(newArray));
  showNotes();
  delet2(int);
}

function donewto(int){
  
  let notes = localStorage.getItem("newd");
  if (notes == null) {
    noteObj = [];
  }
  else {
    noteObj = JSON.parse(notes);
  }
  let newc = localStorage.getItem("notes");
  if (newc == null) {
    newA = [];
  }
  else {
    newA = JSON.parse(newc);
  }
  let cdata = noteObj[int];
  let text = cdata.text;
  let title = cdata.title;
  let bg = cdata.bg;
  let font = cdata.font;

  let newObj = {
    title: title,
    text: text,
    font: font,
    bg: bg
  }
  newA.push(newObj);
  localStorage.setItem("notes", JSON.stringify(newA));
  showNotes();
  delet3(int);
}

////////////////////////////***Function to show elements from localStorage***////////////////////////////////////////

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
    console.log(notesObj)
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
  <div id="drag${index}" class="noteCard shadow-lg my-2 ml-1 card" draggable="true" ondragstart="drag(event)" style="width: 15rem; background-color:${element.bg} ;">
    <div class="text-center">
      <span class="btn rounded-pill text-center shadow" style="background-color:${element.font};">
      </span>
    </div>
    <div class="card-body mb-3">
      <div class="row border-bottom mb-3">
        <h5 class="card-title text-uppercase" style="color:${element.font} ;">${element.title}</h5>
        <div class="dropdown ml-3">
          <a class="dropdown-toggle" style="color:${element.font};" href="#" role="button"
            id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          </a>
          <div class="dropdown-menu" style="background-color:${element.bg};"
            aria-labelledby="dropdownMenuLink">
            <a onclick="copy(this.id)" id="${index}" class="dropdown-item border-bottom"
              style="color:${element.font};">
              <i class="fas text-info fa-copy"></i> Copy
            </a>
            <a id="${index}" style="color:${element.font};" onclick="deleteNote(this.id)"
              class="dropdown-item">
              <i class="fas text-info fa-trash-alt"></i> Delete
            </a>
          </div>
        </div>
      </div>
      <p id="con${index}" class="card-text" style="color:${element.font} ;"> ${element.text}</p>
    </div>
    <div class="card-footer ">
      <div class="row">
        <a class="nav-link h6 text-dark">
          <i class="fas text-info fa-clipboard"></i>
        </a>
        <a class="nav-link h6 text-dark" onclick="newin(this.id)" id="${index}">
          <i class="fas fa-clipboard-list"></i>
        </a>
        <a class="nav-link h6 text-dark" onclick="newd(this.id)" id="${index}">
          <i class="fas fa-clipboard-check"></i>
        </a>
      </div>
    </div>
  </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Card" section above to add notes.`;
  }
}

///////////////////////////////////***Function to delete a note***//////////////////////////////////////////////////

function deleteNote(index) {
  //   console.log("I am deleting", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

///////////////////////////////////***Search function***/////////////////////////////////////////////////

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {
  let inputVal = search.value.toUpperCase();
  // console.log('Input event fired!', inputVal);
  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("h5")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }
  })
})

let search2 = document.getElementById('searchTxt2');
search2.addEventListener("input", function () {
  let inputVal2 = search2.value.toUpperCase();
  // console.log('Input event fired!', inputVal);
  let noteCards2 = document.getElementsByClassName('noteCard');
  Array.from(noteCards2).forEach(function (element) {
    let cardTxt2 = element.getElementsByTagName("h5")[0].innerText;
    if (cardTxt2.includes(inputVal2)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }
  })
})


/////////////////////////////////***Copy Function***/////////////////////////////////////


function copy(index) {
  let con = document.getElementById('con' + index);
  let text = con.innerText;
  let input = document.createElement('input');
  input.setAttribute('value', text);
  con.appendChild(input);
  input.select();
  document.execCommand("copy");
  input.parentNode.removeChild(input);
};

// ///////////////////////////////////***in todo***//////////////////////////////////////////

function todoshow(int) {
  let hide = document.getElementById('progress');
  hide.classList = "d-none"
  let hided = document.getElementById('done');
  hided.classList = "d-none"
  let show = document.getElementById('todo');
  show.classList.remove('d-none')
  let tobor = document.getElementById('inbor');
  tobor.classList.remove('border-bottom');
  tobor.classList.remove('shadow');
  let dbor = document.getElementById('dbor');
  dbor.classList.remove('border-bottom');
  dbor.classList.remove('shadow');
  let inbor = document.getElementById('tobor');
  inbor.classList = 'border-bottom border-info shadow';  
}

function delet2(index) {
  //   console.log("I am deleting", index);
  let notes = localStorage.getItem("newc");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("newc", JSON.stringify(notesObj));
  inProgress();
}

function delet3(index) {
  //   console.log("I am deleting", index);
  let notes = localStorage.getItem("newd");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("newd", JSON.stringify(notesObj));
  done();
}

/////////////////////////////////////////////***todo all delete***/////////////////////////////////////////

function deleteto(){
  localStorage.removeItem('notes');
  showNotes();
}

//////////////////////////////////////////***Reset Appliction***/////////////////////////////////////

function reset(){
  localStorage.clear();
}

////////////////////////////////////////***Drag-and-Drop***////////////////////////////////////////////////

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server
*/
