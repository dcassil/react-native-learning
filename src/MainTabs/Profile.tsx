import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {useAuth0} from 'react-native-auth0';

export const ProfileTab = () => {
  const {user} = useAuth0();
  console.log(user);
  return (
    <ScrollView style={styles.Wrapper}>
      <View style={styles.Header}>
        <Image
          style={{width: 75, height: 75, borderRadius: 100}}
          source={{uri: user?.picture}}
        />
        <View style={styles.Info}>
          <Text>{user?.nickname}</Text>
          <Text>{user?.email}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    padding: 12,
  },
  Header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 100,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 12,
  },
  Info: {
    display: 'flex',
  },
});
