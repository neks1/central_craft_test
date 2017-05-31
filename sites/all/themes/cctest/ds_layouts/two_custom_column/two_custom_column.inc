<?php

/**
 * @file
 * Display Suite Two Custom Column configuration.
 */

function ds_two_custom_column() {
  return array(
    'label' => t('Two Custom Column'),
    'regions' => array(
      'left' => t('left'),
      'right' => t('right'),
    ),
    // Uncomment if you want to include a CSS file for this layout (two_custom_column.css)
    // 'css' => TRUE,
    // Uncomment if you want to include a preview for this layout (two_custom_column.png)
    // 'image' => TRUE,
  );
}
