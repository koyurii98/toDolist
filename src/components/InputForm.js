import React, { Component } from 'react';
import { TextField, Paper} from '@material-ui/core';
import { KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import CAlart from './modal/CustomAlert';

class InputForm extends Component {
    constructor(props){
        super(props);
          this.state = {
              title : "",
              content : "",
              startDate : null,
              startTime : null,
              endDate : null,
              endTime :  null,  
              modalOpen: false,
              messagetext:""

          }
        } 
    modalClose(){
        this.setState({
            modalOpen:false
        })
    }
    addInputData(){
        const data = this.state;
        if(this.nullCk()){
            this.props.addTodoList(data);
            this.setState({
            title:"",
            content:"",
            startDate : null,
            startTime : null,
            endDate : null,
            endTime :  null,  
        }); 
        }else{
            this.setState({
                modalOpen: true
            })
        }
    }
    nullCk(){
        const {title,content,startDate, startTime, endDate, endTime}=this.state;
        if(!title||!content||!startDate||!startTime||!endDate||!endTime){
            return false
        }
        return true
    }
    // inputCk(){
    //     const {title,content,startDate,messagetext}=this.state;
    //     if(!title){
    //         this.setState({
    //             messagetext:"제목을 입력해주세요"
    //         })
    //     }
    //     else if(!content){
    //         this.setState({
    //             messagetext:"내용을 입력해주세요"
    //         })
    //     }else if(!startDate){
    //         this.setState({
    //             messagetext:"날짜를 입력해주세요"
    //         })
    //     }
    // }
    
    checkValidate(){
        const{title,content,startDate, startTime, endDate, endTime}=this.state;
        const data = {title,content,startDate,startTime,endDate,endTime}
    
        for (const [key,value]of Object.entries(data)){
            if(!value) return {check :false,target:key}
        }
        return 
    }

    saveTodoList(){
        // const nowList = this.state.todoList;
        // const {title,content,startDate,startTime,endDate,endTime} = this.state;
        // nowList.push({
        // title,content,startDate,startTime,endDate,endTime
        // });
        // this.setState({
        // todoList : nowList,
        // title : "",
        // content : "",
        // startDate : null,
        // startTime : null,
        // endDate : null,
        // endTime :  null,   
        // },()=>console.log(this.state));
    }

    render() {
        const{title,content,startDate, startTime, endDate, endTime,modalOpen,messagetext}=this.state;
        console.log("InputForm",this.state);
        return (
                <Paper className="input-area" variant="outlined"style={{padding: '10px'}} >
                <TextField 
                    label="제목" 
                    size="medium" 
                    margin="none"
                    value={title}
                    onChange={(value)=>{this.setState({title:value.target.value})}}
                    fullWidth required/>
                <TextField 
                    label="상세내용"
                    size="medium" 
                    margin="none"
                    value={content}
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
                <KeyboardDatePicker 
                    disableToolbar
                    variant="inline"
                    format="yyyy/MM/DD"
                    margin="normal"
                    label="종료 예정일"
                    onChange={(value)=> this.setState({endDate : value._d,})}
                    value = {endDate}
                    style={{width: '50%'}}
                    KeyboardButtonProps={{ 'aria-label' : 'change date',}}
                />
                <KeyboardTimePicker 
                    margin="normal"
                    label="종료시간"
                    variant="inline"
                    onChange={(value)=> this.setState({endTime : value._d,})}
                    value = {endTime}
                    style={{width: '50%'}}
                    KeyboardButtonProps={{
                    'aria-label' : 'change time',
                    }}
                />
                <div className="saveButton">
                    <Button
                    variant="contained"
                    onClick={this.addInputData.bind(this)}>
                    <SaveIcon></SaveIcon>Save
                    </Button>
                    <CAlart modalClose={this.modalClose.bind(this)}
                    modalOpen={modalOpen}
                    message={messagetext}/>
                </div>
                </Paper>
                
      
        );
    }
}
export default InputForm;