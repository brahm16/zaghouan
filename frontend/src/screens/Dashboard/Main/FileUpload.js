import React, { Fragment, useState ,useEffect } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { updateUser, isAuth, getCookie, signout } from '../../../helpers/auth';

const FileUpload = ({history}) => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio:'',
    pic:"",
    password1: '',
    textChange: 'Update',
    role: ''
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = () => {
    const token = getCookie('token');
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${isAuth()._id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        const { role, name, email } = res.data;
        setFormData({ ...formData, role, name, email });
      })
      .catch(err => {
        toast.error(`Error To Your Information ${err.response.statusText}`);
        if (err.response.status === 401) {
          signout(() => {
            history.push('/login');
          });
        }
      });
  };
  const { name, email,bio,pic ,password1, textChange, role } = formData;


  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const token = getCookie('token');
    const formData1 = new FormData();
        formData1.append('file', pic);
      
  
        axios.post( `${process.env.REACT_APP_URL}upload`, formData1, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: progressEvent => {
            setUploadPercentage(
              parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              )
            );
  
            // Clear percentage
            setTimeout(() => setUploadPercentage(0), 10000);
          }
        });

    axios.put(
        `${process.env.REACT_APP_API_URL}/admin/update`,
        {
          name,
          email,
          bio,
          password: password1,
          pic
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(res => {
        updateUser(res, () => {
          toast.success('Profile Updated Successfully');
          setFormData({ ...formData, textChange: 'Update' }); 
        });
        
  
      })
      .catch(err => {
        console.log(err.response);
      });
   
     
     

      setMessage('File Uploaded');
     
  }

  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            value={pic}
            onChange={handleChange('pic')}

          />
          <label className='custom-file-label' htmlFor='customFile'>
            {pic}
          </label>
        </div>

        <Progress percentage={uploadPercentage} />

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
      {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default FileUpload;