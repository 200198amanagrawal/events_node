function student(){
    this.name="aman";
    this.age=22;
}
//making a prototype to add extra data as inheritance
student.prototype={
    address:"adress",
    getname:function(){
        return this.name;
    }
}
var stud=new student();
console.log(stud.address);
console.log(stud.getname());