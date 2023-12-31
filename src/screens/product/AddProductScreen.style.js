import {StyleSheet} from 'react-native';
import {WP, colors} from '../../utilities';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    paddingHorizontal: WP(7.5),
  },
  title: {
    fontSize: WP(6),
    fontWeight: 'bold',
    marginBottom: WP(7.5),
  },
  input: {
    width: '100%',
    height: WP(12.5),
    borderWidth: WP(0.25),
    borderColor: colors.GREY300,
    borderRadius: WP(2),
    paddingHorizontal: WP(3.75),
    marginBottom: WP(5),
  },
  addButton: {
    width: '100%',
    height: WP(12.5),
    backgroundColor: colors.GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: WP(2),
  },
  addButtonText: {
    color: colors.WHITE,
    fontSize: WP(4.5),
    fontWeight: 'bold',
  },
});
