importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js")

firebase.initializeApp({
  apiKey: "AIzaSyAeHF3xvvsvJSD1uvMfRbobrYAEvuomvng",
  authDomain: "single-window-8807d.firebaseapp.com",
  projectId: "single-window-8807d",
  storageBucket: "single-window-8807d.firebasestorage.app",
  messagingSenderId: "277134523424",
  appId: "1:277134523424:web:55000fc49575b5bb7d9045",
  measurementId: "G-JXEMVB6VFC",
  databaseURL: "https://utruck-f92cb-default-rtdb.firebaseio.com"
})

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging()

messaging.onBackgroundMessage((data) => console.log("Background", data))

self.addEventListener("push", function (e) {
  const data = e.data.json()
  const options = {
    body: data.notification.body,
    icon: data.notification.icon,
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "2"
    }
  }
})
