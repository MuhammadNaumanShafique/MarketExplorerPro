import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ProductCard from '../../components/productCard/ProductCard';
import ProductListComponent from '../../components/productListComponent/ProductListComponent';
import {getProducts} from '../../store/slices/productSlice';
import {styles} from './HomeScreen.style';

export default function HomeScreen() {
  const navigation = useNavigation();
  const {products, total, isLoading} = useSelector(state => state.product);
  const {user} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts({skip: 0}));
    }
  }, []);

  const loadMore = () => {
    if (products.length < total) {
      dispatch(getProducts({skip: products.length}));
    }
  };

  const refreshData = () => {
    dispatch(getProducts({skip: 0}));
  };

  const navigateToAddProduct = () => {
    navigation.navigate('AddProduct');
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        {user && (
          <TouchableOpacity
            style={styles.addButton}
            onPress={navigateToAddProduct}>
            <Text style={styles.addButtonText}>Add Product</Text>
          </TouchableOpacity>
        )}
        <ProductListComponent
          data={products}
          renderItem={({item}) => <ProductCard product={item} />}
          loadMore={loadMore}
          refreshData={refreshData}
          loading={isLoading}
        />
      </View>
    </SafeAreaView>
  );
}
