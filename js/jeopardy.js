
const chatGPT = async (messages, parameters = {}) => {
    const apikey = config.API_KEY;
    if (messages[0].constructor === String) return await chatGPT([['user', messages[0]]]);
    messages = messages.map(line => ({ role: line[0], content: line[1].trim() }))
    console.log(1)
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apikey}` },
       body: JSON.stringify({ model: 'gpt-3.5-turbo', messages, ...parameters }),
    });
    const data = await response.json();
    if (data?.error?.message) throw new Error(data.error.message);
    return data.choices[0].message.content.trim();
 };


let animal;
const questions = new Array();
const chatanswers= new Array();

async function showOutput() {
    
    var inputText = document.getElementById("input-text").value.trim();
    if(inputText == animal){
        alert('You got it!!')
        return;
    }
    if(!inputText)alert('Please ask a question!')
    let response
    try{
       response = await chatGPT([
          ['system', `Assitant will answer only "Yes"/"No"/"Wrong Answer"/"I can't answer that question with yes or no" to user's question regarding ${animal}, dont include explanations. If the user enters an animal that is not equal to ${animal}, say "Wrong answer". If the user asks question that you can't answer in "Yes"/"No"/"Wrong answer", say "I can't answer that question with yes or no".`],
          ['user', inputText],
       ], { temperature: 0.8 })
    }catch(e){
       console.log(e.message);
       return;
    }
    var outputText = document.getElementById("output-text");
    questions.push(inputText);
    console.log(response);
    chatanswers.push(response);
    outputText.innerHTML = '';
    for (let i =0; i<questions.length; i++)
    {
        outputText.innerHTML += questions[i] + " -> " + chatanswers[i] + "<br>";
    }
}
async function generateAnimal() {
    try{
       animal = await chatGPT([
          ['system', `Output random animal. Dont put period mark at the end`],
       ], { temperature: 0.8 })
    }catch(e){
       console.log(e.message)
       return;
    }
    var Answer = document.getElementById("Answer");
    console.log(animal)
    Answer.innerHTML = animal+" -> showing only for debug purpose";
}  