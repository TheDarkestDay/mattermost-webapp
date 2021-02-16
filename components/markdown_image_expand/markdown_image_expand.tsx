// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React from 'react';
import './markdown_image_expand.scss';

export type Props = {
    alt: string;
    imageIndex: number;
    children: React.ReactNode;
    isExpanded: boolean;
    postId: string;
    actions: {
        toggleInlineImageVisibility: (postId: string, imageIndex: number) => void;
    };
};

const MarkdownImageExpand: React.FC<Props> = ({children, alt, isExpanded, postId, actions, imageIndex}: Props) => {
    const {toggleInlineImageVisibility} = actions;

    const handleToggleButtonClick = () => {
        toggleInlineImageVisibility(postId, imageIndex);
    };

    const wrapperClassName = `markdown-image-expand ${isExpanded ? 'markdown-image-expand--expanded' : ''}`;

    return (
        <div className={wrapperClassName}>
            {
                isExpanded &&
                <>
                    <button
                        className='markdown-image-expand__collapse-button'
                        type='button'
                        onClick={handleToggleButtonClick}
                    >
                        <span className='icon icon-menu-down'/>
                    </button>
                    {children}
                </>
            }

            {
                !isExpanded &&
                <button
                    className='markdown-image-expand__expand-button'
                    type='button'
                    onClick={handleToggleButtonClick}
                >
                    <span className='icon icon-menu-right markdown-image-expand__expand-icon'/>

                    <span className='markdown-image-expand__alt-text'>
                        {alt}
                    </span>
                </button>
            }
        </div>
    );
};

export default MarkdownImageExpand;
