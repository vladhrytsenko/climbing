import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    color: '#13141E',
    fontWeight: '500',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '500',
    color: '#13141E',
    marginTop: 16,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FDFAFA',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 24,
  },
  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  tab: {
    minWidth: 68,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DFDFDF',
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  tabText: {
    fontSize: 14,
    color: '#70717E',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#FDFAFA',
  },
  activeTab: {
    backgroundColor: '#7C5CEF',
    borderColor: '#7C5CEF',
  },
  topUsersContainer: {
    flexDirection: 'row',
    marginTop: 24,
    borderBottomWidth: 2,
    borderColor: '#F0F0F0',
    marginBottom: 24,
  },
  topUserContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topUserAvatar: {
    height: 76,
    width: 76,
    borderRadius: 38,
    borderWidth: 2,
  },
  badgeContainer: {
    position: 'absolute',
    bottom: -11,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 22,
    width: 22,
    borderRadius: 11,
  },
  badgeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  topUsersName: {
    textAlign: 'center',
    color: '#13141E',
    fontWeight: '600',
    marginTop: 16,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#F0F0F0',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginVertical: 4,
  },
  progressContainer: {
    alignItems: 'center',
    gap: 4,
  },
  progress: {
    fontSize: 12,
    color: '#000000',
    fontWeight: '600',
  },
  avatarContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  role: {
    fontSize: 12,
    color: '#70717E',
  },
  ratingContainer: {
    height: 24,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#2284CD',
    marginLeft: 'auto',
  },
  rating: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default styles;
