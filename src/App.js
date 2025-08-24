import './App.css';
import { useState } from 'react';


function App() {
  //Add post
    const [newPost, setNewPost] = useState({inputPost: ""});
    const [message, setMessage] = useState(""); 
    const [showModal, setShowModal] = useState(false);

    const handleInputChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value
    });
  };

  const handleAddPost = async (e) => {
    e.preventDefault();
    try {
      setMessage("Post added successfully!");
      setNewPost({
        inputPost: ""
      });
      setShowModal(false);
      //getPost();
    } catch (err) {
      console.error(err);
      setMessage("Failed to add post");
    }
  };

  //Click on a post 
  // const handlePostClick = (post) => {
  //   setShowModal(true);
  // };

  //Add a post 
  const openModal = () => {
    setNewPost({
      inputPost: ""
    });
    setShowModal(true);
    setMessage("");
  }

  const closeModal = () => {
    setShowModal(false);
  };

  //const submitEl = document.querySelector('submit');
  // const msgEl = document.querySelector('input');
  // const listEl = document.querySelector('div');

  // document.getElementById("submit").addEventListener('click', () => {
  //   const inputValue = msgEl.value;
  //   document.getElementById("post1").innerText('<div>${inputValue}</div>');
  // });

//  const buttonEl = document.querySelector('#post');

// buttonEl.addEventListener('click', () => {
//   const outputEls = document.querySelectorAll('.displayArea')
//   outputEls.forEach((outputEl) => {
//     outputEl.toggle("show")
//   })
// });

  // if (buttonEl) { // Always check if the element exists
  //       buttonEl.addEventListener('click', function() {
  //           const outputEls = document.querySelectorAll('.displayArea')
  //             outputEls.forEach((outputEl) => {
  //             outputEl.toggle("show")
  //            });
  //        });
  //   } else {
  //       console.error("Button element not found!");
  //    }
  // document.addEventListener('DOMContentLoaded',function() {
  //   const toggle = document.getElementById('post');
  //   const div1 = document.getElementById('beforePost');
  //   const div2 = document.getElementById('afterPost');

  //   toggle.addEventListener('click', function() {
  //     if (div1.style.display=== 'none') {
  //       div1.style.display = 'block';
  //       div2.style.display = 'none';
  //     } else {
  //       div1.style.display = 'none';
  //       div2.style.display = 'block';
  //     }
  //   })
  // })


  return (
     <main className="app-container">
      {/* <div className="posts-container"> */}
      <header className="header">
            <h1>Posts</h1>
      </header>


      {/* Add Post Button */}
      <button className="btn-primary" 
        onClick={openModal}>
        Add Post
      </button>

      {/* Modal for Adding Product */}
      {showModal && (
          <div className="modal-pop" onClick={closeModal}>
          <div className="modal-container">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">

                <form className="add-post-form" onSubmit= {handleAddPost}>
                <div className="form-content">
                  <label>Post :</label>
                  <textarea
                    placeholder='Make new post...'
                    post="post"
                    value={newPost.post}
                    onChange={handleInputChange}
                    rows="3"
                  />
                </div>
                <div className="form-actions">
                  <button id='post' type="submit" className="btn-primary">Post</button>
                  <button id='cancel' type="button" className="btn-secondary" onClick={closeModal}>Cancel</button>
                </div>
              </form>

              {message && <p className="message">{message}</p>}

              </div>
            </div>
          </div>
          </div>
      )}

      <br></br>
      <br></br>
      <br></br>
      
      {/* Post Content before adding post */}
      <div id="beforePost" class = "content-div" className="displayArea show">
        <div class="postsContainer">
          <div id="post1" className="post-grid">
                <div className="blanks">Post Overview
                <p className="username">unique_post_id_12345- 1 hour ago</p>
                <p className="blockID">unique_block_id_12345</p>
                <p className="content">Beware of strange man lurking.</p>
                <div className="image">Image</div>
                <p className="upvotes">Upvotes: 150</p>
                <p className="region">Africa:Kenya:Nairobi</p>
                <p className="timestamp">2025-08-23T22:30:00Zi</p>
                </div>
          </div>
          <br></br>
          <div className="post-grid">
              <div className="blanks">Post Overview
                <p className="username">unique_post_id_12345- 2 hour ago</p>
                <p className="blockID">unique_block_id_12345</p>
                <p className="content">Known stange man</p>
                <div className="image">Image</div>
                <p className="upvotes">Upvotes: 150</p>
                <p className="region">Europe:France:Nice</p>
                <p className="timestamp">2025-08-23T22:30:00Zi</p>
              </div>
          </div>
          <br></br>
          <div className="post-grid">
              <div className="blanks">Post Overview
                <p className="username">unique_post_id_12345- 1 day ago</p>
                <p className="blockID">unique_block_id_12345</p>
                <p className="content">keep your children safe</p>
                <div className="image">Image</div>
                <p className="upvotes">Upvotes: 150</p>
                <p className="region">Asia:Vietnam:Hanoi</p>
                <p className="timestamp">2025-08-23T22:30:00Zi</p>
              </div>
          </div>
          <br></br>
          <div className="post-grid">
              <div className="blanks">Post Overview
                <p className="username">unique_post_id_12345- 1 day ago</p>
                <p className="blockID">unique_block_id_12345</p>
                <p className="content">keep your children safe</p>
                <div className="image">Image</div>
                <p className="upvotes">Upvotes: 150</p>
                <p className="region">Australia:Sydney</p>
                <p className="timestamp">2025-08-23T22:30:00Zi</p>
            </div>
            </div>
        </div>
      </div>

      {/* Post Content after adding post */}
      <div id="afterPost" class = "content-div" className="displayArea">
        <div class="postsContainer">
          <div id="post1" className="post-grid">
                <div className="blanks">Post Overview
                  <p className="username">unique_post_id_9283- Under Review...</p>
                  <p className="blockID">unique_block_id_12345</p>
                  <p className="content">Avoid this establishment</p>
                  <div className="image">Image</div>
                  <p className="upvotes">Upvotes: 0</p>
                  <p className="region">Africa:South Africa:Cape Town</p>
                  <p className="timestamp">Waiting on verification</p>
                </div>
          </div>
          <div id="post1" className="post-grid">
                <div className="blanks">Post Overview
                  <p className="username">unique_post_id_12345- 1 hour ago</p>
                  <p className="blockID">unique_block_id_12345</p>
                  <p className="content">Beware of strange man lurking.</p>
                  <div className="image">Image</div>
                  <p className="upvotes">Upvotes: 150</p>
                  <p className="region">Africa:Kenya:Nairobi</p>
                  <p className="timestamp">2025-08-23T22:30:00Zi</p>
                </div>
          </div>
          <br></br>
          <div className="post-grid">
              <div className="blanks">Post Overview
                <p className="username">unique_post_id_12345- 2 hour ago</p>
                <p className="blockID">unique_block_id_12345</p>
                <p className="content">Known stange man</p>
                <div className="image">Image</div>
                <p className="upvotes">Upvotes: 150</p>
                <p className="region">Europe:France:Nice</p>
                <p className="timestamp">2025-08-23T22:30:00Zi</p>
              </div>
          </div>
          <br></br>
          <div className="post-grid">
              <div className="blanks">Post Overview
                <p className="username">unique_post_id_12345- 1 day ago</p>
                <p className="blockID">unique_block_id_12345</p>
                <p className="content">keep your children safe</p>
                <div className="image">Image</div>
                <p className="upvotes">Upvotes: 150</p>
                <p className="region">Asia:Vietnam:Hanoi</p>
                <p className="timestamp">2025-08-23T22:30:00Zi</p>
              </div>
          </div>
          <br></br>
          <div className="post-grid">
              <div className="blanks">Post Overview
                <p className="username">unique_post_id_12345- 1 day ago</p>
                <p className="blockID">unique_block_id_12345</p>
                <p className="content">keep your children safe</p>
                <div className="image">Image</div>
                <p className="upvotes">Upvotes: 150</p>
                <p className="region">Australia:Sydney</p>
                <p className="timestamp">2025-08-23T22:30:00Zi</p>
            </div>
            </div>
        </div>
      </div>

    </main> 
    
  );
}

export default App;
