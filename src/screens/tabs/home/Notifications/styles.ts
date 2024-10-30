import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
    paddingHorizontal: 20,
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
  contentWrapper: {
    flexGrow: 1,
    paddingVertical: 32,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FDFAFA',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: 'hidden',
    paddingHorizontal: 20,
    marginTop: 24,
  },
  notificationWrapper: {
    borderBottomColor: '#F0F0F0',
    borderBottomWidth: 2,
    marginVertical: 8,
  },
  notificationContainer: {
    backgroundColor: '#E5F4FF',
    borderRadius: 12,
    padding: 20,
  },
  notificationText: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
    color: '#2284CD',
  },
  date: {
    fontSize: 12,
    color: '#70717E',
    fontWeight: '600',
    textAlign: 'right',
    marginVertical: 8,
  },
  emptyListContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyListText: {
    fontSize: 20,
    color: '#70717E',
    fontWeight: '600',
    textAlign: 'right',
  },
});

export default styles;
