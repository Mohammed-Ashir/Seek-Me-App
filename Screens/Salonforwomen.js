// import React from 'react';
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
//   FlatList

// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import Location from 'react-native-vector-icons/Ionicons';
// import Noti from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/EvilIcons';
// import LinearGradient from 'react-native-linear-gradient';
// import Header from '../Screens/Components/Header';
// import Facialforglow from './Facialforglow'




// const Salonforwomen = ( { navigation }) => {

//   // const categories = [
//   //   {
//   //     id: 1,
//   //     title: 'Facial for glow',
//   //     onemore: '₹599 onwords',
//   //     image: require('../assets/sone.png')
//   //   },
//   //   {
//   //     id: 2,
//   //     title: 'Manicure',
//   //     onemore: '₹499 onwords',

//   //     image: require('../assets/stwo.png')
//   //   },
//   //   {
//   //     id: 3,
//   //     title: 'Pediure',
//   //     onemore: '₹499 onwords',

//   //     image: require('../assets/sthree.png')
//   //   },
//    //  {
//    //    id: 4,
//    //    title: 'Threading',
//    //    onemore: '₹59 onwords',

//    //    // title1:'ajdlfjdjfj',
//    //    image: require('../assets/sfour.png')
//    //  },

//   ]


//   return (<>
//   <ScrollView>
//     <View style={{ marginHorizontal: 20 }}>
//       {/* <Header navigate={navigation} title="Salon for women" /> */}
//       <Header navigation={navigation} title="Salon for women" />

//       <View style={{ marginTop: 20 }}>

//         <FlatList
//           style={{ height: 600 }}
//           data={categories}
//           //  horizontal={true}
//           numColumns={2}
//           renderItem={({ item }) => {
//             return (
//               <View style={{ alignContent: 'center', alignItems: 'center' }}>

//                 <View style={{ borderRadius: 12, padding: 20, margin: -10, backgroundColor: '#FFFFFF' }}>
//                 <TouchableOpacity onPress={()=>navigation.navigate("Facialforglow")}>
//                   <View>
//                   <Image
//                     style={{ borderRadius: 12, borderWidth: 0.5 }}
//                     source={item.image}
//                   />
//                   </View>
//                    </TouchableOpacity>
//                    <Text style={{ fontSize: 16, textAlign: 'center', color: '#161616', fontWeight: '500' }}>{item.title}</Text>
//                   <Text style={{ fontSize: 14, textAlign: 'center', color: '#5E17EB', fontWeight: '400' }}>{item.onemore}</Text>

//                 </View>
//                 </View>
//             )

//           }}



//         />
//       </View>
//     </View>
//     </ScrollView>
//   </>
//   )
// }
// export default Salonforwomen;


// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

//  import React, { useEffect, useState } from 'react';

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
//  import Location from 'react-native-vector-icons/Ionicons';
//  import Noti from 'react-native-vector-icons/Ionicons';
//  import Icon from 'react-native-vector-icons/EvilIcons';
//  import LinearGradient from 'react-native-linear-gradient';
//  import Head from '../Screens/Components/Header'
//  import Header from '../Screens/Components/Header';


//  const Salonforwomen = ({props,navigation}) => {

//    const [salonforwomen, setcategories] = useState([]);
//    console.log('1111',salonforwomen)

//    useEffect(() => {

//      const requestOptions = {     
//        method: 'GET',
//        redirect: 'follow'
//      };

//      fetch(
//        "http://15.206.166.219:5500/user/allsalonForWomenList"
//        // "http://15.206.166.219:5500/user/getCategories"
//        , requestOptions).then((result) => {
//        result.json().then((resp) => {
//          setcategories(resp)
//        })
//      })
//    }, []);


//    // const onclick_item = (key) =>{
//    //   console.log('key',key);
//    //   switch (key) {
//    //     case "Devin":
//    //       //navigate
//    //       break;
//    //     case "Jackson":
//    //       //navigate
//    //       break;
//    //     default:
//    //     //whatever you want
//    //   }
//    // }
//    // const categories = [
//    //   {
//    //     id: 1,
//    //     title: 'Facial for glow',
//    //     onemore: '₹599 onwords',
//    //     image: require('../assets/sone.png')
//    //   },
//    //   {
//    //     id: 2,
//    //     title: 'Manicure',
//    //     onemore: '₹499 onwords',

//    //     image: require('../assets/stwo.png')
//    //   },
//    //   {
//    //     id: 3,
//    //     title: 'Pediure',
//    //     onemore: '₹499 onwords',

//    //     image: require('../assets/sthree.png')
//    //   },
//    //   {
//    //     id: 4,
//    //     title: 'Threading',
//    //     onemore: '₹59 onwords',

//    //     // title1:'ajdlfjdjfj',
//    //     image: require('../assets/sfour.png')
//    //   },

//    // ]
//    const handleCardItem = (key) => {
//      console.log('key', key);
//      const saloneForWomenId =  key
//      console.log('getIds',saloneForWomenId);
//      var myHeaders = new Headers();
//      myHeaders.append("Content-Type", "application/json");

//      var raw = JSON.stringify({
//        "id": saloneForWomenId
//      });
//      console.log('2222222', raw);

//      var requestOptions = {
//        method: 'POST',
//        headers: myHeaders,
//        body: raw,
//        redirect: 'follow'
//      };

//      fetch("http://15.206.166.219:5500/admin/subSalonforWomenPost", requestOptions)

//      .then(response => response.json())
//      .then(success => {
//        const tokan = success.token; 
//        const requestOptions = {
//          method: 'GET',
//          headers: {
//            Accept: "application/json",
//            "Content-Type": "application/json",
//            Authorization: "Bearer " + `${tokan}`,
//        },
//          redirect: 'follow'
//      };

//      fetch("http://15.206.166.219:5500/user/getSalonForWomen", requestOptions).then((result) => {
//          result.json().then((resp) => {          
//          const data = resp.response.subSalonforWomen;
//          console.log('data',data);
//          if(data){
//            props.navigation.navigate("Facialforglow",{
//              userId : data
//            })
//          }
//          })
//      })
//      console.log('success',tokan)
//      })
//      .catch(error => console.log('error', error));
//  }

//    return (<>
//      <ScrollView>
//        <View style={{ marginHorizontal: 20 }}>
//          <Header navigation={navigation} title="Salon for women" />


//          <View style={{ marginTop: 15 }}>

//            <FlatList
//              style={{}}
//              data={salonforwomen.allsalonForWomenList} 
//              //  horizontal={true}
//              numColumns={2}
//              renderItem={({ item }) => {
//                return (
//                   <View style={{ alignContent: 'center', alignItems: 'center', width : 160, height : 235, marginBottom: 5}}>
//                    <View style={{ borderRadius: 8, backgroundColor: '#FFFFFF', width : 150, height : 230}}>
//                      <Image
//                       style={{ borderRadius: 12, width : 135, height : 170, margin: 8}}
//                       source={{ uri: item.image }}
//                     />

//                      {/* onPress={item => onclick_item(item._id)} */}
//                      <TouchableOpacity onPress={()=> handleCardItem (item.id)}>
//                        <Text style={{ fontSize: 16, textAlign: 'center', color: '#161616', fontWeight: '500' }}>{item.salonForWomenName}</Text>
//                      </TouchableOpacity>
//                      <Text style={{ fontSize: 14, textAlign: 'center', color: '#5E17EB', fontWeight: '400' }}>{item.price}</Text>

//                    </View>




//                  </View>
//                )

//              }}



//            />
//          </View>
//        </View>
//      </ScrollView>
//    </>
//    )
//  }
//  export default Salonforwomen;


import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
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
  FlatList

} from 'react-native';

import {
  Colors,
  DebugInstructions,

  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Location from 'react-native-vector-icons/Ionicons';
import Noti from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
import Head from '../Screens/Components/Header'
import Header from '../Screens/Components/Header';


const Salonforwomen = (props) => {
  const { navigation } = props;
const route=useRoute();
  const [salonforwomen, setcategories] = useState([]);
  // console.log('1111', salonforwomen)

  useEffect(() => {

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(
      //  "https://api.sampleapis.com/coffee/hot"
      `http://13.126.187.109:5500/user/getsubcategories/${props.route.params.id}`
      // "http://13.126.187.109:5500/admin/salonForWomenList"
      // "http://13.232.69.59:5500/admin//salonFormenList"
      // "http://15.206.166.219:5500/user/getCategories"
      , requestOptions).then((result) => {
        // console.log(allsalonForWomenList)
        result.json().then((resp) => {
        
          setcategories(resp)
        })
      })
  }, []);


  const handleCardItem = (key) => {
    console.log('key', key);
    const saloneForWomenId = key
    console.log('getIds', saloneForWomenId);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "id": saloneForWomenId
    });
    console.log('2222222', raw);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://15.206.166.219:5500/admin/subSalonforWomenPost", requestOptions)

      .then(response => response.json())
      .then(success => {
        const tokan = success.token;
        const requestOptions = {
          method: 'GET',
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + `${tokan}`,
          },
          redirect: 'follow'
        };

        fetch("http://13.126.187.109:5500/admin/subSalonforWomenData", requestOptions).then((result) => {
          result.json().then((resp) => {
            const data = resp.response.subSalonforWomen;
            console.log('data', data);
            if (data) {
              props.navigation.navigate("Facialforglow", {
                userId: data
              })
            }
          })
        })
        console.log('success', tokan)
      })
      .catch(error => console.log('error', error));
  }

  return (<>
    <ScrollView>
      <View style={{ marginHorizontal: 20 }}>
      <Header navigation={navigation} title={route.params.head} />
      {/* <Header navigation={navigation} title="Salom for ewiomwn"/> */}
        <View style={{ marginTop: 15 }}>
        
          <FlatList
            style={{}}
            // data={salonforwomen}
            data={salonforwomen.result}
            //  horizontal={true}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                //  />
                // <View style={{ alignContent: 'center', alignItems: 'center', width: 160, height: 235, marginBottom: 5 }}>
                 
                  <View style={{ borderRadius: 8, backgroundColor: '#FFFFFF', width: 150, height: 250 }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Facialforglow",{
                    
                      head:item.name,id:item._id
                     
                    })}
                   
                     >
                    <Image
                      style={{ borderRadius: 12, width: 135, height: 170, margin: 8 }}
                   
                      source={{uri:item.image}}
                    />
                    {/* <Image
                      style={{ borderRadius: 12, width: 135, height: 170, margin: 8 }}
                   
                      source={{ uri:item.categoryId.image }}
                    /> */}
                  
                    
                      <Text style={{ fontSize: 16, textAlign: 'center', color: '#161616', fontWeight: '500' }}>{item.name}</Text>
                      {/* <Text style={{ fontSize: 16, textAlign: 'center', color: '#161616', fontWeight: '500' }}>{item.categoryId.name}</Text> */}
                      <Text style={{ fontSize: 16, textAlign: 'center', color: '#5E17EB', fontWeight: '500' }}>₹ {item.price} onwards</Text>
                    </TouchableOpacity>
                    {/* <Text style={{ fontSize: 14, textAlign: 'center', color: '#5E17EB', fontWeight: '400' }}>₹ {route.params.name} onwards</Text> */}

                  </View>
                // </View>
              )

            }}
          />
        </View>
      </View>
    </ScrollView>
  </>
  )
}
export default Salonforwomen;