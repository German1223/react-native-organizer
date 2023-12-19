import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export default StyleSheet.create({
  safe_area_cont: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.color2,
    width:"100%"
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding:20,
  },
  empty_container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems:"center",
    justifyContent:"center",
    flex:1,
    padding:20,
  },
  text: {
    color: colors.color5,
  },
  button_main_cont: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
    width:"100%",
  },
  button_cont: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width:"70%",
    paddingVertical:5,
    borderRadius: 10,
    backgroundColor: colors.color3,
    marginBottom:20,
    borderWidth:2,
    borderColor: colors.color1,
  },
  delete_button_cont: {
    display: 'flex',
    flexDirection:"column",
    alignItems: 'center',
    justifyContent: 'center',
    width:"70%",
    paddingHorizontal: 10,
    paddingVertical:5,
    borderRadius: 10,
    backgroundColor: colors.color8,
    marginBottom:10,
    borderWidth:2,
    borderColor: colors.color1
  },
  text_button: {
    color: colors.color5,
    fontFamily: 'Open Sans',
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: '600',
  },
});
