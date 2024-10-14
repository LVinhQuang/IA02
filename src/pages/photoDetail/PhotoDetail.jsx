import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../AxiosInstance';
import Grid from '@mui/material/Grid2'
import { Typography } from '@mui/material';
const PhotoDetail = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    console.log("HELLO")
    try {
      const response = await axiosInstance.get(`/photos/${id}`)
      const data = response.data;
      setPhoto(data);
    }
    catch (e) {
      setError(e.message);
    }
    finally {
      setLoading(false);
    }

  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error &&
        <div style={{ display: "flex", flexDirection: "column", margin: "20px"}}>
          <img
            src={photo.urls.full}
            alt={photo.alt_description || "Photo"}
            style={{ maxWidth: '100%' }}
          />
          <Typography component='h1' align='center' margin={4} fontSize={30}>
            {photo.title ? photo.title : photo.alt_description}
          </Typography>
          <Typography component='p' align='center' fontSize={20}>
            Author: {photo.user.name}
          </Typography>
          <Typography component='p' align='center' margin={1} fontSize={20}>
            Description: {photo.alt_description}
          </Typography>
        </div>
      }
    </div>

  )
}

export default PhotoDetail