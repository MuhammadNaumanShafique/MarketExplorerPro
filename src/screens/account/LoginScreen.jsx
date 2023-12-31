import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../store/slices/authSlice';
import {styles} from './LoginScreen.style';

export default function LoginScreen() {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const {isLoading} = useSelector(state => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);

  React.useLayoutEffect(() => {
    navigation.setOptions({title: 'Login'});
  }, [navigation]);

  const handleLogin = () => {
    setLoginError(null);
    dispatch(
      loginUser({
        payload: {username, password},
        onFail: error => {
          setLoginError('Invalid username or password');
        },
      }),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      {loginError && <Text style={styles.errorText}>{loginError}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
        disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.loginText}>Login</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
