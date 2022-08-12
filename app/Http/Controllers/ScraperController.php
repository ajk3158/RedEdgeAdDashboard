<?php

namespace App\Http\Controllers;

use Goutte\Client;

use Illuminate\Http\Request;

class ScraperController extends Controller
{

    private $results = array();

    public function scraper()
    {
        $client = new Client();
        $url = 'https://twitter.com/facebook?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor';
        $page = $client -> request('GET', $url);

        echo "<pre>";
        print_r($page);
        //return view('scraper');

        //$page->filter('.maincounter-number')->text();

        /*$page->filter('#maincounter-wrap')->each(function ($item) {
            $this->results[$item->filter('h1')->text()] = $item -> filter('.maincounter-number')->text();
        });

        $data = $this->results;
        return view('scraper', compact('data')); */
    }
}
