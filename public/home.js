'use strict';

$( document ).ready(function() {

  $('.newGrade').click(openNewGradeModal);
  $('form.newGradeForm').submit(createNewGrade);
  $('.addedGrade').on('dblclick', deleteGrade)

  function createNewGrade(e) {
  e.preventDefault();

  var newGrade = {
    gradeName: $('#newGradeDesc').val(),
    gradeScore: $('#newGradegradeScore').val(),
    max: $('#newGradeMaxScore').val()
  };

  $('#newGradeDesc').val('');
$('#newGradegradeScore').val('');
$('#newGradeMaxScore').val('');

  $.post('/api/grades', newGrade)
    .done(() => {
      // rerender the DOM
      $('.modal').modal('hide');
    })
    .fail(err => {
      console.error('ERROR!!!!', err);
    });
    document.location.reload(true)

}


function openNewGradeModal() {
  $('.modal').modal('show');
}
})

function deleteGrade(e) {
  e.preventDefault();
  var toGo = $(this).data('id')
  var toGone = {
      id: toGo
  }
  console.log("delete-data: ", toGone)
  $.ajax({
    url: '/api/grades',
    type:'DELETE',
    data: toGone
  })
  document.location.reload(true)
}
