import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TermsAndConditions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terms and Conditions</Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id purus auctor, ultricies elit at, malesuada urna. In nec ipsum nec eros
        condimentum malesuada. Maecenas ultricies, tortor in convallis rutrum, nunc quam consequat sem, eget bibendum justo risus sed dolor.
        Nulla sollicitudin, urna ac lacinia vestibulum, odio nulla pellentesque tellus, id ultrices velit ex non mauris. Aliquam sit amet
        sem vitae velit tempor consequat. Nam malesuada tortor id pretium dictum. Integer fringilla scelerisque felis non posuere. Nulla
        facilisi. Donec non arcu ac arcu feugiat convallis et eget arcu. Aenean nec mauris varius, tristique enim eu, gravida nisl. Aenean
        ultrices viverra convallis. Proin finibus augue id aliquam lacinia. Curabitur mollis volutpat augue nec congue.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
});

export default TermsAndConditions;