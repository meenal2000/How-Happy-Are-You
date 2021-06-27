const correctAnswers = ['A','A','A','A'];
const form = document.querySelector('.quiz-form');
const res = document.querySelector('.result');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    userAnswers.forEach( (answer,index) =>{
        if(answer === correctAnswers[index])
        {
            score += 25;
        }
    });
    // console.log(score);
    scrollTo(0,0);
    console.log(score);
    // res.querySelector('span').textContent = `${score}%`;
    res.classList.remove('d-none');
    let output = 0;
    const timer = setInterval(() => {
        res.querySelector('span').textContent = `${output}%`;
        if(output === score)
            clearInterval(timer);
        else
            ++output;
    } , 10);
});

// 