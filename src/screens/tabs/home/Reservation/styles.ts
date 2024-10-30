import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },
  title: {
    fontSize: 32,
    color: '#13141E',
    fontWeight: '500',
    width: 200,
  },
  backButton: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 23,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    paddingTop: 12,
    paddingBottom: 64,
  },
  buttonContainer: {
    height: 42,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#1D81DB',
    marginTop: 40,
  },
  buttonText: {
    fontSize: 16,
    color: '#FDFAFA',
    fontWeight: '600',
  },
  onPress: {
    opacity: 0.7,
  },
  dateTimePickerContainer: {
    backgroundColor: '#FDFAFA',
    borderRadius: 20,
    marginTop: 24,
  },
  todayContainerStyle: {
    borderWidth: 0,
    backgroundColor: '#1D81DB',
  },
  todayTextStyle: {
    color: '#FDFAFA',
  },
  weekDaysTextStyle: {
    color: '#6D7090',
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
    backgroundColor: '#FDFAFA',
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
