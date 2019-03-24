# buttons_ros
ROSで様々なシステムを構築したとき、ボタンの操作でモードを切り替えたい場面があります。
そこで、Webベースのボタン操作が可能なROSパッケージを作成しました。

## 1. Requirements
* ros-kinetic-rosbridge-suite
```
sudo apt install ros-kinetic-rosbridge-suite
```

## 2. Usage
launchファイルから起動します。
```
roslaunch buttons_ros web_buttons.launch
```
あとは、launchを起動したPCのIPアドレスにブラウザからアクセスします。

* ローカルホストの場合
```
localhost:8000
```
* ローカルネットワーク内からのアクセス(例)

```
192.168.0.123:8000
```
## 3. Node

## 3.1 web_buttons, local_button_node
このノードは、Webブラウザ上にボタンを表示し、ボタンのON/OFFの情報をトピックとして配信します。
### 3.1.1 Published Topics
buttons ([buttons_ros/Buttons](https://github.com/AtsushiSaito/buttons_ros/blob/master/msg/Buttons.msg))  
ボタンの状態は、buttonsという配列で管理されています。

### 3.1.2 Subscribe Topics
buttons ([buttons_ros/Buttons](https://github.com/AtsushiSaito/buttons_ros/blob/master/msg/Buttons.msg))  
ボタンの状態は、buttonsという配列で管理されています。

### 3.1.3 Parameter
n_buttons (bool, default: 3)  
ボタンの数をパラメータで変更できます。
