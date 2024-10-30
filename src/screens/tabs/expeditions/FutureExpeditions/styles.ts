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
  expeditionsContainer: {
    gap: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '500',
    color: '#13141E',
  },
  seeAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    paddingHorizontal: 20,
  },
  seeAll: {
    fontSize: 15,
    color: '#70717E',
    fontWeight: '600',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FDFAFA',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: 'hidden',
  },
  recommendationContainer: {
    height: 250,
    width: 250,
    justifyContent: 'space-between',
    borderRadius: 20,
    overflow: 'hidden',
    padding: 16,
  },
  recommendationDetails: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: 16,
    borderRadius: 16,
  },
  recommendationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  recommendationItemText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#70717E',
  },
  recommendationName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#13141E',
    marginBottom: 8,
  },
  readMoreButton: {
    height: 30,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#7C5CEF',
    borderRadius: 16,
  },
  readMoreText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FDFAFA',
  },
  scheduleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#F0F0F0',
    marginHorizontal: 20,
    borderRadius: 16,
    marginTop: 16,
    padding: 16,
  },
  schedulePreview: {
    height: 64,
    width: 64,
    borderRadius: 12,
  },
  onPress: {
    opacity: 0.7,
  },
});

export default styles;
