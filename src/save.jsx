/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
 const useBlockProps = window.wp.blockEditor.useBlockProps
 const RichText = window.wp.blockEditor.RichText
 const InnerBlocks = window.wp.blockEditor.InnerBlocks

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @param {Object} props            Properties passed to the function.
 * @param {Object} props.attributes Available block attributes.
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps}>
			<RichText.Content
				tagName="h2"
				value={ attributes.title }
			/>
			<RichText.Content
				tagName="p"
				value={ attributes.content }
			/>
			<InnerBlocks.Content />
		</div>
	);
}
