/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class MyApp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedTab: 'shouye',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
              selected = {this.state.selectedTab === 'shouye'}
              title = '首页'
              renderIcon = {() => <Image source = {require('./res/images/home.png')} />}
              renderSelectedIcon = {() => <Image source = {require('./res/images/home.png')} />}
              badgeText = '1'
              onPress = {() => this.setState({selectedTab: 'shouye'})}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected = {this.state.selectedTab === 'haoyou'}
              title = '好友'
              renderIcon = {() => <Image source = {require('./res/images/profile.png')} />}
              renderSelectedIcon = {() => <Image source = {require('./res/images/profile.png')} />}
              onPress = {() => this.setState({selectedTab: 'haoyou'})}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected = {this.state.selectedTab === 'xiaoxi'}
              title = '消息'
              renderIcon = {() => <Image source = {require('./res/images/home.png')} />}
              renderSelectedIcon = {() => <Image source = {require('./res/images/home.png')} />}
              badgeText = '1'
              onPress = {() => this.setState({selectedTab: 'xiaoxi'})}>
            <View style={styles.page3}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected = {this.state.selectedTab === 'wode'}
              title = '我的'
              renderIcon = {() => <Image source = {require('./res/images/profile.png')} />}
              renderSelectedIcon = {() => <Image source = {require('./res/images/profile.png')} />}
              onPress = {() => this.setState({selectedTab: 'wode'})}>
            <View style={styles.page4}></View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  page1: {
    flex: 1,
    backgroundColor: '#f00'
  },
  page2: {
    flex: 1,
    backgroundColor: '#0f0'
  },
  page3: {
    flex: 1,
    backgroundColor: '#f0f'
  },
  page4: {
    flex: 1,
    backgroundColor: '#ff0'
  }
})

AppRegistry.registerComponent('MyApp', () => MyApp);
