import React, { Component } from 'react';
import { Snackbar} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
class CustomAlert extends Component {
    render() {
        const {modalOpen,modalClose,message} =this.props;
        
        return (
            <Snackbar
                open={modalOpen}
                autoHideDuration={6000} 
                onClose={()=>modalClose()}
                anchorOrigin={{vertical: "top", horizontal: "center"}}>
                <Alert onClose={modalOpen} severity="error">
                {message}
                </Alert>
            </Snackbar>
        );
    }
}

export default CustomAlert;