import React, { useState } from 'react';
import {auth, db} from '../firebase'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'

const style = {
  form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-7`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none rounded-full ...`,
  button: `shadow-neomorphism-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ...`,
  "@media (max-width: 390px)": {
    input: `font-size: 0.8em; padding: 0.2em;`,
  },
};


const SendMessage = ({scroll}) => {
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault()
    if (input === '') {
        alert('Please enter a valid message')
        return
    }
    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, 'messages'), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    })
    setInput('')
    scroll.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type='text'
        placeholder='Message'
      />
      <button type='submit'  className={style.button} onClick={sendMessage}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>

      </button>
 

    </form>
  );
};

export default SendMessage;
