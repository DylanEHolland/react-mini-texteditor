import React from 'react';
import './custom.scss';

export default class EditableLine extends React.Component {
    state = {
        input: "",
        updateChar: null,
        syncing: true
    };

    constructor(props) {
        super(props);

        this._onKeyPressCapture.bind(this);
    }

    componentDidMount() {
        this.sync();
    }

    componentDidUpdate(prevProps, prevState) {
        let {syncing, updateChar} = this.state;
        if(!syncing && updateChar) {
            this.sync()
        }
    }

    render = () => {
        let {input, syncing} = this.state;
        
        if(syncing) {
            return null;
        }

        return (
            <div
                className="editable__line"
                contentEditable="true"
                onKeyDown={this._onKeyDown}
                onKeyPressCapture={this._onKeyPressCapture}
                dangerouslySetInnerHTML={{
                    __html: input
                }}
                onChange={this._onChange}
            />
        );
    }

    sync = () => {
        this.setState({
            syncing: false
        })
    }

    _onChange = e => {
        //console.log(e._reactName + ":", e.target.value);
    }

    _onKeyDown = e => {
        //console.log(e._reactName + ":", e.keyCode);
    }

    _onKeyPressCapture = (e) => {
        console.log(e._reactName + ":", "test", e.charCode);
    }
}