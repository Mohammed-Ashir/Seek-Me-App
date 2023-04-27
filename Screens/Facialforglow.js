// // // /**
// // //  * Sample React Native App
// // //  * https://github.com/facebook/react-native
// // //  *
// // //  * @format
// // //  * @flow strict-local
// // //  */

// // import React, { useState, useEffect } from 'react';
// // import {
// //   SafeAreaView,
// //   ScrollView,
// //   StatusBar,
// //   StyleSheet,
// //   Text,
// //   useColorScheme,
// //   View,
// //   Image,
// //   TextInput,
// //   TouchableOpacity,
// //   FlatList

// // } from 'react-native';

// // import {
// //   Colors,
// //   DebugInstructions,
// //   Header,
// //   LearnMoreLinks,
// //   ReloadInstructions,
// // } from 'react-native/Libraries/NewAppScreen';
// // import Location from 'react-native-vector-icons/Ionicons';
// // import Noti from 'react-native-vector-icons/Ionicons';
// // import Plus from 'react-native-vector-icons/Entypo';
// // import LinearGradient from 'react-native-linear-gradient';
// // import Head from '../Screens/Components/Header';
// // // import Facialforglow from '../Screens/Components/Facialforglow';
// // import Diamond from './Diamond'

// // export default function Facialforglow(props) {

// //  const data =  props.route.params.userId
// //    console.log('getIds',data);

// // const [Popup, setPopup] = useState(false);

// //   const [addToCart, setAddToCart] = useState([]);
// //   const [val, setVal] = useState({
// //     name: "",
// //     price: "",
// //     id: ""
// //   });

// //   const _addToCard = id => {
// //     Alert.alert(
// //       'Alert',
// //       id,
// //       [
// //           {text: 'OK', onPress: () => console.log('OK Pressed')},
// //       ]
// //     );
// //   }

// //  useEffect(() => {

// //  //   var myHeaders = new Headers();
// //  //   myHeaders.append("Content-Type", "application/json");

// //  //   var raw = JSON.stringify({
// //  //     "code": saloneForWomenId
// //  //   });
// //  //   console.log('2222222', raw);

// //  //   var requestOptions = {
// //  //     method: 'POST',
// //  //     headers: myHeaders,
// //  //     body: raw,
// //  //     redirect: 'follow'
// //  //   };

// //  //   fetch("http://3.109.48.115:5500/admin/subSalonforWomenPost", requestOptions)
// //  //   .then(response => response.json())
// //  //   .then(success => console.log(success))
// //  //   .catch(error => console.log('error', error));
// //  }, [])

// //  return (
// //      <>
// //      <ScrollView>
// //      <View >
// //          <Head title="Facial for glow" />
// //          {/* <Facialglow /> */}
// //          <View style={{ marginTop: 20 }}>

// //           <FlatList
// //             style={{ height: 800, position: 'absolute', marginHorizontal: 20 }}
// //             data={data}
// //             //  horizontal={true}
// //             numColumns={2}
// //             renderItem={({ item }) => {
// //               return (
// //                 <View style={{ alignContent: 'center', alignItems: 'center', height:250, width: 150 }}>
// //                   <View style={{ borderRadius: 12, padding: 20, margin: -10, backgroundColor: '#FFFFFF', height: 240, width: 130 }}>
// //                     {/* <Image
// //                       style={{ borderRadius: 12, borderWidth: 0.5, width: 100, height: 200}}
// //                       source={{uri : item.images}}
// //                     /> */}
// //                     <Image
// //                           style={{ borderRadius: 12, borderWidth: 0.5, width : 90, height : 120}}
// //                           source={require('../assets/swoman.png')}
// //                         />
// //                     <View style={{}}>
// //                         <Text style={{ fontSize: 16, textAlign: 'center', color: '#161616', fontWeight: '500', top: 10, height : 20, width : 105}}>{item.subSalonforWomenName}</Text>
// //                         <Text style={{ fontSize: 14, textAlign: 'center', color: '#5E17EB', fontWeight: '400', top: 10 }}>{item.price}</Text>
// //                     </View>
// //                     <TouchableOpacity onPress={() => {
// //                       setVal({name: item.subSalonforWomenName, price: item.price, id: item._id})
// //                       setPopup(true);
// //                     }}>
// //                       <View style={{ borderRadius: 12, width: 30, height: 30, alignContent: 'center', justifyContent: 'center', backgroundColor: '#5E17EB', left: 60, top: 20 }}>
// //                         <Plus name='plus' size={20} color={'white'} style={{ textAlign: 'center' }} />
// //                       </View>
// //                     </TouchableOpacity>
// //                   </View>
// //                 </View>

// //               )

// //             }}

// //           />
// //      <Diamond data={val} _addToCard={_addToCard} visible={Popup} closeCallback={() => setPopup(false)} navigation={props.navigation} />

// //    </View>

// //           {/* <Diamond visible={Popup} closeCallback={()=>setPopup(false)} navigation={props.navigation}/> */}
// //      </View>
// //      <View style={{marginHorizontal:20,right:20}}>
// //          <TouchableOpacity onPress={()=>navigation.navigate("SelectedServices")}>
// //  {/* {/ onPress={()=>setPopup(true)} /} */}
// //        <View style={{ alignItems: 'center',  borderRadius: 12, borderWidth: 1, padding: 20, backgroundColor: '#D8D8D8', borderColor: '#D8D8D8', width: '100%',top:622,justifyContent:'center',marginHorizontal:20}}>

// //                  <Text style={{ color: '#858585', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '500' }}>Proceed</Text>

// //              </View>

// //              </TouchableOpacity>
// //          </View>
// //      <View style={{height:600}}></View>
// //      </ScrollView>
// //      </>
// //  );
// // };

// // //  const HelloWorldApp = ( {navigation} ) => {

// // //    return (<>
// // //

// // //    </>
// // //    )

// // //  }
// // //  export default HelloWorldApp;

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Pressable,
  TouchableHighlight,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Location from 'react-native-vector-icons/Ionicons';
import Noti from 'react-native-vector-icons/Ionicons';
import Plus from 'react-native-vector-icons/Entypo';
import Check from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Screens/Components/Header';
import Facialglow from '../Screens/Components/Facialglow';
import Diamond from './Diamond';
import {TabRouter} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
// import Pbutton from '../Screens/Components/Pbutton';
import Pb from './Components/Pb';
import Modal from 'react-native-modal';
import Star from 'react-native-vector-icons/AntDesign';
import {Checkbox} from 'react-native-paper';
// export default function Facialforglow({props,navigation}) {
// const route=useRoute();

// const data =  props.route.params.userId
// console.log('getIds',data);

// useEffect(() => {

const Hello = (props) => {
  const { visible,
    closeCallback,
    shareOptionCallback,
    navigation,route}=props;
  // const route=useRoute();
  const [subSalonforWomen, setSubSalonforWomen] = useState([]);
  // console.log('1111', subSalonforWomen);

 
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [Press, setPress] = useState([]);
 
  const toggle = () => {
    setChecked(!checked);
  };
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      // "https://api.sampleapis.com/coffee/hot"

      // "http://13.126.64.187:5500/admin/salonForWomenList"

      `http://13.126.187.109:5500/user/getservices/${props.route.params.id}`,
      // "http://13.232.69.59:5500/admin//salonFormenList"
      // "http://15.206.166.219:5500/user/getCategories"
      requestOptions,
    ).then(result => {
      console.log('110', result);
      result.json().then(resp => {
        setSubSalonforWomen(resp);
      });
    });
  }, []);

  const [Popup, setPopup] = useState(false);
  // const [checked, setChecked] = React.useState(false);

  // const [Popup,setPopup] = useState([]);

  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     "code": saloneForWomenId
  //   });
  //   console.log('2222222', raw);

  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow'
  //   };

  //   fetch("http://3.109.48.115:5500/admin/subSalonforWomenPost", requestOptions)
  //   .then(response => response.json())
  //   .then(success => console.log(success))
  //   .catch(error => console.log('error', error));
  // }, [])
  const [checked, setChecked] = useState([]);
const ashir = 0;
  return (
    <>
      {/* < View style={{ marginTop: 20 ,height:1200}}> */}
     
      <View style={{height: 700,backgroundColor:'white'}}>
        <Header navigation={navigation} title={route.params.head}/>
        <View style={{Top: 10,alignContent:'center',left:10,alignContent:'center'}}>
          {/* <View style={{ marginTop: 20 }}> */}

          <FlatList
            style={{height:530,width: 400,position:'absolute'}}
            // key={index}
            //  horizontal={true}
            numColumns={2}
            data={subSalonforWomen.result}
            // data={subSalonforWomen.allsalonForWomenList}
            // data={subSalonforWomen}
            extraData={ashir}
            keyExtractor={item => item._id}
            maxToRenderPerBatch={1}
          // keyExtractor={(item) => item.id.toString()}
          // keyExtractor={(item) => item._id}
        

            renderItem={({renderItem,item,index}) => (
              
              

              <View
                style={{
                  height: 250,
                  width: 160,
                  alignContent: 'center',
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    borderRadius: 12,
                    backgroundColor: '#FFFFFF',
                    height: 250,
                    width: 150,
                    borderWidth: 2,
                    borderColor: '#E5E5E5',
                    alignSelf: 'center',
                  }}>
                  {/* <Image
                  style={{ borderRadius: 12, borderWidth: 0.5, width: 100, height: 200}}
                  source={{uri : item.images}}
                /> */}

                  <TouchableOpacity
                    onPress={() =>
                      setPopup(true)
                    }>
                    {/* <TouchableOpacity onPress={() => setPopup(true)}> */}
                    <Image
                      style={{
                        borderRadius: 12,
                        width: 135,
                        height: 150,
                        alignSelf: 'center',
                        top: 10,
                      }}
                      source={{uri: item.image}}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 16,
                      textAlign: 'center',
                      color: '#161616',
                      fontWeight: '500',
                      top: 10,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      textAlign: 'center',
                      color: '#5E17EB',
                      fontWeight: '400',
                      top: 10,
                    }}>
                    {item.price}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      textAlign: 'center',
                      color: '#5E17EB',
                      fontWeight: '400',
                      top: 10,
                    }}>
                    {item.specialID}
                  </Text>



                  <View style={{ marginLeft: 100}}>
                  
                
                 

                    <Checkbox
                style={styles.rad}
                    uncheckedColor={'#5E17EB'}
                    color={'green'}
                    
                  
    status={checked.includes(item._id) ? 'checked' : 'unchecked'}
    // onValueChange={newValue => setToggleCheckBox(newValue)}
    onPress={() => {
      console.log('item select');
      const newIds = [...checked];
      const index = newIds.indexOf(item._id);
      if (index > -1) {
        newIds.splice(index, 1); 
      } else {
        newIds.push(item._id)
      }
      setChecked(newIds)
      setToggleCheckBox(newIds)
      setPress(false)
    }}

   />
    
   {/* </View> */}
 
    <Diamond
            visible={Popup}
            dismiss={setPopup}
            closeCallback={() => setPopup(false)}
            closeTouch={() => setPopup(false)}
            onPress={(key) => setPopup(false)
            }
            onPressOut={() => setPopup(false)}
            navigation={navigation}
            image={item.image}
            name={item.name}
            price={item.price}

          />
 
                  </View>
                </View>
                
              </View>
            )}
            
          />
<TouchableOpacity
      onPress={() => navigation.navigate("SummaryFinal",{id:subSalonforWomen.result
        ,image: subSalonforWomen.result.image,
      name: subSalonforWomen.result.name,
      price: subSalonforWomen.result.price,
      
    })}


      style={[styles.btn, {backgroundColor: Press ? "#D8D8D8" : "#5E17EB"}]}
       

        disabled={!toggleCheckBox}
        >
        
          <Text style={{color: '#ffffff'}}>Proceed</Text>
        
      </TouchableOpacity>
         
         
        </View>

     
       
      </View>
    </>
  );
};

export default Hello;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNormal: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: 100,
  },
  btnPress: {
    borderColor: 'blue',
    borderWidth: 1,
    height: 30,
    width: 100,
  },
  rad:{
    left:200,
    top:200

  },
  footer: {
   
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    height: 47,
    width: 310,
    justifyContent: 'center',
    // flexDirection: "row",
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    borderWidth:1,
    borderRadius: 12,
          borderWidth: 1,
         flexDirection:'column',
      
          borderColor: '#D8D8D8',
          width: '90%',
          marginHorizontal: 50,
          // position:'relative',
          alignContent: 'center',
          alignSelf:'center',
          top:300
  },
  red: {
    marginLeft: 16,
    marginRight: 10,
    // margin: 6,
    height: 47,
    width: 310,
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    top: 30,
  },
  box: {
    borderWidth: 1.5,
    borderColor: '#79747E',
    //   margin: 10,
    height: 140,
    width: 140,
    borderStyle: 'dashed',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});



 {/* <View>
                  <TouchableOpacity 
                  
                  onPress={() => [toggle(false)]
                  }
                  style={{
                    backgroundColor: Press ? "green" : "#5E17EB",
                    borderRadius: 12, width: 40, height: 40, alignContent: 'center', justifyContent: 'center', left: 100, top: 0,
                  }}>
                  <View style={{alignSelf:'center',textAlign: 'center'}}>
                  <Text style={{}}>{Press? <Check name='check' size={20} color={'white'} />:<Plus name='plus' size={20} color={'white'}/>}</Text>
                
                  </View>
                 </TouchableOpacity> 

</View> */}
// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, ScrollView,Image,TouchableOpacity } from 'react-native';

// const Hello = ({ props, navigation }) => {
//   // const route=useRoute();
//     const [subSalonforWomen, setSubSalonforWomen] = useState([]);
//     // console.log('1111', subSalonforWomen)

//     const [Press,setPress]=useState(false);
//     const [activeTab,setActiveTab]=useState(false);
//     const toggle=()=>{setPress(!Press);
//     }
//     useEffect(() => {

//       const requestOptions = {
//         method: 'GET',
//         redirect: 'follow'
//       };

//       fetch("https://api.sampleapis.com/coffee/hot"

//         // "http://13.232.69.59:5500/admin/salonForWomenList"

//          // "http://13.232.69.59:5500/user/getsubsubcategories/subSalonforWomen",
//         // "http://13.232.69.59:5500/admin//salonFormenList"
//         // "http://15.206.166.219:5500/user/getCategories"
//         , requestOptions).then((result) => {
//           console.log('110',result)
//           result.json().then((resp) => {

//             setSubSalonforWomen(resp)
//           })
//         })
//     }, []);
//     // const result=result();
// // export default function App() {
//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <View>
//           {subSalonforWomen.map((setSubSalonforWomen,index) => {
//             return (
//               <View style={{  height: 250,backgroundColor:'red'}}>

//               <View style={{borderRadius: 12, backgroundColor: '#FFFFFF', height: 150, width: 150,borderWidth:2,
//               borderColor:'#E5E5E5',flexDirection:'row',justifyContent:'flex-start',flexWrap:'wrap' }}>
//                  <TouchableOpacity
//                 key={index}
//                 style={{
//                   // height: 50,
//                   // width:180,
//                   // margin: 3,
//                   // elevation: 5,
//                   // shadowOffset: { width: 1, height: 1 },
//                   // shadowColor: "black",
//                   // shadowOpacity: 0.36,
//                   // shadowRadius: 6.68,
//                   // borderRadius: 10,
//                   flexWrap:'wrap',
//                   justifyContent:'flex-start'

//                 }}>
//                 {/* <Text style={{fontSize:10,justifyContent:'center'}}>{setSubSalonforWomen.description}</Text> */}
//                 <Text style={{fontSize:10,justifyContent:'center'}}>{setSubSalonforWomen.title}</Text>
//                 <Image style={{borderRadius: 12, width : 105, height : 100,alignSelf:'center'}} source={{uri:setSubSalonforWomen.image}}/>
//                 <TouchableOpacity onPress={(index) => toggle(false)}
//                   style={{
//                     backgroundColor: Press ? "green" : "#5E17EB",
//                     borderRadius: 12, width: 40, height: 40, alignContent: 'center', justifyContent: 'center', left: 100, top: 10,
//                   }}>
//                   <View style={{alignSelf:'center',textAlign: 'center'}}>
//                   <Text>{Press  ? "=" : "-" }</Text>

//                 </View>
//                               </TouchableOpacity>
//                 </TouchableOpacity>
//               </View>
//               </View>

//             );
//           })}
//         </View>
//       </ScrollView>
//     </View>
//   );
// }
// export default Hello;
// const styles = StyleSheet.create({
//   container: {

//   },
//   item: {
//     padding: 20,
//     fontSize: 15,
//     marginTop: 5,
//   }
// });
