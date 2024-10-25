import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { MessagesService } from '../messages.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent {
  private messagesService = inject(MessagesService);
  private cdReff = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);

  // get messages() {
  //   return this.messagesService.allMessage;
  // }

  // messages: string[] = [];

  // ngOnInit() {
  //   const subcription = this.messagesService.message$.subscribe((messages) => {
  //     this.messages = messages;
  //     this.cdReff.markForCheck();
  //   });
  //   this.destroyRef.onDestroy(() => {
  //     subcription.unsubscribe();
  //   });
  // }
  // messages$ = this.messagesService.messages$;
  messages = this.messagesService.allMessages;

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
