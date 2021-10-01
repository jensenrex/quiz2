let question = {
  title: 'Gato',
  answers: ['dog', 'cat', 'bird', 'fish' ],
  correctAnswer: 1,
}

function showQuestion(q) {
  // select dom element 
  let titleDiv = document.getElementById('title');
  // modify element
  titleDiv.textContent = q.title;
  // select each list item by class
  let answers = document.querySelectorAll('.answers');
  answers.forEach(function(element, index) {
    element.textContent = q.answers[index];

    element.addEventListener('click', function() {
      // check correct answer
      if (q.correctAnswer === index) {
        console.log('you bloody beauty!');
      } else {
        console.log('no sir, wrong!');
      }
    }); 
  });
}

showQuestion(question);

let btn = document.getElementById('btn'); 

btn.addEventListener('click', function() {

});
