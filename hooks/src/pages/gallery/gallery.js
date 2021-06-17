import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
    const [photos, setPhotos] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    const [, setTotalCount] = useState(0)

    useEffect(() => {
        if (fetching) {
            console.log('fetching')
            axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=14&_page=${currentPage}`)
                .then(response => {
                    setPhotos([...photos, ...response.data])
                    setCurrentPage(prevState => prevState + 1)
                    setTotalCount(response.headers['x-total-count'])
                })
                .finally(() => setFetching(false));
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        };
    }, [])

    const scrollHandler = (e) => {
        console.log('scroll')
        if (e.target.documentElement.scrollHeight -
            (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }

    return (
        <div className="container">
        <div className="gridgallery">
            {photos.map(photo =>
                <div className="gallery-item" key={photo.id}>
                    <div className="text-gallery">{photo.id}. {photo.title}</div>
                    <img className="image-gallery" src={photo.thumbnailUrl} alt="" />
                </div>
            )}
            </div>
        </div>
    )
}

export default Gallery;