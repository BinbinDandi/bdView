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

export default class test extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedTab: 'yd_home'
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
              selected = {this.state.selectedTab === 'yd_home'}
              selectedTitleStyle = {{color: '#f00'}}
              title = '首页'
              renderIcon = {() => <Image style={styles.image} source = {require('./res/images/home.png')} />}
              renderSelectedIcon = {() => <Image style={[styles.image, {tintColor: '#f00'}]} source = {require('./res/images/home.png')} />}
              badgeText = '1'
              onPress = {() => this.setState({selectedTab: 'yd_home'})}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected = {this.state.selectedTab === 'yd_frind'}
              selectedTitleStyle = {{color: '#0f0'}}
              title = '好友'
              renderIcon = {() => <Image style={styles.image} source = {require('./res/images/frind.png')} />}
              renderSelectedIcon = {() => <Image style={[styles.image, {tintColor: '#0f0'}]} source = {require('./res/images/frind.png')} />}
              onPress = {() => this.setState({selectedTab: 'yd_frind'})}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected = {this.state.selectedTab === 'yd_news'}
              selectedTitleStyle = {{color: '#00f'}}
              title = '消息'
              renderIcon = {() => <Image style={styles.image} source = {require('./res/images/news.png')} />}
              renderSelectedIcon = {() => <Image style={[styles.image, {tintColor: '#00f'}]} source = {require('./res/images/news.png')} />}
              onPress = {() => this.setState({selectedTab: 'yd_news'})}>
            <View style={styles.page3}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected = {this.state.selectedTab === 'yd_my'}
              selectedTitleStyle = {{color: '#ff0'}}
              title = '我的'
              renderIcon = {() => <Image style={styles.image} source = {require('./res/images/profile.png')} />}
              renderSelectedIcon = {() => <Image style={[styles.image, {tintColor: '#ff0'}]} source = {require('./res/images/profile.png')} />}
              onPress = {() => this.setState({selectedTab: 'yd_my'})}>
            <View style={styles.page4}></View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
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
    backgroundColor: '#00f'
  },
  page4: {
    flex: 1,
    backgroundColor: '#ff0'
  },
  image: {
    width: 22,
    height: 22
  }
});

AppRegistry.registerComponent('test', () => test);
