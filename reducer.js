import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add':
            let old = [...state.user, action.payload];
            localStorage.setItem('user', JSON.stringify(old));

            toast.success("Note Added Successfully!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                style :{
                    borderLeft:"5px solid #42CC46"
                }
            });

            return {
                ...state,
                user: old
            };

        case 'delete':
            let deleteId = action.payload;
            let remove = state.user.filter((val) => val.id !== deleteId);
            localStorage.setItem('user', JSON.stringify(remove));

            toast.info("Note Deleted Successfully!", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                style: {
                    borderLeft: '5px solid #F3464A', 
                    color: '#333'
                },
                progressStyle: { background: 'red' } 
            });

            return {
                ...state,
                user: remove
            };

        default:
            return state;
    }
};

export default reducer;
