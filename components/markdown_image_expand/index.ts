// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {bindActionCreators, Dispatch} from 'redux';

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import {GlobalState} from 'mattermost-redux/types/store';
import {connect} from 'react-redux';

import {GenericAction} from 'mattermost-redux/types/actions';

import {toggleInlineImageVisibility} from 'actions/post_actions';
import {isInlineImageVisible} from 'selectors/posts';

import MarkdownImageExpand, {Props} from './markdown_image_expand';

const mapStateToProps = (state: GlobalState, ownProps: Props) => {
    return {
        isExpanded: isInlineImageVisible(state, ownProps.postId, ownProps.imageIndex),
    };
};

const mapDispatchToProps = (dispatch: Dispatch<GenericAction>) => {
    return {
        actions: bindActionCreators({toggleInlineImageVisibility}, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MarkdownImageExpand);
