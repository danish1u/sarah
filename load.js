    $(document).on("click", 'label', function() {
            $('label').removeClass('active');
            $(this).addClass('active');
        });
        
          jQuery(document).on('click', '.mega-dropdown', function(e) {
            e.stopPropagation()
        })
