import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    color: '#13141E',
    fontWeight: '500',
    width: 200,
  },
  notificationButton: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 23,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: {height: 2, width: 0},
    shadowOpacity: 0.1,
    shadowRadius: 3,
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
    marginHorizontal: 20,
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
    marginLeft: 20,
  },
  contentContainer: {
    paddingTop: 12,
    paddingBottom: 64,
  },
  buttonContainer: {
    height: 27,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    paddingHorizontal: 16,
    backgroundColor: '#1D81DB',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FDFAFA',
  },
  onPress: {
    opacity: 0.7,
  },
  tabsWrapper: {
    minHeight: 30,
    marginTop: 12,
  },
  tabsContainer: {
    height: 29,
    gap: 12,
    paddingHorizontal: 20,
  },
  tabContainer: {
    maxHeight: 29,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#FDFAFA',
  },
  activeTabContainer: {
    backgroundColor: '#7C5CEF',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#70717E',
    textTransform: 'capitalize',
  },
  activeTabText: {
    color: '#FDFAFA',
  },
  goodsWrapper: {
    paddingHorizontal: 14,
    paddingVertical: 16,
    gap: 12,
  },
  goodsContainer: {
    flex: 1,
    height: 130,
    justifyContent: 'space-between',
    marginHorizontal: 6,
    borderRadius: 16,
    backgroundColor: 'lightgrey',
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  markContainer: {
    height: 18,
    maxWidth: 110,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 12,
    marginTop: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
  },
  mark: {
    flex: 1,
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  navigationButton: {
    height: 34,
    width: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
  },
});

export default styles;
