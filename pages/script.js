const main = document.getElementById('main');
const total = document.getElementById('total');

let score = 0;

const prompts = [
  {
    iframe: ` <iframe width="800" height="500" frameborder="0" src="http://pythontutor.com/iframe-embed.html#code=var%20array1%20%3D%20%5B1,%202,%203,%204,%205%5D%0Afor%20%28var%20k%20%3D%200%3B%20k%20%3C%20array1.length%3B%20k%2B%2B%29%20%7B%0A%7D%0Aconsole.log%28'value%3A',%20k%29%3B&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>`,
    question: "What is the value of 'k' after running the above code?",
    choices: [4, 5, 6, 3],
    code: `
    var array1 = [1, 2, 3, 4, 5];
    for (var k = 0; k < array1.length; k++) {}
    console.log('value:', k);
    `,
    correctAnswer: 5,
  },
  {
    iframe: `<iframe width="800" height="500" frameborder="0" src="http://pythontutor.com/iframe-embed.html#code=function%20loop%28str%29%20%7B%0A%20%20var%20result%20%3D%20''%3B%0A%20%20for%20%28var%20i%20%3D%200%3B%20i%20%3C%203%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20result%20%2B%3D%20i%3B%0A%20%20%7D%0A%20%20return%20result%3B%0A%7D%0A%0Aloop%28'hello'%29%3B&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=14&heapPrimitives=nevernest&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>`,
    question: "What is the returned value from the above function?",
    choices: ["012", "hello", "hel", "hel012"],
    code: `
    function loop(str) {
      var result = '';
      for (var i = 0; i < 3; i++) {
        result += i;
      }
      return result;
    }
    loop('hello');`,
    correctAnswer: "012",
  },
  {
    iframe: `<iframe width="800" height="500" frameborder="0" src="http://pythontutor.com/iframe-embed.html#code=function%20nestedLoop%28str%29%20%7B%0A%20%20var%20result%20%3D%20''%3B%0A%20%20for%20%28var%20i%20%3D%200%3B%20i%20%3C%203%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20result%20%2B%3D%20i%3B%0A%20%20%20%20for%28var%20j%20%3D%200%3B%20j%20%3C%20str.length%3B%20j%2B%2B%29%20%7B%0A%20%20%20%20%20%20result%20%2B%3D%20str%5Bj%5D%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20return%20result%3B%0A%7D%0A%0Avar%20loopOutput2%20%3D%20nestedLoop%28'abc'%29%3B&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>`,
    question: "What is the returned value from the above function?",
    choices: ["012abc", "0abc1abc", "abcabcabc", "0abc1abc2abc"],
    code: `
    function nestedLoop(str) {
      var result = '';
      for (var i = 0; i < 3; i++) {
      result += i;
      for(var j = 0; j < str.length; j++) {
          result += str[j];
        }
      }
      return result;
    }
    `,
    correctAnswer: "0abc1abc2abc",
  },
  {
    iframe: `<iframe width="800" height="500" frameborder="0" src="http://pythontutor.com/iframe-embed.html#code=var%20string1%20%3D%20'word'%3B%0Avar%20string2%20%3D%20''%0A%0Avar%20loopy%20%3D%20''%3B%0Afor%20%28var%20x%20%3D%200%3B%20string2%20!%3D%3D%20'word'%3B%20x%2B%2B%29%20%7B%0A%20%20loopy%20%2B%3D%20string1%5Bx%5D%3B%0A%20%20string2%20%2B%3D%20string1%5Bx%5D%3B%0A%7D%0A%0A%0Aconsole.log%28loopy%29%3B&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>`,
    question: "After executing, what is the value of loopy?",
    choices: ["012abc", "0abc1abc", "abcabcabc", "0abc1abc2abc"],
    code: `
    var string1 = 'word';
    var string2 = ''

    var loopy = '';
    for (var x = 0; string2 !== 'word'; x++) {
      loopy += string1[x];
      string2 += string1[x];
    }

    console.log(loopy);
    `,
    correctAnswer: "0abc1abc2abc",
  },
  {
    iframe: `<iframe width="800" height="500" frameborder="0" src="http://pythontutor.com/iframe-embed.html#code=var%20string1%20%3D%20'word'%3B%0Avar%20string2%20%3D%20''%0A%0Avar%20loopy%20%3D%20''%3B%0Afor%20%28var%20x%20%3D%200%3B%20string2%20!%3D%3D%20'word'%3B%20x%2B%2B%29%20%7B%0A%20%20loopy%20%2B%3D%20string1%5Bx%5D%3B%0A%20%20string2%20%2B%3D%20string1%5Bx%5D%3B%0A%7D%0A%0A%0Aconsole.log%28loopy%29%3B&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>`,
    question: "After executing, what is the value of loopy?",
    choices: ["012abc", "0abc1abc", "abcabcabc", "0abc1abc2abc"],
    code: `
    var string1 = 'word';
    var string2 = ''

    var loopy = '';
    for (var x = 0; string2 !== 'word'; x++) {
      loopy += string1[x];
      string2 += string1[x];
    }

    console.log(loopy);
    `,
    correctAnswer: "0abc1abc2abc",
  },
];

function loadPrompts() {
  for (let i = 0; i < prompts.length; i++) {
    const currPrompt = prompts[i];
    const newDiv = document.createElement('div');
    const promptNum = i + 1;
    newDiv.classList = 'prompt';
    newDiv.innerHTML = `
        <h3>Question #${promptNum}</h3>
        <div class="quiz">
          <pre>
          <code>
          ${currPrompt.code}
          </code>
          </pre>
          <div class="choice_container">
            <p class="question">${currPrompt.question}</p>
             <div class="multiple_choice_box">
                ${currPrompt.choices.map((el, x) => {
                  const currInd = x + 1;
                  const correctAnswer = el === currPrompt.correctAnswer
                    ? "correct"
                    : "wrong";
                  return `
                    <div class="choice_box">
                      <input
                        type="radio"
                        class="multiple-choice ${correctAnswer}"
                        name="prompt--${promptNum}"
                        id='prompt_${promptNum}-${currInd}'
                        data-id='${correctAnswer}' 
                      value='${currPrompt.choices[x]}'>
                      <label class="answer" for="prompt_${promptNum}-${currInd}">${currPrompt.choices[x]}</label>
                    </div>
                  `;
                  }).join('')
                }
          </div>
          <h3>Check Your Understanding</h3>
          <div class="iframe-container">
            ${currPrompt.iframe}
            <div class="answer"></div>
          </div>
        </div>
    `;
    main.appendChild(newDiv);
  }
}
function increaseScore() {
  score++;
  total.innerText = `${score}/${prompts.length}`;
}

function resetInputs() {
  const radioInputs = document.querySelectorAll(`input`);
  radioInputs.forEach(el => el.disabled = false);
  total.innerText = `0/${prompts.length}`;
}

function disableRadio(name) {
  const radioInputs = document.querySelectorAll(`[name=${name}]`)
  console.log(radioInputs);
  radioInputs.forEach(el => el.disabled = true);
}

function handleAnswerQuestion(el) {
  const name = el.target.tagName;
  if (name === 'INPUT') {
    disableRadio(el.target.name);
    if (el.target.dataset.id === 'correct') {
      increaseScore();
   }
  }
}

main.addEventListener('click', handleAnswerQuestion);

(function () {
  loadPrompts();
  total.innerText = `${score}/${prompts.length}`;
})();

