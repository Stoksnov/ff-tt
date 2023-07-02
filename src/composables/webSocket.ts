import type {Ref} from 'vue';
import {ref} from 'vue';

export interface WebSocketReturn {
    supported: boolean;

    data: Ref<any | null>;

    messageEvent: Ref<MessageEvent | null>;
    errorEvent: Ref<Event | null>;
    errored: Ref<boolean>;
    isClosed: Ref<boolean>;
    isOpen: Ref<boolean>;

    send: (data: string | ArrayBufferLike | Blob | ArrayBufferView) => void;
    close: Function;

    ws: WebSocket | null;
}

export function useWebSocket(
  url: string,
  protocols?: string | string[]
): WebSocketReturn {
  const supported = 'WebSocket' in window;
  let ws: WebSocket | null = null;
  const messageEvent = ref(null) as Ref<MessageEvent | null>;
  const errorEvent = ref<Event | null>(null);
  const data = ref<any>(null);

  const isOpen = ref(false);
  const isClosed = ref(false);
  const errored = ref(false);

  let send: (
        data: string | ArrayBufferLike | Blob | ArrayBufferView
    ) => void = () => {};

  let close: (code?: number, reason?: string) => void = () => {};

  if (supported) {
    ws = new WebSocket(url, protocols);
    ws.addEventListener('message', x => {
      messageEvent.value = x;
      data.value = x.data;
    });

    ws.addEventListener('error', error => {
      errorEvent.value = error;
      errored.value = true;
    });

    ws.addEventListener('close', () => {
      isOpen.value = false;
      isClosed.value = true;
    });

    ws.addEventListener('open', () => {
      isOpen.value = true;
      isClosed.value = false;
    });

    send = (data: string | ArrayBufferLike | Blob | ArrayBufferView) =>
            ws!.send(data);

    close = (code?: number, reason?: string) => {
            ws!.close(code, reason);
    };
  }
  return {
    supported,

    ws,
    send,
    close,

    messageEvent,
    errorEvent,

    data,

    isOpen,
    isClosed,
    errored
  };
}