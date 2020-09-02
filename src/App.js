import React from 'react';
import './App.css';
import {Typography, List,ListItem,ListItemText } from '@material-ui/core';
import moment from 'moment';
import InputForm from './components/InputForm';

class App extends React.Component {
  constructor(props){
    super(props);
    this.localStorage = window.localStorage;
    const getItem = this.localStorage.getItem("todolist_state");
    if(getItem){
      this.state = JSON.parse(getItem);
    }else{
      this.state = {
        todoList : [],  
      }
    }
  }  
  
  addTodoList(data){
    const nowList = this.state.todoList;
    nowList.push(data);

    this.setState({ //비동기
      todoList:nowList,
    }, ()=>{//콜백함수 위의 함수가 끝나면 실행됨
        const stringState = JSON.stringify(this.state)//스트링값으로 바꾸는것
        this.localStorage.setItem(("todolist_state"),stringState);
    });
  }

  render(){
    const { todoList} = this.state;
    //console.log("App",this.state);
    return(
      <div className="app">
        <div className="header">TODO LIST</div>
          <InputForm addTodoList={this.addTodoList.bind(this)}/>
        <div className="list-area">
          <List>
            {todoList.map((todoItem,idx)=>{
            let { title , content, startDate, startTime,endDate,endTime}= todoItem;
              // if ((!typeof startDate)==="staring"){
              //   startDate = moment(startDate);
              //   startTime = moment(startTime);
              //   endDate = moment(endDate);
              //   endTime = moment(endTime);
              // } 근데 나는 이미 해놔서 갠찬 ㅎㅅㅎ
              const checkToday = moment().isBetween(startDate,endDate);//오늘꺼인지 체크
              const ckeckF = (moment().diff(startDate)<0);//미래아이템
              const ckeckB = (moment().diff(endDate)>0);//지난아이템

              let fontcolor = "black";
              if(checkToday) fontcolor="blue";
              if(ckeckF) fontcolor="gray";
              if(ckeckB) fontcolor="red";
              return(
                <ListItem  key = {idx} role={undefined} dense button>
                  <ListItemText primary = {title}
                                style={{color: fontcolor}}
                                secondary = {moment(startDate).format("YYYY-MM-DD ddd요일")+''+moment(startTime).format("LT")+'~'+moment(endDate).format("YYYY-MM-DD ddd요일")+''+moment(endTime).format("LT")}/>
                </ListItem>
              )
            })}
          </List>
        </div>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright @ yuri ' + new Date().getFullYear() + '.'}
          </Typography>
      </div>
    );
  }
}
export default App;