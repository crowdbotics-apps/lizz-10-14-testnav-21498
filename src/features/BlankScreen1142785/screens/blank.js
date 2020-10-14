import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View style={styles.View_1}>
      <Text style={styles.Text_4}>This is blank screen 1</Text>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen0142784")}
      >
        <Text style={styles.Text_6}>
          When this text is pressed, go to blank screen 0
        </Text>
      </TouchableOpacity>
      <View style={styles.View_10}>
        <View style={styles.View_11}>
          <Button
            title="Press me! (does nothing)"
            color="#3366FF"
            style={styles.Button_17}
            onPress={() => alert("Pressed!")}
          />
        </View>
        <View style={styles.View_12}>
          <Text style={styles.Text_15}>
            In the visual editor this long text becomes a row
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
