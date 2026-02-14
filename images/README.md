# How to Add Your Profile Photo

## Steps to Replace the Profile Picture:

1. **Prepare Your Image:**
   - Use a square image (e.g., 400x400 px or larger)
   - Supported formats: JPG, PNG, WebP
   - Keep file size under 200KB for optimal performance

2. **Place Your Image:**
   - Copy your image file to this folder (`public/images/`)
   - Name it: `profile.jpg` (or use your preferred name)

3. **Update the Code:**
   - Open `src/components/Hero.js`
   - Find this line:
     ```javascript
     <img src="https://via.placeholder.com/400x400?text=Your+Photo" alt="Vamsi Krishna Badisa" className="profile-pic" />
     ```
   - Replace it with:
     ```javascript
     <img src="/images/profile.jpg" alt="Vamsi Krishna Badisa" className="profile-pic" />
     ```

4. **Refresh Your Browser:**
   - The changes should appear immediately in development mode
   - If not, hard refresh: `Ctrl + Shift + R`

## Example Images Sizes:
- Minimum: 300x300 px
- Recommended: 400x400 px  
- Optimal: 600x600 px (will be scaled down automatically)

Enjoy your personalized portfolio! 🎉
