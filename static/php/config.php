<?
/*
    site-specific config
*/

$head = 'VIS 415';
$site = 'R-e-s-e-a-r-c-h';
$home = $head . ", " . $site;
$card_default = '/media/jpg/card-default.jpg';
$description = 'This studio course builds on the skills and concepts of the 200-level Graphic Design classes. VIS 415 is structured around one semester-length assignment which connects graphic design to the process of visual research. The single project allows an individual in-depth investigation of a broader class assignment, leveraging online platforms with students working together to refine their individual projects through a mix of critique and instruction. Studio work is supplemented by guests, readings, and lectures. The course will explore design research in its many forms by doing it.';
$site_url = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http';
$site_url .= '://' . $_SERVER['SERVER_NAME'];
$site_url_info = parse_url($site_url);
?>
