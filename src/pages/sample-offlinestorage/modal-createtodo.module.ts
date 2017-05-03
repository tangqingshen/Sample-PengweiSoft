import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalCreateTodo } from './modal-createtodo';

@NgModule({
  declarations: [
    ModalCreateTodo,
  ],
  imports: [
    IonicPageModule.forChild(ModalCreateTodo),
  ],
  exports: [
    ModalCreateTodo
  ]
})
export class AboutModule { }
