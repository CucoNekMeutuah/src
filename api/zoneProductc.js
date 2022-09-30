			let data = [
				{
					nama: 'Pilihan Produk',
					nama2: 'Mobile Legends',
					url_kategori: getProducts,
					gambar: logoMe,
					gambar2: logoProducts,
				},
			];
			function cekKategori() {
				var kategori = data;
				$.each(kategori, function (i, data) {
					$('#list-kategori').append(
						`<li onclick="dataklik('` +
							data.url_kategori +
							`', '` +
							data.nama +
							`', '` +
							data.gambar2 +
							`')"><div class="container row_pilihan">` +
							`<img src="${data.gambar2}" class="img-category-product" />` +
							`<h5>` +
							data.nama2 +
							`</h5></div></li>`
					);
				});

				$('#list-kategori').prepend();
				$('#loader-kategori').hide();
			}
			cekKategori();

			// url web
			var url = site + vendor + '/' + user + '/';
			// keluarkan kategori
			function kategori(index, val) {
				var kategori = data[index].val;
				return kategori;
			}

			// looping tampilan desain list produk
			function looping(lopp) {
				$.each(lopp, function (i, data) {
					$('#list-produk').append(
						`<li class="list-group-item d-flex justify-content-between align-items-center" onclick="purchase('${data.url}', '${data.nama}' ,'${data.harga}')" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" id="diklik">` +
							data.nama +
							`<span class="badge rounded-pill">` +
							data.harga +
							`</span>  </li>`
					);
				});
				$('#load').hide();
			}
    var _0xf1c7=["\x73\x63\x72\x69\x70\x74\x20\x64\x69\x20\x62\x75\x61\x74\x20\x6F\x6C\x65\x68\x20\x77\x77\x77\x2E\x64\x6F\x6E\x70\x61\x79\x2E\x6F\x6E\x6C\x69\x6E\x65","\x6C\x6F\x67"];var dataApi=[];function fungsi(){console[_0xf1c7[1]](_0xf1c7[0])}fungsi()
			// request api
			function getApi(dataKategori) {
				let filter = '&urutan=murah';
				var filPage = '&page=';

				let page = 1;
				let linkFetch = `${url}${dataKategori}${filPage}${page}${filter}`;
				$.getJSON(linkFetch, function (data) {
					dataApi = data.produk;

					if (dataApi.length === 12) {
						page += 1;

						linkFetch = `${url}${dataKategori}${filPage}${page}${filter}`;

						$.getJSON(linkFetch, function (data) {
							const productsPageTwo = data.produk;

							for (let i = 0; i < productsPageTwo.length; i++) {
								dataApi.push(productsPageTwo[i]);
							}

							looping(dataApi);
						});
					}
				});
			}

			// jalanlan parameter pertama
			$('#kategori-pilihan').html(data[0].nama);
			getApi(data[0].url_kategori);
			document.getElementById('card-img-operator').src = logoMe;

			// data klik
			function dataklik(url, nama, gambar) {
				let img = document.getElementById('card-img-operator');
				$('.list-group-item').remove();
				$('#load').show();
				img.src = gambar;
				$('#kategori-pilihan').html(nama);
				getApi(url);
			}
