var Input = React.createClass({
    getInitialState:function(){
        return {value:'hello'};
    },
    handleChange:function(event){
        //react自己的方法，用来设置组件的状态
        this.setState({value:event.target.value});
    },
    render:function(){
        var value = this.state.value;
        return (
            <div>
                <input type="text" onChange={this.handleChange} />
                <p>{value}</p>
            </div>
        )
    }
});


ReactDOM.render(
    <Input/>,
    document.getElementById('app')
);