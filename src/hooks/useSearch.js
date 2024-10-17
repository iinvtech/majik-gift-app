import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import {openToast, toggleLoader} from '../store/reducer';
import {ApiManager} from '../helpers';

const useSearch = apiPath => {
  const [query, setQuery] = useState('');
  const [searchedData, setSearchedData] = useState([]);
  const dispatch = useDispatch();

  const handleSearch = async searchQuery => {
    dispatch(toggleLoader(true));
    try {
      const {data} = await ApiManager(
        'get',
        `${apiPath}?search=${searchQuery}`,
      );
      setSearchedData(data?.response?.details);
    } catch (error) {
      dispatch(openToast({message: error?.response?.data?.message}));
    } finally {
      dispatch(toggleLoader(false));
    }
  };

  useEffect(() => {
    if (query) {
      handleSearch(query);
    } else {
      setSearchedData([]);
    }
  }, [query]);

  return {
    query,
    setQuery,
    searchedData,
  };
};

export {useSearch};
