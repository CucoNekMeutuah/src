 var Game = ["aov", "freefire", "callofduty", "higgsdomino", "bgmi", "gensin", "lmobile", "marvelsw", "ragnarok", "pointblank"];

                $('#check-id').click(function (e) {
             const wrapHasilUsername = document.querySelector('.wrap-hasil-username');
            e.preventDefault();
            var id = $('#nomor-telepon').val();
            $.ajax({
               method: 'GET',
               url: link + versi + '/' + account + '/' + accountName + '/' + '?hp=' + id  + '&key=' + key,
               dataType: 'json',
               data: {
                  id: id,
               },
               beforeSend: function () {
                  wrapHasilUsername.innerHTML = `<div class="text-center"><div class="spinner-border text-center" role="status"></div>`;
               },
               success: function (data) {
                  wrapHasilUsername.innerHTML = `<input id="hasil-username" type="text" required="required" class="form-control" value="" placeholder="Username Player" disabled>`;
                  $('#hasil-username').val(data['nickname']);
                  
                  },
            });
         });
