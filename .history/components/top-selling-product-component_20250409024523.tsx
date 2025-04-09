
import { Image, StyleSheet, Platform, Text, View, TouchableOpacity } from 'react-native';

interface TopSellingProductComponentProps {
  onPress?: () => void;
}

export default function TopSellingProductComponent({onPress}: TopSellingProductComponentProps) {
  return (
    <>
    <View style={styles.container}>
        <View >
    <Image
        source={require("../assets/images/top-selling.png")}
        style={{height: 100 , width: 110}}
        resizeMode="contain"
        />
        </View>
    <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 15}}>Acres-Protek</Text>
    <Text style={styles.price}>$ 2060</Text>
        <TouchableOpacity>
            <Text style={styles.btn}>ADD TO CART</Text>
        </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical:0,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        borderRadius:7,
        width:"30%"
    },
    price:{
        fontSize: 16,
        fontWeight: '400',
        marginTop: 5,
        color: '#000000',
    },
    btn:{
        color: '#008080',
        padding: 10,
        borderRadius: 5,
        textAlign: 'center',
        marginTop: 10,
        fontWeight:'600'
    }
})
