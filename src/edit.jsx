/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
 const RichText = window.wp.blockEditor.RichText

 /**
 * WordPress components that adds options to the toolbar
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/block-controls-toolbar-and-sidebar/#block-toolbar
 */
 const AlignmentToolbar = window.wp.blockEditor.AlignmentToolbar
 const BlockControls = window.wp.blockEditor.BlockControls

 /**
 * WordPress components that adds options to the sidebar
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/block-controls-toolbar-and-sidebar/#settings-sidebar
 */
  const __ = window.wp.i18n.__
  // const ColorPalette = window.wp.blockEditor.ColorPalette
  // const InspectorControls = window.wp.blockEditor.InspectorControls

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
const useBlockProps = window.wp.blockEditor.useBlockProps
const InnerBlocks = window.wp.blockEditor.InnerBlocks

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	// constants for settingAttributes

	const onChangeTitle = ( newTitle ) => {
		setAttributes( {title: newTitle} );
	};

	const onChangeContent = ( newContent ) => {
		setAttributes( {content: newContent} );
	};

	return (
		<div {...blockProps}>
			{
				<BlockControls>
				</BlockControls>
			}
			<RichText
				tagName="h2"
				placeholder="Title"
				value={ attributes.title }
				onChange={ onChangeTitle }
				allowedFormats={ [] }
			/>
			<RichText
				tagName="p"
				placeholder="Content"
				value={ attributes.content }
				onChange={ onChangeContent }
			/>
			<InnerBlocks />
		</div>
	);
}
