import './App.css';
import ChatBot from 'react-simple-chatbot';

function App() {
    const config = {
      botAvatar: './logo.svg',
      floating: true,
    };
  return (
    <div className="App">
      <ChatBot
        steps={[
               {
                 id: '1',
                  message: 'Hello I am Nishan porfolio chatbot!',
                  trigger: '2',
                },
                {
                  id: '2',
                   message: 'I can give following information about him',
                   trigger: '3',
                 },
                {
                  id: '3',
                  options: [
                    { value: 1, label: 'Intro', trigger: '4' },
                    { value: 2, label: 'school', trigger: '5' },
                    { value: 3, label: 'end', trigger: '6' },
                  ],
                },
                {
                  id: '4',
                  message: 'He is a computer science student',
                  trigger: '3',
                },
                {
                  id: '5',
                  message: 'He is studying at sac state',
                  trigger: '3',
                },
                {
                  id: '6',
                  message: 'Good Bye!',
                  end: true,
                },
  ]} 
  config = {config}
/>
    </div>
  );
}

export default App;
