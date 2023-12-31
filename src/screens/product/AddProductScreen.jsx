import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {addProduct} from '../../store/slices/productSlice';
import {styles} from './AddProductScreen.style';

export default function AddProductScreen() {
  const navigation = useNavigation();

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productDiscount, setProductDiscount] = useState('');

  const dispatch = useDispatch();

  const handleAddProduct = () => {
    const newProduct = {
      title: productName,
      description: productDescription,
      price: productPrice,
      discountPercentage: productDiscount,
      stock: 30, //Currently using hardcoded values
      brand: '',
      category: '',
      rating: 4.3,
      thumbnail:
        'https://www.freshone.com.pk/content/images/thumbs/default-image_550.png', //Currently using hardcoded image here
      images: [],
    };
    dispatch(addProduct(newProduct));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Product</Text>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={productName}
        onChangeText={setProductName}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Description"
        value={productDescription}
        onChangeText={setProductDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Price"
        value={productPrice}
        onChangeText={setProductPrice}
        keyboardType="numeric"
        returnKeyType="done"
      />
      <TextInput
        style={styles.input}
        placeholder="Discount %"
        value={productDiscount}
        onChangeText={setProductDiscount}
        keyboardType="numeric"
        returnKeyType="done"
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
        <Text style={styles.addButtonText}>Add Product</Text>
      </TouchableOpacity>
    </View>
  );
}
