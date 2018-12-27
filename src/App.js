import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { map } from 'lodash';
import SideBar from './SideBar';
import { Title,SubTitle } from './ElemUtil';
import { Container,Row,Col } from 'reactstrap';
import { get } from 'axios';

class App extends Component {
    state = {
        content:undefined,
        htmlFileName: "proto.html",
    };
    constructor(props){
        super(props);
        this.htmlElementsToState = this.htmlElementsToState.bind(this);
    }
    componentDidMount(){
        this.htmlElementsToState();
    }
    htmlElementsToState(){
        get("/api/data").then((data)=>{
            console.log(data);
            this.setState({
                content: data.data
            })
        });
    }
    render() {
        let { content } = this.state;
        if(content !== undefined){
            return (
                <div>
                    <SideBar content={content}/>
                    <Container>
                        {   
                            map(content.titles,(title)=> <Title> { title } </Title> )    
                        }
                    </Container>
                </div>
            );
        }else{
            return(
                <div>
                    loading
                </div>
            );
        }
    }
}
export default App;
