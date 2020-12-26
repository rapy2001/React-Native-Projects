import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:'20%'
      },
    header:{
      border:'1px solid red',
      width:'100%',
      height:'3rem',
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      fontFamily:'quicksand-bold'
    },
    footer:{
      border:'1px solid red',
      height:'3rem',
      width:'100%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }
})

export default styles;