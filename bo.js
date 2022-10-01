<!DOCTYPE HTML>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <script src="https://counterpulsa.my.id/asset/js/jquery-2.0.0.min.js" type="text/javascript"></script>
      <script src="https://counterpulsa.my.id/asset/js/bootstrap.min.js" type="text/javascript"></script>
      <link href="https://counterpulsa.my.id/asset/css/bootstrap.css" rel="stylesheet" type="text/css"/>
   </head>
   <body>
      <div class="row no-gutters">

        <!-- BAGIAN SLIDE GAMBAR PRODUK -->
         <aside class="col-md-6">
            <article class="gallery-wrap">
               <div id="custCarousel" class="carousel slide" data-ride="carousel" align="center">
                  
                  <div class="carousel-inner" >
                     <div class="carousel-item active">
                        <a href="https://counterpulsa.my.id/produk/list_gambar">
                        <img src="{{gambar_produk_1}}" class="img-fluid">
                        </a>
                     </div>
                     <div class="carousel-item">
                        <img src="{{gambar_produk_2}}"  class="img-fluid">
                     </div>
                     <div class="carousel-item">
                        <img src="{{gambar_produk_3}}"  class="img-fluid">
                     </div>
                     <div class="carousel-item">
                        <img src="{{gambar_produk_4}}"  class="img-fluid">
                     </div>
                  </div>
                  <a class="carousel-control-prev" href="#custCarousel" data-slide="prev"> <span class="carousel-control-prev-icon"></span> </a> <a class="carousel-control-next" href="#custCarousel" data-slide="next"> <span class="carousel-control-next-icon"></span> </a>
                  <ol class="carousel-indicators list-inline">
                     <li class="list-inline-item active">
                        <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#custCarousel">
                        <img src="{{gambar_produk_1}}" class="img-fluid rounded">
                        </a>
                     </li>
                     <li class="list-inline-item">
                        <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel">
                        <img src="{{gambar_produk_2}}" class="img-fluid rounded">
                        </a>
                     </li>
                     <li class="list-inline-item">
                        <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel">
                        <img src="{{gambar_produk_3}}" class="img-fluid rounded">
                        </a>
                     </li>
                     <li class="list-inline-item">
                        <a id="carousel-selector-3" data-slide-to="3" data-target="#custCarousel">
                        <img src="{{gambar_produk_4}}" class="img-fluid rounded">
                        </a>
                     </li>
                  </ol>
               </div>
            </article>
         </aside>
         <!-- BAGIAN SLIDE GAMBAR PRODUK -->



         <main class="col-md-6 border-left">

            <!-- BAGIAN DESKRIPSI PRODUK -->
            <article class="content-body">
               <h1 class="titleproduk">{{judul_produk}}</h1>
               <div class="mb-3">
                  <p class="price-detail h3 ">Rp{{harga_produk}}</p>
               </div>
               <h4 style="font-size:1rem;font-weight:normal;margin-top:5px;font-style: italic;"></h4>
               <hr>
              {{deskripsi_singkat}}
              <br>
              {{deskripsi_panjang}}
               <hr>
               <dl class="row mt-4">
                  <dt class="col-sm-4">Kondisi</dt>
                  <dd class="col-sm-8">{{kondisi_produk}}</dd>
                  <dt class="col-sm-4">Berat</dt>
                  <dd class="col-sm-8">{{berat}}</dd>
                  <dt class="col-sm-4">Tanggal Posting</dt>
                  <dd class="col-sm-8">{{tanggal_produk}}</dd>
               </dl>
               <hr>
                 <!-- BAGIAN DESKRIPSI PRODUK -->

                <!-- BAGIAN AKSI PEMESANAN PRODUK -->
               <div class="row">
                  <div class="col-6">
                     <a href="https://counterpulsa.my.id/produk/beli"  class="btn btn-block btn-primary">Beli</a>
                  </div>
                  <div class="col-6">
                     <a href="https://counterpulsa.my.id/produk/cart"  class="btn btn-block btn-primary">Keranjang</a>
                  </div>
               </div>
               <div class="row">
                  <div class="col-12">
                     <a href="https://counterpulsa.my.id/produk/favorit"  class="btn btn-block btn-outline-secondary mt-4">Tambahkan ke favorit</a>
                  </div>
               </div>
               <div class="row">
                  <div class="col-12">
                     <a href="https://counterpulsa.my.id/produk/share"  class="btn btn-block btn-outline-secondary mt-4">Share</a>
                  </div>
               </div>
                 <!-- BAGIAN AKSI PEMESANAN PRODUK -->

            </article>
         </main>
      </div>
   </body>

   <style media="screen">
      .btn-primary,.btn-outline-primary:not(:disabled):not(.disabled):active,.btn-outline-primary:hover {
      background-color:#512DA8;
      border-color: #512DA8;
      }
      .btn-search{
      background-color:#ffffffcf;
      border:1px solid #ced4da;
      }
      .btn-menu{
      color: white;
      font-size: 24px;
      padding: 8px;
      }
      .card-product-grid{
      border-radius:9px;
      margin-bottom:0px;
      }
      .card-product-grid .img-wrap{
      border-radius: 9px 9px 0 0;
      }
      h4, .widget-judul{
      margin-top:16px;
      }
      .discount{
      -webkit-box-pack: center;
      justify-content: center;
      padding:4px;
      font-size: 0.714286rem;
      font-weight: bold;
      border-radius: 3px;
      margin: 0px 4px 0px 0px;
      -webkit-box-align: center;
      align-items: center;
      flex: 0 0 30px;
      height: 20px;
      color: #df5151;
      background-color: #ffd2db;
      }
      .cashback{
      -webkit-box-pack: center;
      justify-content: center;
      padding:4px;
      font-size: 0.714286rem;
      font-weight: bold;
      border-radius: 3px;
      margin: 0px 4px 0px 0px;
      -webkit-box-align: center;
      align-items: center;
      flex: 0 0 30px;
      height: 20px;
      color: #fff;
      background-color: #66bb5a;
      }
      h2{
      font-size:1.7rem;
      }
      .btn-outline-primary {
      border-color:  #512DA8;
      color: #512DA8;
      }
      .btn-primary:not(:disabled):not(.disabled):active,.btn-primary:hover,.list-group-item.active{
      background-color:#3A2078;
      border-color: #3A2078;
      }
      .btn-secondary{
      background-color:#3A2078;
      }
      .input-spinner{
      width:130px;
      }
      .logout:hover{
      background:red !important;
      color:white !important;
      }
      a {
      color: #512DA8;
      }
      .text-orange{
      color:#b55f07;
      }
      .btn-group:hover{
      cursor:pointer;
      }
      .price{
      color: rgba(49, 53, 59, 0.96);
      font-size:1rem;
      font-weight:bold;
      }
      .price-detail{
      color: rgba(49, 53, 59, 0.96);
      font-size:2rem;
      font-weight:bold;
      }
      .titleproduk{
      font-size: 1.2rem;
      font-style:normal;
      font-weight:normal;
      margin-bottom:0px;
      }
      .header-main {
      padding-top: 1.7rem;
      padding-bottom: 1.7rem;
      }
      .breadcrumb-item + .breadcrumb-item::before{
      content: "";
      width: 20px;
      height: 20px;
      background-size: 7px 11px;
      background-image: url(/asset/img/arrow.svg);
      background-repeat: no-repeat;
      background-position: center center;
      vertical-align: middle;
      padding: 0px 4px;
      margin: 0px 8px;
      }
      .breadcrumb-item + .breadcrumb-item{
      padding:0px;
      }
      header.section-header{
      background:linear-gradient(180deg,#3A2078, #512DA8 100%);
      }
      .login-page{
      background:linear-gradient(180deg,#512DA8, #3A2078 100%);
      }
      .navbar{
      padding:0rem;
      }
      .navbar-main .nav-link{
      color: #fff;
      }
      .navbar-main .nav-link:hover,.nav-link.active {
      color: #fff !important;
      background:#3A2078;
      border-radius:10px;
      }
      .navbar-toggler{
      color:rgb(255 255 255);
      background-color: #fffffff5;
      }
      .widget-header a{
      color:rgb(255 255 255);
      }
      .widget-header:hover a{
      color:rgb(255 255 255);
      }
      .widget-header i{
      color:#fff;
      }
      .widget-header:hover i{
      color:#b3b3b3;
      }
      .putih{
      color:#fff;
      }
      .putih:hover{
      color:#d8d8d8;
      }
      .card-kostum:hover,.card-product-grid:hover,.list-group-item:hover{
      background:#efefef;
      }
      .titleproduk{
      font-size: 1.2rem;
      font-style:normal;
      font-weight:normal;
      margin-bottom:0px;
      }
      .text, .profil{
      margin-left:24px;
      }
      .card-responsive{
      height:150px;background-color: #3A2078;
      }
      .title{
      color: var(--NN950,#212121);
      font-size: 0.86rem;
      line-height: 1.5;
      max-width: 100%;
      max-height: 100%;
      white-space: pre-wrap;
      word-break: break-all;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 4px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      }
      a.list-group-item.active:hover{
      background:#512DA8;
      }
      .navbar-brand {
      padding-top: 0.73rem;
      font-size: 1.57rem;
      }
      .header-main {
      padding-top: 1.8rem;
      }
      @media only screen and (max-width: 768px) {
      #first {
      order: 1;
      }
      #second {
      order: 2;
      }
      #third {
      order: 3;
      }
      #fourth {
      order: 4;
      }
      .tinggi_slide{
      height:auto;
      }
      .content-body{
      padding: 16px;
      }
      #custCarousel .carousel-indicators {
      position: static;
      height: 70px;
      }
      }
      @media only screen and (min-width: 769px) {
      .carousel-control-prev {
      bottom: 15%;}
      .carousel-control-next {
      bottom: 15%;}
      .card-responsive{
      height:150px;background-color: #3A2078;
      }
      .tinggi_slide{
      height:422px;
      }
      #custCarousel .carousel-indicators {
      position: static;
      height: 150px;
      }
      .card-product-grid .img-wrap{
      height:280px;
      }
      .widgetunggulan{
      height:230px !important;
      }
      .img-sapi{
      height:200px !important;
      }
      .img-sapi2{
      height:180px !important;
      }
      .hideifmobile{
      display:inline-block;
      }
      .showifdesktop{
      display:none;
      }
      }
      .produk-list-utama{
      height:unset !important;
      }
      .warp-list-produk{
      height:unset !important;
      }
      .card-product-grid .info-wrap{
      padding: 8px;
      }
      @media only screen and (max-width: 608px) {
      .carousel-control-prev {
      bottom: 25%;}
      .carousel-control-next {
      bottom: 25%;}
      .btn-group{
      display: flex;
      }
      .btn-footer{
      padding:3px;
      font-size:12px;
      }
      .jarakatas{
      margin-top:30px;
      }
      .card-product-grid .img-wrap{
      height:220px;
      }
      .card-product-grid .img-wrap .widgetunggulan{
      height:220px;
      }
      .hideifmobile{
      display:none;
      }
      .icon-mobile {
      width: 38px;
      height: 38px;
      line-height: 35px !important;
      font-size: 15px;
      }
      .brand-wrap{
      margin-bottom: 0rem !important;
      }
      .search{
      margin-bottom:0px;
      }
      .showifdesktop{
      display:inline-block;
      }
      #custCarousel .carousel-indicators {
      position: static;
      height: 120px;
      }
      }
      @media only screen and (max-width: 480px) {
      .img-md {
      width: 80px;
      height: 80px;
      }
      .card-responsive{
      height:86px;background-color: #3A2078;
      }
      h5{
      font-size:14px;
      }
      h4{
      font-size:1.14286rem;
      }
      .card-banner .text-bottom{
      padding: 6px 10px !important;
      padding-top:30px;
      background: linear-gradient(to bottom, rgb(0 0 0 / 17%) 0%, rgba(0, 0, 0, 0.8) 100%);
      bottom: -7px;
      }
      .row-no-padding {
      padding-left: 0 !important;
      padding-right: 0 !important;
      }
      .header-remove-padding-left{
      padding-left:0px !important;
      }
      .tinggi_slide{
      height:250px;
      }
      #custCarousel .carousel-indicators {
      position: static;
      height: 70px;
      }
      .header-main {
      padding-bottom: 0rem;
      }
      .hideifmobileinline{
      display:none;
      }
      }
      @media only screen and (max-width: 378px) {
      .tinggi_slide{
      height:200px;
      }
      #custCarousel .carousel-indicators {
      position: static;
      height: 70px;
      }
      }
      .card-banner:hover {
      opacity:0.8;
      }
      .page-link,.primarycolor {
      color: #512DA8;
      }
      .btn-light:hover {
      background-color: #e0e0e0;
      border-color: #989898;
      }
      .background_main{
      background: #512DA8;
      }
      .page-item.active .page-link {
      background-color: #512DA8;
      border-color: #3A2078;
      }
      .img-responsive {
      width: 100%;
      height:100%;
      }
      .icon-sm{
      font-size: 25px;
      }
      .carousel-inner img {
      width: 100%;
      height: 100%;
      }
      .carousel-inner{
      background: #d4d4d4;
      }
      #custCarousel .carousel-indicators>li {
      width: 50px
      }
      #custCarousel .carousel-indicators li img {
      display: block;
      opacity: 1
      }
      #custCarousel .carousel-indicators li.active img {
      opacity: 1
      }
      #custCarousel .carousel-indicators li:hover img {
      opacity: 1
      }
      .carousel-item img {
      width: 100%;
      }
   </style>
</html>
