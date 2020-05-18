import React from 'react';
import './App.css';
import { TextField, Typography, Paper } from '@material-ui/core';
import { KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
          title : "",
          content : "",
          startDate : null,
          startTime : null,
          endDate : null,
          endTime :  null,
      }
    }  

  render(){
    const {startDate, startTime, endDate, endTime } = this.state;
  return(
    <div className="app">
      <div className="header">TODO LIST</div>
      <Paper className="input-area" variant="outlined"style={{padding: '10px'}} >
        <TextField 
          label="제목" 
          size="medium" 
          margin="none"
          onChange={(value)=>this.setState({content:value.target.value})}
          fullWidth required/>
        <TextField 
          label="상세내용"
          size="medium" 
          margin="none"
          onChange={(value)=>this.setState({content:value.target.value})}
          fullWidth multiline/>
        <KeyboardDatePicker 
          disableToolbar
          variant="inline"
          format="yyyy/MM/DD"
          margin="normal"
          label="시작 예정일"
          onChange={(value)=> this.setState({startDate : value._d,})}
          value = {startDate}
          style={{width: '50%'}}
          KeyboardButtonProps={{ 'aria-label' : 'change date',}}
        />
        <KeyboardTimePicker 
          margin="normal"
          label="시작시간"
          variant="inline"
          onChange={(value)=> this.setState({startTime : value._d,})}
          value = {startTime}
          style={{width: '50%'}}
          KeyboardButtonProps={{
            'aria-label' : 'change time',
          }}
        />
      </Paper>
      <div className="list-area">리스트 영역</div>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright @ yuri ' + new Date().getFullYear() + '.'}
        </Typography>
    </div>
  );
}
}
export default App;