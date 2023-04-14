export const min3 = (value: string) => value.trim().length >= 3;
export const min5 = (value: string) => value.trim().length >= 5;

export const max20 = (value: string) => value.trim().length <= 20;
export const max30 = (value: string) => value.trim().length <= 30;
export const max50 = (value: string) => value.trim().length <= 50;

export const roofSizeValid = (value: string) => Number(value) > 0;
export const roofAngleValid = (value: string) => Number(value) <= 50;
export const workerId = (value: string) => value.trim().length === 24;
export const isDNumber = (value: string) => value.trim().length === 11;