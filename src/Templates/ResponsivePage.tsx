import {SafeAreaView, StyleSheet} from 'react-native';

type ChildProps = {
  children: JSX.Element | string;
};

export const ResponsivePage = ({children}: ChildProps) => {
  return (
    <SafeAreaView style={styles.responsiveWrapper}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  responsiveWrapper: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
