import _ from 'lodash';
import React, {useRef, useState} from 'react';
import {TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ProductCard from '../../components/productCard/ProductCard';
import ProductListComponent from '../../components/productListComponent/ProductListComponent';
import {searchProducts} from '../../store/slices/productSlice';
import {styles} from './SearchScreen.style';

export default function SearchScreen() {
  const {products, total, isLoading} = useSelector(
    state => state.product.search,
  );

  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');

  const loadMore = () => {
    if (products.length < total) {
      dispatch(searchProducts({searchQuery, skip: products.length}));
    }
  };

  const refreshData = () => {
    dispatch(searchProducts({searchQuery, skip: 0}));
  };

  const handleSearch = text => {
    setSearchQuery(text);
    delayedSearch.current(text);
  };

  const delayedSearch = useRef(
    _.debounce(text => {
      dispatch(searchProducts({searchQuery: text, skip: 0}));
    }, 500),
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search products"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <ProductListComponent
        data={products}
        renderItem={({item}) => <ProductCard product={item} />}
        loadMore={loadMore}
        refreshData={refreshData}
        loading={isLoading}
      />
    </View>
  );
}
