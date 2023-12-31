import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser} from '../../store/slices/authSlice';
import {styles} from './AccountScreen.style';

export default function AccountScreen() {
  const navigation = useNavigation();

  const {user} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    navigation.setOptions({title: 'Account'});
  }, [navigation]);

  const logout = () => {
    dispatch(logoutUser());
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{uri: user.image}} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user.username}</Text>
          <Text style={styles.email}>{user.email}</Text>
          <Text
            style={styles.name}>{`${user.firstName} ${user.lastName}`}</Text>
          <Text style={styles.gender}>{user.gender}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
