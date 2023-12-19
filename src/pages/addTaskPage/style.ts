import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export default StyleSheet.create({
  safe_area_cont: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.color2,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent:"center",
    flex: 1,
    padding:20
  },
  text: {
    fontFamily: 'Open Sans',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    color: colors.color5,
  },
  button_main_cont: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  button_cont: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical:5,
    borderRadius: 10,
    backgroundColor: colors.color6,
    marginTop:40,
    borderWidth:2,
    borderColor: colors.color1
  },
  text_button: {
    color: colors.color1,
    fontFamily: 'Open Sans',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  input: {
    height:"auto",
    backgroundColor: colors.color4,
    color: colors.color1,
    borderRadius: 10,
    display: "flex",
    marginTop:10
  }
});
