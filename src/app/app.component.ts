import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule,FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// import 'ckeditor5/ckeditor5.css';
import {ClassicEditor,Bold,Essentials,Heading,Indent,IndentBlock,Italic,Link,List,MediaEmbed,Paragraph,Table,Undo} from 'ckeditor5';
import { NgIf } from '@angular/common';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet,NgIf,CommonModule],
  templateUrl: './app.component.html',
  // template: `<ckeditor
  //               [editor]="Editor"
  //               [(ngModule)]="editorData"
  //               [config]="editorConfig"></ckeditor>
                
  //               <p>Editor Output:</p>
  //               <div [innerHtml]="edioteData"></div>
  //               `,
  styleUrl: './app.component.css'
})


export class AppComponent {
  // This is for the Side-nav-bar to compress and expand

  showSidebar = true;
  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }



  title = 'FORMS';
  
  // email=new FormControl();
  // password=new FormControl();
  // message=new FormControl();
  // range=new FormControl();

  ProfileForm =new FormGroup({
    name:new FormControl('',[Validators.required,Validators.maxLength(50)]),
    password:new FormControl('',[Validators.minLength(8),Validators.required]),
    mail:new FormControl('hello@mail.com',[Validators.required,Validators.email]),
    search:new FormControl('',[Validators.required]),
    range:new FormControl('',[Validators.required]),
    // newRange:new FormControl(),
  })
  footerForm=new FormGroup({
    email:new FormControl(),
    message:new FormControl(),
    

  })

  displaygroup(){
    console.log(this.ProfileForm.value);
  }
  onSubmit(){
    console.log("Onsubmit called");
  }

  setValue(){
    this.ProfileForm.setValue({
      name:'jeet',
      password:'jeet',
      mail:'jeet@test.com',
      search:'jeet',
      range:'10',
    })
  }

  // GETTER METHOD
  get name(){
    return this.ProfileForm.get('name');
  }

  get password(){
    return this.ProfileForm.get('password');
  }
  get mail(){
    return this.ProfileForm.get('mail');
  }

  get search(){
    return this.ProfileForm.get('search');
  }
  
  get range(){
    return this.ProfileForm.get('range');
  }


  // public Editor=ClassicEditor;
  // public config ={
  //   toolbar:[
  //     'undo','redo','|',
  //     'heading','|','bold','italic','|',
  //     'link','insertTable','mediaEmbed','|',
  //     'bulletedList','numberedList','indent','outdent'
  //   ],
  //   plugins:[
  //     Bold,
  //     Essentials,
  //     Heading,
  //     Indent,
  //     IndentBlock,
  //     Italic,
  //     Link,
  //     List,
  //     MediaEmbed,
  //     Paragraph,
  //     Table,
  //     Undo
  //   ]
  // }


  
}
