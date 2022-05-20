var selectedRow = null;


// create 동작
function onFormSubmit(){
  var formData = readFormData();
  if(selectedRow == null)
    insertNewRecord(formData);
  else
    updateRecord(formData);

    resetForm();  
}


// form에 입력된 문자열 반환
function readFormData() {
  var formData = {};
  formData["title"] = document.getElementById("title").value;
  formData["writer"] = document.getElementById("writer").value;
  formData["content"] = document.getElementById("content").value;
  return formData;
}

// html 페이지에 data 출력
function insertNewRecord(data) {
  var table = document.getElementById("listAll").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.title;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.writer;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.content;
  cell3 = newRow.insertCell(3);
  cell3.innerHTML = `<a onClick="onEdit(this)">UPDATE</a>
                     <a onClick="onDelete(this)">DELETE</a>`;
}

// form 화면 reset
function resetForm() {
  document.getElementById("title").value = "";
  document.getElementById("writer").value = "";
  document.getElementById("content").value = "";
  selectedRow = null;
}

// 작성
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("title").value = selectedRow.cells[0].innerHTML;
  document.getElementById("writer").value = selectedRow.cells[1].innerHTML;
  document.getElementById("content").value = selectedRow.cells[2].innerHTML;
}



// 삭제
function onDelete(td){
  if(confirm('정말 삭제하시겠습니까?')){
    row = td.parentElement.parentElement;
    document.getElementById("listAll").deleteRow(row.rowIndex);
    resetForm();
  }
}


//업데이트 , form 화면에 재입력 
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.title;
    selectedRow.cells[1].innerHTML = formData.writer;
    selectedRow.cells[2].innerHTML = formData.content;
}