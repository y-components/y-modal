import React from 'react';
import b from 'b_';
import Style from './index.css!';

const YModal = React.createClass({
    displayName: 'y-modal',

    getInitialState(){
        this.wrapperCssClass = b('y-modal', 'wrapper');

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

    lockBody(){
        this.body.style.overflow = 'hidden';
    },

    unlockBody(){
        this.body.style.overflow = 'visible';
    },

    checkForClose: function(e){
        if (e.target.classList.contains(this.wrapperCssClass)) {
            this.hide();
        }
    },

    render(){
        const classes = b('y-modal', {
            theme: this.props.theme || 'normal',
            visible: this.state.visible
        });

        return (
            <div className={classes}>
                <div
                    className={this.wrapperCssClass}
                    onClick={this.checkForClose}>
                    <div className={b('y-modal', 'expander')} />
                    <div className={b('y-modal', 'content', { visible: this.state.visible })}>
                        { this.props.children }
                        <div
                            className={b('y-modal', 'close')}
                            onClick={this.hide}/>
                    </div>
                </div>
                <div className={b('y-modal', 'veil')} />
            </div>
        );
    }
});

YModal.Style = Style;
YModal.Class = YModal;

export default YModal;