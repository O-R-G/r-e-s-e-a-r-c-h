<?
/*
    site-specific config
*/

$head = 'VIS 415';
$site = 'R-e-s-e-a-r-c-h';
$home = $head . ", " . $site;
$card_default = '/media/jpg/card-default.jpg';
$description = 'Hello, w-w-w-orld.';
$site_url = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http';
$site_url .= '://' . $_SERVER['SERVER_NAME'];
$site_url_info = parse_url($site_url);
?>
