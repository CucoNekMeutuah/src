function cekKategori() {
				var kategori = data;
				$.each(kategori, function (i, data) {
					$('#list-kategori').append(
						`<li onclick="dataklik('` +
							data.url_kategori +
							`', '` +
							data.nama +
							`', '` +
							data.gambar +
							`')"><div class="container row_pilihan">` +
							`<img src="${data.gambar}" class="img-category-product" />` +
							`<h5>` +
							data.nama +
							`</h5></div></li>`
					);
				});

				$('#list-kategori').prepend('<span class="text-category"> PRODUK </span>');
				$('#loader-kategori').hide();
			}
			cekKategori();

			// url web
			var url = web + hallo + '/' + aktivasi + '/';
			// keluarkan kategori
			function kategori(index, val) {
				var kategori = data[index].val;
				return kategori;
			}

			// looping tampilan desain list produk
			function looping(lopp) {
				const { harga, nama, url } = lopp;
				$('#list-produk').append(
					`<li class="list-group-item d-flex justify-content-between align-items-center" onclick="purchase('${url}', '${nama}' ,'${harga}')" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" id="diklik">` +
						nama +
						`<span class="badge rounded-pill">` +
						harga +
						`</span>  </li>`
				);
				$('#load').hide();
			}

			// simpan data api
			var dataApi = [];
			// request api
			async function getApi(dataKategori) {
				let filter = '&urutan=murah';
				let val = 1;
				let nomPage = val; 
				var filPage = '&page=';

				const lastPage = 4;
				for (let page = 1; page <= lastPage; page++) {
					let linkFetch = `${url}${dataKategori}${filPage}${page}${filter}`;
					const fetchData = await fetch(linkFetch);
					const responses = await fetchData.json();

					const products = responses.produk;
					products.forEach((product) => {
						looping(product);
					});
				}
			}

			// jalanlan parameter pertama
			$('#kategori-pilihan').html(data[0].nama);
			getApi(data[0].url_kategori);
			document.getElementById('card-img-operator').src = 'https://i.ibb.co/BCbGrkm/20220624-035810.png';

			// data klik
			function dataklik(url, nama, gambar) {
				let img = document.getElementById('card-img-operator');
				$('.list-group-item').remove();
				$('#load').show();
				img.src = gambar;
				$('#kategori-pilihan').html(nama);
				getApi(url);
			}
