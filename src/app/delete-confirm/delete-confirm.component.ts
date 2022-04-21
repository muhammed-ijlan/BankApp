import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css'],
})
export class DeleteConfirmComponent implements OnInit {
  constructor() {}
  @Input() item: string | undefined;
  @Output() onCancel = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  ngOnInit(): void {}

  cancel() {
    this.onCancel.emit();
  }
  delete() {
    this.onDelete.emit(this.item);
  }
}
