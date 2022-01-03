import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import FontAwesome from '@expo/vector-icons';

import color from '../constants/color'
import text from '../constants/text'


const LeftContent = props => <Avatar.Icon {...props} icon="circle" color='white' style={{backgroundColor: 'black', flex: 1}} />

const Tile = (props) => (
  <Card style={{backgroundColor: color.theme}}>
    <Card.Title title="Card Title" left={LeftContent} />
    <Card.Content>
      <Title style={{color:'white'}}  >Card title</Title>
      <Paragraph style={{col}} >Card content</Paragraph>
      <Title style={{color:'white'}}  >Card title</Title>
    </Card.Content>
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default Tile;

const styles = StyleSheet.create({
  
})