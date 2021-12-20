import { Component, OnInit } from '@angular/core';

interface FullNews{
  news1:string;
  news2:string;
}
interface ShortNews{
  short1:string;
  short2:string;
}

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})


export class Test2Component implements OnInit {

  isEdit:boolean = false;
  isEdit1:boolean = false;

  text = "";
  text1 ="";

  photoList = 
  [
  {photo1 : "assets/467896.jpg", photo2: "assets/images.jfif"},
  {photo1name:"FirstPhoto", photo2name:"SecondPhoto"}
  ]

  ShortnewsList: ShortNews = {
    short1: "Lorem, ipsum dolor sit amet consectetur", 
    short2: "Contrary to popular belief, Lorem Ipsum is not simply random text."}

  FullnewsList: FullNews = {
    news1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.На відміну від поширеної думки Lorem Ipsum не є випадковим набором літер. Він походить з уривку класичної латинської літератури 45 року до н.е., тобто має більш як 2000-річну історію. Річард Макклінток, професор латини з коледжу Хемпдін-Сидні, що у Вірджінії, вивчав одне з найменш зрозумілих латинських слів",
    news2: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Вже давно відомо, що читабельний зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum полягає в тому, що цей текст має більш-менш нормальне розподілення літер на відміну від, наприклад."};

  add1(){
    this.text = this.FullnewsList.news1;
  }

  add2(){
    this.text1 = this.FullnewsList.news2;
  }

  constructor() { }
  
  ShowEdit(){
    this.isEdit =!this.isEdit;
  }
  
  ShowEdit1(){
    this.isEdit1 =!this.isEdit1;
  }

  ngOnInit(): void {
  }

}
