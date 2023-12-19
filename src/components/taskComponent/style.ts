import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection:"row",
    justifyContent:"space-between",
    maxWidth:"100%",
    minHeight:30,
    backgroundColor:colors.color6,
    borderRadius:10,
    padding:10,
    marginBottom:10,
  },
  text: {
    color: colors.color1,
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    maxWidth:"93%"
  },
});
