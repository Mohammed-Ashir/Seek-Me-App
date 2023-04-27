
import React ,{ useState, useEffect }from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import Plus from 'react-native-vector-icons/AntDesign';
import Star from 'react-native-vector-icons/AntDesign';
import SelectedServices from './SelectedServices';
import {Component} from 'react';
import {useRoute} from '@react-navigation/native';
// import Pb from './Components/Pb';

const Diamond = (props) => {
  const {visible, closeCallback,navigation} =props;
  const [Popup, setPopup] = useState(false,"key");
  const route = useRoute ();
  // const { all,namm,price,image,sp } = route.params;
  const [Press,setPress]=useState();
  const toggle=()=>{setPress(!Press);
  }
  // const [Popup,setPopup] = useState(true);
  // const Popu=()=>{setPopup(true);
  // }

  
  return (
    
<Modal
// onRequestClose={() => {setPopup(false
//   );}}
  animationType={"slide"}
      isVisible={visible}
      // visible={Popup}
      // onpress={visible}
      statusBarTranslucent
      transparent
      onBackdropPress={ closeCallback}
      onBackButtonPress={ closeCallback}
      
      style={{margin: 0, justifyContent: 'flex-end'}}>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'android' ? undefined : 'position'}
        keyboardShouldPersistTaps="handled">
        <ScrollView scrollEnabled={false} keyboardShouldPersistTaps="handled">
          <View
            style={{
              height: 'auto',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              backgroundColor: '#fff',
            }}>
            <View
              style={{
                height: 450,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}>
              <View>
                <Image
                  style={{
                    width: 350,
                    height: 250,
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    alignContent:'center'
                  }}
                  // source={require('../assets/fgone.png')}
                  source={{uri:props.image}}
                  // source={route.params.images}
                  // source= {JSON.stringify(image)}
                  ></Image>
              </View>
            
              <View style={{marginHorizontal: 20}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#161616',
                    fontWeight: '700',
                    top: 25,
                    marginLeft:0
                  }}>
                  {props.name}
                  {/* {route.params.head} */}
                   {/* {JSON.stringify(price)} */}
                </Text>
              </View>

              
              <TouchableOpacity onPress={() => [toggle(false),props.dismiss(false)]}
               
                  
                   style={{
                    
                    borderRadius: 8,
                    alignItems: 'center',
                    marginHorizontal: 160,
                    left: 100,
                    width: 75,
                    height:30,
                    backgroundColor: '#E5E5E5',
                  }}>
                  
                  <Text  style={{
                     
                    fontSize: 17,
                    color: Press?'green':'#5E17EB',
                    fontWeight: '500',
                    left: 0,
                    top: 6,
                  }}>{Press? ' ☑ Added' :'+ ADD'}</Text>
                  
                </TouchableOpacity> 
               
              
              <View style={{marginHorizontal:20}}>
                <Star name="star" color={'#F5C443'} />
                <Text
                  style={{
                    left: 20,
                    top: -15,
                    fontSize: 12,
                    color: '#161616',
                    fontWeight: '500',
                  
                  }}>
                  4.8 (23k)
                </Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Otp')}>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#5E17EB',
                    fontWeight: '700',
                    top: -5,
                    marginHorizontal:20
                  }}>
                     ₹ {props.price} 
                </Text>
                <Text
                style={{
                  fontSize: 14,
                  color: '#757575',
                  fontWeight: '400',
                  top: -22,
                  left:70,
                  textDecorationLine: 'line-through',
                }}>
                            ₹1299{props.datat}

                {/* {route.params.namm} */}
              </Text>
              </TouchableOpacity>
             

              {/* <FlatList
                 style={{ height:800 }}
                data={route.params.all}
                 horizontal={true}
                //  numColumns={2}
                renderItem={({item}) => {
                  return ( */}
                    <View>
                      <Image
                        style={{
                          width: 400,
                          height: 450,
                         alignSelf:'center'
                        }}
                        // source={require('../assets/fgone.png')}
                        // source={{uri: route.params.images}}
                        // source={{uri:props.image}}
                      ></Image>
                      <Text
                        style={{
                          fontSize: 74,
                          color: '#757575',
                          fontWeight: '400',
                        }}>
                        {'\u2B24' + ' '}
                        {props.name}
                        {/* {route.params.namm} */}
                      </Text>

                      
                    </View>
               {/* );
               }}
             />  */} 
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
    
    );
};
export default Diamond;
