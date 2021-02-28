import React from 'react';
import {
	StyleSheet,

} from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';

const  Studentdata =()=>{
   
    return (
      <Container >
        <Header hasTabs style={styles.container}/>
        <Tabs >
          <Tab heading="My detail" tabStyle={{backgroundColor: '#FFA500'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#FFA500'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <Tab1 />
          </Tab>
          <Tab heading="All Vaccancies" tabStyle={{backgroundColor: '#FFA500'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#FFA500'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <Tab2 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
  const styles =StyleSheet.create({
    container:{
        backgroundColor:'#FF8C00',
        marginTop:-60,
    }
  })

export default Studentdata;