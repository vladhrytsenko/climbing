import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    color: '#13141E',
    fontWeight: '500',
  },
  description: {
    fontSize: 14,
    lineHeight: 18,
    color: '#13141E',
    marginTop: 8,
  },
  image: {
    width: '80%',
    alignSelf: 'center',
  },
  buttonContainer: {
    height: 34,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: 8,
    borderRadius: 30,
    paddingHorizontal: 16,
    backgroundColor: '#13141E',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FDFAFA',
  },
  onPress: {
    opacity: 0.7,
  },
  hint: {
    fontSize: 12,
    color: '#6D7090',
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center',
  },
});

export default styles;
