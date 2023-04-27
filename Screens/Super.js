
// //  import React, { useState, useEffect } from 'react';
// //  import {
// //    SafeAreaView,
// //    ScrollView,
// //    StatusBar,
// //    StyleSheet,
// //    Text,
// //    useColorScheme,
// //    View,
// //    Image,
// //    TextInput,
// //    TouchableOpacity,
// //    FlatList,
// //    Pressable,TouchableHighlight
// //  } from 'react-native';
 
// //  import {
// //    Colors,
// //    DebugInstructions,
// //    LearnMoreLinks,
// //    ReloadInstructions,
// //  } from 'react-native/Libraries/NewAppScreen';
// //  import Location from 'react-native-vector-icons/Ionicons';
// //  import Noti from 'react-native-vector-icons/Ionicons';
// //  import Plus from 'react-native-vector-icons/Entypo';
// //  import Check from 'react-native-vector-icons/AntDesign';
// //  import LinearGradient from 'react-native-linear-gradient';
// //  import Header from '../Screens/Components/Header'
// //  import Facialglow from '../Screens/Components/Facialglow'
// //  import Diamond from './Diamond'
// // import { TabRouter } from '@react-navigation/native';
// // import { useRoute } from '@react-navigation/native';
// // // import Pbutton from '../Screens/Components/Pbutton';
// // import Pb from './Components/Pb'

// // // export default function Facialforglow({props,navigation}) {
// //   // const route=useRoute();
 
// //   // const data =  props.route.params.userId
// //     // console.log('getIds',data);

// //   // useEffect(() => {
    
    
// // const Hello = ({ props, navigation }) => {
// //   const route=useRoute();
// //     const [subSalonforWomen, setSubSalonforWomen] = useState([]);
// //     console.log('1111', subSalonforWomen)

// //     const [Press,setPress]=useState(false);
// //     const [activeTab,setActiveTab]=useState(false);
// //     const toggle=()=>{setPress(!Press);
// //     }
// //     useEffect(() => {
  
// //       const requestOptions = {
// //         method: 'GET',
// //         redirect: 'follow'
// //       };
  
// //       fetch("https://api.sampleapis.com/coffee/hot"
       
// //         // "http://13.232.69.59:5500/admin/salonForWomenList"
        
// //          // "http://13.232.69.59:5500/user/getsubsubcategories/subSalonforWomen",
// //         // "http://13.232.69.59:5500/admin//salonFormenList"
// //         // "http://15.206.166.219:5500/user/getCategories"
// //         , requestOptions).then((result) => {
// //           console.log('110',result)
// //           result.json().then((resp) => {
          
// //             setSubSalonforWomen(resp)
// //           })
// //         })
// //     }, []);
// //     const [Popup,setPopup] = useState();

   
// //     // const [Popup,setPopup] = useState([]);



// //   //   var myHeaders = new Headers();
// //   //   myHeaders.append("Content-Type", "application/json");

// //   //   var raw = JSON.stringify({
// //   //     "code": saloneForWomenId
// //   //   });
// //   //   console.log('2222222', raw);

// //   //   var requestOptions = {
// //   //     method: 'POST',
// //   //     headers: myHeaders,
// //   //     body: raw,
// //   //     redirect: 'follow'
// //   //   };

// //   //   fetch("http://3.109.48.115:5500/admin/subSalonforWomenPost", requestOptions)
// //   //   .then(response => response.json())
// //   //   .then(success => console.log(success))
// //   //   .catch(error => console.log('error', error));
// //   // }, []) 

// //   return (
// //     <>
// //       {/* < View style={{ marginTop: 20 ,height:1200}}> */}
      
      
       
// //       <ScrollView>
// //       <Header navigation={navigation} title={route.params.namm}/>
// //       < View style={{ marginTop: 10 ,height:1200}}>
      
// //           {/* <View style={{ marginTop: 20 }}> */}
           
// //       <FlatList
// //         style={{ height:2000,width:400, position:'absolute',margin:10}}
        
// //         //  horizontal={true}
// //         numColumns={2}
// //         // data={subSalonforWomen.result}
// //         // data={subSalonforWomen.allsalonForWomenList}
// //         data={subSalonforWomen}
// //         keyExtractor={(item) => item.id}
// //         renderItem={({ item }) => (
// //           // return (
            
// //             <View style={{  height: 250, width: 160 , alignContent:'center',alignSelf:'center'}}>
               
// //               <View style={{borderRadius: 12, backgroundColor: '#FFFFFF', height: 250, width: 150,borderWidth:2,
// //               borderColor:'#E5E5E5',alignSelf:'center' }}>
// //                 {/* <Image
// //                   style={{ borderRadius: 12, borderWidth: 0.5, width: 100, height: 200}}
// //                   source={{uri : item.images}}
// //                 /> */}
                
// //                 <TouchableOpacity onPress={() => setPopup(true,{title:item.title,good:item.image})}>
// //                 {/* onPress={() => navigation.navigate("Facialforglow",{dom:salonforwomen.allsalonForWomenList,
// //                   namm:item.salonForWomenName,namm:item.title,img:item.image})} */}
// //                 <Image
// //                      style={{ borderRadius: 12, width : 135, height : 150,alignSelf:'center',top:10
// //                     }}
// //                      source={{uri:item.image}}
// //                    />
// //                    </TouchableOpacity>
// //                 <Text style={{ fontSize: 16, textAlign: 'center', color: '#161616', fontWeight: '500', top: 10 }}>{item.salonForWomenName}</Text>
// //                 <Text style={{ fontSize: 14, textAlign: 'center', color: '#5E17EB', fontWeight: '400', top: 10 }}>{item.title}</Text>
                



                
// //                 {                                            /* route code */}

// //                 <TouchableOpacity onPress={() => toggle(false)}
// //                   style={{
// //                     backgroundColor: Press ? "green" : "#5E17EB",
// //                     borderRadius: 12, width: 40, height: 40, alignContent: 'center', justifyContent: 'center', left: 100, top: 10,
// //                   }}>
// //                   <View style={{alignSelf:'center',textAlign: 'center'}}>
// //                   <Text>{Press? <Check name='check' size={20} color={'white'} />:<Plus name='plus' size={20} color={'white'}    />}</Text>
// //                     {/* <Plus name='plus' size={20} color={'white'} style={{ textAlign: 'center'}} /> */}
// //                   {/* <Pb/> */}

// //                   </View> 
// //                 </TouchableOpacity> 
// //               </View>
// //             </View>
// //           )
// //         }
// //       />
// //       <Diamond 
// //       visible={Popup}
// //        closeCallback={() => setPopup(false
// //         )} navigation={navigation} />

// //            {/* <Diamond visible={Popup} closeCallback={()=>setPopup(false)} navigation={navigation}/> */}
// //       </View>
      
// //       <View style={{alignContent:'center',left:30}}> 
// //               <TouchableOpacity onPress={()=>setPopup(false)} style={{alignSelf:'flex-end',borderRadius: 12, borderWidth: 1, padding: 20, backgroundColor: '#D8D8D8', borderColor: '#D8D8D8', width: '90%',marginHorizontal:50}}>
                 
        
// //                       <Text style={{ color: '#858585', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '500',alignSelf:'center'}}>Proceed</Text>
                
                  

// //               </TouchableOpacity>
// //           </View>
// //       </ScrollView>  
// // {/* </View> */}
// //       </>
// //   )
// // };
 
 
// // //  const HelloWorldApp = ( {navigation} ) => {
 
  
 
 
// // //    return (<>
// // //    

// // //    </>
// // //    )
  
// // //  }
// //  export default Hello;
 
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   btnNormal: {
// //     borderColor: 'blue',
// //     borderWidth: 1,
// //     borderRadius: 10,
// //     height: 30,
// //     width: 100,
// //   },
// //   btnPress: {
// //     borderColor: 'blue',
// //     borderWidth: 1,
// //     height: 30,
// //     width: 100,
// //   }
// //   });


// import React, { useState, useEffect } from 'react';
// import {
//   ActivityIndicator,
//   FlatList,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Animated
// } from 'react-native';

// const marginBottomItem = 20;
// const paddingItem = 10;
// const imgHeight = 100;
// const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;

// // const BASE_URL = 'https://dummyapi.io/data/api';
// // const APP_ID = '0JyYiOQXQQr5H9OEn21312';
// const backgroundImg = 'https://i.pinimg.com/originals/2a/24/74/2a24740658e1910bcfedbbdd83098c4e.jpg'
// const imag = 'black'

// const App = () => {

//   const [data, setData] = useState([]);
//   const [isLoading, setIsloading] = useState(false);
//   const Yscroll = React.useRef(new Animated.Value(0)).current;
//   const [categories, setcategories] = useState([]);
//   // console.log('categories11', categories);
//   console.log('1111', categories)

//   useEffect(() => {
    
//       const requestOptions = {
//           method: 'GET',
//           redirect: 'follow'
//       };

//       fetch(
//         // "http://13.126.64.187:5500/user/getCategories"
//         // "https://api.thecatapi.com/v1/images/search?limit=10&page=1"
//         "https://api.sampleapis.com/coffee/hot"
//       , requestOptions).then((result) => {
//         console.log('Home', result)
//           result.json().then((resp) => {
//               setcategories(resp)
//           })
//       })
//  }, []);

//   const renderUser = ({ item, index }) => {
//     const scale = Yscroll.interpolate({
//       inputRange: [
//         -1, 0,
//         sizeOfItem * index,
//         sizeOfItem * (index + 2)
//       ],
//       outputRange: [1, 1, 1, 0]
//     })
//     return (
//       <Animated.View style={
//         [styles.item,
//         {
//           transform: [{ scale }]
//         }
//         ]
//       }>
       
//         <Image
//           style={styles.image}
//           source={{ uri: item.image}}
//           resizeMode='contain'
//           contentContainerStyle={{ padding: 20 }}
//         />
//         <View style={styles.wrapText}>
//           <Text style={styles.fontSize}>{`${item.title} ${item.firstName} ${item.lastName}`}</Text>
//         </View>
//       </Animated.View>
//     )

//   }
//   const User = ({  }) => {
//     // const scale = Yscroll.interpolate({
//     //   inputRange: [
//     //     -1, 0,
//     //     sizeOfItem * index,
//     //     sizeOfItem * (index + 2)
//     //   ],
//     //   outputRange: [1, 1, 1, 0]
//     // })
//     return (
//       <Animated.View style={
//         [styles.itemed,
//         {
//           transform: [{ scale }]
//         }
//         ]
//       }>
//         <Image
//           style={styles.image}
//           // source={{ uri: item.image}}
//           resizeMode='contain'
//           contentContainerStyle={{ padding: 20 }}
//         />
        
//         <View style={styles.wrapText}>
//           {/* <Text style={styles.fontSize}>{`${item.title} ${item.firstName} ${item.lastName}`}</Text> */}
//         </View>
//       </Animated.View>
//     )

//   }


//   return (
//     <SafeAreaView style={styles.container}>
//       {/* <Image
//         source={{ uri: backgroundImg }}
//         style={StyleSheet.absoluteFillObject}
//         blurRadius={80}
//       /> */}
//       {/* <View style={styles.itemed}> */}
//       <Image style={styles.itemed}
//         source={{ uri: backgroundImg }}
//         // style={StyleSheet.absoluteFillObject}
//         blurRadius={80}
//       />
//       {/* </View> */}
//       {
//         isLoading ? <ActivityIndicator /> : (
//           <Animated.FlatList
//             data={categories}
//             keyExtractor={item => `key-${item.id}`}
//             renderItem={renderUser}
//             contentContainerStyle={{
//               padding: 20
//             }}
//             onScroll={
//               Animated.event(
//                 [{ nativeEvent: { contentOffset: { y: Yscroll } } }],
//                 { useNativeDriver: true }
//               )}
//           />
//         )
//       }
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   fontSize: {
//     fontSize: 18
//   },
//   image: {
//     width: 100,
//     height: imgHeight
//   },
//   wrapText: {
//     flex: 1,
//     marginLeft: 10,
//     justifyContent: 'center'
//   },
//   item: {
//     flexDirection: 'row',
//     marginBottom: marginBottomItem,
//     borderRadius: 10,
//     backgroundColor: "#fff",
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 10
//     },
    
//     shadowOpacity: .3,
//     shadowRadius: 30,
//     padding: paddingItem
//   },
//   itemed: {
//     // flexDirection: 'row',
//     // marginBottom: marginBottomItem,
//     borderRadius: 10,
//     backgroundColor: imag,
//     shadowColor: 'red',
//     height:450,
//     shadowOffset: {
//       width: 0,
//       height: 10
//     },
    
//     shadowOpacity: .3,
//     shadowRadius: 30,
//     // padding: paddingItem
//   },
//   container: {
//     flex: 1
//   }

// });

// export default App;


import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
// const [isLog, setIsLog] = useState(true);
const UserData = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [myData, setMyData] = useState([]);
  const [IsLog, setIsLog] = useState([]);
  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const realData = await response.json();
      setMyData(realData);
      setIsLoaded(false);
      // console.log(realData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getUserData(), []);
  // const isLoggedIn = this.state.isLoggedIn;
  // render the students cards
  const showUserData = ({ item }) => {
    
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgStyle} source={{ uri: item.image }} />
          {/* <Image style={styles.imgStyle} source={{ }} /> */}
        </View>

        <View>
          <View style={styles.bioDataContainer}>
            <Text style={styles.bioData}> Bio-Data </Text>
            <Text style={styles.idNumber}>
              {item.id < 10 ? `#0${item.id}` : `#{item.id}`}
            </Text>
          </View>

          <View style={styles.mainContain}>
            <Text style={styles.myName}> Name: {item.name} </Text>
            <Text style={styles.myName}> email: {item.email} </Text>
            <Text style={styles.myName}> mobile: {item.mobile} </Text>
          </View>
        </View>
      </View>
    );
  };

  // const Data = ({ navigation }) => {
  //   return (
  //     <View style={styles.card}>
  //       <View style={styles.imgContainer}>
  //         {/* <Image style={styles.imgStyle} source={{ uri: item.image }} /> */}
  //         <Image style={styles.imgStyle} source={{ }} />
  //       </View>

  //       <View>
  //         <View style={styles.bioDataContainer}>
  //           <Text style={styles.bioData}> Bio-Data </Text>
  //           <Text style={styles.idNumber}>
  //             {/* {item.id < 10 ? `#0${item.id}` : `#{item.id}`} */}
  //           </Text>
  //         </View>

  //         <View style={styles.mainContain}>
  //           <Text style={styles.myName}> Name</Text>
  //           <Text style={styles.myName}> emai </Text>
  //           <Text style={styles.myName}> mobile:</Text>
  //         </View>
  //       </View>
  //     </View>
  //   );
  // };

  return (
    <View>
      <Text style={styles.mainHeader}>List of Students</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={myData} 
        // renderItem= {IsLog ? 'showUserData' : 'Data'}
        renderItem={showUserData}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    minHeight: "100%",
    paddingVertical: 50,
    backgroundColor: "#ebedee",
  },
  card: {
    width: 250,
    height: 350,
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: 20,
  },
  bioDataContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#353535",
    paddingVertical: 10,
    fontFamily: "JosefinSans_400Regular",
  },
  idNumber: {
    fontSize: 20,
    color: "rgba(255, 255, 255, 0.5)",
    fontFamily: "JosefinSans_400Regular",
    paddingRight: 10,
  },
  bioData: {
    fontSize: 30,
    color: "#fff",
    fontFamily: "JosefinSans_400Regular",
  },
  mainHeader: {
    fontSize: 30,
    color: "#a18ce5",
    textAlign: "center",
    fontFamily: "JosefinSans_400Regular",
  },
  imgContainer: {
    padding: 10,
  },
  imgStyle: {
    width: "100%",
    height: 180,
  },
  mainContain: {
    padding: 10,
    backgroundColor: "#353535",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  myName: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 10,
    alignSelf: "flex-start",
    textTransform: "capitalize",
    fontFamily: "JosefinSans_400Regular",
  },
});

export default UserData;

{/* <Flatlist
data={info}
renderItems={({ item }) => {
  if (item.id < 3) {
   return <Text style={{color:'red'}}>{item.name}</Text>
  }
  if else (items.id => 3) {
   return <Text style={{color:'blue'}}>{item.name}</Text>
  }
}}
/> 
  <FlatList style={{backgroundColor: colors[this.index % colors.length]}}
export const UserList: React.FunctionComponent<UserListProps> = ({
  data,
  onSendRequest,
}) => {
  const blacklist = [1, 3, 4]; // Node IDs to exclude
  const filteredNodes = data?.users?.nodes 
    ? data.users.nodes.filter(node => !blacklist.includes(node.id))
    : [];
  return (
    <View>
      <FlatList
        data={filteredNodes}
        horizontal={false}
        scrollEnabled
        renderItem={({ item }) => (
          <User user={item} onSendRequest={onSendRequest} />
        )}
        keyExtractor={(item) => item?.id?.toString()}
        ListEmptyComponent={NoUsersContainer}
      />
    </View>
  );
};
*/}