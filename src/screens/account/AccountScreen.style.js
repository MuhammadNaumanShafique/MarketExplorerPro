import {StyleSheet} from 'react-native';
import {WP, colors} from '../../utilities';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    paddingHorizontal: WP(5),
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: WP(7.5),
  },
  profileImage: {
    width: WP(20),
    height: WP(20),
    borderRadius: WP(10),
    marginRight: WP(5),
  },
  userInfo: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: WP(6),
    fontWeight: 'bold',
    marginBottom: WP(1.25),
  },
  email: {
    fontSize: WP(4),
    color: colors.GREY500,
    marginBottom: WP(1.25),
  },
  name: {
    fontSize: WP(4.5),
    marginBottom: WP(1.25),
  },
  gender: {
    fontSize: WP(4),
    color: colors.GREY700,
  },
  logoutButton: {
    backgroundColor: colors.RED800,
    paddingVertical: WP(3),
    paddingHorizontal: WP(10),
    borderRadius: WP(2),
  },
  logoutText: {
    color: colors.WHITE,
    fontSize: WP(4),
    fontWeight: 'bold',
  },
});
