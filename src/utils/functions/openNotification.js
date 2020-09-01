import { notification } from "antd";

export const openInfoNotification = (placement, text) => {
  notification.info({
    message: `${text}`,
    placement,
  });
};

export const openSuccessNotification = (placement, text) => {
  notification.success({
    message: `${text}`,
    placement,
  });
};

export const openWarningNotification = (placement, text) => {
  notification.warning({
    message: `${text}`,
    placement,
  });
};

export const openErrorNotification = (placement, text) => {
  notification.error({
    message: `${text}`,
    placement,
  });
};
