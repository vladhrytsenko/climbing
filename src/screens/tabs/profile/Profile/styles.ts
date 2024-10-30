import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    backgroundColor: '#FDFAFA',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 32,
    paddingHorizontal: 20,
  },
  userDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    height: 132,
    width: 132,
    borderRadius: 66,
  },
  name: {
    fontSize: 32,
    color: '#13141E',
    fontWeight: '600',
    marginBottom: 16,
  },
  tag: {
    fontSize: 14,
    color: '#70717E',
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '500',
    color: '#13141E',
    marginTop: 16,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    color: '#70717E',
    marginTop: 16,
  },
  achievementContainer: {
    height: 132,
    width: '100%',
    justifyContent: 'flex-end',
    borderRadius: 12,
    marginTop: 16,
  },
  achievementName: {
    fontSize: 28,
    color: '#FDFAFA',
    fontWeight: '600',
    marginLeft: 12,
  },
  achievementDescription: {
    fontSize: 16,
    color: '#FDFAFA',
    fontWeight: '400',
    marginLeft: 12,
    marginBottom: 12,
  },
});

export default styles;
