function Staff(id, fullName, email,password, date, salary, position, dateOfWork) {
    this.staffId = id;
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.date = date;
    this.salary = salary;
    this.position = position;   
    this.dow = dateOfWork;


    this.classStaff = function(){
      if(this.position === "Sếp")
      {return this.salary * 3
      }else if(this.position === "Trưởng phòng"){
        return this.salary * 2 }
        else if(this.position === "Nhân viên"){
          return this.salary}
          };
      
          this.classListStaff = function(){
              if(this.dow>=192){return "xuất sắc"}else if(this.dow>=176){return "giỏi"}else if(this.dow>=160){return "khá"}else{return "trung bình"}
          };

}
