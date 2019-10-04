import PostSelector from '@vermilion/post-selector';

const { registerBlockType } = wp.blocks;
const { Fragment, RawHTML } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody } = wp.components;

registerBlockType('vermilion/post-selector', {
  title: 'Article Suggestion',
  category: 'widgets',
  keywords: [''],
  attributes: {
    posts: {
      type: 'array',
      default: []
    },
  },

  edit({ attributes, setAttributes }) {
    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title="Post Selector">
          
            <PostSelector
              onPostSelect={post => {
                const updatedPosts = [...attributes.posts, post];
                setAttributes({ posts: updatedPosts });
              }}
              posts={attributes.posts}
              onChange={newValue => {
                setAttributes({ posts: [...newValue] });
              }}
              postType={'any'}
              limit="3"
            />

          </PanelBody>
        </InspectorControls>
        <div>
          {attributes.posts.map(post => (
            <div>
                <div class='suggetion-more'>Ver mas</div>
                <div class='suggetion-title'><a href={post.url} >{post.title}</a></div>
            </div>
          ))}
        </div>
      </Fragment>
    );
  },

  save({ attributes }) {
    return(
      <div>
        {attributes.posts.map(post => (
          <div>
            <div class='suggetion-more'>Ver mas</div>
            <div class='suggetion-title'><a href={post.url} >{post.title}</a></div>
          </div>
        ))}
      </div>
    )
  }
});