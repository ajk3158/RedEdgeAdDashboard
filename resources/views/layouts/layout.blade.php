<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<style>
<?php include public_path('app.css') ?>
</style>

<?php use App\Http\Controllers\GoogleServiceController;
$google = new GoogleServiceController();
$datas = $google->getGoogleSheetValues();
$data_array = json_encode($datas);

$mytime = Carbon\Carbon::Now();
$mytime->ToDateString();
?>

<script>
window.data_array = <?php echo($data_array) ?>;
window.timeGrab = "<?php echo($mytime) ?>";
</script>

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;700;900&display=swap" rel="stylesheet">
        <title>
            {{$title}}
        </title>
        @viteReactRefresh
        @vite('resources/js/app.js')
    </head>
    <body class="antialiased">

    
        <div id="topbar" class="topbar"></div>
        <div class="container">
        <div id="Sidebar" class="sidebar"></div>
        <div id="{{$pageID}}" class="content"></div>
        </div>
        
        
    </body>
</html>