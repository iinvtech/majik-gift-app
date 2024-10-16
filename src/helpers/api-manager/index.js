import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';

import {baseUrl} from '../../../globals';

async function CheckInternet() {
  try {
    const response = await NetInfo.fetch();
    return response.isConnected;
  } catch (error) {
    console.error('Error checking internet connectivity:', error);
    return false;
  }
}

async function ApiManager(method = '', path = '', params = {}, headerOpt = {}) {
  const isConnected = await CheckInternet();
  if (!isConnected) {
    return new Promise(async (resolve, reject) => {
      reject({
        response: {
          data: {message: 'Please Check Your Internet Connection'},
        },
      });
    });
  }

  let header;
  const token = await AsyncStorage.getItem('access_token');
  if (token) {
    header = {
      headers: {
        Authorization: `Bearer ${token}`,
        ...headerOpt,
      },
    };
  } else {
    header = {
      headers: {
        'Content-Type': 'application/json',
        ...headerOpt,
      },
    };
  }

  return new Promise(function (myResolve, myReject) {
    if (method === 'post' || method === 'put' || method === 'patch') {
      axios[method](baseUrl + path, params, header)
        .then(response => {
          return myResolve(response);
        })
        .catch(err => {
          return myReject(err);
        });
    } else {
      axios[method](baseUrl + path, header)
        .then(response => {
          return myResolve(response);
        })
        .catch(err => {
          return myReject(err);
        });
    }
  });
}

export default ApiManager;
