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

export {Lato, LibreBodoni, sizer, ApiManager, formatPhoneNumber};
