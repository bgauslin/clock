<?php
$title = 'Clock';
$description = 'Clock.';

$prod_server = 'clock.gauslin.com';

$css = 'clock.css';
$js = 'clock.js';

if ($_SERVER['SERVER_NAME'] == $prod_server) {
  $manifest = file_get_contents('build/manifest.json');
  $json = json_decode($manifest, true);
  $css_path = '/build/ui/' . $json[$css];
  $js_path = '/build/ui/' . $json[$js];
} else {
  $css_path = '/ui/' . $css;
  $js_path = '/ui/' . $js;
}
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title><?php echo $title ?></title>
    <meta name="description" content="<?php echo $description ?>">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <link rel="apple-touch-icon" href="/ui/icons/touch-icon.png?t=<?php echo date('U') ?>">
    <link rel="icon" type="image/png" href="/ui/icons/favicon.png">
    <link rel="stylesheet" href="<?php echo $css_path ?>">
  </head>

  <body no-touch no-js>
    <div class="clocks">
      <div class="clocks__frame"></div>
    </div>

    <p class="copyright">
      <span class="copyright__bug">© <?php echo date('Y') ?></span> <a class="copyright__link" href="https://gauslin.com" title="Visit Gauslin.com" target="_blank" rel="noopener">Ben Gauslin</a>
    </p>

    <script src="<?php echo $js_path ?>"></script>

    <noscript>
      <div class="no-js">
        <p class="no-js__message">
          Please <a href="http://enable-javascript.com" title="How to enable JavaScript in your browser" class="no-js__link">enable JavaScript</a> to view this website. Thanks!
        </p>
      </div>
    </noscript>
  </body>
</html>
