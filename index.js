var StaffList = [];
// "create" || "update"
var mode = "create";



function createStaff(){
  
  var id = document.getElementById("tknv").value;
  var fullName = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var date = document.getElementById("datepicker").value;
  var salary = +document.getElementById("luongCB").value;
  var position = document.getElementById("chucvu").value;
  var dateOfWork = +document.getElementById("gioLam").value;
 
  for (var i = 0; i < staffList.length; i++) {
    if (staffList[i].staffId === id) {
      alert("Id đã tồn tại");
      return;
    }
  }



  var staff = new Staff(
    id,
    fullName,
    email,
    password,
    date,
    salary,
    position,
    dateOfWork
  );

  staffList.push(staff);
  renderStaffs();
  saveStaffList();

}



function renderStaffs() {
  var html = "";
  for (var i = 0; i < staffList.length; i++) {
    html += `<tr>
    <td>${staffList[i].staffId}</td>
    <td>${staffList[i].fullName}</td>
    <td>${staffList[i].email}</td>
    <td>${staffList[i].date}</td>
    <td>${staffList[i].position}</td>
    <td>${staffList[i].classStaff()}</td>
    <td>${staffList[i].classListStaff()}</td>
    <td>
    <button 
      onclick="deleteStaff('${staffList[i].staffId}')" 
      class="btn btn-danger">Xoá</button>
    <button 
      onclick="updateStaff('${staffList[i].staffId}')"  
      class="btn btn-info">Sửa</button>
  </td>
    </tr>`;
  }
  document.getElementById("tableDanhSach").innerHTML = html;

 
}

function saveStaffList(){
  var staffListJson = JSON.stringify(staffList);
  localStorage.setItem("SL", staffListJson);
}

function getStaffLists(){
  var staffListJson = localStorage.getItem("SL");
  if(!staffListJson) return[];
  return JSON.parse(staffListJson);
}

function mapStaffList(local) {
  var result = [];

  for (var i = 0; i < local.length; i++) {
    var oldStaff = local[i];
    var newStaff = new Staff(
      oldStaff.staffId,
      oldStaff.fullName,
      oldStaff.email,
      oldStaff.password,
      oldStaff.date,
      oldStaff.salary,
      oldStaff.position,
      
    );
    result.push(newStaff);
  }

  return result;
}

function deleteStaff(id){
    var index = findById(id);
    if(index === -1) return alert("Id không tồn tại");
    staffList.splice(index, 1);
    renderStaffs();
    saveStaffList();
}


function findById(id) {
  for (var i = 0; i < staffList.length; i++) {
    if (staffList[i].staffId === id) {
      return i;
    }
  }

  return -1;
}





window.onload = function(){
  var staffListFromLocal = getStaffLists();
  staffList = mapStaffList(staffListFromLocal);
  renderStaffs();
}


function searchStaff(e) {
  var keyword = e.target.value.toLowerCase().trim();
  var result = [];

  for (var i = 0; i < staffList.length; i++) {
    var staffId = staffList[i].staffId;
    var staffName = staffList[i].fullName.toLowerCase();

    if (staffId === keyword || staffName.includes(keyword)) {
      result.push(staffList[i]);
    }
  }

  renderStaffs(result);
 
}

