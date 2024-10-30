import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  backButton: {
    height: 45,
    width: 45,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDFAFA',
    marginLeft: 20,
  },
  title: {
    fontSize: 32,
    color: '#13141E',
    fontWeight: '500',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '500',
    color: '#13141E',
  },
  description: {
    fontSize: 14,
    lineHeight: 18,
    color: '#70717E',
    marginTop: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FDFAFA',
    textAlign: 'center',
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#FDFAFA',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  detailsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  detailsContainer: {
    height: 87,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    borderRadius: 12,
  },
  buttonContainer: {
    height: 42,
    width: 180,
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
  dateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  dateContainer: {
    height: 34,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#F1F1F1',
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  date: {
    fontSize: 14,
    fontWeight: '600',
    color: '#70717E',
  },
});

export default styles;
