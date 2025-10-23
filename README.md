# 🌱 GreenHouse - Plant Shop Application

A modern, responsive React application for browsing and purchasing houseplants. Built with React and styled with CSS, this e-commerce plant shop provides a seamless shopping experience for plant enthusiasts.

## 🚀 Features

- **Plant Catalog**: Browse plants organized by categories (Succulents, Air Purifiers, Trailing, Foliage)
- **Shopping Cart**: Add plants to cart with persistent storage
- **Responsive Design**: Works on desktop and mobile devices
- **Local Storage**: Cart persists between browser sessions
- **Modern UI**: Clean, intuitive interface with hover effects and smooth transitions

## 🛠️ How It Works

### Application Structure

The application is built as a single-page application (SPA) with three main pages:

1. **Home/Landing Page** - Hero section with call-to-action
2. **Products Page** - Plant catalog organized by categories
3. **Cart Page** - Shopping cart with quantity management

### Key Components

#### `App.js` - Main Application
- **State Management**: Uses React hooks (`useState`, `useEffect`) for state management
- **Navigation**: Simple page routing system
- **Cart Persistence**: Automatically saves cart to localStorage
- **Plant Data**: Static array of plant information with images, prices, and categories

#### `Header` Component
- **Navigation Bar**: Site branding and navigation links
- **Cart Counter**: Real-time cart item count display
- **Responsive Design**: Adapts to different screen sizes

#### `Landing` Component
- **Hero Section**: Eye-catching background with call-to-action
- **Brand Introduction**: Company description and value proposition
- **Action Buttons**: Direct users to products or learn more

#### `ProductListing` Component
- **Category Organization**: Groups plants by category (Succulents, Air Purifiers, etc.)
- **Product Grid**: Responsive grid layout for plant cards
- **Add to Cart**: One-click plant addition with disabled state for already-added items

#### `ProductCard` Component
- **Plant Display**: Shows plant image, name, category, and price
- **Add to Cart Button**: Interactive button with disabled state
- **Responsive Design**: Adapts to different screen sizes

#### `CartPage` Component
- **Cart Management**: View, modify, and remove cart items
- **Quantity Controls**: Increase/decrease item quantities
- **Price Calculation**: Real-time total calculation
- **Checkout Flow**: Placeholder for future payment integration

### Data Flow

1. **Plant Data**: Static array defines available plants with:
   - Unique ID
   - Name and price
   - Category for organization
   - Image paths (from `public/images/` folder)

2. **Cart State**: 
   - Stored in component state as `cartMap`
   - Persisted to localStorage
   - Updates trigger re-renders across components

3. **Navigation**: 
   - Simple state-based routing
   - Page changes trigger component re-renders
   - Smooth scrolling to top on navigation

### Image Management

The application uses images from the `public/images/` folder:
- **Plant Images**: Individual images for each plant type
- **Hero Background**: Landing page background image
- **Fallback Images**: Default images for missing plant photos

## 🎯 User Journey

### 1. Landing Experience
- User arrives at the home page
- Sees hero section with company branding
- Reads about the plant shop's mission
- Clicks "Get Started" to browse products

### 2. Product Browsing
- User navigates to products page
- Sees plants organized by categories
- Each plant shows:
  - High-quality image
  - Plant name and category
  - Price in dollars
  - "Add to Cart" button

### 3. Shopping Cart
- User adds plants to cart
- Cart counter updates in header
- User can view cart at any time
- Cart shows:
  - Plant thumbnails
  - Names and prices
  - Quantity controls
  - Total cost calculation

### 4. Cart Management
- User can increase/decrease quantities
- User can remove items completely
- Cart persists between browser sessions
- Checkout button (placeholder for future implementation)

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd plant-shop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📁 Project Structure

```
plant-shop/
├── public/
│   └── images/           # Plant images and assets
│       ├── Aloe Vera.jpg
│       ├── Snake Plant.jpg
│       ├── Golden-Pothos.jpg
│       ├── Ficus-lyrata.jpg
│       ├── ZZ plant.jpg
│       └── String of Pearls.jpeg
├── src/
│   ├── App.js           # Main application component
│   ├── App.css          # Application styles
│   └── images/          # Additional image assets
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🎨 Customization

### Adding New Plants
1. Add plant image to `public/images/` folder
2. Update the `PLANTS` array in `App.js`:
   ```javascript
   {
     id: "unique-id",
     name: "Plant Name",
     price: 15.99,
     category: "Category",
     thumb: productsImg,
     thumbPath: "/images/plant-image.jpg",
   }
   ```

### Styling Changes
- Modify `src/App.css` for visual updates
- Update color scheme, fonts, or layout
- Responsive design breakpoints can be adjusted

### Adding Features
- Payment integration for checkout
- User authentication
- Product search and filtering
- Product reviews and ratings
- Inventory management

## 🔧 Technical Details

### State Management
- Uses React's built-in state management
- `useState` for component state
- `useEffect` for side effects (localStorage)
- No external state management library required

### Data Persistence
- Cart data stored in browser's localStorage
- Survives browser refreshes and sessions
- Automatic cleanup on cart changes

### Performance
- Optimized for small to medium plant catalogs
- Efficient re-rendering with React's reconciliation
- Image optimization through proper file naming

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the `gh-pages` package
- **Traditional Hosting**: Upload the `build` folder to your server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For questions or issues:
1. Check the existing issues on GitHub
2. Create a new issue with detailed description
3. Include steps to reproduce any bugs

## 🆘 Download node_moduless(zip)

1. Extract the Zip on the corresponding location

Folder Location: C:\Users\\*******\plant-shop

P.S 
Make sure it is inside the plant-shop folder

---

**Happy Plant Shopping! 🌱**
