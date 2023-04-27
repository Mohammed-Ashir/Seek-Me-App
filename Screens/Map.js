// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

//  import React,{useState} from 'react';
//  import {
//    SafeAreaView,
//    ScrollView,
//    StatusBar,
//    StyleSheet,
//    Text,
//    useColorScheme,
//    View,
//    Image,
//    TextInput,
//    TouchableOpacity,
//    FlatList
   
//  } from 'react-native';
 
//  import {
//    Colors,
//    DebugInstructions,
   
//    LearnMoreLinks,
//    ReloadInstructions,
//  } from 'react-native/Libraries/NewAppScreen';
//  import Header from './Components/Header'
//  import MapView from 'react-native-maps';
// import Location from 'react-native-vector-icons/Ionicons';
// import SelectDate from '../Sumrryslot/SelectDate';
// // import Home from './Home';
// import Salonforwomen from './Salonforwomen';
 
//  const Map = ({ navigation }) => {
//    const des = "An OTP will be sent on given number for varification \n Standard message and data rates apply"
//    const add = "89,Bhel Nagar,piplani,Ayodhya\nNagar Extension"
//    const [Popup, setPopup] = useState(false);



//    return ( <>
//    <View>
//        <Header title="Choose location" />
//    </View>
   
//    <View style={styles.container}>
//      <MapView
//        style={styles.map}
//        region={{
//          latitude: 37.78825,
//          longitude: -122.4324,
//          latitudeDelta: 0.015,
//          longitudeDelta: 0.0121,
//        }}
//      >
//      </MapView>
    
//    </View>
//    <View style={{padding:30,top:510,borderTopLeftRadius:20,borderTopRightRadius:20}}>
//     <View style={{flexDirection:'row'}}>
//        <Location name='location' size={20} color={'black'} />
//        <Text style={{fontSize:16,color:'black',fontWeight:'600',left:20}}>{add}</Text>
//    </View>
//    <View>
//    <Text style={{fontSize:14,color:'rgba(117, 117, 117, 1)',left:40,marginTop:10}}>Ayodhya Bypass</Text>
//    {/*  onPress={()=>setPopup(true)}*/}
//    <TouchableOpacity   onPress={()=>navigation.navigate("Salonforwomen")}
//         style={{ alignItems: 'center',  borderRadius: 20,  padding: 20, backgroundColor: '#3672E9', borderColor: '#5E17EB', width: '100%',marginTop:32}}>
//                 <Text style={{ color: '#ffffff', fontSize: 16, fontFamily: 'Poppins-Regular', fontWeight: '500' }}>Confirm Location</Text>
//             </TouchableOpacity>
//             </View>
//             <SelectDate visible={Popup} closeCallback={()=>setPopup(false)} navigation={navigation} />   
//    </View>
   
  
 
//        </>
//    )
//  }

//  const styles = StyleSheet.create({
//     container: {
//       ...StyleSheet.absoluteFillObject,
//       height: 500,
//       width: 400,
//       marginTop:70,
//       justifyContent: 'flex-end',
//       alignItems: 'center',
//     },
//     map: {
//       ...StyleSheet.absoluteFillObject,
//     },
//    });
//  export default Map;

// import React, { useState, useEffect } from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   Pressable,TouchableHighlight
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import Location from 'react-native-vector-icons/Ionicons';
// import Noti from 'react-native-vector-icons/Ionicons';
// import Plus from 'react-native-vector-icons/Entypo';
// import Check from 'react-native-vector-icons/AntDesign';
// import LinearGradient from 'react-native-linear-gradient';
// import Header from '../Screens/Components/Header'
// import Facialglow from '../Screens/Components/Facialglow'
// import Diamond from './Diamond'
// import { TabRouter } from '@react-navigation/native';
// import { useRoute } from '@react-navigation/native';
// // import Pbutton from '../Screens/Components/Pbutton';
// import Pb from './Components/Pb'

   
// const Map = ({ props, navigation }) => {
//  const route=useRoute();
//   //  const [subSalonforWomen, setSubSalonforWomen] = useState([]);
//   //  console.log('1111', subSalonforWomen)

//    const [Press,setPress]=useState(false);
//    const [activeTab,setActiveTab]=useState(false);
//    const toggle=()=>{setPress(!Press);
//    }
//   //  useEffect(() => {
 
//   //    const requestOptions = {
//   //      method: 'GET',
//   //      redirect: 'follow'
//   //    };
 
//   //    fetch("https://api.sampleapis.com/coffee/hot"
      
//   //      // "http://13.232.69.59:5500/admin/salonForWomenList"
       
//   //       // "http://13.232.69.59:5500/user/getsubsubcategories/subSalonforWomen",
//   //      // "http://13.232.69.59:5500/admin//salonFormenList"
//   //      // "http://15.206.166.219:5500/user/getCategories"
//   //      , requestOptions).then((result) => {
//   //        console.log('110',result)
//   //        result.json().then((resp) => {
         
//   //          setSubSalonforWomen(resp)
//   //        })
//   //      })
//   //  }, []);
//   //  const [Popup,setPopup] = useState();


//  return (
//    <>
//      {/* < View style={{ marginTop: 20 ,height:1200}}> */}
     
     
      
//      <ScrollView>
//      <Header navigation={navigation} title={route.params.namm}/>
//      < View style={{ marginTop: 10 ,height:1200}}>
     
//          {/* <View style={{ marginTop: 20 }}> */}
          
//      {/* <FlatList
//        style={{ height:2000,width:400, position:'absolute',margin:10}}
       
//        //  horizontal={true}
//        numColumns={2}
//        // data={subSalonforWomen.result}
//        // data={subSalonforWomen.allsalonForWomenList}
//        data={route.params.dom}
//        keyExtractor={(item) => item.id}
//        renderItem={({ item }) => ( */}
//          {/* // return ( */}
           
//            <View style={{  height: 250, width: 160 , alignContent:'center',alignSelf:'center'}}>
              
//              <View style={{borderRadius: 12, backgroundColor: '#FFFFFF', height: 250, width: 150,borderWidth:2,
//              borderColor:'#E5E5E5',alignSelf:'center' }}>
              
//                <Image
//                     style={{ borderRadius: 12, width : 135, height : 150,alignSelf:'center',top:10
//                    }}
//                     source={{uri:route.params.img}}
//                   />
//                    <Image
//                     style={{ borderRadius: 12, width : 135, height : 150,alignSelf:'center',top:10
//                    }}
//                     source={{uri:route.params.img}}
//                   />
//                   {/* </TouchableOpacity> */}
//                <Text style={{ fontSize: 16, textAlign: 'center', color: '#161616', fontWeight: '500', top: 10 }}>{route.params.title}</Text>
//                <Text style={{ fontSize: 14, textAlign: 'center', color: '#5E17EB', fontWeight: '400', top: 10 }}>{route.params.title}</Text>
               



               
               

//                <TouchableOpacity onPress={() => toggle(false)}
//                  style={{
//                    backgroundColor: Press ? "green" : "#5E17EB",
//                    borderRadius: 12, width: 40, height: 40, alignContent: 'center', justifyContent: 'center', left: 100, top: 10,
//                  }}>
//                  <View style={{alignSelf:'center',textAlign: 'center'}}>
//                  <Text>{Press? <Check name='check' size={20} color={'white'} />:<Plus name='plus' size={20} color={'white'}    />}</Text>
//                    {/* <Plus name='plus' size={20} color={'white'} style={{ textAlign: 'center'}} /> */}
//                  {/* <Pb/> */}

//                  </View> 
//                </TouchableOpacity> 
//              </View>
//            </View>
        
//      {/* <Diamond 
//      visible={Popup}
//       closeCallback={() => setPopup(false
//        )} navigation={navigation} /> */}

//           {/* <Diamond visible={Popup} closeCallback={()=>setPopup(false)} navigation={navigation}/> */}
//      </View>
     
//      <View style={{alignContent:'center',left:30}}> 
//              {/* <TouchableOpacity onPress={()=>setPopup(false)} style={{alignSelf:'flex-end',borderRadius: 12, borderWidth: 1, padding: 20, backgroundColor: '#D8D8D8', borderColor: '#D8D8D8', width: '90%',marginHorizontal:50}}> */}
                
       
//                      <Text style={{ color: '#858585', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '500',alignSelf:'center'}}>Proceed</Text>
               
                 

//              {/* </TouchableOpacity> */}
//          </View>
//      </ScrollView>  
// {/* </View> */}
//      </>
//  )
// };

// export default Map;

// const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//  btnNormal: {
//    borderColor: 'blue',
//    borderWidth: 1,
//    borderRadius: 10,
//    height: 30,
//    width: 100,
//  },
//  btnPress: {
//    borderColor: 'blue',
//    borderWidth: 1,
//    height: 30,
//    width: 100,
//  }
//  });