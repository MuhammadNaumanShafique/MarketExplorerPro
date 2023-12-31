import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {styles} from './ProductDetails.style';

export default function ProductDetails({route}) {
  const {product} = route.params;

  return (
    <ScrollView style={styles.container}>
      <Swiper style={styles.swiper} loop={false} showsPagination>
        {product.images.map((image, index) => (
          <Image
            key={index}
            style={styles.image}
            source={{uri: image}}
            resizeMode="contain"
          />
        ))}
      </Swiper>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.brand}>Brand: {product.brand}</Text>
        <Text style={styles.price}>Price: ${product.price}</Text>
        <Text style={styles.stock}>Stock: {product.stock}</Text>
        <Text style={styles.category}>Category: {product.category}</Text>
        <Text style={styles.rating}>Rating: {product.rating}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
  );
}
