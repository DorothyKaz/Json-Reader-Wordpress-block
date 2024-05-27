<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

use Timber\Timber;

Timber::render( plugin_dir_path( __DIR__ ).'src/render.twig', $attributes);

/* Note: the commented part works fine, twig template doesn't read $attributes

?>
<section class="json-reader">
	<p>
		<?php esc_html_e( 'Json Reader – reading file: '.$attributes['fileName'], 'json-reader-block' ); ?>
	</p>
	<div class="json-reader-content">
		<?php 
			for ( $i = 0; $i <= (count( $attributes['jsonData'] ) - 1 ); $i++ ) {
				$data = $attributes['jsonData'][$i]; ?>
				<pre> 
					<?php echo json_encode($data, JSON_PRETTY_PRINT); ?> 
				</pre>
		<?php 
			} 
		?>
	</div>
</section>*/
?>