/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

const firebaseConfig = {
  apiKey: "AIzaSyCRheo6z8IBbzSzPirTYCkaUAF4Q1bFIZc",
  authDomain: "aduruthumauth.firebaseapp.com",
  databaseURL: "https://aduruthumauth-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "aduruthumauth",
  storageBucket: "aduruthumauth.appspot.com",
  messagingSenderId: "304890285391",
  appId: "1:304890285391:web:e4bcd90ae9535aec64c93a"
};


firebase.initializeApp(firebaseConfig);

// Google OAuth Client ID, needed to support One-tap sign-up.
// Set to null if One-tap sign-up is not supported.
var CLIENT_ID =
    'YOUR_OAUTH_CLIENT_ID';
