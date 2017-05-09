import React from 'react';

class Picture extends React.Component {
    constructor(props){
        super(props);
        this.displayName = 'Picture';
        this.state = {};
    }

    render() {
        return (
            <div>
                这里是Picture.js
            </div>
        )    
    }
};

export default Picture;