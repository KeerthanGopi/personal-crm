import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";
import { Text, View, Button, Platform } from "react-native";
import { TextInput } from "react-native-gesture-handler";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

function FloatingButton() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const [personName, setPersonName] = useState("");
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
        console.log("2");
        console.log(notification);
        console.log(expoPushToken)
      });
    console.log("1");
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("3");
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "white",
      }}
    >
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => setPersonName(text)}
          value={personName}
        />
      </View>
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          console.log("Button Pressed")
          await schedulePushNotification(personName);
        }}
      />
    </View>
  );
}

async function schedulePushNotification(personName) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "BIRTHDAY REMINDER",
      body: "Today is " + personName + "'s Birthday",
      data: { data: "1234" },
      sound: true,
    },
    trigger: {
      day: 27,
      month: 9,
      hour: 1,
      minute: 14,
      repeats: true
    }
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    alert(
      "Failed to get push token for push notification! Contact Maintainer."
    );
    return;
  }
  token = (await Notifications.getExpoPushTokenAsync()).data;
  console.log("Sup");
  console.log(token);

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

export default FloatingButton;

