import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CreateIcon from '@material-ui/icons/Create';
import ShareIcon from '@material-ui/icons/Share';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { withRouter } from 'react-router'
import DeleteButtonForSale from './DeleteButtonForSale'


class DeleteButtonForSaleNavbar extends React.Component {
    constructor(props) {
        super(props)
    }

    goBack= () => {
        this.props.history.goBack()
    }

    render() {
        console.log('NAVBAR PROPS', this.props)
        const piece = this.props.piece
        const id = this.props.id
        return (
            <div style={{flexGrow: 1}}>
              <AppBar color='white' position="static" style={{boxShadow: 'none'}}>
                <Toolbar>
                  <Button onClick={this.goBack} color='inherit'>
                    <ArrowBackIosIcon fontSize='small'/>
                  </Button>
                  <DeleteButtonForSale piece={piece} id={id}/>
                </Toolbar>
              </AppBar>
            </div>
          );
    }
  
}

export default withRouter(DeleteButtonForSaleNavbar)