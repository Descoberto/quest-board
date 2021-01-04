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

  quest: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#292A2D',
    marginBottom: 16,
    marginTop: 48
  },

  questProperty: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 10
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

  questClass: {
    marginTop: 25,
    fontSize: 15,
    marginBottom: 24,
    color: '#202124',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 0,
  },

  questValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#757575'
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16
  },

  studentTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131A',
    lineHeight: 30
  },

  studentDescription: {
    fontSize: 15,
    color: '#737380',
    marginTop: 16
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  actionWhatsApp: {
    backgroundColor: '#00D294',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionEmail: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  },

  actionWhatsAppText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  },

  actionEmailText: {
    color: '#111',
    fontSize: 15,
    fontWeight: 'bold'
  }
});
