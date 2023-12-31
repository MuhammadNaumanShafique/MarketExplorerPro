import {StyleSheet} from 'react-native';
import {WP, colors} from '../../utilities';

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    height: '100%',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  addButton: {
    backgroundColor: colors.BLUE,
    padding: WP(2.5),
    borderRadius: WP(1.25),
    alignItems: 'center',
    marginHorizontal: WP(5),
    marginVertical: WP(2.5),
  },
  addButtonText: {
    color: colors.WHITE,
    fontWeight: 'bold',
  },
});
