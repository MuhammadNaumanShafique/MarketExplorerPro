import {StyleSheet} from 'react-native';
import {WP, colors} from '../../utilities';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  swiper: {
    height: WP(75),
  },
  thumbnail: {
    width: '100%',
    height: WP(75),
    resizeMode: 'cover',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    paddingHorizontal: WP(5),
    paddingVertical: WP(3.75),
  },
  title: {
    fontSize: WP(4),
    fontWeight: 'bold',
    marginBottom: WP(2.5),
  },
  brand: {
    fontSize: WP(4),
    marginBottom: WP(1.25),
  },
  price: {
    fontSize: WP(4.5),
    fontWeight: 'bold',
    marginBottom: WP(1.25),
    color: colors.GREEN,
  },
  stock: {
    fontSize: WP(4),
    marginBottom: WP(1.25),
  },
  category: {
    fontSize: WP(4),
    marginBottom: WP(1.25),
  },
  rating: {
    fontSize: WP(4),
    marginBottom: WP(3.75),
  },
  description: {
    fontSize: WP(4),
    lineHeight: WP(6),
  },
});
