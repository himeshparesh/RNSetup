export enum ToastType {
  success = 'success',
  error = 'error',
  info = 'info',
}

export type Meta = {
  arg: any;
  requestId: string;
  requestStatus: string;
};

export type RejectedMeta = {
  arg: any;
  requestId: string;
  rejectedWithValue: boolean;
  requestStatus: string;
  aborted: boolean;
  condition: boolean;
};
