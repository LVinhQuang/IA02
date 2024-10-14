import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid2'
import { Typography } from '@mui/material'
import InfiniteScroll from 'react-infinite-scroll-component'
import axiosInstance from '../../AxiosInstance'
const PhotoGallery = () => {
    const [photos, setPhotos] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const response = await axiosInstance.get(`/photos?page=${page}`);
        const data = await response.data;
        if (data.length === 0) {
            setHasMore(false);
        } else {
            setPhotos((prevItems) => [...prevItems, ...data]);
            setPage(page + 1);
        }
    };

    return (
        <InfiniteScroll
            dataLength={photos.length} // Số lượng ảnh hiện tại
            next={fetchData} // Hàm gọi API để tải thêm ảnh
            hasMore={hasMore} // Nếu còn dữ liệu để tải
            loader={<h1 style={{textAlign: "center"}}>Loading...</h1>} // Hiển thị khi đang tải dữ liệu
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            <Grid container spacing={2} margin={4} justifyContent='space-between'>
                {photos.map(photo => (
                    <Grid key={photo.id}>
                        <Link to={`/photos/${photo.id}`}>
                            <img
                                src={photo.urls.thumb}
                                alt={photo.alt_description || "Photo"}
                            />
                            <Typography component='p' align='center'>
                                {photo.user.name}
                            </Typography>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </InfiniteScroll>
    )
}

export default PhotoGallery