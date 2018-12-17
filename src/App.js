import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { map } from 'lodash';
import SideBar from './SideBar';
import { TitleContainer,SubTitleContainer } from './ElemUtil';
import { Container,Row,Col } from 'reactstrap';

class App extends Component {
    state = {
        titles: [
            { 
                title: "Why",
                elements: [
                    {
                        subtitle: "Price is too high because x and y",
                        element: <Text />,
                    }, {
                        subtitle: "sombody once told me that the world is gonna roll me",
                        element: <h4> h3333 </h4>,
                    }
                ]                
            },   
            {
                title: "Production problems",
                elements: [
                    {
                        subtitle: "Price is too high because x and y",
                        element: <Text />,
                    }, {
                        subtitle: "sombody once told me that the world is gonna roll me",
                        element: <h4> h3333 </h4>,
                    }                    
                ]
            },
            {
                title: "The stock price is too high",
                elements: [
                    {
                        subtitle: "Price is too high because x and y",
                        element: <Text />,
                    }, {
                        subtitle: "sombody once told me that the world is gonna roll me",
                        element: <h4> h3333 </h4>,
                    }
                ]
            }
        ],
    }
    mapSubTitles(subtitles){
        return map(subtitles,(subtitle) => 
            <SubTitleContainer key={subtitle} subtitle={subtitle}/>
        );        
    }
    mapElements(titles){
        return map(titles,(title)=>{
            return(
                <div>
                    <TitleContainer title={title}/>

                </div>
            );
        })        
    }
    render() {
        let { titles } = this.state;
        let elems = this.mapElements(titles);
        console.log(elems);
        return (
            <div>
                <SideBar titles={titles} />
                <Container>
                    { 
                        map({t:"moi",t:"moi",t:"moi"},(jotain)=><p> {jotain.t} </p>)
                    }
                </Container>
            </div>
        );
    }
}
let Text = () => (
    <div>
        <p>
            olerm dipsum lipsum, olerm dipsum lipsum,  hurray! 
        </p>
    </div>
);
export default App;
