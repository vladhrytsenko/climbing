import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
  title: {
    fontSize: 40,
    color: '#13141E',
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    lineHeight: 18,
    color: '#70717E',
    marginTop: 8,
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#FDFAFA',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  buttonContainer: {
    height: 42,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#1D81DB',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#FDFAFA',
    fontWeight: '600',
  },
  onPress: {
    opacity: 0.7,
  },
});

export default styles;
