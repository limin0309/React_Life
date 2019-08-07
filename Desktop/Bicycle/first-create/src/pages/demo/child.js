import React from 'react';

export default class Child extends React.Component{
  constructor(props){
    super(props);
  }


  // 笔记-生命周期依次执行

  // willMount
  // didMount
  // 当发生改变时：
  // willReceiveProps    zhansgan1
  // shouldComponentUpdate
  // componentWillUpdate
  // componentDidUpdate


  // 父--子 this.state     子--父  this.props

  componentWillMount(){
    console.log('willMount')
  }

  componentDidMount(){
    console.log('didMount')
  }

  componentWillReceiveProps(nextProps){
    console.log('willReceiveProps'+ this.props.name)
  }

  shouldComponentUpdate(){
    console.log('shouldComponentUpdate')
    return true
  }

  componentWillUpdate(){
    console.log('componentWillUpdate')
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  render(){
    return <div>
      <p>子组件</p>
      <span>{this.props.count}</span>
    </div>
  }

}
