<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel Scraper</title>
</head>
<body>
    @foreach($data as $key => $value)
    <h1>{{ $key }}</h1>
    <h3>{{ $value }}</h3>
    @endforeach
</body>
</html>