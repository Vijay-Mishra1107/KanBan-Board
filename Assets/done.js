done();

function doneshow() {
  let hide = document.getElementById('todo');
  hide.classList = "d-none"
  let hided = document.getElementById('progress');
  hided.classList = "d-none"
  let show = document.getElementById('done');
  show.classList.remove('d-none')
  let tobor = document.getElementById('tobor');
  tobor.classList.remove('border-bottom');
  tobor.classList.remove('shadow');
  let inbor = document.getElementById('inbor');
  inbor.classList.remove('border-bottom');
  inbor.classList.remove('shadow');
  let dbor = document.getElementById('dbor');
  dbor.classList = 'border-bottom border-info shadow';  
}
function newd(int){
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteObj = [];
  }
  else {
    noteObj = JSON.parse(notes);
  }
  let newd = localStorage.getItem("newd");
  if (newd == null) {
    newArray = [];
  }
  else {
    newArray = JSON.parse(newd);
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
  newArray.push(newObj);
  localStorage.setItem("newd", JSON.stringify(newArray));
  done();
  delet(int);
}
function innewd(int){
  let notes = localStorage.getItem("newc");
  if (notes == null) {
    noteObj = [];
  }
  else {
    noteObj = JSON.parse(notes);
  }
  let newd = localStorage.getItem("newd");
  if (newd == null) {
    newArray = [];
  }
  else {
    newArray = JSON.parse(newd);
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
  newArray.push(newObj);
  localStorage.setItem("newd", JSON.stringify(newArray));
  done();
  delet2(int);
}
function done() {
  let newd = localStorage.getItem("newd");
  if (newd == null) {
    newArray = [];
  }
  else {
    newArray = JSON.parse(newd);
  }
 
  let html = "";
  newArray.forEach(function (element, index) {
    html += `
  <div class="noteCard shadow-lg my-2 ml-1 card" style="width: 15rem; background-color:${element.bg} ;">
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
            <a onclick="copyd(this.id)" id="${index}" class="dropdown-item border-bottom"
              style="color:${element.font};">
              <i class="fas text-info fa-copy"></i> Copy
            </a>
            <a id="${index}" style="color:${element.font};" onclick="deleteNoted(this.id)"
              class="dropdown-item">
              <i class="fas text-info fa-trash-alt"></i> Delete
            </a>
          </div>
        </div>
      </div>
      <p id="cnt${index}" class="card-text" style="color:${element.font} ;"> ${element.text}</p>
    </div>
    <div class="card-footer ">
      <div class="row">
        <a class="nav-link h6 text-dark" onclick="donewto(this.id)" id="${index}">
          <i class="fas fa-clipboard"></i>
        </a>
        <a class="nav-link h6 text-dark" >
          <i class="fas fa-clipboard-list" onclick="dnewin(this.id)" id="${index}"></i>
        </a>
        <a class="nav-link h6 text-info">
          <i class="fas fa-clipboard-check"></i>
        </a>
      </div>
    </div>
  </div>
  `;
  });
  let Elm = document.getElementById("isDone");
  if (newArray.length != 0) {
    Elm.innerHTML = html;
  } 
  else {
    Elm.innerHTML = `Nothing to show! Use "Add a Card" section above to add notes.`;
  }
}

function deleteNoted(index) {
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

/////////////////////////////////***Copy Function***/////////////////////////////////////


function copyd(index) {
  let cnt = document.getElementById('cnt' + index);
  let text = cnt.innerText;
  let input = document.createElement('input');
  input.setAttribute('value', text);
  cnt.appendChild(input);
  input.select();
  document.execCommand("copy");
  input.parentNode.removeChild(input);
}

function delet(index) {
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

/////////////////////////////////////////////***inProgress all delete***/////////////////////////////////////////

function deleted(){
  localStorage.removeItem('newd');
  done();
}
