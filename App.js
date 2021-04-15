import React, { Component } from 'react'
import { Text, View, Linking, TouchableOpacity, Dimensions, Alert } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'
import Test from './test'

const { width, height } = Dimensions.get('window');

export class App extends Component {

  ifScanned = e => {
    Linking.openURL(e.data).catch(err => Alert.alert("Invalid QR Code", e.data));
  }
  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={{ height: "35%", width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
          <Text style={{ fontSize: 20, alignItems: "center", fontWeight: "bold", marginTop: "20%", backgroundColor: "white" }}>Click To Scan Your Platform QR Code</Text>
          <Text style={{ fontSize: 20, }}>Scanning will start automatically</Text>
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ backgroundColor: "white", height: 500, width: "20%", marginTop: -11 }}></View>
          <View style={{ backgroundColor: "yellow", height: 500, width: "60%" }}>
            <QRCodeScanner
              containerStyle={{ backgroundColor: "#FFF" }}
              onRead={this.ifScanned}
              reactivate={true}
              permissionDialogMessage="Need Permi9ssion To Acess Camera"
              reactivateTimeout={10}
                // showMarker={true}
                // markerStyle={{borderColor:"red", borderRadius:10}}
                // bottomContent={
                //   <TouchableOpacity>
                //     <Text style={{fontSize:20}}>QR Code Scanner</Text>
                //   </TouchableOpacity>
                // }
            />

          </View>
          <View style={{ backgroundColor: "white", height: 500, width: "20%", marginTop: -12 }}></View>
        </View>

        <View style={{ backgroundColor: "white", height: "30%", width: "100%" }}>

        </View>
      </View>

    )
  }
}

export default App
