import React from 'react';
import b from 'b_';
import Style from './index.css!';

const YModal = React.createClass({
    displayName: 'y-modal',

    getInitialState(){
        return {
            visible: false
        };
    },

    componentDidMount(){
        this.body = document.body;
    },

    show(){
        this.lockBody();
        this.setState({ visible: true });
    },

    hide(){
        this.unlockBody();
        this.setState({ visible: false });
    },

    render(){
        const classes = b('y-modal', {
            theme: this.props.theme || 'normal',
            visible: this.state.visible
        });

        return (
            <div className={classes}>
                <div className={b('y-modal', 'wrapper')}>
                    <div className={b('y-modal', 'expander')} />
                    <div className={b('y-modal', 'content', { visible: this.state.visible })}>
                        { this.props.children }
                        <div
                            className={b('y-modal', 'close')}
                            onClick={this.hide}></div>
                    </div>
                </div>
                <div className={b('y-modal', 'veil')} />
            </div>
        );
    },

    lockBody(){
        this.body.style.overflow = 'hidden';
    },

    unlockBody(){
        this.body.style.overflow = 'visible';
    }
});

YModal.Style = Style;
YModal.Class = YModal;

export default YModal;