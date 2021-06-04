import React from 'react'
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const useStyles = makeStyles({
   
    contributor: {
       borderStyle: "hidden",
       borderRadius: 30,
       backgroundColor: "#91ede5",
       margin: 5,
       color: "#1a1de8",
       fontWeight: 200,
    }
});

export default function Contributor(props) {

    console.log(props);

    const styles = useStyles();

    return (
        <Container >
      
        <ListItem alignItems="flex-start" className={styles.contributor}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="../../../images/avatar.png" />
        </ListItemAvatar>
        <ListItemText>
        <Typography style={{fontSize:25}}>{props.name}</Typography>
        </ListItemText>
        <ListItemSecondaryAction>
        <Typography style={{fontSize:25}}>({props.count})</Typography>
        </ListItemSecondaryAction>
      </ListItem>

      
        </Container>
    )
}
