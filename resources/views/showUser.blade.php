{{--@extends('layouts.app2')--}}
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Roller') }}</title>

        <!-- Scripts -->
        

        <!-- Fonts -->
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

        <!-- Styles -->
        <link href="{{ asset('css/home.css') }}" rel="stylesheet">
    </head>
    <body>
        <div class="Container" id = "dataHolder" data="{{$data}}">
            <div class="Header">
                <h2>Header</h2>
            </div>
            <div class="HeightTaker">
                <div class="Wrapper Container Inverse">
                    <div class="HeightTaker">
                        <div class="Wrapper Content">
                            <div class="Table">
                                <div class="Column C1">
                                    <div id='profile'></div>
                                    <h1>Column 1</h1>
                                    <p>The Content div should always span the available Container space.</p>
                                </div>
                                <div class="Column C2" >
                                     <div>
                                         <div>
                                             <h1>turtle chan</h1>
                                             <p>this many contributions</p>
                                         </div>
                                         <div>
                                             <img src="8IYSjofV_400x400.jpg" alt="" id="header">
                                         </div>
                                         <div>
                                             <img src="8IYSjofV_400x400.jpg" alt="" id="pfp">
                                         </div>
                                         <div>
                                             <button>follow</button>
                                         </div>
                                         <div>
                                             <p>bio</p>
                                         </div>
                                         <div>
                                             <p>when joined</p>
                                         </div>
                                         <div>
                                             <p>
                                                 0 Following 0 Followers
                                             </p>
                                         </div>
                                     </div>
                                </div>
                                <div  id="statement">

                                </div>
                                <div class="Column C3">
                                    <h1>Column 3</h1>
                                    <p class="Important">This Layout has been tested on: IE10, FireFox, Chrome, Safari, Opera. using Pure CSS only</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="{{ asset('js/app.js') }}" ></script>
    </body>
</html>

