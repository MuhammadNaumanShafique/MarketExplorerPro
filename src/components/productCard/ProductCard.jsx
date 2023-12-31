import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './ProductCard.style';

export default function ProductCard({product}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => navigation.navigate('ProductDetails', {product})}>
      <Image source={{uri: product.thumbnail}} style={styles.thumbnail} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${product.price}</Text>
          {product?.discountPercentage && (
            <>
              <Text style={styles.actualPrice}>
                $
                {parseInt(
                  product?.price / (1 - product?.discountPercentage / 100),
                )}
              </Text>
              <View style={styles.discountContainer}>
                <Text style={styles.discount}>
                  {product.discountPercentage}%
                </Text>
              </View>
            </>
          )}
        </View>
        <Text style={styles.stock}>Stock: {product.stock}</Text>
      </View>
    </TouchableOpacity>
  );
}
