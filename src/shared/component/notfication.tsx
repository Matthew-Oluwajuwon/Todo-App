import { notification } from 'antd';

export const Notify = (message: string, isSuccess:boolean) => {
  notification[isSuccess ? 'success': 'error']({
    message: isSuccess ? '': 'Error',
    description: message,
  });
};
