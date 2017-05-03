import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalEditTodo } from './modal-edittodo';

@NgModule({
  declarations: [
    ModalEditTodo,
  ],
  imports: [
    IonicPageModule.forChild(ModalEditTodo),
  ],
  exports: [
    ModalEditTodo
  ]
})
export class AboutModule { }
