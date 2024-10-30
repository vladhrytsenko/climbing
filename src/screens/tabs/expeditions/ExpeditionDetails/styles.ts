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
  contentContainer: {
    padding: 20,
    backgroundColor: '#FDFAFA',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  detailsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  detailsItemText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#70717E',
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    paddingVertical: 20,
    marginVertical: 16,
  },
  ratingTitle: {
    color: '#70717E',
    fontSize: 16,
    fontWeight: '500',
  },
  ratingWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  rating: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 4,
  },
  verticalLine: {
    height: 36,
    width: 2,
    backgroundColor: '#DEDFE0',
  },
  membersContainer: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  membersTitle: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  membersImage: {
    height: 26,
    width: 96,
  },
  buttonContainer: {
    height: 42,
    width: 160,
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
