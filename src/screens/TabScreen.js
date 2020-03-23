import React, { Component } from 'react';
import { Container, Header,Button,Icon, Thumbnail,Content,Left, Body, Right, Title, Tab, Tabs, View } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';

import logo from '../images/logo.png'
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#ffffff'}} hasTabs>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
          <Body>
            
            <Title style={{color:'black'}}>
            <Thumbnail square source={{uri: '../images/modi.png'}} />
            Vista News</Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'white'}}>
          <Tab tabStyle={{backgroundColor:'#000000'}} activeTabStyle={{backgroundColor:'#FFA500', tabBarUnderlineStyle:"dotted"}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="FINANCE">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#000000'}} activeTabStyle={{backgroundColor:'#FFA500'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Energy">
            <Tab2 />
          </Tab>
          {/* <Tab tabStyle={{backgroundColor:'#009387'}} activeTabStyle={{backgroundColor:'#009387'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Technology">
            <Tab3 />
          </Tab> */}
        </Tabs>
      </Container>
    );
  }
}