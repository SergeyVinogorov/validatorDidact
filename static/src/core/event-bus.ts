import { EventBusAbstract, ListenersInterface, EventCalback } from "../types/core";
export class EventBus extends EventBusAbstract {
	listeners: ListenersInterface = {}
  constructor() {
		super()
  }

  on(event: string, callback: EventCalback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: EventCalback) {
		if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback
    );
  }

	emit(event: string, ...args: any) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
    
    this.listeners[event].forEach(function(listener) {
      listener(...args);
    });
  }
}