export const firebaseConfig = () => {
  return (
    <script type="module">
      // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries
    
      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
        apiKey: "AIzaSyAnFLy-r2UiExGidL16FtsoWHnueZzoBkU",
        authDomain: "snoidepaedia.firebaseapp.com",
        projectId: "snoidepaedia",
        storageBucket: "snoidepaedia.appspot.com",
        messagingSenderId: "194530065782",
        appId: "1:194530065782:web:1983668c201522ead0ce57",
        measurementId: "G-4CVNZNXB9T"
      };
    
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
    </script>
  );
};