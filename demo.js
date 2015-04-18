import React from 'react';
import YModal from './index.jsx!';
import YButton from 'y-button';

var App = React.createClass({
    openModal: function () {
        this.refs.myModal.show();
    },
    render: function () {
        return (
            <div style={{padding: '10px'}}>
                <YButton size="m" ref={this.openModal} onClick={this.openModal}>
                    M size
                </YButton>
                <YModal ref="myModal">
When a user submits a comment, we will need to refresh the list of comments to include the new one. It makes sense to do all of this logic
                    in CommentBox since CommentBox owns the state that represents the list of comments. When a user submits a comment, we
                    will need to refresh the list of comments to include the new one. It makes sense to do all of this logic in CommentBox
                    since CommentBox
                    owns the state that represents the list of comments. When a user submits a comment, we will need to refresh the list of
                    comments to include the new one. It makes sense to do all of this logic in CommentBox since CommentBox owns the state
                    that represents the list of comments. When a user submits a comment, we will need to refresh the list of comments to
                    to refresh the list of comments to include the new one. It makes sense to do all of this logic in CommentBox since
                    CommentBox owns the state that represents the list of comments. 123
                    to refresh the list of comments to include the new one. It makes sense to do all of this logic in CommentBox since
                    CommentBox owns the state that represents the list of comments. 123
                    to refresh the list of comments to include the new one. It makes sense to do all of this logic in CommentBox since
                    CommentBox owns the state that represents the list of comments. 123
                    to refresh the list of comments to include the new one. It makes sense to do all of this logic in CommentBox since
                    CommentBox owns the state that represents the list of comments. 123                    to refresh the list of comments to include the new one. It makes sense to do all of this logic in CommentBox since
                    CommentBox owns the state that represents the list of comments. 123                    to refresh the list of comments to include the new one. It makes sense to do all of this logic in CommentBox since
                    CommentBox owns the state that represents the list of comments. 123
                    asdad asd asd as das das das d
                </YModal>
            </div>
        );
    }
});

React.render(<App/>, document.getElementById('content'));