import * as React from 'react';
import { TouchableOpacity,Text, View,Image} from 'react-native';
import styles from './styles';
import Logo from '../assets/logo.png'

const HomeScreen=({navigation}) => {
    return (
        
      <View style={styles.background}>
        <View style={styles.contentHeads}>
          <Image style={{}} source={Logo} />
        <Text style={styles.mainHead}>Kaarunyam</Text>
        <Text style={styles.subHead}>Palliative Care Management Application</Text>
        </View>
        {/* <View styles={styles.buttonHead}>
        <TouchableOpacity   style={styles.buttonforward}  onPress={()=> navigation.navigate('LoginPageMain')}>
          <Text style={styles.text3}>{'>'}</Text>
        </TouchableOpacity>
      </View> */}
      </View>
    );
  }

  export default HomeScreen;