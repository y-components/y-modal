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

    componentWillUpdate(nextProps, nextState){
        if (nextState.visible === true) {
            this.lockBody()
        } else {
            this.unlockBody();
        }
    },

    show(){
        this.setState({ visible: true });
    },

    hide(){
        this.setState({ visible: false });
    },

    lockBody(){
        this.body.style.paddingRight = this.getScrollWidth() + 'px';
        this.body.style.overflow = 'hidden';
    },

    unlockBody(){
        if (window.TransitionEvent){
            //https://github.com/facebook/react/issues/2187
            this.getDOMNode().addEventListener('transitionend', function(e){
                if (!e.target.classList.contains('y-modal')) return;

                if (document.defaultView.getComputedStyle(this.getDOMNode(), null).getPropertyValue('visibility') === 'hidden') {
                    this.clearBody();
                }
            }.bind(this), false);
        } else {
            this.clearBody();
        }

    },

    clearBody(){
        this.body.style.paddingRight = 0;
        this.body.style.overflow = 'visible';
        this.getDOMNode().removeEventListener('transitionend', null, false);
    },

    getScrollWidth(){
        return window.innerWidth - document.documentElement.clientWidth;
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