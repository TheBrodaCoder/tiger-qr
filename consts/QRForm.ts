export enum QR_FORM_FIELD {
  URL = "text",
  IMAGE = "image",
  SIZE = "size",
  FORMAT = "format",
  BLOCK_STYLE = "block_style",
  BLOCK_SIZE = "block_size",
}

export interface QRFormData {
  [QR_FORM_FIELD.URL]: string;
  [QR_FORM_FIELD.IMAGE]: string;
  [QR_FORM_FIELD.SIZE]: number;
  [QR_FORM_FIELD.FORMAT]: "png" | "svg";
  [QR_FORM_FIELD.BLOCK_STYLE]: "square" | "dots" | "round";
  [QR_FORM_FIELD.BLOCK_SIZE]: number;
}

export const QR_FORM_DEFAULT_VALUES: QRFormData = {
  [QR_FORM_FIELD.URL]: "",
  [QR_FORM_FIELD.IMAGE]: "",
  [QR_FORM_FIELD.SIZE]: 200,
  [QR_FORM_FIELD.FORMAT]: "svg",
  [QR_FORM_FIELD.BLOCK_STYLE]: "square",
  [QR_FORM_FIELD.BLOCK_SIZE]: 0.2,
};
