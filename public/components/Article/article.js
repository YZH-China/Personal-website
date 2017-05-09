import React from 'react';

class Atricle extends React.Component {
    constructor(props){
        super(props);
        this.displayName = 'Atricle';
        this.state = {};
    }

    render() {
        return (
            <div>
                这里是Atricle.js
            </div>
        )
    }
};

export default Atricle;