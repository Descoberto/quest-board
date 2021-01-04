import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#202124'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerText: {
    fontSize: 15,
    color: '#FFF'
  },

  headerTextBold: {
    fontWeight: 'bold'
  },

  typeClass: {
    height: 90,
    borderRadius: 8,
    marginTop: -20,
    marginEnd: -20,
    marginStart: -20,
    position: 'relative',
    backgroundColor: '#FFF'
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#00D294',
    fontWeight: 'bold'
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#FFF'
  },

  questList: {
    marginTop: 32
  },

  quest: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#292A2D',
    marginBottom: 16
  },

  questProperty: {
    marginTop: 10,
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold'
  },

  questValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#757575'
  },

  questClass: {
    marginTop: 25,
    fontSize: 15,
    marginBottom: 24,
    color: '#202124',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 0,
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  detailsButtonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  },
});
