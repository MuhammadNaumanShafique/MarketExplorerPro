import {StyleSheet} from 'react-native';
import {WP, colors} from '../../utilities';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: WP(4),
    backgroundColor: colors.WHITE,
  },
  input: {
    marginHorizontal: WP(4),
    height: WP(10),
    borderWidth: WP(0.25),
    borderColor: colors.GREY300,
    borderRadius: WP(2),
    paddingHorizontal: WP(2.5),
    marginBottom: WP(4),
  },
  list: {
    flex: 1,
  },
  item: {
    padding: WP(5),
    borderBottomWidth: WP(0.25),
    borderBottomColor: colors.GREY100,
  },
});
