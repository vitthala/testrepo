/* 
 * Inline Editing of fields on view pages of Leads/Opportunity/Meetings etc.
 * 
 */


/**
 * All necessary functions that should initialize during the documet loading.
 * 
 * @returns {void}
 */

$(document).ready(function () {
        
        renderEditLink();
        $('.inline-edit-link').click(function () {
            var field = $(this).parent('.cell').children('.field');
            var fieldVal = $.trim($(field).text());
            var fieldHtml = '<input type="text" class="main-element form-control" name="name" value="' + fieldVal + '">';
            $(field).html(fieldHtml);
            //$(this).parent('.cell').children('.field').html(fieldHtml);
        });
        
});

/**
 * Render Hover effect for edit link
 * 
 * @returns {void}
 */
function renderEditLink() {
    $('.form-group').hover(
            function(){ $(this).children('.inline-edit-link').removeClass('hide') },
            function(){ $(this).children('.inline-edit-link').addClass('hide') }
    );
}