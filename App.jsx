import './style.css';
import { FaPlus } from "react-icons/fa";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adduser, deleteuser } from './Action/action';
import { RiDeleteBin6Line } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const record = useSelector(state => state.crud.user);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !note) {
      toast.error("Please fill out both fields.", 
        {
        style: { backgroundColor: '#fff', color: '#000', borderLeft: "5px solid #ED766B" }
        });
      return false;
    }

    let obj = {
      id: Math.floor(Math.random() * 10000),
      title,
      note
    };

    dispatch(adduser(obj));
    setTitle("");
    setNote("");
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h2 className=' py-4 ps-5 text-light' style={{ backgroundColor: "#F5D03E" }}>
            <span className='noteicon pe-2'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABbUlEQVR4Ae3aAUQEQRQG4OUmwiEAQIQQIAQIAQGCgICQkJAACUAAQkEQAAJEu11cSSldOlWR4hBJp90ozdt53QSgs/e09v70fh4YzPuWmbeYQIMergTGRmapVRc2NJxHva4Hc4UBPsOeWb9pnhWvBcUhRF9eACgMIW5QAJAjAAFyBCBAjgAEyBGAADkCECBHQADkCACAHAEAkJcCFPDnAFEvp1cz7B432SV1du8P7J63mepTfg0bQIdD7OIat4sH0cEgJsA3z5RwVtzbNdtKHx7Avexxp0kbq1gAOhpmUZxlu1vGAaS3CywNHY8AAe6WxYD0choIcDMvBtD5BA6ATkbFZ4D2B8BuobjWef9PW4BzwN9EznJmbJNttR90Ep+NfzfYNh+NrNtHf+YUQKdjfi78WH4NDyAYan5NAXoGFKAABShAAf8NkHQRUP01gMLSRrcAFJYm83hqULaRWaSwdF9g8027Y1Zae5tAA54vA5QFBsesCogAAAAASUVORK5CYII=" alt="" /></span>Google Keep
          </h2>
          <div className='d-flex justify-content-center mt-5'>
            <form style={{ width: "300px" }} onSubmit={handleSubmit} className='shadow'>
              <input type="text" placeholder='Title' className='form-control' onChange={(e) => setTitle(e.target.value)} value={title || ""} />
              <textarea rows={4} placeholder='Write a note...' className='form-control' onChange={(e) => setNote(e.target.value)} value={note || ""} ></textarea>
              <button className="addbtn" type='submit'>
                <FaPlus />
              </button>
            </form>
          </div>
          <div className='mt-5 d-flex flex-wrap justify-content-center'>
            {
              record.map((val) => {
                return (
                  <div className='notes m-4 py-5 px-4 shadow' style={{ width: "300px", height: "auto" }} key={val.id}>
                    <h6 className='mb-3'>{val.title}</h6>
                    <p>{val.note}</p>
                    <div className='deletebtn'>
                      <span onClick={() => dispatch(deleteuser(val.id))}><RiDeleteBin6Line /></span>
                    </div>
                  </div>
                );
              })
            }
          </div>
          <ToastContainer position="top-center" autoClose={2000} />
        </div>
      </div>
    </>
  );
}

export default App;