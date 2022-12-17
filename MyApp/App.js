import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          // flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          margin: 20,
        }}
      >
        <View>
          <View>
            <Text>Sep 18, 2022</Text>
          </View>
          <View>
            <Text>Huseyn Mammadov</Text>
          </View>
        </View>
        <View>
          <Text>Shekil olacaq</Text>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 18, textAlign: "start", marginLeft: 48 }}>
          Projects
        </Text>
      </View>
      <View
        style={{
          // flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
          // marginBottom: 0
        }}
      >
        <View>
          <Text>Website</Text>
        </View>
        <View>
          <Text>Mobile App</Text>
        </View>
        <View>
          <Text>Research</Text>
        </View>
      </View>
      <View
        style={{
          // flex: 1,
          flexDirection: "row",
          justifyContent: "space-arround",
          padding: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "#FF773D",
            height: 150,
            flex: 1,
            justifyContent: "center",
            marginRight: 10,
            borderRadius: 20,
            color: "white",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text>10</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text>Completed tasks</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#4C2B5A",
            height: 150,
            flex: 1,
            justifyContent: "center",
            marginLeft: 10,
            borderRadius: 20,
            color: "white",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text>07</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text>In progress</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={{ color: "gray", marginLeft: 15 }}>In progress</Text>
      </View>
      <View>
        <View style={{ margin: 10 }}>
          <Text>Design a landing page for Wp Dark</Text>
        </View>
        <View style={{ marginLeft: 10, marginTop: 0 }}>
          <Text>Mode Pro</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
            marginTop: 15,
          }}
        >
          <View style={{ backgroundColor: "orange", marginLeft: 12 }}>
            Aug 3
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text>Landing Page</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={{ margin: 10 }}>
          <Text>Design a landing page for Wp Dark</Text>
        </View>
        <View style={{ marginLeft: 10, marginTop: 0 }}>
          <Text>Mode Pro</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
            marginTop: 15,
          }}
        >
          <View style={{ backgroundColor: "orange", marginLeft: 12 }}>
            Aug 3
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text>Landing Page</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

