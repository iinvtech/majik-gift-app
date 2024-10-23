import sizer from './src/helpers/sizer';
const baseUrl = 'https://ea8f-103-156-136-190.ngrok-free.app/api/v1/';
// const baseUrl = 'http://192.168.15:3001/api/v1/';
const baseApiUrl = baseUrl.substring(0, baseUrl.indexOf('/api/v1/') + 1);

export const COLORS = {
  primary: '#D3AFC9',
  secondary: '#9C90C2',
  white: '#FFFFFF',
  whiteV1: '#F5F5F5',
  whiteV2: '#F2F2F2',
  black: '#000',
  blackV1: '#49454F',
  blackV2: '#1D1B20',
  grey: '#4C4C4C',
  greyV1: '#79747E',
  greyV2: '#464646',
  greyV3: '#DBDBDB',
  greyV4: '#8593A8',
  greyV5: '#DEDEDE',
  border: '#F3F3F3',
  danger: '#B3261E',
  greyBg: '#CBCBCB',
  borderV1: '#EBEBEB',
  greyV6: '#A6A6A6',
};

export const baseOpacity = 0.6;

export const dummy_img =
  'https://s3-alpha-sig.figma.com/img/1eb1/b334/e13d23c353c9d4b8ee1fc406955b01dc?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NuKnLS4HjKst6rzgfjuwvsMUHN-ys0uqDbkw2z20M~~yGPwHcVAoxEMsRduhUR2YfOEReBzA9hq4Ez2yzqlSLgSc8ZlAFt0ZztJ-yJe4lt82qpyIP~029U--87AvlJ-kLM-DDZmOXNztVsvdDWeI0mXateUoNm-8fqxhH8zZ~HO0JGNoWGnHWqOqICx8LoTqWx5TLH6EN2pWAyA6PPKlDHAKvJ2zyciWd76FtK5MC0AIIDIL5NYMx4X2XiNlD7XdCuHqQWqHLNNOigPqZPhwccyTkRxGdTQNRHnl-i2KQTAR2ugzAfOd2y~bNtAczGjUqK9xlOQM5s3Tpg6El3oqSg__';

export const placeholder_img =
  'https://vonex.com.au/wp-content/uploads/2021/09/MicrosoftTeams-image-6-768x259.jpg';
export const placeholder_profile =
  'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg';

export const paddingHorizontal = sizer.moderateScale(25);

export {baseUrl, baseApiUrl};
