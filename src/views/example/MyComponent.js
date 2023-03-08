import React from 'react';
class MyComponent extends React.Component {
    state = {
        name: 'huyit',
        channel: 'hoc reactjs'
    }
    handleOnChange = (event) => {
        this.setState({ name: event.target.value })
    }
    clickButton = () => {
        alert('click me');
    }
    render() {
        let name = 'Ha Huy tap'
        return (
            <>
                <div className='abc'>
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChange(event)} />
                    <div>quang huy  {this.state.name} 1</div>
                </div>
                <div className='abc'>
                    <div>quang huy {name} 2</div>
                </div>
                <div className='third'>
                    <button onClick={() => this.clickButton()}>Click Me</button>
                </div>
            </>


        )
    }
}
export default MyComponent;