# 🔐 Web3 Security Portfolio

A stunning, modern portfolio website showcasing Web3 security research achievements, built with pure HTML, CSS, and JavaScript. Features glassmorphism design, smooth animations, and full responsiveness.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

### 🎨 Modern Design
- **Glassmorphism Effects**: Beautiful frosted glass UI elements
- **Gradient Backgrounds**: Dynamic, animated gradient orbs
- **Smooth Animations**: Intersection Observer-based scroll animations
- **3D Card Effects**: Interactive tilt effects on hover
- **Responsive Layout**: Perfect on all devices (mobile, tablet, desktop)

### 📊 Interactive Elements
- **Animated Counters**: Stats count up when scrolled into view
- **Progress Bars**: Severity findings with animated progress indicators
- **Parallax Effects**: Smooth parallax scrolling on hero section
- **Dynamic Orbs**: Mouse-interactive background gradients
- **Ripple Buttons**: Material Design-inspired button effects

### 🚀 Performance
- **Lazy Loading**: Optimized image loading
- **Intersection Observers**: Efficient scroll-based animations
- **Debounced Events**: Optimized event handlers
- **Pure CSS Animations**: Hardware-accelerated transforms

### ♿ Accessibility
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **High Contrast**: WCAG compliant color contrasts

## 📈 Achievements Displayed

- **Rank**: #236 in First Flights
- **Total EXP**: 930 points earned
- **Valid Submissions**: 15 security findings
- **Severity Breakdown**:
  - 🔴 High: 6 findings
  - 🟡 Medium: 5 findings
  - 🟢 Low: 4 findings

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/web_3_portfolio.git
   cd web_3_portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

3. **View your portfolio**
   - Navigate to `http://localhost:8000`

## 🌐 Deploy to GitHub Pages

### Method 1: GitHub Settings (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**

3. **Access your site**
   - Your portfolio will be live at: `https://yourusername.github.io/web_3_portfolio/`
   - It may take a few minutes to deploy

### Method 2: GitHub Actions (Advanced)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

## 🎨 Customization Guide

### 1. Personal Information

Edit `index.html`:

```html
<!-- Update your name/title -->
<h1 class="hero-title">
    <span class="gradient-text">Your Name</span>
    <br>Web3 Security Researcher
</h1>

<!-- Update your description -->
<p class="hero-description">
    Your custom description here...
</p>
```

### 2. Contact Links

Update social media links in `index.html`:

```html
<!-- Email -->
<a href="mailto:your.email@example.com" class="btn btn-primary">

<!-- Twitter -->
<a href="https://twitter.com/yourhandle" target="_blank">

<!-- GitHub -->
<a href="https://github.com/yourusername" target="_blank">
```

### 3. Achievement Stats

Modify the data-target attributes in `index.html`:

```html
<!-- Update rank -->
<div class="stat-value" data-target="236">#0</div>

<!-- Update EXP -->
<div class="stat-value" data-target="930">0</div>

<!-- Update submissions -->
<div class="stat-value" data-target="15">0</div>

<!-- Update severity counts -->
<div class="severity-count" data-target="6">0</div> <!-- High -->
<div class="severity-count" data-target="5">0</div> <!-- Medium -->
<div class="severity-count" data-target="4">0</div> <!-- Low -->
```

### 4. Color Scheme

Edit CSS variables in `styles.css`:

```css
:root {
    /* Change primary gradient */
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    
    /* Change accent colors */
    --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    
    /* Change severity colors */
    --high-severity: #ff4757;
    --medium-severity: #ffa502;
    --low-severity: #26de81;
}
```

### 5. Add Custom Sections

Add new sections in `index.html`:

```html
<section id="custom-section" class="custom-section">
    <div class="container">
        <h2 class="section-title">Your Section Title</h2>
        <!-- Your content here -->
    </div>
</section>
```

## 📁 Project Structure

```
web_3_portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
├── README.md           # Documentation
└── LICENSE            # MIT License
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, Animations
- **JavaScript (ES6+)**: Intersection Observer, Event Listeners
- **Google Fonts**: Inter & Space Grotesk
- **No Frameworks**: Pure vanilla code for maximum performance

## 🌟 Key Features Breakdown

### Glassmorphism Design
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

### Animated Counters
```javascript
const animateCounter = (element, target, duration = 2000) => {
    // Smooth counting animation
};
```

### 3D Card Tilt
```javascript
achievementCard.addEventListener('mousemove', (e) => {
    // Calculate tilt based on mouse position
});
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern Web3 platforms
- Glassmorphism trend in UI/UX design
- Web3 security community

## 📞 Contact

- **Email**: your.email@example.com
- **Twitter**: [@yourhandle](https://twitter.com/yourhandle)
- **GitHub**: [@yourusername](https://github.com/yourusername)

---

<div align="center">

**⚡ Built with passion for Web3 Security ⚡**

If you found this helpful, consider giving it a ⭐!

</div>
