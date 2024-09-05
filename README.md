
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>College Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- Header -->
    <header>
        <div class="container">
            <div class="logo">
                <a href="#"><img src="your-logo.png" alt="College Logo"></a>
            </div>
            <nav>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Admissions</a></li>
                    <li><a href="#">Departments</a></li>
                    <li><a href="#">Facilities</a></li>
                    <li><a href="#" class="btn-login">Log In</a></li>
                    
                    <!-- More Menu (Hamburger) -->
                    <div class="more-menu">
                        <div class="hamburger" id="hamburger">
                            &#9776;
                        </div>
                        <ul class="dropdown" id="dropdown">
                            <li><a href="#">PYQ Papers</a></li>
                            <li><a href="#">Notes</a></li>
                            <li><a href="#">Recorded Lectures</a></li>
                            <li><a href="#">Fee Details</a></li>
                            <li><a href="#">Syllabus</a></li>
                            <li><a href="#">Attendance</a></li>
                            <li class="close" id="close">&times;</li>
                        </ul>
                    </div>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>Welcome to Our College</h1>
            <p>Your future starts here. Join us to achieve your dreams.</p>
            <a href="#" class="btn-hero">Learn More</a>
        </div>
    </section>

    <!-- Featured Courses Section -->
    <section class="featured-courses">
        <h2>Featured Courses</h2>
        <div class="courses-wrapper">
            <div class="courses-container">
                <div class="course-card">
                    <img src="image1.jpg" alt="B.Tech">
                    <h3>B.Tech</h3>
                    <ul>
                        <li>Computer Science & Engineering</li>
                        <li>Computer Science and Engineering - (AIML)</li>
                        <li>Mechanical Engineering</li>
                        <li>Electronics & Communication Engineering</li>
                        <li>Civil Engineering</li>
                    </ul>
                    <button>Apply Now</button>
                </div>
                <div class="course-card">
                    <img src="image2.jpg" alt="BCA">
                    <h3>BCA</h3>
                    <ul>
                        <li>BCA-General</li>
                        <li>BCA-Data Science</li>
                    </ul>
                    <button>Apply Now</button>
                </div>
                <div class="course-card">
                    <img src="image3.jpg" alt="BBA">
                    <h3>BBA</h3>
                    <ul>
                        <li>BBA-General</li>
                        <li>BBA-Finance Services and Banking</li>
                        <li>BBA-Digital Marketing</li>
                    </ul>
                    <button>Apply Now</button>
                </div>
                <div class="course-card">
                    <img src="image4.jpg" alt="MBA">
                    <h3>MBA</h3>
                    <ul>
                        <li>Masters of Business Administration</li>
                    </ul>
                    <button>Apply Now</button>
                </div>
            </div>
        </div>
        <div class="course-navigation">
            <button class="scroll-left">&lt;</button>
            <button class="scroll-right">&gt;</button>
        </div>
    </section>
    
    
    
    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-section">
                <div class="footer-column">
                    <h3>Featured Links</h3>
                    <ul>
                        <li><a href="#">Admissions 2024-25</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Download Prospectus</a></li>
                        <li><a href="#">AICTE Approval Letter</a></li>
                        <li><a href="#">Locations</a></li>
                        <li><a href="#">Mandatory Disclosure</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Featured Links</h3>
                    <ul>
                        <li><a href="#">Refund Policy</a></li>
                        <li><a href="#">Faculty & Staff</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Facilities</a></li>
                        <li><a href="#">University Affiliation Letter</a></li>
                        <li><a href="#">Media Room</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Information</h3>
                    <ul>
                        <li><span>📞</span> +91-8527538785</li>
                        <li><span>✉</span> admissions@acem.edu.in</li>
                    </ul>
                    <h3>Newsletter</h3>
                    <form>
                        <input type="email" placeholder="enter your e-mail here">
                        <button type="submit">🚀</button>
                    </form>
                </div>
                <div class="footer-column">
                    <h3>Gallery</h3>
                    <div class="gallery">
                        <img src="image1.jpg" alt="Gallery Image 1">
                        <img src="image2.jpg" alt="Gallery Image 2">
                        <img src="image3.jpg" alt="Gallery Image 3">
                        <img src="image4.jpg" alt="Gallery Image 4">
                        <img src="image5.jpg" alt="Gallery Image 5">
                        <img src="image6.jpg" alt="Gallery Image 6">
                    </div>
                    <div class="social-icons">
                        <a href="#"><img src="facebook-icon.png" alt="Facebook"></a>
                        <a href="#"><img src="twitter-icon.png" alt="Twitter"></a>
                        <a href="#"><img src="linkedin-icon.png" alt="LinkedIn"></a>
                        <a href="#"><img src="youtube-icon.png" alt="YouTube"></a>
                    </div>
                </div>
            </div>
            <p>&copy; 2021 Aravali All Rights Reserved.</p>
        </div>
    </footer>
    

    <script src="script.js"></script>
</body>
</html>
