import React, { useEffect, useState } from 'react';
import { client } from '../api';
import { feedPosts } from '../pages/api/allApis';
import ProfileStyles from '../styles/Profile.module.css';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    allPosts();
  }, []);

  const allPosts = async () => {
    try {
      const tx = await client.query({ query: feedPosts });
      console.log(tx.data.explorePublications.items);
      setPosts(tx.data.explorePublications.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container mt-5'>
      {posts.map((post, i) => (
        <div className='card mb-3' key={i}>
          <div className='card-body'>
            <div className='row mb-4'>
              <div className='col-1 text-center mt-auto'>
                <img
                  width='50'
                  src={
                    post?.profile?.picture?.uri != null
                      ? post?.profile?.picture?.uri
                      : post?.profile?.picture?.original &&
                      post?.profile?.picture?.original?.url.startsWith(
                          'ipfs://'
                        )
                      ? `http://lens.infura-ipfs.io/ipfs/` +
                      post?.profile?.picture?.original?.url?.slice(7)
                      : post?.profile?.picture?.original?.url ||
                        'https://placekitten.com/500/500'
                  }
                  className={ProfileStyles.profileImage}
                />
              </div>
              <div className='col-11'><p>{post.profile.handle}</p>
              <div className='row'><div className='card-text text-muted'>{post.metadata.content.text}</div></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
