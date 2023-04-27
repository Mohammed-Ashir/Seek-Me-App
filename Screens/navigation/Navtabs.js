// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Register from '../Register'
// import OTP from '../Otp'
// import React from 'react'
// import Home from '../Home'
// import Salonforwomen from '../Salonforwomen';
// import {
//     SafeAreaView,
//     ScrollView,
//     StatusBar,
//     StyleSheet,
//     Text,
//     useColorScheme,
//     View,
//     Image,
//     TextInput,
//     TouchableOpacity
    
//   } from 'react-native';
//  import Icon from 'react-native-vector-icons/EvilIcons';
  
 
// const Navtab = createBottomTabNavigator();

// const Navtabs = () => {
//     return(
//         <Tab.Navigator 
//             tabBarOptions={{
//                 showLabel:false,
//                 style:{
//                     height:75,
//                     bottom:30,
//                     backgroundColor:'white'  ,
//                     position:'absolute'                  
//                 }
//             }}
        
        
//         >
            
                
               
//             <Tab.Screen name='Home' component={Home} 
//             // options={{
//             //     tabBarIcon:({focused}) =>{
//             //         <View style={{alignItems:'center',justifyContent:'center'}}>
//             //             <Icon size={60} />

//             //             <Text style={{color:'black',fontSize:16}}>HOME</Text>

//             //         </View>
//             //     }
//             // }} 
//             />
//             <Tab.Screen name='otp' component={OTP} />
//             <Tab.Screen name='Register' component={Register} />
//             <Tab.Screen name='Salonforwomen' component={Salonforwomen} />



//         </Tab.Navigator>
//     )
// }

// export default Navtabs;

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from '../Register'
import OTP from '../Otp'
import React from 'react'
import Summarylist from '../Components/Summarylist';
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
    TouchableOpacity
    
  } from 'react-native';
 import Icon from 'react-native-vector-icons/EvilIcons';
  
 
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator 
            tabBarOptions={{
                showLabel:false,
                style:{
                    height:75,
                    bottom:30,
                    backgroundColor:'white'                    
                }
            }}
        
        
        >
            
                
               
            <Tab.Screen name='Home' component={Register} options={{
                tabBarIcon:({focused}) =>{
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Icon size={60} />

                        <Text style={{color:'black',fontSize:16}}>HOME</Text>

                    </View>
                }
            }} />
            <Tab.Screen name='Booking' component={Summarylist} />
            <Tab.Screen name='Walet' component={Register} />
            <Tab.Screen name='Profile' component={OTP} />



        </Tab.Navigator>
    )
}

export default Tabs;