import {ResponsivePage} from '../Templates/ResponsivePage';
import {Button} from 'react-native';
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParamList} from '../Router/Routes';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginButton = () => {
  const {authorize} = useAuth0();

  const onPress = async () => {
    try {
      await authorize({});
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title="Log in" />;
};

export const Login = ({navigation}: Props) => {
  const {user} = useAuth0();
  const loggedIn = user !== undefined && user !== null;

  if (loggedIn) {
    navigation.replace('Home');
  }

  return (
    <ResponsivePage>
      <LoginButton />
    </ResponsivePage>
  );
};
