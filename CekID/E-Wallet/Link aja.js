$('#check-id').click(function (e) {
             const wrapHasilUsername = document.querySelector('.wrap-hasil-username');
            e.preventDefault();
            var id = $('#nomor-telepon').val();
            $.ajax({
               method: 'GET',
               url: 'https://api.multipratamaasia.id/v2.1/ewallet/linkaja/?hp=' + id + '&key=8dbf10433ec796d',
               dataType: 'json',
               data: {
                  id: id,
               },
               beforeSend: function () {
                  wrapHasilUsername.innerHTML = `<div class="text-center"><div class="spinner-border text-center" role="status"></div>`;
               },
               success: function (data) {
                  wrapHasilUsername.innerHTML = `<input id="hasil-username" type="text" required="required" class="form-control" value="" placeholder="Username Player" disabled>`;
                  $('#hasil-username').val(data['name']);
               },
            });
         });
