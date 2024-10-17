import Lato from './font-families/Lato';
import LibreBodoni from './font-families/LibreBodoni';
import sizer from './sizer';
import ApiManager from './api-manager';

const formatPhoneNumber = phoneNumber => {
  if (!phoneNumber) return '';
  let phone = String(phoneNumber).replace(/\D+/g, '');
  if (phone.length === 10) {
    return `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6)}`;
  }
  return phone;
};

const hexToRGBA = (hex, opacity) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export {Lato, LibreBodoni, sizer, ApiManager, formatPhoneNumber, hexToRGBA};
