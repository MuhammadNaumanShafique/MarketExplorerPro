import {StyleSheet} from 'react-native';
import {WP, colors} from '../../utilities';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: WP(12.5),
  },
  text: {
    fontSize: WP(4.5),
    fontWeight: 'bold',
    color: colors.GREY500,
  },
});
