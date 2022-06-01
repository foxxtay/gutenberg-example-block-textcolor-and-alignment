 /**
 * Internal dependencies
 */
const registerBlockType = window.wp.blocks.registerBlockType

import Edit from './edit';
import save from './save';
 
 /**
  * Every block starts by registering a new block type definition.
  *
  * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
  */
registerBlockType('gutenberg-parcel-example/gutenpride', {
    /**
     * Used to construct a preview for the block to be shown in the block inserter.
     */
    example: {
    },
    /**
     * @see ./edit.js
     */
    edit: Edit,
    /**
     * @see ./save.js
     */
    save,
});
 