import React, { Component } from 'react'
import { View } from 'react-native'
export class Test extends Component {


    render() {
        return (
            <View >
                
                <View style={{flex: 1, flexDirection:"row" }}>
                    <View style={{ backgroundColor: "red", height:50, width:"20%" }}></View>
                    <View style={{ backgroundColor: "yellow",  height:50, width:"60%"}}></View>
                    <View style={{ backgroundColor: "blue", height:50, width:"20%" }}></View>
                </View>
            </View>

        )
    }
}

export default Test
