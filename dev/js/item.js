(function() {
    $('#result').on('click', 'li', function() {
        var self = $(this);
        var id =self.data('id');
        location.href = 'item.html?id=' + id;
    });
})();