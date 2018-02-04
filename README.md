## Description

ReactNative App to find the intent based on user text input. [Task 2 - Subgroup task for HPDF]

## Steps to make the app work:

**Prerequisites:**

```Command Prompt

>> nvm install 6.9.5

>> nvm use 6.9.5

>> npm install -g npm@4.6.1

>> npm install -g yarn@1.3.2

>> npm install -g react-native-cli@2.0.1

```

**Project installation procedure:**
```Command Prompt
>> git clone https://github.com/Naveen7892/ReactNativeIntent.git

>> cd ReactNativeIntent

>> npm install

(Run app in android device or emulator)
>> react-native run-android

```

**Project and environment info:**
```Command Prompt
~/ReactNativeIntent>react-native info
Scanning folders for symlinks in ~\ReactNativeIntent\node_modules (99ms)

Environment:
  OS: Windows 8.1
  Node: 6.9.5
  Yarn: 1.3.2
  npm: 4.6.1
  Watchman: Not Found
  Xcode: N/A
  Android Studio: Version  3.0.0.0 AI-171.4443003

Packages: (wanted => installed)
  react: 16.2.0 => 16.2.0
  react-native: 0.52.2 => 0.52.2

```

**Server API Used:**
```Server API
URL: https://api.abash76.hasura-app.io/get-news
METHOD: POST
HEADERS: 
    'Accept': 'application/json',
    'Content-Type': 'application/json'
BODY:
    'getNews': '...Search text...'

Environment:
  OS: Windows 8.1
  Node: 6.9.5
  Yarn: 1.3.2
  npm: 4.6.1
  Watchman: Not Found
  Xcode: N/A
  Android Studio: Version  3.0.0.0 AI-171.4443003

Packages: (wanted => installed)
  react: 16.2.0 => 16.2.0
  react-native: 0.52.2 => 0.52.2

```

******************************************************************************************************