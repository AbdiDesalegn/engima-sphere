import React from 'react';
import '../css/Home.css'; // Import the custom CSS file for styling

function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">EnigmaSphere</a>
          {/* Add navigation links here */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Profile</a>
            </li>
            {/* Add more navigation links here */}
            {/* Add login/logout button based on user authentication status */}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-4">
        <div className="row">
          {/* Left Sidebar */}
          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src="https://via.placeholder.com/150" alt="Profile Picture" className="img-fluid rounded-circle mb-3" />
                <h5>User Name</h5>
                <p>User Bio</p>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <h6>Trending Posts</h6>
                {/* Add trending posts here */}
                <ul className="list-unstyled">
                  <li><a href="#">Trending Post 1</a></li>
                  <li><a href="#">Trending Post 2</a></li>
                  {/* Add more trending posts */}
                </ul>
              </div>
            </div>

            {/* Add other sections to the left sidebar as needed */}
          </div>

          {/* Main Feed */}
          <div className="col-md-6">
            {/* Post Creation Form */}
            <div className="card mb-4">
              <div className="card-body">
                <form>
                  <textarea className="form-control mb-3" placeholder="What's on your mind?" />
                  <input type="file" className="form-control-file mb-3" />
                  <button type="submit" className="btn btn-primary">Post</button>
                </form>
              </div>
            </div>

            {/* Post Cards */}
            <div className="card mb-4">
              <div className="card-body">
                <img src="https://via.placeholder.com/150" alt="Profile Picture" className="img-fluid rounded-circle mr-2" width="30" height="30" />
                <strong>User Name</strong>
                <p>This is a post content.</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-link">Like</button>
                <button className="btn btn-link">Comment</button>
                <button className="btn btn-link">Share</button>
              </div>
            </div>
            {/* Add more post cards here */}
          </div>

          {/* Right Sidebar */}
          <div className="col-md-3">
            {/* Notifications */}
            <div className="card mb-4">
              <div className="card-body">
                <h6>Notifications</h6>
                {/* Add notifications here */}
                <ul className="list-unstyled">
                  <li><a href="#">New Notification 1</a></li>
                  <li><a href="#">New Notification 2</a></li>
                  {/* Add more notifications */}
                </ul>
              </div>
            </div>

            {/* Followers */}
            <div className="card mb-4">
              <div className="card-body">
                <h6>Followers</h6>
                {/* Add followers here */}
                <ul className="list-unstyled">
                  <li><a href="#">Follower 1</a></li>
                  <li><a href="#">Follower 2</a></li>
                  {/* Add more followers */}
                </ul>
              </div>
            </div>

            {/* Add other sections to the right sidebar as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
