inProgress();

function inshow() {
  let hide = document.getElementById('todo');
  hide.classList = "d-none"
  let hided = document.getElementById('done');
  hided.classList = "d-none"
  let show = document.getElementById('progress');
  show.classList.remove('d-none')
  let tobor = document.getElementById('tobor');
  tobor.classList.remove('border-bottom');
  tobor.classList.remove('shadow');
  let dbor = document.getElementById('dbor');
  dbor.classList.remove('border-bottom');
  dbor.classList.remove('shadow');
  let inbor = document.getElementById('inbor');
  inbor.classList = 'border-bottom border-info shadow';  
  inProgress();
}
function newin(int){
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteObj = [];
  }
  else {
    noteObj = JSON.parse(notes);
  }
  let newc = localStorage.getItem("newc");
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

  let newObj = {
    title: title,
    text: text,
    font: font,
    bg: bg
  }
  newArray.push(newObj);
  localStorage.setItem("newc", JSON.stringify(newArray));
  inProgress();
  delet(int);
}

function dnewin(int){
  let notes = localStorage.getItem("newd");
  if (notes == null) {
    noteObj = [];
  }
  else {
    noteObj = JSON.parse(notes);
  }
  let newc = localStorage.getItem("newc");
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

  let newObj = {
    title: title,
    text: text,
    font: font,
    bg: bg
  }
  newArray.push(newObj);
  localStorage.setItem("newc", JSON.stringify(newArray));
  inProgress();
  delet3(int);
}


function inProgress() {
  let newc = localStorage.getItem("newc");
  if (newc == null) {
    newArray = [];
  }
  else {
    newArray = JSON.parse(newc);
  }
 
  let html = "";
  newArray.forEach(function (element, index) {
    html += `
  <div class="noteCard shadow-lg my-2 ml-1 card" style="width: 15rem; background-color:${element.bg} ;">
    <div class="text-center">
      <span class="btn text-center shadow rounded-pill" style="background-color:${element.font};">
      </span>
    </div>
    <div class="card-body mb-3">
      <div class="row border-bottom mb-3">
        <h5 class="card-title text-uppercase" style="color:${element.font};">${element.title}</h5>
        <div class="dropdown ml-3">
          <a class="dropdown-toggle" style="color:${element.font};" href="#" role="button"
            id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          </a>
          <div class="dropdown-menu" style="background-color:${element.bg};"
            aria-labelledby="dropdownMenuLink">
            <a onclick="copyin(this.id)" id="${index}" class="dropdown-item border-bottom"
              style="color:${element.font};">
              <i class="fas text-info fa-copy"></i> Copy
            </a>
            <a id="${index}" style="color:${element.font};" onclick="deleteNotein(this.id)"
              class="dropdown-item">
              <i class="fas text-info fa-trash-alt"></i> Delete
            </a>
          </div>
        </div>
      </div>
      <p id="cont${index}" class="card-text" style="color:${element.font} ;"> ${element.text}</p>
    </div>
    <div class="card-footer ">
      <div class="row">
        <a class="nav-link h6 text-dark" onclick="pnewt(this.id)" id="${index}">
          <i class="fas fa-clipboard"></i>
        </a>
        <a class="nav-link h6 text-dark">
          <i class="fas text-info fa-clipboard-list"></i>
        </a>
        <a class="nav-link h6 text-dark" onclick="innewd(this.id)" id="${index}">
          <i class="fas fa-clipboard-check"></i>
        </a>
      </div>
    </div>
  </div>
  `;
  });
  let Elm = document.getElementById("inprogress");
  if (newArray.length != 0) {
    Elm.innerHTML = html;
  } 
  else {
    Elm.innerHTML = `Nothing to show! Use "Add a Card" section above to add notes.`;
  }
}

function deleteNotein(index) {
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

/////////////////////////////////***Copy Function***/////////////////////////////////////


function copyin(index) {
  let cont = document.getElementById('cont' + index);
  let text = cont.innerText;
  let input = document.createElement('input');
  input.setAttribute('value', text);
  cont.appendChild(input);
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

/////////////////////////////////////////////***inProgress all delete***/////////////////////////////////////////

function deletein(){
  localStorage.removeItem('newc');
  inProgress();
}

