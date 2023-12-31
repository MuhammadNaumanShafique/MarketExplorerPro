import {StyleSheet} from 'react-native';
import {WP, colors} from '../../utilities';

export const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.GREY200,
    paddingBottom: WP(3),
    marginBottom: WP(3),
  },
  thumbnail: {
    width: WP(25),
    height: WP(25),
    borderRadius: WP(2),
    marginRight: WP(3),
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: WP(4.5),
    fontWeight: 'bold',
    marginBottom: WP(1),
  },
  description: {
    fontSize: WP(3.5),
    color: colors.GREY500,
    marginBottom: WP(2),
  },
  price: {
    fontSize: WP(4),
    fontWeight: 'bold',
    color: colors.GREEN,
  },
  stock: {
    marginTop: WP(1),
    fontSize: WP(3),
    color: colors.GREY800,
  },
  actualPrice: {
    textDecorationLine: 'line-through',
    color: colors.GREY700,
    marginLeft: WP(1),
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountContainer: {
    backgroundColor: colors.GREEN,
    borderRadius: WP(1),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: WP(1),
    marginLeft: WP(2),
  },
  discount: {color: 'white'},
});
