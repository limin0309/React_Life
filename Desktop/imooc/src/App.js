import React from 'react'
import {Button,List} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import ListItem from 'antd-mobile/lib/list/ListItem';

class App extends React.Component{
  render(){
    let boss='李云龙'
    return(
      <div>
      <h2>独立团 ,团长{boss}</h2>
      <一营 老大="张大彪"></一营>
      <骑兵连 老大="孙德胜"></骑兵连>
    </div>
    )


  }
}


function 骑兵连 (props){
  return <h2>骑兵连连长{props.老大},冲啊</h2>
}

class 一营 extends React.Component{
  constructor(props){
    super(props)
    this.state={
      soliders:['胡子','柱子','王根生']
    }
  }

  componentWillMount(){
    console.log('组件马上要加载')
  }

  componentDidMount(){
    console.log('组件加载完毕')
  }
  addSolider=()=>{
    console.log('ss')
    this.setState({
      soliders:[...this.state.soliders,'新兵蛋子'+Math.random()]
    })
  }
  render(){
    console.log('加载ing')
    return (
      <div>
        <Button type="primary" onClick={this.addSolider}>新兵入伍</Button>
    <List
      renderHeader={()=>'士兵列表'}
    >
      {this.state.soliders.map(v=>
      <ListItem key={v}> {v} </ListItem>)}
    </List>
    <h3>一营营长，营长{this.props.老大}</h3></div>)
  }
}
export default App



