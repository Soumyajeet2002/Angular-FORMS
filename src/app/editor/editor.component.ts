import { Component, viewChild } from '@angular/core';
import { AfterViewInit,ElementRef,OnDestroy,ViewChild } from '@angular/core';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EDITORComponent implements AfterViewInit,OnDestroy {

  // editorref=viewChild('editorRef', { static: true })();
  editorRef!: ElementRef<HTMLDivElement>;
  editor!: EditorJS;

  // @viewChild('editorRef', { static: true }) editorRef!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    this.editor=new EditorJS({
      holder:this.editorRef.nativeElement,
      tools:{
        header:Header,
        list:List,
      },
      placeholder:'Write something',
    })
  }
 ngOnDestroy(): void {
    if (this.editor) {
      this.editor.destroy();
    }
  }
    saveContent() {
    this.editor.save().then((outputData) => {
      console.log('Saved data:', outputData);
    }).catch((error) => {
      console.error('Saving failed:', error);
    });
  }


}
