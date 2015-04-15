var React = require('react');
var b = require('b_');

var Style = require('./index.css!');

//todo
var body = document.querySelector('body');

var YModal = {
	displayName: 'y-modal',

	getInitialState: function() {
        return {
            visible: false
        };
    },

	show: function(){
		this.__lockBody();
		this.setState({ visible: true });
	},

	hide: function(){
		this.__unlockBody();
		this.setState({ visible: false });
	},

	render: function () {
		var classes = b('y-modal', {
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

	__lockBody: function(){
		body.style.overflow = 'hidden';
	},

	__unlockBody: function(){
		body.style.overflow = 'visible';
	}
};

module.exports = React.createClass(YModal);
module.exports.Style = Style;
module.exports.Class = YModal;
