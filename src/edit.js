/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

/**
 * FormFileUpload is a component that allows users to select files from their local device.
 */
import { PanelBody, FormFileUpload } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { jsonData, fileName } = attributes;

	const myFormFileUpload = () => (
		<FormFileUpload
			accept="application/json"
			onChange={ ( event ) => uploadFromFiles( event, setAttributes ) }
			label={ __('Upload JSON file','json-reader') }
			icon="insert" 
		> 
			{ __( 'Upload a JSON' ) } 
		</FormFileUpload>
	);

	// display file name, if a file is uploaded
	let displayJsonData;

	if(!jsonData) {
		displayJsonData = "Please upload json file!";
	} else {
		displayJsonData = "Read file: " + fileName;
	}

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
                <PanelBody title={ __( 'Settings', 'json-reader' ) }>
					{ myFormFileUpload() }
                </PanelBody>
            </InspectorControls>
			<h3>Json Reader</h3>
			{ displayJsonData }
		</div>
	);
}

function uploadFromFiles( event, setAttributes ) { 
	var file = event.target.files[0];
	//save file name
	setAttributes( { fileName: file['name'] } );
	var reader = new FileReader();
	reader.onload = function() {
		var fileContent = JSON.parse(reader.result);
		//save json data 
		setAttributes( { jsonData: fileContent } )
	  };
	  reader.readAsText(file); 
}
