
(function($, d){
    $(d).ready(function(){
        $('select.styled').styledSelect();
        $(d).on('click', function(e){
            var el = $(e.target),
                isSelect = el.closest('.select').length;
            if(!isSelect){
                $('.select .options').hide();
                $('.select').removeClass('open');
            }
        });
    });
    $.fn.styledSelect = function() {
        if (!this.length) return false;
        this.each(function(k, select){
            select = $(select);
        var val = select.val(),
            selectedTitle = $('option[value="' + val + '"]').html(),
            options = $('option', select),
            html = '';
        html += '<div class="select"><span class="selected-display">' + selectedTitle + '</span><span class="arrow-wrap"></span></span>';
        html += '<div class="options">';
        options.each(function (k, opt) {
            opt = $(opt);
            html += '<div class="option' + (opt.attr('value') == val ? ' selected' : '') + '" data-value="' + opt.attr('value') + '">' + opt.html() + '</div>';
        });
        html += '</div>';
        html += '</div>';
        var htmlSelect = $(html);
        htmlSelect.css({width: Number(parseInt(select.css('width')) + 82) + 'px'});
        select.hide().before(htmlSelect);
        $('.option', htmlSelect).on('click', function (e) {
            var opt = $(this),
                optVal = opt.attr('data-value'),
                optTitle = opt.html(),
                val = select.val();
            if (optVal != val) {
                $('.selected-display', htmlSelect).html(optTitle);
                select.val(optVal).trigger('change');
            }
            $('.option', htmlSelect).removeClass('selected');
            opt.addClass('selected');
            toggleOptions(htmlSelect);
        });

        $('.selected-display, .arrow-wrap', htmlSelect).on('click', function (e) {
            toggleOptions(htmlSelect);
        });

        toggleOptions = function (htmlSelect) {
            if (htmlSelect.hasClass('open')) {
                $('.options', htmlSelect).hide();
                htmlSelect.removeClass('open');
            } else {
                htmlSelect.addClass('open');
                $('.options', htmlSelect).show();
            }
        }
    });
    }
    if(!$("style.styled-select-box-style").length) {
        var style = "<style class='styled-select-box-style' type='text/css'>" +
            "select.styled {display: none}\n" +
            ".select {\n" +
            "  color: #898989;\n" +
            "  padding: 8px 16px;\n" +
            "  line-height: 18px;\n" +
            "  background-image: none;\n" +
            "  background-color: #FCFDFE;\n" +
            "  border: 1px solid #DFE3EB;\n" +
            "  border-radius: 3px;\n" +
            "  font-size: 14px;\n" +
            "  cursor: pointer;\n" +
            "  position: relative;\n" +
            "  box-sizing: border-box;\n" +
            "}\n" +
            "\n" +
            ".select .selected-display {\n" +
            "  display: block;\n" +
            "  color: #363840;\n" +
            "}\n" +
            "\n" +
            ".select .arrow-wrap {\n" +
            "  display: block;\n" +
            "  width: 40px;\n" +
            "  height: 100%;\n" +
            "  position: absolute;\n" +
            "  top: 0;\n" +
            "  right: 0;\n" +
            "  text-align: center;\n" +
            "  font-size: 10px\n" +
            "}\n" +
            "\n" +
            ".select .arrow-wrap:after {\n" +
            "  content: \"\";\n" +
            "  position: absolute;\n" +
            "  width: 0; \n" +
            "  height: 0; \n" +
            "  border-left: 4px solid transparent;\n" +
            "  border-right: 4px solid transparent;\n" +
            "  border-top: 6px solid #aaa;\n" +
            "  top: 50%;\n" +
            "  right: 50%;\n" +
            " transform: translate(50%, -50%);\n" +
            "}\n" +
            ".select.open .arrow-wrap:after {\n" +
            "  border-left: 4px solid transparent;\n" +
            "  border-right: 4px solid transparent;\n" +
            "  border-bottom: 6px solid #aaa;\n" +
            "  border-top: 0" +
            "}\n" +
            "\n" +
            ".select .options {\n" +
            "  width: 100%;\n" +
            "  max-height: 200px;\n" +
            "  background: #fff;\n" +
            "  overflow-y: auto;\n" +
            "  position: absolute;\n" +
            "  z-index: 100;\n" +
            "  left: 0;\n" +
            "  box-sizing: border-box;\n" +
            "  display: none\n" +
            "}\n" +
            "\n" +
            ".select .options .option {\n" +
            "  font-size: 14px;\n" +
            "  color: #363840;\n" +
            "  padding: 16px;\n" +
            "  line-height: 18px;\n" +
            "}\n" +
            "\n" +
            ".select .options .option:hover, .select .options .option.selected {\n" +
            "  background: #F5F7FA;\n" +
            "}" +
            "</style>";

        $('html head').append(style);
    }

})(jQuery, document);