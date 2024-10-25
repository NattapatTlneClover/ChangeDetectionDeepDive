import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  // messages$ = new BehaviorSubject<string[]>([]);
  // private messages: string[] = [];
  // get allMessage() {
  //   return [...this.messages];
  // }
  // addMessage(messages: string) {
  //   this.messages = [...this.messages, messages];
  //   this.messages$.next([...this.messages]);
  // }

  private messages = signal<string[]>([]);
  allMessages = this.messages.asReadonly();

  addMessage(message: string) {
    this.messages.update((oldMessages) => [...oldMessages, message]);
  }
}
