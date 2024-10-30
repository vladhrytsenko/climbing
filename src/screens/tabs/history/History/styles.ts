import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    color: '#13141E',
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginTop: 24,
  },
  input: {
    width: '100%',
    height: 40,
    fontSize: 16,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '500',
    color: '#13141E',
    marginTop: 16,
  },
  contentContainer: {
    paddingTop: 12,
    paddingBottom: 64,
  },
  historyItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginVertical: 4,
  },
  historyDetails: {
    flex: 1,
  },
  room: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
  },
  time: {
    fontSize: 14,
    color: '#70717E',
    fontWeight: '400',
    marginTop: 4,
  },
  verticalLine: {
    height: 52,
    width: 2,
    backgroundColor: '#CCE3F4',
  },
  statusContainer: {
    width: 110,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  status: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2EB921',
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    height: 34,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: 8,
    borderRadius: 30,
    paddingHorizontal: 16,
    backgroundColor: '#13141E',
    zIndex: 1,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FDFAFA',
  },
  onPress: {
    opacity: 0.7,
  },
});

export default styles;
