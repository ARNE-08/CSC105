import React from 'react';
import { useParams } from 'react-router-dom';
import Axios from '../../share/AxiosInstance'

const Note = () => {
  const { noteId } = useParams();

  useEffect(() => {
    // 1. call API to get a note
    const userToken = Cookies.get('UserToken');
    Axios.get(`/note/${noteId}`, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    }).then((res) => {
      // 2. if success, set note to state
      setNote(res.data.data);
    });
  }, []);

  return <div>Note id : {noteId}</div>;
};

export default Note;
